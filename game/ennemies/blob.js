class blob extends mob
{
    constructor(posx, posy)
    {
        super(posx, posy);
        this.gameobject.material.diffuseTexture = new BABYLON.Texture("../blob.png", scene);    
    }

    update(player) 
    {
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.01);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(0, dir.y*deltatime, 0));
    }

}