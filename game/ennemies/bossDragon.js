class bossDragon extends boss
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);
        this.health = 50;
        this.attackSpeed = 500;
        this.attackPatern = 0;
        this.attackRange = 1;
        this.moveSpeed = 3;
        this.damage = 3;
    }

    update()
    {
        if(this.dead)
            return;

        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);
        let deltatime = engine.getDeltaTime();

        if(Date.now() > this.bossFireTimer){
            this.projectiles.push(new guidedProjectile(this.gameobject.position.x, this.gameobject.position.y, dir, BABYLON.Color3.Red(), player.position.x, player.position.y));
            this.bossFireTimer = Date.now() + this.attackSpeed;
        }
        updateProjectiles(this.projectiles, [player]);

        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*deltatime*this.moveSpeed, dir.y*deltatime*this.moveSpeed, 0))
    }
}