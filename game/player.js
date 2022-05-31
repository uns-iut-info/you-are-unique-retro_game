var player;

var playerMaxHealth = 6;
var playerGender = 0; //0 Male - 1 Female
var playerHealth = playerMaxHealth;
var playerDead = false;
var projs = new Array();

var fireTimer = Date.now();
var fireDelay = 200;

var grid;
var healthImageList = Array();
var levelText;
var deadText;
var wonGameText;
var reviveText;
var deathUI;
var degatPlayer;
var boostVitesseAttaqueOn;
var speed; 

var finishLevelPanel;

function createPlayer()
{
    player = BABYLON.CreatePlane("player", {width:1, height:1}, scene);
    player.ellipsoid = new BABYLON.Vector3(0.5,0.5,0.5);
    player.position.z = -0.3;

    player.material = new BABYLON.StandardMaterial("noLight", scene);
    player.material.disableLighting = true;
    player.material.emissiveColor = BABYLON.Color3.White();
    //player.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png", scene);
    //player.material.diffuseTexture = new BABYLON.Texture("./media/player_icon2.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
    var playerTexture;
    if(playerGender)
        playerTexture = "./media/magicienne.png";
    else
        playerTexture = "./media/magicien.png";
    player.material.diffuseTexture = new BABYLON.Texture(playerTexture, scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
    player.material.diffuseTexture.hasAlpha = true;
    degatPlayer=1;
    boostVitesseAttaqueOn=0;
    speed = 0.0075;
}

function resetPlayer()
{
    player.position = new BABYLON.Vector3(0, 0, -0.3);
    playerHealth = playerMaxHealth;
    playerDead = false;
    clearPlayerProj();
    degatPlayer=1;
    speed = 0.0075;
    fireDelay = 200;

    deathUI.alpha = 0;
    updateHealthUI();
}

function updatePlayer(map)
{
    if(playerDead)
    {
        if(map["r"]) // press r for revive
        {
            //restart game
            restart();
        }
        return;
    }

    if(djBossDefeat && map["Enter"])
    {
        if(nextLevel >= 4){
            restart();
        } else {
            nextLevel();
        }
    }

    //movement
    var xdep=0;
    var ydep=0;

    if(map["q"]) xdep = -speed;
    if(map["d"]) xdep = speed;
    if(map["z"]) ydep = speed;
    if(map["s"]) ydep = -speed;
    if(map["vertical"]) ydep += -map["vertical"]*speed;
    if(map["horizontal"]) xdep += map["horizontal"]*speed;

    var deltatime = engine.getDeltaTime();
    
    player.moveWithCollisions(new BABYLON.Vector3(xdep*deltatime, ydep*deltatime, 0));
    player.position.z = -0.3;

    //shooting
    if((map["ArrowLeft"] || map["left_shooting"]) && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 3));
        fireTimer = Date.now() + fireDelay;
    }
    if((map["ArrowRight"] || map["right_shooting"]) && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 1));
        fireTimer = Date.now() + fireDelay;
    }
    if((map["ArrowUp"] || map["top_shooting"]) && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 0));
        fireTimer = Date.now() + fireDelay;
    }
    if((map["ArrowDown"] || map["bottom_shooting"]) && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 2));
        fireTimer = Date.now() + fireDelay;
    }


    //hitting door
    for(let i=0; i<dj[currentdjRoom]['doors'].length;i++)
    {
        if(BABYLON.Vector3.Distance(dj[currentdjRoom]['doors'][i][1].position, player.position) < 0.5)
        {
            console.log("throw the door");
            //disable last room elements
            enableRoom(dj[currentdjRoom], false);
            disableCollectibles();
            let lastDoorValue = dj[currentdjRoom]['doors'][i][2];
            currentdjRoom += lastDoorValue;
            enableRoom(dj[currentdjRoom], true);
            enableCollectibles();

            //search the next door to teleport 
            for(let j=0;j<dj[currentdjRoom]['doors'].length;j++)
            {
                let currentDoor = dj[currentdjRoom]['doors'][j];

                if((lastDoorValue == 1 && currentDoor[2] == -1) || 
                    (lastDoorValue == -1 && currentDoor[2] == 1))
                {
                    var doorpos  = currentDoor[1].position;
                    player.position.x = doorpos.x;
                    player.position.y = doorpos.y;

                    if(currentDoor[0] == 'n') player.position.y -= 1.5;
                    if(currentDoor[0] == 'e') player.position.x -= 1.5;
                    if(currentDoor[0] == 's') player.position.y += 1.5;
                    if(currentDoor[0] == 'o') player.position.x += 1.5;
        
                }
            }

            //on room enter
            //clear projectiles
            clearPlayerProj();

            console.log("go to room" + currentdjRoom);
            
            break;
            //loadlevel(l2);
            //ajouter des directions au portes pour pouvoir aider a la génération d'un niveau et pour placer le joueur devant la porte et pas dessus
        }
    }
}

function clearPlayerProj()
{
    projs.forEach(elem => elem.destroy());
    projs = Array();
}

function playerTakeDamage(dmg)
{
    playerHealth -= dmg;
    console.log("player take " + dmg + " damage !");

    if(playerHealth <= 0)
    {
        playerDead = true;
        console.log("player is dead");
        deathUI.alpha = 1;
    }
        
    updateHealthUI();
}

function playerRegen(val)
{
    if(playerHealth+val <= 6)
    {
        playerHealth += val;
        console.log("player regen " + val + " hearts !");
        updateHealthUI();
    }
}

function hideProjectile(p)
{
    p.hide();
}

