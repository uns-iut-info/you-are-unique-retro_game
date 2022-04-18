var player;

var projs = new Array();

var fireTimer = Date.now();
var fireDelay = 200;

function createPlayer()
{
    player = BABYLON.CreatePlane("player", {width:1, height:1}, scene);
    player.ellipsoid = new BABYLON.Vector3(0.5,0.5,0.5);
    player.position.z = -0.3;

    player.material = new BABYLON.StandardMaterial("noLight", scene);
    player.material.disableLighting = true;
    player.material.emissiveColor = BABYLON.Color3.White();
    player.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png", scene);
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
    // for(let i=0; i<doors.length;i++)
    // {
    //     if(BABYLON.Vector3.Distance(doors[i].position, player.position) < 1)
    //     {
    //         console.log("throw the door");
    //         loadlevel(l2);
    //         //ajouter des directions au portes pour pouvoir aider a la génération d'un niveau et pour placer le joueur devant la porte et pas dessus
    //     }
    // }
}