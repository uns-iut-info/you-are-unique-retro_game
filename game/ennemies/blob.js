class blob extends ennemy
{
    constructor(posx, posy)
    {
        super(posx, posy);
        this.gameobject.material.diffuseTexture = new BABYLON.Texture("../media/blob.png", scene);    
    }

    update(player) 
    {
        if(this.dead)
            return;
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.01);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(0, dir.y*deltatime, 0));

        super.update(player);
    }

}