function createGUI()
{
    //-------- GUI --------
    var planeGUI = BABYLON.MeshBuilder.CreatePlane("planeGUI", {size:10}, scene);
    planeGUI.position.y = 1.5;
    planeGUI.position.x = -1;
    //var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(planeGUI);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI", true);

    grid = new BABYLON.GUI.Grid();
    grid.top = "0px";
    grid.left = "150px";
    grid.addColumnDefinition("50px", true);
    grid.addColumnDefinition("50px", true);
    grid.addColumnDefinition("150px", true);
    grid.addColumnDefinition("250px", true);
    grid.addColumnDefinition("350px", true);
    grid.addColumnDefinition("450px", true);
    
    advancedTexture.addControl(grid);

    for(let i = 0; i<6; i++)
    {
        let img = new BABYLON.GUI.Image("heart", "./media/heart.png");
        img.width = "50px";
        img.height = "50px";
        grid.addControl(img, 0, i);
        healthImageList.push(img);
    }

    levelText = new BABYLON.GUI.TextBlock();
    levelText.text = "Level 1";
    levelText.color = "white";
    levelText.fontSize = 32;
    levelText.fontFamily = "pixel";
    levelText.top = "50px";
    levelText.left = "-35%";
    advancedTexture.addControl(levelText);
    

    deathUI = new BABYLON.GUI.Rectangle();
    deathUI.thickness = 0;
    deathUI.alpha = 0;

    deadText = new BABYLON.GUI.TextBlock();
    deadText.text = "You're dead !";
    deadText.color = "red";
    deadText.fontSize = 128;
    deadText.fontFamily = "pixel";
    deathUI.addControl(deadText);

    reviveText = new BABYLON.GUI.TextBlock();
    reviveText.text = "press r to restart"
    reviveText.color = "white";
    reviveText.fontSize = 48;
    reviveText.fontFamily = "pixel";
    reviveText.top = "10%";
    deathUI.addControl(reviveText);
    advancedTexture.addControl(deathUI);

    finishLevelPanel = new BABYLON.GUI.Rectangle();
    finishLevelPanel.thickness = 0;
    finishLevelPanel.alpha = 0;

    var finishLevelText = new BABYLON.GUI.TextBlock();
    finishLevelText.text = "Boss defeated !";
    finishLevelText.color = "orange";
    finishLevelText.fontSize = 100;
    finishLevelText.fontFamily = "pixel";
    finishLevelPanel.addControl(finishLevelText);

    var goToNextLevelText = new BABYLON.GUI.TextBlock();
    goToNextLevelText.text = "press enter to go to the next level";
    goToNextLevelText.color = "white";
    goToNextLevelText.fontSize = 48;
    goToNextLevelText.fontFamily = "pixel";
    goToNextLevelText.top = "10%";
    finishLevelPanel.addControl(goToNextLevelText);

    advancedTexture.addControl(finishLevelPanel);  
    
    wonGamePanel = new BABYLON.GUI.Rectangle();
    wonGamePanel.thickness = 0;
    wonGamePanel.alpha = 0;

    wonGameText = new BABYLON.GUI.TextBlock();
    wonGameText.text = "YOU WON !!!";
    wonGameText.color = "red";
    wonGameText.fontSize = 100;
    wonGameText.fontFamily = "pixel";
    wonGamePanel.addControl(wonGameText);

    endGameText = new BABYLON.GUI.TextBlock();
    endGameText.text = "press enter to end the game"
    endGameText.color = "white";
    endGameText.fontSize = 48;
    endGameText.fontFamily = "pixel";
    endGameText.top = "10%";
    wonGamePanel.addControl(endGameText);

    advancedTexture.addControl(wonGamePanel);
}

// call to update player hearth
function updateHealthUI()
{
    healthImageList.forEach(h => h.alpha = 0);

    for(let i = 0; i<playerHealth;i++)
    {
        healthImageList[i].alpha = 1;
    }
}

function updateProjectiles(projectiles, targets){
    //move this later in the player update function
    for(let i=0;i<projectiles.length;i++)
    {
        let currentProjectile = projectiles[i];
        currentProjectile.update();

        //check projectiles collisions with walls
        let walls = dj[currentdjRoom]["walls"];
        for(let j=0;j<walls.length;j++)
        {
            if(currentProjectile.boxCollider.intersectsMesh(walls[j], false))
            {
                currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Red();
                hideProjectile(currentProjectile); 
            }
                    
        }
        // for (var target of levelmobs){
        //     if(!projectiles[i].used && !target.dead && projectiles[i].boxCollider.intersectsMesh(target.gameobject, false))
        //     {
        //         projectiles[i].gameobject.material.emissiveColor = new BABYLON.Color3.Green();
        //         target.takeDamage(1);
        //         projectiles[i].used = true;
        //         console.log("hit " + target.gameobject);
        //     }
        // }
        // le player est  touché
        if (targets.length != 0 && targets[0]==player){
            let target = player;
            if(!currentProjectile.used && BABYLON.Vector3.Distance(currentProjectile.gameobject.position, target.position)<1)
            {
                currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Green();
                playerTakeDamage(1);
                currentProjectile.used = true;
                console.log("hit " + target.gameobject);
                currentProjectile.hide();
            }
        }
        else{ // cibles touchées par les projs du player
            for(let e=0;e<targets.length;e++)
            {
                let target = targets[e];
                if(!currentProjectile.used && !target.dead && BABYLON.Vector3.Distance(currentProjectile.gameobject.position, target.gameobject.position)<1)
                {
                    if (degatPlayer>1){
                        currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Red();
                    }
                    else{
                        currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Green();
                    }
                    target.takeDamage(degatPlayer);
                    currentProjectile.used = true;
                    console.log("hit " + target.gameobject);
                    currentProjectile.hide();
                }
            }
        }

    }
}