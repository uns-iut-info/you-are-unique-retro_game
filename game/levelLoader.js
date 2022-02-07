var l = 
// {
//     width:8,
//     height:6,
//     layer0: "1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1",
//     layer1: "0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 d d 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 2 0 2 0 0 0 0 0 0 0 0 1 1"
// }
{ width: 10, height: 10, layer0: "0 0 1 1 1 1 1 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 ", layer1: "0 0 4 4 4 4 4 4 0 0 0 0 4 2 0 0 0 4 0 0 0 0 3 0 0 0 1 4 0 0 0 0 4 1 2 0 1 4 0 0 0 0 4 0 0 0 1 4 0 0 0 0 4 1 2 0 1 4 0 0 0 0 4 1 0 0 1 4 0 0 0 0 4 2 0 0 0 3 0 0 0 0 4 4 4 4 4 4 0 0 0 0 0 0 0 0 0 0 0 0 "}
function loadlevel(level, scene)
{
    var level_tab = level["layer0"].split(' ');

    var level_h = level.height;
    var level_w = level.width;

    var x_offset = level.width/2;
    var y_offset = level.height/2;

    var blockList = initTiles(scene);

    //var entitiesList
    var fall = buildTile(scene, 2);
    fall.checkCollisions = true;
    var blockingBox = BABYLON.MeshBuilder.CreateBox("b", {size:0}, scene);
    blockingBox.isVisible = false;

    var rock = buildTile(scene, 3);
    rock.checkCollisions = true;

    var door = buildTile(scene, 4);
    door.checkCollisions = true;

    // first layer
    for(let h = 0; h < level_h; h++)
    {
        for(let w = 0; w < level_w; w++)
        {
            var tile = level_tab[w + h*level_w];
            var pos = new BABYLON.Vector3(w - x_offset, (level_h - h) - y_offset, 0);
            if(tile == "1")
            {
                instantiateTile(blockList[0], pos);
                
            }
            if(tile == "2")
            {
                instantiateTile(blockList[1], pos);
            }
        }
    }

    var level_entities = level["layer1"].split(' ');

    // entity layer
    for(let h = 0; h < level_h; h++)
    {
        for(let w = 0; w < level_w; w++)
        {
            var tile = level_entities[w + h*level_w];
            var pos = new BABYLON.Vector3(w - x_offset, (level_h - h) - y_offset, 0);

            if(tile == "1")
            {
                instantiateTile(fall, pos);
                var i = instantiateTile(blockingBox, pos);
                i.checkCollisions = true;
                i.isVisible = false;
            }
            if(tile == "2")
            {
                instantiateTile(rock, pos);
                var i = instantiateTile(blockingBox, pos);
                i.checkCollisions = true;
                i.isVisible = false;
            }
                
            if(tile == "3")
                instantiateTile(door, pos);
            if(tile == "4") //boxwall
            {
                var i = instantiateTile(blockingBox, pos);
                i.checkCollisions = true;
                i.isVisible = false;
            }
        }
    }
}

function buildTile(scene, textureIndex)
{
    var faceUV = new BABYLON.Vector4(textureIndex/8, 0, (textureIndex+1)/8, 1/6);

    var tile = BABYLON.MeshBuilder.CreatePlane("tile", {frontUVs:faceUV, width:1, height:1, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
    var mat = new BABYLON.StandardMaterial("noLight", scene);
    mat.disableLighting = true;
    mat.emissiveColor = BABYLON.Color3.White();
    var atlas = new BABYLON.Texture("atlas.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
    mat.diffuseTexture = atlas;
    mat.diffuseTexture.hasAlpha = true;
    tile.material = mat;
    tile.position = new BABYLON.Vector3(0, -100, 0);

    return tile;
}

function initTiles(scene)
{
    var blockList = Array();

    for(let i=0; i<3; i++)
        blockList.push(buildTile(scene, i));

    return blockList;
}

function instantiateTile(tile, position)
{
    var instance = tile.createInstance("tileInstance");
    instance.position = position;

    return instance;
}

function loadTest(scene)
{
    loadlevel(l, scene);
}