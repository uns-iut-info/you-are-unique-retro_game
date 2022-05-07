class collectible
{
    constructor(posx, posy)
    {
        this.gameobject = BABYLON.MeshBuilder.CreatePlane("collectible", {width:0.5, height:0.5}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.2);

        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ab/Penny.png", scene);
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
    }

    update(player)
    {
        let distance = BABYLON.Vector3.Distance(this.gameobject.position, player.position);

        if(distance < 0.5)
        {
            //player pickup item
            //play a sound
            //remove item from the list
            console.log("pickup collectible!");
            removeCollectible(this);
        }
    }
}

var collectibles = Array();

function createCollectible(collectible) 
{
    collectibles.push(collectible);
}

function removeCollectible(c)
{
    c.gameobject.dispose();
    collectibles.splice(collectibles.indexOf(c), 1);
}