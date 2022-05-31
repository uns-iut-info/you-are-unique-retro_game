class bossDragon extends boss
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);
        this.health = 50;
        this.attackSpeed = 1000;
        this.attackPatern = 0;
        this.attackRange = 1;
        this.damage = 1;
    }

    update()
    {
        if(this.dead)
            return;

        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);
        let speed = engine.getDeltaTime()*2;

        if(Date.now() > this.bossFireTimer){
            this.projectiles.push(new guidedProjectile(this.gameobject.position.x, this.gameobject.position.y, dir, player.position.x, player.position.y));
            this.bossFireTimer = Date.now() + this.attackSpeed;
        }
        updateProjectiles(this.projectiles, [player]);

        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*speed, dir.y*speed, 0))
    }
}