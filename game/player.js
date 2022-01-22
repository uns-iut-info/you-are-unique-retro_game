var sphere;
var player;

var projs = new Array();

var fireTimer = Date.now();
var fireDelay = 200;

function createPlayer()
{
    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    sphere.checkCollisions = true;
    sphere.isVisible=false;

    player = BABYLON.CreatePlane("player", {width:2, height:2}, scene);
    player.position.z = -0.3;

    player.material = new BABYLON.StandardMaterial("noLight", scene);
    player.material.disableLighting = true;
    player.material.emissiveColor = BABYLON.Color3.White();
    player.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png", scene);

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

    sphere.moveWithCollisions(new BABYLON.Vector3(xdep, ydep, 0));
    player.position = sphere.position;


    //shooting
    if(map["ArrowLeft"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(sphere.position.x, sphere.position.y, 3));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowRight"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(sphere.position.x, sphere.position.y, 1));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowUp"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(sphere.position.x, sphere.position.y, 0));
        fireTimer = Date.now() + fireDelay;
    }
    if(map["ArrowDown"] && Date.now() > fireTimer)
    {
        projs.push(new projectile(sphere.position.x, sphere.position.y, 2));
        fireTimer = Date.now() + fireDelay;
    }
}