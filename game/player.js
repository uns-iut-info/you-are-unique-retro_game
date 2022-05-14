var player;

var playerMaxHealth = 6;
var playerHealth = playerMaxHealth;
var playerDead = false;
var projs = new Array();

var fireTimer = Date.now();
var fireDelay = 200;

var grid;
var image1;
var image2;
var image3;

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
    player.material.diffuseTexture = new BABYLON.Texture("./media/magicien.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
    player.material.diffuseTexture.hasAlpha = true;
}

function updatePlayer(map)
{
    //movement
    var xdep=0;
    var ydep=0;
    var speed = 0.0075

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

                    if(currentDoor[0] == 'n') player.position.y += 1.5;
                    if(currentDoor[0] == 'e') player.position.x -= 1.5;
                    if(currentDoor[0] == 's') player.position.y -= 1.5;
                    if(currentDoor[0] == 'o') player.position.x += 1.5;
        
                }
            }

            //on room enter
            //clear projectiles
            projs.forEach(elem => elem.destroy());
            projs = Array();

            console.log("go to room" + currentdjRoom);
            
            break;
            //loadlevel(l2);
            //ajouter des directions au portes pour pouvoir aider a la génération d'un niveau et pour placer le joueur devant la porte et pas dessus
        }
    }
}

function playerTakeDamage(dmg)
{
    playerHealth -= dmg;
    console.log("player take " + dmg + " damage !");

    if(playerHealth <= 0)
    {
        playerDead = true;
        console.log("player is dead");
    }
        
    updateHealthUI();
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
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(planeGUI);

    grid = new BABYLON.GUI.Grid();
    grid.addColumnDefinition("100px", true);
    grid.addColumnDefinition("100px", true);
    grid.addColumnDefinition("300px", true);
    grid.top = "-450px";
    grid.left = "250px";
    advancedTexture.addControl(grid);

    image1 = new BABYLON.GUI.Image("heart1", "./media/heart.png");
    image1.width = "100px";
    image1.height = "100px";
    image2 = new BABYLON.GUI.Image("heart2", "./media/heart.png");
    image2.width = "100px";
    image2.height = "100px";
    image3 = new BABYLON.GUI.Image("heart3", "./media/heart.png");
    image3.width = "100px";
    image3.height = "100px";
    grid.addControl(image1, 0, 0);
    grid.addControl(image2, 0, 1);
    grid.addControl(image3, 0, 2);
    //grid.removeControl(image3); //Remove last Heart
}

// call to update player hearth
function updateHealthUI()
{
    grid.removeControl(image1);
    grid.removeControl(image2);
    grid.removeControl(image3);

    if(playerHealth > 0)
        grid.addControl(image1, 0, 0);
    if(playerHealth > 2)
        grid.addControl(image2, 0, 1);
    if(playerHealth > 4)
        grid.addControl(image3, 0, 2);
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
        if (targets.length != 0 && targets[0]==player){
            let target = player;
            if(!currentProjectile.used && currentProjectile.boxCollider.intersectsMesh(target, false))
            {
                currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Green();
                playerTakeDamage(1);
                currentProjectile.used = true;
                console.log("hit " + target.gameobject);
            }
        }
        else{
            for(let e=0;e<targets.length;e++)
            {
                let target = targets[e];
                if(!currentProjectile.used && !target.dead && currentProjectile.boxCollider.intersectsMesh(target.gameobject, false))
                {
                    currentProjectile.gameobject.material.emissiveColor = new BABYLON.Color3.Green();
                    target.takeDamage(1);
                    currentProjectile.used = true;
                    console.log("hit " + target.gameobject);
                }
            }
        }

    }
}