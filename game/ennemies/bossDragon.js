class bossDragon extends boss
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);
        this.health = 20;
        this.attackSpeed = 400;
    }

    update()
    {
        if(this.dead)
            return;

        if(Date.now() > this.bossFireTimer){
            this.projectiles.push(new projectile(this.gameobject.position.x, this.gameobject.position.y, 2));
            this.bossFireTimer = Date.now() + this.attackSpeed;
            
        }

        super.update(player);
    }
}