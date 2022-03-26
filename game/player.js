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

    if(map["q"]) xdep = -0.1;
    if(map["d"]) xdep = 0.1;
    if(map["z"]) ydep = 0.1;
    if(map["s"]) ydep = -0.1;

    player.moveWithCollisions(new BABYLON.Vector3(xdep, ydep, 0));


    //shooting
    if(map["ArrowLeft"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 3));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowRight"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 1));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowUp"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 0));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowDown"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(player.position.x, player.position.y, 2));
        fireTimer = Date.now() + fireDelay;
    }

    //hitting door
    for(let i=0; i<doors.length;i++)
    {
        if(BABYLON.Vector3.Distance(doors[i].position, player.position) < 1)
        {
            console.log("throw the door");
        }
    }
}