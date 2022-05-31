
class collectible
{
    constructor(posx, posy)
    {
        this.collected = false;
        this.gameobject = BABYLON.MeshBuilder.CreatePlane("collectible", {width:0.5, height:0.5}, scene);
        this.gameobject.position = new BABYLON.Vector3(posx, posy, -0.2);       
        this.coin_sound = new BABYLON.Sound("coin_sound", "./media/rupee_sound.mp3", scene);
    }

    update(player)
    {
        if(this.collected)
            return;

        let distance = BABYLON.Vector3.Distance(this.gameobject.position, player.position);

        if(distance < 0.5)
        {
            //player pickup item
            //play a sound
            this.pickedUp(player);

        }
    }

    destroy()
    {
        this.gameobject.dispose();
        this.coin_sound.dispose();
    }

    pickedUp(player)
    {
        this.coin_sound.play();
        console.log("pickup collectible!");
        this.collected = true;
        this.gameobject.setEnabled(false);
    }
}

function createCollectibles(collectible)
{
    dj[currentdjRoom]["collectibles"].push(collectible);
}

function updateCollectibles()
{
    dj[currentdjRoom]["collectibles"].forEach(c => c.update(player));
}

function enableCollectibles()
{
    dj[currentdjRoom]["collectibles"].forEach(element => {
        if(element.collected == false)
            element.gameobject.setEnabled(true)
    });
}

function disableCollectibles()
{
    dj[currentdjRoom]["collectibles"].forEach(element => element.gameobject.setEnabled(false));
}



