class eye extends ennemy
{
    constructor(posx, posy, spriteName)
    {
        super(posx, posy, spriteName);   
        this.health = 3;
        this.damage = 1;  
        this.projectiles = new Array();
        this.bossFireTimer = Date.now();
        this.attackSpeed = 1000; 
    }

    update(player) 
    {
        if(this.dead)
            return;
            
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);

        if(Date.now() > this.bossFireTimer){
            this.projectiles.push(new guidedProjectile(this.gameobject.position.x, this.gameobject.position.y, dir, BABYLON.Color3.Yellow(), player.position.x, player.position.y));
            this.bossFireTimer = Date.now() + this.attackSpeed;
        }

        super.update(player);
        updateProjectiles(this.projectiles, [player]);
    }

}