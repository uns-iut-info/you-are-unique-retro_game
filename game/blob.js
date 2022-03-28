class blob
{
    constructor(posx, posy)
    {
        this.dead = false;
        this.health = 3;
        this.gameobject = BABYLON.MeshBuilder.CreatePlane("enemy", {width:1, height:1}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.3);
        this.gameobject.ellipsoid = new BABYLON.Vector3(0.4, 0.4, 0.4);

        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("blob.png", scene);
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
        
    }

    update(player) 
    {
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.01);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(0, dir.y*deltatime, 0));
    }

    takeDamage(dmg)
    {
        this.health -= dmg;
        if(this.health <= 0)
        {
            this.dead = true;
            this.gameobject.isVisible = false;
        }
            
    }
}