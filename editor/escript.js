
var width;
var height;
var selectedBlock=0;
var selectedEntity=0;

var block = ["empty.png", "bricks.png", "ground.png", "x", "x", "x", "x", "x", "x", "rockground.png", "bricksold.png", "dallerec.png", "dalle.png", "dirt.png", "waterborder.png", "water.png", "x", "dirtblock.png", "dirtgrounda.png", "dirtgroundb.png"];
var entity = ["empty.png", "wall_entity.png", "fall.png", "rock.png", "door.png", "door_east.png", "door_south.png", "door_west.png", "enemy_spawn.png"];
/*var exit = "resources/editor/exit.png";
var poro = "resources/editor/poro_editor.png";
var poroVolant = "resources/editor/poroVolant_editor.png";*/

var imgDiv = document.getElementById("palette");

for(var i = 0; i < block.length;i++)
{
    imgDiv.innerHTML += "<img src='"+block[i]+"' width='64' height='64' onclick=selectBlock('"+i+"')>";
}

imgDiv.innerHTML += "<br>";

for(var i = 0; i < entity.length; i++)
    imgDiv.innerHTML += "<img src='"+entity[i]+"' width='64' height='64' onclick=selectEntity('"+i+"')>";

var selectInfoTxt = document.getElementById("selectionInfo");


function generate()
{
    width = document.getElementById("map_width").value;
    height = document.getElementById("map_height").value;

    var tab = document.getElementById("tab");

    var htmlTab = "<table>";

    for(var y = 0;y<height;y++)
    {
        htmlTab += "<tr>";
        for(var x = 0; x < width; x++)
        {
            var id = x + "-" + y;
            var onclick = "updateBlock('"+ id+ "');updateEntity('"+id+"')";
            htmlTab += "<td id="+ id + " onclick=" + onclick +"><img id='img"+id+"' src='"+block[0]+"' width='64' height='64'></td>";
        }
        htmlTab += "</tr>";
    }

    htmlTab += "</table><br><br><table>";

    for(var y = 0;y<height;y++)
    {
        htmlTab += "<tr>";
        for(var x = 0; x < width; x++)
        {
            var id = x + "-" + y;
            var onclick = "updateEntity('"+ id+ "')";
            htmlTab += "<td id=e"+ id + " onclick=" + onclick +"><img id='eimg"+id+"' src='"+entity[0]+"' width='64' height='64'></td>";
        }
        htmlTab += "</tr>";
    }

    htmlTab += "</table>";

    tab.innerHTML = htmlTab;
    
    document.getElementById("converterButton").hidden = false; //draw the export button
}

function selectBlock(select)
{
    selectedBlock = select;
    selectInfoTxt.innerHTML = "selected block " + select; 
}

function selectEntity(select)
{
    selectedEntity = select;
}

function updateBlock(id)
{
    var index = block[selectedBlock];
    if(selectedBlock == "x")
        index = spawn;
    if(selectedBlock == "e")
        index = exit;
    if(selectedBlock == "p")
        index = poro;
    if(selectedBlock == "v")
        index = poroVolant;
    document.getElementById(id).innerHTML = "<img id='img"+id+"' src='"+ index +"' width='64' height='64'>";
}

function updateEntity(id)
{
    var index = entity[selectedEntity];
    document.getElementById("e"+id).innerHTML = "<img id='eimg"+id+"' src='"+ index +"' width='64' height='64'>";
}

function convertMap()
{
    var layer1 = "\"layer1\": \"";
    var output= "{";
    output += " \"width\": " + width;
    output += ", \"height\": " + height;
    output += ", \"layer0\": \"";
    for(var y=0; y<height;y++)
    {
        for(var x=0; x<width;x++)
        {
            var imgsrc = document.getElementById("img"+x+"-"+y).src;
            if (y<1)
                console.log(imgsrc);

            for(var i=0; i<block.length;i++)
            {
                if((i<3 || i>8) && imgsrc.includes(block[i]))
                {
                    output += i +" ";
                }
            }


            var imgsrc = document.getElementById("eimg"+x+"-"+y).src;

            for(var i=0; i<entity.length;i++)
            {
                if(imgsrc.includes(entity[i]))
                    layer1  += i + " "; 
            }
        }
    }

    output += "\", " + layer1 + "\"}";

    console.log(output);
    var out = document.getElementById("output");
    out.innerHTML = output;
    out.select();

    navigator.clipboard.writeText(output);

    var elem = document.getElementById("hide");

    if(elem != null)
        elem.id = "fadeOutAnim";
    else
    {
        elem = document.getElementById("fadeOutAnim");
        var newo = elem.cloneNode(true);
        elem.parentNode.replaceChild(newo, elem);
    }
}

