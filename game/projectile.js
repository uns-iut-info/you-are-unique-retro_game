class projectile
{
    constructor(posx, posy, dir)
    {
        this.posx = posx;
        this.posy = posy;
        this.dir = dir;

        this.gameobject = BABYLON.MeshBuilder.CreatePlane("projectile", {width:1, height:1}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, 0);

        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3b/Fire_Charge_JE2_BE2.png", scene);

        this.gameobject.material = newmat;
    }

    update()
    {
        var speed = 0.1;
        if(this.dir == 0)
            this.gameobject.position.y += speed;
        else if(this.dir == 1)
            this.gameobject.position.x += speed;
        else if(this.dir == 2)
            this.gameobject.position.y -= speed;
        else if(this.dir == 3)
            this.gameobject.position.x -= speed;
    }
}