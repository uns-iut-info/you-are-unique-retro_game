class projectile
{
    //optimise...
    constructor(posx, posy, dir)
    {
        this.posx = posx;
        this.posy = posy;
        this.dir = dir;

        this.used = false; // has already hit something

        this.gameobject = BABYLON.MeshBuilder.CreatePlane("projectile", {width:1, height:1}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.3);
        this.boxCollider = BABYLON.MeshBuilder.CreateBox("box", {size:1},scene); // rendre la box statique pour en avoir une pour tous
        this.boxCollider.position = this.gameobject.position;
        this.boxCollider.isVisible = false;

        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("./media/magic.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        newmat.diffuseTexture.hasAlpha = true;
        if(typeof dir == "number"){
            if(this.dir == 0)
                newmat.diffuseTexture.wAng = -Math.PI/2;
            if(this.dir == 2)
                newmat.diffuseTexture.wAng = Math.PI/2;
            if(this.dir == 3)
                newmat.diffuseTexture.wAng = Math.PI;
        }
        this.gameobject.material = newmat;
    }

    update()
    {
        let speed = 0.006;
        let deltatime = engine.getDeltaTime();

        if(this.dir == 0)
            this.gameobject.position.y += speed*deltatime;
        else if(this.dir == 1)
            this.gameobject.position.x += speed*deltatime;
        else if(this.dir == 2)
            this.gameobject.position.y -= speed*deltatime;
        else if(this.dir == 3)
            this.gameobject.position.x -= speed*deltatime;

        this.boxCollider.position = this.gameobject.position;
    }

    destroy()
    {
        this.gameobject.dispose();
        this.boxCollider.dispose();
    }

    hide()
    {
        this.used = true;
        this.gameobject.isVisible = false;
    }
}