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

    var background = BABYLON.MeshBuilder.CreatePlane("player", {width: 14, height: 14}, scene);
    background.material = new BABYLON.StandardMaterial("noLight", scene);
    background.material.disableLighting = true;
    background.material.emissiveColor = BABYLON.Color3.White();
    background.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaac_fr_gamepedia/images/7/71/Basement.png", scene);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    //light.intensity = 0.7;

    createPlayer(); //initialize player related stuff

    // create wall room
    var box = BABYLON.MeshBuilder.CreateBox("Box", {size:2}, scene);
    box.position.x = -7;
    box.scaling.y = 6;
    box.checkCollisions = true;
    box.isVisible = false;

    var box2 = BABYLON.MeshBuilder.CreateBox("Box", {size:2}, scene);
    box2.position.x = 7;
    box2.scaling.y = 6;
    box2.checkCollisions = true;
    box2.isVisible = false;

    var box3 = BABYLON.MeshBuilder.CreateBox("Box", {size:2}, scene);
    box3.position.y = 7;
    box3.scaling.x = 6;
    box3.checkCollisions = true;
    box3.isVisible = false;

    var box4 = BABYLON.MeshBuilder.CreateBox("Box", {size:2}, scene);
    box4.position.y = -7;
    box4.scaling.x = 6;
    box4.checkCollisions = true;
    box4.isVisible = false;


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


    //add a test mob
    var target = new mob(-4,4);

    //main loop
    scene.registerAfterRender(function(){

        updatePlayer(map);

        //move this later in the player update function
        for(let i=0;i<projs.length;i++)
        {
            projs[i].update();
            if(projs[i].gameobject.intersectsMesh(box, false) ||
            projs[i].gameobject.intersectsMesh(box2, false) ||
            projs[i].gameobject.intersectsMesh(box3, false) ||
            projs[i].gameobject.intersectsMesh(box4, false))
                projs[i].gameobject.material.emissiveColor = new BABYLON.Color3.Red();

            if(!projs[i].used && !target.dead && projs[i].gameobject.intersectsMesh(target.gameobject, false))
            {
                projs[i].gameobject.material.emissiveColor = new BABYLON.Color3.Green();
                target.takeDamage(1);
                projs[i].used = true;
            }
                
        }
    })

    //look at room center
    camera.lockedTarget = background;

    initLevelLoader(scene);
    loadlevel(l);
    
    return scene;
};