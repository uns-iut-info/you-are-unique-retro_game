class boostVitesseAttaque extends collectible
{
    constructor(posx, posy)
    {
        super(posx,posy);
        var newmat = new BABYLON.StandardMaterial("noLight", scene);
        newmat.disableLighting = true;
        newmat.emissiveColor = BABYLON.Color3.White();
        newmat.diffuseTexture = new BABYLON.Texture("./media/AttackSpeed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        newmat.diffuseTexture.hasAlpha = true;
        this.gameobject.material = newmat;
    }

    pickedUp(player){
        super.pickedUp();
        if(fireDelay>50){
            fireDelay -= 50;
        }
    }
}