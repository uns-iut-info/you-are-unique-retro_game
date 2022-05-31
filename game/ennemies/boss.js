class boss extends ennemy
{
    constructor(posx, posy, spriteName)
    {
        super(posx,posy, spriteName);
        this.health = 15;
        this.damage = 1;
        this.gameobject.dispose();
        this.gameobject = BABYLON.MeshBuilder.CreatePlane("enemy", {width:2, height:2}, scene);
        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture(spriteName, scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);    
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.3);
        this.gameobject.ellipsoid = new BABYLON.Vector3(0.8, 0.8, 0.8);  

        this.projectiles = new Array();
        this.bossFireTimer = Date.now();
        this.attackSpeed = 500;
    }

    update(player) 
    {
        if(this.dead)
            return;
            
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.02);
        if(Date.now() > this.bossFireTimer){
            let randint = Math.floor(Math.random() * 2);
            console.log(randint);
            if (randint == 0){
                if (dir.x>0){
                    this.projectiles.push(new projectile(this.gameobject.position.x, this.gameobject.position.y, 1));
                    this.bossFireTimer = Date.now() + this.attackSpeed;
                }
                else{
                    this.projectiles.push(new projectile(this.gameobject.position.x, this.gameobject.position.y, 3));
                    this.bossFireTimer = Date.now() + this.attackSpeed;
                }
            }
            else{
                if (dir.y>0){
                    this.projectiles.push(new projectile(this.gameobject.position.x, this.gameobject.position.y, 0));
                    this.bossFireTimer = Date.now() + this.attackSpeed;
                }
                else{
                    this.projectiles.push(new projectile(this.gameobject.position.x, this.gameobject.position.y, 2));
                    this.bossFireTimer = Date.now() + this.attackSpeed;
                }
            }
        }

        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*deltatime, 0, 0));
        super.update(player);
        updateProjectiles(this.projectiles, [player]);

    }

    takeDamage(dmg)
    {
        if(this.dead)
            return;

        this.health -= dmg;
        if(this.health <= 0)
        {
            this.dead = true;
            this.gameobject.isVisible = false;

            this.projectiles.forEach(elem => elem.destroy());

            let drop = new coeur(this.gameobject.position.x, this.gameobject.position.y);
            createCollectibles(drop);

            djBossDefeat = true;
            finishLevelPanel.alpha = 1;
        }
            
    }

    destroy()
    {
        this.projectiles.forEach(elem => elem.destroy());
        super.destroy();
    }

}