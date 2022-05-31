class fireSpirit extends ennemy
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);
        this.health = 4;
        this.moveSpeed = 1; 
    }

    update(player)
    {
        if(this.dead)
            return;
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*deltatime*this.moveSpeed, dir.y*deltatime*this.moveSpeed, 0))

        if(Date.now() > this.attackTimer && BABYLON.Vector3.Distance(player.position, this.gameobject.position) < this.attackRange)
        {
            playerTakeDamage(this.health);
            this.attackTimer = Date.now() + this.attackSpeed;
            this.takeDamage(this.health);
        }
        this.gameobject.position.z=-0.3;
    }

    takeDamage(dmg)
    {
        super.takeDamage(dmg);
        if(!this.dead){
            this.gameobject.scaling.x *= 0.8;
            this.gameobject.scaling.y *= 0.8;
        }
    }
}