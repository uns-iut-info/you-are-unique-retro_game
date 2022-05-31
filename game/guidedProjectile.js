class guidedProjectile extends projectile
{
    constructor(posx, posy, dir, playerX, playerY)
    {
        super(posx, posy, dir);
        var angle = BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(posx, posy), new BABYLON.Vector2(playerX, playerY)).radians();
        this.gameobject.material.diffuseTexture.wAng = -angle;
    }

    update()
    {
        let speed = engine.getDeltaTime()*2;
        //console.log("X: %f - Y: %f \n", this.dir.x, this.dir.y);
        this.gameobject.position.x += this.dir.x*speed;
        this.gameobject.position.y += this.dir.y*speed;

        this.boxCollider.position = this.gameobject.position;
    }
}