function loadMap()
{
    var stringdata = document.getElementById("maploader");
    console.log(stringdata.value);

    var stringLevel = JSON.parse(stringdata.value);
    height = stringLevel["height"];
    width = stringLevel["width"];
    console.log(height);
    console.log(stringdata);
    console.log(stringLevel);
    var layer0 = stringLevel.layer0.split(' ');
    var layer1 = stringLevel.layer1.split(' ');

    var tablehtml = "<table>";

//layer0
    for (let ligne=0;ligne<height;ligne++){
        tablehtml += "<tr>";
        for (let colonne=0; colonne<width;colonne++){
            let elem = layer0[ligne*width+colonne];
            let index = block[elem];
            console.log("id : "+elem);
            let id = colonne + "-" + ligne;
            let onclick = "updateBlock('"+ id+ "')";
            tablehtml += "<td id="+ id + " onclick=" + onclick +"><img id='img"+id+"' src='"+index+"' width='64' height='64'></td>";
        }
        tablehtml += "</tr>";
    }
    tablehtml += "</table>";
    tablehtml += "<table>";

//layer1
    for (let ligne=0;ligne<height;ligne++){
        for (let colonne=0; colonne<width;colonne++){
            let elem = layer1[ligne*width+colonne];
            let index = entity[elem];
            console.log(index);
            let id = colonne + "-" + ligne;
            let onclick = "updateBlock('"+ id+ "')";
            tablehtml += "<td id="+ id + " onclick=" + onclick +"><img id='eimg"+id+"' src='"+index+"' width='64' height='64'></td>";
        }
        tablehtml += "</tr>";
    }
    tablehtml += "</table>";

    document.getElementById("tab").innerHTML = tablehtml;

    stringdata.value = "";
    console.log(tablehtml)
    document.getElementById("converterButton").hidden = false; //draw the export button

/*    for(var i = 0;i<plusexplode.length;i++)
    {
        var firstIndex = plusexplode[i].indexOf("\"")+1;
        var lastIndex = plusexplode[i].lastIndexOf("\"")-3;
        if(i == plusexplode.length-1)
            lastIndex = plusexplode[i].lastIndexOf("\"")-1;
        var result = plusexplode[i].substring(firstIndex, lastIndex);
        plusexplode[i] = result;
    }

    console.log(plusexplode);
    width = plusexplode[0].split(' ').length;
    height = plusexplode.length;

    console.log(width + " " + height);

    var tablehtml = "<table>";

    for(var y = 0; y < height; y++)
    {
        var substring = plusexplode[y].split(' ');

        tablehtml += "<tr>";
        for(var x = 0; x < width; x++)
        {
            var elem = substring[x];

            var index;
            if(elem == "x")
                index = spawn;
            else if(elem == "e")
                index = exit;
            else if(elem == "p")
                index = poro;
            else if(elem == "v")
                index = poroVolant;
            else
                index = block[elem];

                console.log(index);
                var id = x + "-" + y;
                var onclick = "updateBlock('"+ id+ "')";
                tablehtml += "<td id="+ id + " onclick=" + onclick +"><img id='img"+id+"' src='"+index+"' width='64' height='64'></td>";
        }
        tablehtml += "</tr>";
    }

    tablehtml += "</table>";

    document.getElementById("tab").innerHTML = tablehtml;

    stringdata.value = "";
    document.getElementById("converterButton").hidden = false; //draw the export button
    */
}

    