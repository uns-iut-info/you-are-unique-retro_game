class guidedProjectile extends projectile
{
    constructor(posx, posy, dir)
    {
        super(posx, posy, dir);
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