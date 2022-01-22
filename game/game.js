var canvas = document.getElementById("renderCanvas");
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
        console.log("bruuu");
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

    // Our built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    sphere.checkCollisions = true;
    sphere.isVisible=false;
    var player = BABYLON.CreatePlane("player", {width:2, height:2}, scene);
    player.position.z = -0.3;

    player.material = new BABYLON.StandardMaterial("noLight", scene);
    player.material.disableLighting = true;
    player.material.emissiveColor = BABYLON.Color3.White();
    player.material.diffuseTexture = new BABYLON.Texture("https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png", scene);

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

    var projs = new Array();

    var fireTimer = Date.now();
    var fireDelay = 200;

    scene.registerAfterRender(function(){
        var xdep=0;
        var ydep=0;

        if(map["q"]) xdep = -0.1;
        if(map["d"]) xdep = 0.1;
        if(map["z"]) ydep = 0.1;
        if(map["s"]) ydep = -0.1;
        if(map["ArrowLeft"] && Date.now() > fireTimer)
        {
            projs.push(new projectile(sphere.position.x, sphere.position.y, 3));
            fireTimer = Date.now() + fireDelay;
        }
        if(map["ArrowRight"] && Date.now() > fireTimer)
        {
            projs.push(new projectile(sphere.position.x, sphere.position.y, 1));
            fireTimer = Date.now() + fireDelay;
        }
        if(map["ArrowUp"] && Date.now() > fireTimer)
        {
            projs.push(new projectile(sphere.position.x, sphere.position.y, 0));
            fireTimer = Date.now() + fireDelay;
        }
        if(map["ArrowDown"] && Date.now() > fireTimer)
        {
            projs.push(new projectile(sphere.position.x, sphere.position.y, 2));
            fireTimer = Date.now() + fireDelay;
        }

        for(let i=0;i<projs.length;i++)
        {
            projs[i].update();
            if(projs[i].gameobject.intersectsMesh(box, false) ||
            projs[i].gameobject.intersectsMesh(box2, false) ||
            projs[i].gameobject.intersectsMesh(box3, false) ||
            projs[i].gameobject.intersectsMesh(box4, false))
                projs[i].gameobject.material.emissiveColor = new BABYLON.Color3.Red();
        }
            

        sphere.moveWithCollisions(new BABYLON.Vector3(xdep, ydep, 0));
        player.position = sphere.position;
    })

    camera.lockedTarget = background;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    
    
    return scene;
};

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });


var scene = createScene();

   engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});
