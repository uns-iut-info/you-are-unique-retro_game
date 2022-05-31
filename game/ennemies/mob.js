class mob extends ennemy
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);  
        this.moveSpeed = 1.3;     
    }

    update(player) 
    {
        if(this.dead)
            return;
            
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*deltatime*this.moveSpeed, dir.y*deltatime*this.moveSpeed, 0))

        super.update(player);
    }

}