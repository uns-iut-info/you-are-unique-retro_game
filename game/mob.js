class mob
{
    constructor(posx, posy)
    {
        this.dead = false;
        this.health = 3;
        this.damage = 1;
        this.attackSpeed = 1000;
        this.attackTimer = 0;
        this.attackRange = 0.5;
        this.gameobject = BABYLON.MeshBuilder.CreatePlane("enemy", {width:1, height:1}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.3);
        this.gameobject.ellipsoid = new BABYLON.Vector3(0.4, 0.4, 0.4);

        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/6/68/Dip.png", scene);
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
        
    }

    update(player) 
    {
        if(this.dead)
            return;
            
        let deltatime = engine.getDeltaTime();
        let dir = player.position.subtract(this.gameobject.position).normalize();
        dir = dir.scale(0.001);
        this.gameobject.moveWithCollisions(new BABYLON.Vector3(dir.x*deltatime, dir.y*deltatime, 0))

        if(Date.now() > this.attackTimer && BABYLON.Vector3.Distance(player.position, this.gameobject.position) < this.attackRange)
        {
            playerTakeDamage(this.damage);
            this.attackTimer = Date.now() + this.attackSpeed;
        }
    }

    takeDamage(dmg)
    {
        this.health -= dmg;
        if(this.health <= 0)
        {
            this.dead = true;
            this.gameobject.isVisible = false;
        }
            
    }
}