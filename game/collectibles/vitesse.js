class boostVitesse extends collectible
{
    constructor(posx, posy)
    {
        super(posx,posy);
        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("./media/speed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
    }

    pickedUp(player){
        super.pickedUp();
        speed += 0.0025;
    }
}