var music_castle;
var music_cave;
var currentMusic;

var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    scene.clearColor = BABYLON.Color3.Black;

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FollowCamera("followCam", new BABYLON.Vector3(0, 0, -30), scene);
    camera.radius = 15;
    camera.heightOffset = 0;
    camera.rotationOffset = 180;
    camera.cameraAcceleration = 0.005;



    camera.mode = camera.ORTHOGRAPHIC_CAMERA;

    //set camera orthographic mode
    const rect   = engine.getRenderingCanvasClientRect();
    const aspect = rect.height / rect.width; 

    camera.orthoLeft = -camera.radius;
    camera.orthoRight = camera.radius;
    camera.orthoTop = camera.radius * aspect;
    camera.orthoBottom = -camera.radius * aspect;

    //when resize windows its scale the game apropriately
    const onResize = () => {
        const rect   = engine.getRenderingCanvasClientRect();
        const aspect = rect.height / rect.width; 
    
        camera.orthoLeft = -camera.radius;
        camera.orthoRight = camera.radius;
        camera.orthoTop = camera.radius * aspect;
        camera.orthoBottom = -camera.radius * aspect;
    }
    window.addEventListener('resize', onResize);


    camera.maxCameraSpeed = 10;

    // This attaches the camera to the canvas
    //camera.attachControl(canvas, true);

    // var background = BABYLON.MeshBuilder.CreatePlane("player", {width: 14, height: 14}, scene);
    // background.material = new BABYLON.StandardMaterial("noLight", scene);
    // background.material.disableLighting = true;
    // background.material.emissiveColor = BABYLON.Color3.White();
    // background.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaac_fr_gamepedia/images/7/71/Basement.png", scene);
     

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    //light.intensity = 0.7;

    createPlayer(); //initialize player related stuff

    // ------ audio -------
    BABYLON.Engine.audioEngine.setGlobalVolume(0.1);
    music_castle = new BABYLON.Sound("Music", "./media/castle_music.mp3", scene, null, {loop: true, autoplay: true});
    music_cave = new BABYLON.Sound("Music2", "./media/lvl2_music.mp3", scene, null, {loop: true});

    currentMusic = music_castle;
    currentMusic.play();

    // ------ gui -------
    createGUI();

    //-------- input --------

    var map = {};
    scene.actionManager = new BABYLON.ActionManager(scene);

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function(evt)
    {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function(evt)
    {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

        // gamepad 
    var SEUIL_DETECTION = 0.5;
    scene.gamepadManager = new BABYLON.GamepadManager();
    scene.gamepadManager.onGamepadConnectedObservable.add((gamepad, state)=>{
        console.log("manette co");

        gamepad.onButtonDownObservable.add((button, state)=>{
            //Button has been pressed
            console.log(button);
            console.log(state);
        })
        gamepad.onleftstickchanged((values)=>{
            map["horizontal"] = (Math.abs(values.x)>SEUIL_DETECTION) ? values.x : 0;
            map["vertical"] = (Math.abs(values.y)>SEUIL_DETECTION) ? values.y : 0;
        })
        gamepad.onrightstickchanged((values)=>{
            map["right_shooting"] = (values.x>0.5)? values.x : 0;
            map["left_shooting"] = (values.x<-0.5)? -values.x : 0;
            map["bottom_shooting"] = (values.y>0.5)? values.y : 0;
            map["top_shooting"] = (values.y<-0.5)? -values.y : 0;
        })
    });
    scene.gamepadManager.onGamepadDisconnectedObservable.add((gamepad, state)=>{
        console.log("manette deco");
    });



    //add a test mob
    // var targets = Array();
    // targets.push(new mob(-4,4));
    // targets.push(new blob(4,-4));

    //main loop
    scene.registerAfterRender(function(){

        updatePlayer(map);
        //targets.forEach(target => { target.update(player) });

        //update map
        let levelmobs = dj[currentdjRoom]["mobs"];
        levelmobs.forEach(element => element.update(player));
        updateCollectibles();

        updateProjectiles(projs, levelmobs);

    })

    //look at room center
    //camera.lockedTarget = background;

    initLevelLoader(scene);
    //loadlevel(l);
    dj = generateDungeon();
    currentdjRoom = 0;
    
    return scene;
};



function restart()
{
    //level
    levelCount = 1;
    finishLevelPanel.alpha = 0;
    djBossDefeat = false;
    clearDungeon(dj);
    dj = generateDungeon();
    currentdjRoom = 0;
    levelText.text = "Level 1";
    //player
    resetPlayer();

    currentMusic.stop();
    currentMusic = music_castle;
    currentMusic.play();
}

function nextLevel()
{
    levelCount++;
    finishLevelPanel.alpha = 0;
    djBossDefeat = false;
    clearDungeon(dj);
    dj = generateDungeon();
    currentdjRoom = 0;

    console.log("level " + levelCount + " !");
    levelText.text = "Level " + levelCount;
    //player
    player.position = new BABYLON.Vector3(0, 0, -0.3);

    if(levelCount == 2)
    {
        currentMusic.stop();
        currentMusic = music_cave;
        currentMusic.play();
    }
    if(levelCount > 4){
        playerGender = 1;
        playerTexture = "./media/magicienne.png";
        player.material.diffuseTexture = new BABYLON.Texture(playerTexture, scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        player.material.diffuseTexture.hasAlpha = true;
        wonGamePanel.alpha = 0;
    }
}