var l = 
{ "width": 10, "height": 10, "layer0": "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 2 2 2 2 2 2 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 2 2 2 2 2 2 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "}
//{ width: 10, height: 10, layer0: "0 0 1 1 1 1 1 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 2 2 2 2 1 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 ", layer1: "0 0 4 4 4 4 4 4 0 0 0 0 4 2 0 0 0 4 0 0 0 0 3 0 0 0 1 4 0 0 0 0 4 1 2 0 1 4 0 0 0 0 4 0 0 0 1 4 0 0 0 0 4 1 2 0 1 4 0 0 0 0 4 1 0 0 1 4 0 0 0 0 4 2 0 0 0 3 0 0 0 0 4 4 4 4 4 4 0 0 0 0 0 0 0 0 0 0 0 0 "}

var lStarter = Array();
lStarter.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 11 11 12 12 9 9 10 10 9 9 11 12 12 12 9 9 10 10 9 9 12 12 12 11 9 9 10 10 9 9 12 12 11 11 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
lStarter.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 11 11 12 12 9 9 10 10 9 9 11 12 12 12 9 9 10 10 9 9 12 12 12 11 9 9 10 10 9 9 12 12 11 11 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
lStarter.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 11 11 12 12 9 9 10 10 9 9 11 12 12 12 9 9 10 10 9 9 12 12 12 11 9 9 10 10 9 9 12 12 11 11 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 6 1 1 1 1 "});
lStarter.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 11 11 12 12 9 9 10 10 9 9 11 12 12 12 9 9 10 10 9 9 12 12 12 11 9 9 10 10 9 9 12 12 11 11 9 9 10 10 9 9 9 9 9 9 9 9 10 10 9 9 9 9 9 9 9 9 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});

var l2s = Array();
l2s.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 18 13 19 18 13 19 19 17 17 18 13 18 19 18 18 19 18 17 17 18 18 18 19 19 13 19 13 17 17 13 19 18 13 13 18 19 19 17 17 19 19 18 13 13 13 18 19 17 17 18 19 13 19 18 19 18 18 17 17 19 18 18 19 19 19 13 18 17 17 18 13 19 18 13 18 19 19 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
l2s.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 18 13 19 18 13 19 19 17 17 18 13 18 19 18 18 19 18 17 17 18 18 18 19 19 13 19 13 17 17 13 19 18 13 13 18 19 19 17 17 19 19 18 13 13 13 18 19 17 17 18 19 13 19 18 19 18 18 17 17 19 18 18 19 19 19 13 18 17 17 18 13 19 18 13 18 19 19 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
l2s.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 18 13 19 18 13 19 19 17 17 18 13 18 19 18 18 19 18 17 17 18 18 18 19 19 13 19 13 17 17 13 19 18 13 13 18 19 19 17 17 19 19 18 13 13 13 18 19 17 17 18 19 13 19 18 19 18 18 17 17 19 18 18 19 19 19 13 18 17 17 18 13 19 18 13 18 19 19 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 6 1 1 1 "});
l2s.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 18 13 19 18 13 19 19 17 17 18 13 18 19 18 18 19 18 17 17 18 18 18 19 19 13 19 13 17 17 13 19 18 13 13 18 19 19 17 17 19 19 18 13 13 13 18 19 17 17 18 19 13 19 18 19 18 18 17 17 19 18 18 19 19 19 13 18 17 17 18 13 19 18 13 18 19 19 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});


var l2 = { width: 20, height: 20, layer0: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ", layer1: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 4 4 4 4 4 4 4 4 4 4 4 4 4 0 0 0 0 0 0 4 2 2 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 4 0 0 0 0 0 0 1 1 1 1 0 0 4 0 0 0 0 0 0 4 1 1 1 0 0 0 1 0 0 0 0 2 4 0 0 0 0 0 0 3 0 0 0 0 0 0 1 0 2 0 0 2 4 0 0 0 0 0 0 4 1 1 1 0 0 0 1 0 0 0 0 2 4 0 0 0 0 0 0 4 0 0 0 0 0 0 1 1 1 1 0 0 4 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 4 0 0 0 0 0 0 1 1 1 1 0 0 4 0 0 0 0 0 0 4 2 2 2 0 0 0 0 0 0 0 0 2 4 0 0 0 0 0 0 4 2 2 2 0 0 0 0 0 0 0 2 2 4 0 0 0 0 0 0 4 4 4 4 4 4 4 3 4 4 4 4 4 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "}

var llevel = Array();
//llevel.push({ width: 10, height: 10, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 3 0 0 0 0 0 0 3 1 1 0 2 2 2 2 2 2 0 1 7 0 0 0 2 0 0 0 0 1 1 0 0 0 2 0 2 0 0 5 1 0 0 0 0 0 2 0 0 1 1 0 0 0 0 0 2 0 0 1 1 0 2 2 2 2 2 2 0 1 1 3 0 0 0 0 0 0 3 1 1 1 1 1 1 1 1 1 1 1 "});
// llevel.push({ width: 10, height: 10, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 2 2 0 1 1 0 2 3 2 0 3 2 0 5 1 0 0 3 2 0 3 0 0 1 1 0 0 3 2 0 3 0 0 1 1 0 0 3 0 0 3 0 0 1 1 0 0 3 0 0 3 0 0 1 7 0 2 3 0 2 3 2 0 1 1 0 2 2 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});

// llevel.push({ width: 10, height: 5, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 7 0 0 2 2 2 2 0 0 5 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
// llevel.push({ width: 10, height: 5, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 3 0 3 0 0 3 0 3 1 7 0 0 0 0 0 0 0 0 5 1 3 0 3 0 0 3 0 3 1 1 1 1 1 1 1 1 1 1 1 "});
// llevel.push({ width: 10, height: 5, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 7 0 0 3 0 0 0 0 0 5 1 0 0 0 0 0 3 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
// llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
// llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 6 1 1 1 1 1 "});

// les anciens truc bien
//est ouest
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 14 14 14 14 10 10 15 15 15 15 15 15 15 15 10 10 12 11 12 12 12 12 11 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 11 12 12 12 12 11 12 10 10 12 12 12 12 12 12 12 12 10 10 10 10 10 10 10 10 10 10 10 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 14 14 14 14 10 10 12 12 11 15 15 15 15 15 10 10 14 14 12 15 15 15 15 15 10 10 15 15 12 12 12 11 15 15 10 10 15 15 11 12 12 12 15 15 10 10 15 15 14 14 14 12 15 15 10 10 15 15 15 15 15 11 12 12 10 10 15 15 15 15 15 14 14 14 10 10 10 10 10 10 10 10 10 10 10 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 0 0 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 0 0 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 14 14 14 14 10 10 15 15 15 15 15 15 15 15 10 10 12 11 12 12 12 12 11 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 12 11 12 12 12 12 11 12 10 10 12 12 12 12 12 12 12 12 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 8 0 0 0 0 8 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});

//nord sud
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 12 14 14 14 10 10 15 15 15 15 12 15 15 15 10 10 15 15 11 12 12 11 15 15 10 10 15 15 12 12 12 12 15 15 10 10 15 15 12 12 12 12 15 15 10 10 15 15 11 12 12 11 15 15 10 10 15 15 14 12 14 14 15 15 10 10 15 15 15 12 15 15 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 2 2 2 2 0 2 2 2 1 1 2 2 2 2 0 2 2 2 1 1 2 2 0 0 0 0 2 2 1 1 2 2 0 0 0 0 2 2 1 1 2 2 0 0 0 0 2 2 1 1 2 2 0 0 0 0 2 2 1 1 2 2 2 0 2 2 2 2 1 1 2 2 2 0 2 2 2 2 1 1 1 1 1 6 1 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 12 9 9 9 9 9 9 12 10 10 9 12 9 9 9 9 12 9 10 10 9 9 12 12 12 12 9 9 10 10 11 11 14 14 14 14 11 11 10 10 11 11 15 15 15 15 11 11 10 10 9 9 12 12 12 12 9 9 10 10 9 12 9 9 9 9 12 9 10 10 12 9 9 9 9 9 9 12 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 8 0 0 0 0 0 0 8 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 2 2 2 2 0 0 1 1 0 0 2 2 2 2 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 8 0 0 0 0 0 0 8 1 1 1 1 1 6 1 1 1 1 1 "});
//sud est
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 9 9 9 9 10 10 15 15 9 9 9 9 9 9 10 10 15 9 9 9 9 9 9 12 10 10 15 9 11 9 9 9 9 9 10 10 9 9 9 9 9 9 9 12 10 10 9 9 9 9 9 9 9 9 10 10 14 14 9 9 9 9 9 9 10 10 15 15 14 9 9 14 14 14 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 0 0 0 0 1 1 2 2 0 0 0 0 0 0 1 1 2 0 0 0 0 0 0 8 1 1 2 0 8 0 0 0 0 0 5 1 0 0 0 0 0 0 0 8 1 1 0 0 0 0 0 0 0 0 1 1 2 2 0 0 0 0 0 0 1 1 2 2 2 0 0 2 2 2 1 1 1 1 1 1 6 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 11 12 12 11 14 14 10 10 15 15 15 12 12 15 15 15 10 10 11 15 15 12 12 15 15 11 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 11 14 14 12 12 14 14 11 10 10 14 15 15 12 12 15 15 14 10 10 15 15 11 12 12 11 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 2 2 0 0 0 0 2 2 1 1 2 2 2 0 0 2 2 2 1 1 0 2 2 0 0 2 2 0 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 2 2 0 0 2 2 0 1 1 2 2 2 0 0 2 2 2 1 1 2 2 0 0 0 0 2 2 1 1 1 1 1 1 6 1 1 1 1 "});

//oest sud
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 14 14 14 14 10 10 15 11 12 12 12 12 11 15 10 10 15 12 11 12 12 11 12 15 10 10 15 12 12 14 14 12 12 15 10 10 15 12 12 15 15 12 12 15 10 10 12 12 12 15 15 12 12 15 10 10 12 12 12 15 15 12 12 15 10 10 15 15 15 15 15 12 12 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 0 0 0 0 0 8 2 1 1 2 0 8 0 0 0 0 2 1 1 2 0 0 2 2 0 0 2 1 1 2 0 0 2 2 0 0 2 1 1 0 0 0 2 2 0 0 2 1 7 0 0 0 2 2 0 0 2 1 1 2 2 2 2 2 0 0 2 1 1 1 1 1 1 1 1 6 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 11 12 12 11 14 14 10 10 15 15 15 12 12 15 15 15 10 10 11 15 15 12 12 15 15 11 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 11 14 14 12 12 14 14 11 10 10 14 15 15 12 12 15 15 14 10 10 15 15 11 12 12 11 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 2 2 0 0 0 0 2 2 1 1 2 2 2 0 0 2 2 2 1 1 0 2 2 0 0 2 2 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 2 2 0 0 2 2 0 1 1 2 2 2 0 0 2 2 2 1 1 2 2 0 0 0 0 2 2 1 1 1 1 1 1 6 1 1 1 1 "});
// ouest nord
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 11 12 12 11 14 14 10 10 15 15 15 12 12 15 15 15 10 10 11 15 15 12 12 15 15 11 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 11 14 14 12 12 14 14 11 10 10 14 15 15 12 12 15 15 14 10 10 15 15 11 12 12 11 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 4 1 1 1 1 1 1 2 2 0 0 0 0 2 2 1 1 2 2 2 0 0 2 2 2 1 1 0 2 2 0 0 2 2 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 2 2 0 0 2 2 0 1 1 2 2 2 0 0 2 2 2 1 1 2 2 0 0 0 0 2 2 1 1 1 1 1 1 1 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 12 12 12 12 12 12 14 10 10 12 12 11 11 11 11 12 12 10 10 12 11 12 12 12 12 11 12 10 10 12 11 12 12 12 12 11 12 10 10 12 12 11 11 11 11 12 12 10 10 14 12 12 12 12 12 12 14 10 10 15 14 14 14 14 14 14 15 10 10 15 15 15 15 15 15 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 4 1 1 1 1 1 1 2 0 0 0 0 0 0 2 1 1 0 8 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 8 0 1 1 2 0 0 0 0 0 0 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 "});
// nord est
llevel.push({ "width": 10, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 14 14 11 12 12 11 14 14 10 10 15 15 15 12 12 15 15 15 10 10 11 15 15 12 12 15 15 11 10 10 12 12 12 12 12 12 12 12 10 10 12 12 12 12 12 12 12 12 10 10 11 14 14 12 12 14 14 11 10 10 14 15 15 12 12 15 15 14 10 10 15 15 11 12 12 11 15 15 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 4 1 1 1 1 1 1 2 2 0 0 0 0 2 2 1 1 2 2 2 0 0 2 2 2 1 1 0 2 2 0 0 2 2 0 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 2 2 0 0 2 2 0 1 1 2 2 2 0 0 2 2 2 1 1 2 2 0 0 0 0 2 2 1 1 1 1 1 1 1 1 1 1 1 "});
llevel.push({ "width": 10, "height": 10, "layer0": "15 10 10 10 10 10 10 10 10 10 15 14 14 14 14 14 11 14 14 10 15 15 12 11 12 11 12 15 15 10 15 15 11 14 14 14 14 15 15 10 15 15 12 15 15 15 15 15 15 10 15 15 11 12 11 15 15 15 15 10 15 15 12 12 12 15 15 11 12 10 15 15 11 12 11 12 11 12 14 10 15 15 14 14 14 14 14 14 15 10 15 15 15 15 15 15 15 15 15 14 ", "layer1": "1 1 1 1 1 1 4 1 1 1 1 2 2 2 2 2 0 2 2 1 1 2 0 0 0 0 0 2 2 1 1 2 0 2 2 2 2 2 2 1 1 2 0 2 2 2 2 2 2 1 1 2 0 0 0 2 2 2 2 1 1 2 0 8 0 2 2 0 0 5 1 2 0 0 0 0 0 0 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 "});

//level2
var llevel2 = new Array();
//est ouest
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 18 13 18 17 17 18 17 17 18 13 19 18 18 18 13 19 17 17 19 18 18 18 19 18 18 18 17 17 18 18 13 18 18 19 18 18 17 17 18 18 18 18 18 18 18 19 17 17 18 17 18 18 17 18 13 18 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 8 0 1 1 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 5 7 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 1 0 0 1 0 8 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "});
//nord sud
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 18 18 18 19 18 18 18 17 17 18 17 17 18 18 17 17 18 17 17 18 18 18 19 18 18 18 18 17 17 18 19 19 19 18 18 19 18 17 17 18 18 19 19 18 18 18 18 17 17 18 18 18 18 18 18 18 19 17 17 18 17 17 17 17 17 17 18 17 17 18 19 18 19 18 18 19 18 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 4 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 0 1 1 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 8 0 0 0 0 8 0 1 1 0 1 1 1 1 1 1 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 6 1 1 1 1 1 "});

//sud est
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 18 18 18 19 17 17 17 17 18 18 18 18 19 18 17 17 17 18 18 18 18 19 18 18 17 17 17 18 19 18 18 19 18 18 17 17 17 18 18 18 18 19 18 19 17 17 17 19 19 18 19 18 18 18 17 17 17 18 18 18 19 18 19 18 17 17 17 17 18 18 19 19 18 18 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 8 0 1 1 1 1 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 5 1 1 8 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 1 1 1 1 1 6 1 1 1 1 1 "});

//oest sud
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 13 18 18 18 18 18 18 13 17 17 18 13 19 18 19 19 13 18 17 17 19 18 18 18 19 19 18 19 17 17 18 19 18 13 13 18 19 18 17 17 18 18 18 13 13 19 18 18 17 17 19 18 19 19 18 18 19 18 17 17 18 13 18 19 18 19 13 18 17 17 18 19 18 18 18 18 18 13 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 8 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 8 0 0 0 0 8 0 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 6 1 1 1 1 "});
// ouest nord
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 18 19 18 18 18 17 17 17 17 17 18 18 19 18 18 17 17 17 17 17 17 18 18 18 18 17 17 17 17 17 17 17 17 18 19 18 17 17 17 17 17 17 17 18 18 18 18 17 17 17 17 17 17 19 18 18 19 18 17 17 18 18 18 18 18 18 18 18 17 17 17 18 19 18 19 18 18 19 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 4 1 1 1 1 1 1 8 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 1 1 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 "});
// nord est
llevel2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 13 18 18 18 18 18 18 17 17 17 18 13 18 18 18 18 17 17 17 17 18 18 13 18 18 18 18 18 17 17 17 18 18 13 18 18 18 18 17 17 17 17 18 18 13 18 18 18 17 17 18 18 18 18 18 13 18 18 17 17 18 18 18 18 18 18 13 18 17 17 18 17 17 17 17 18 18 13 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 4 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 8 0 5 1 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 8 0 0 0 0 0 1 1 0 1 1 1 1 0 8 0 1 1 1 1 1 1 1 1 1 1 1 "});

var level2 = Array();
level2.push({ "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 13 19 18 18 19 18 18 13 17 17 18 13 19 18 18 19 13 18 17 17 18 18 13 18 19 13 18 18 17 17 18 19 18 13 13 18 18 18 17 17 19 18 19 13 13 18 19 18 17 17 18 18 13 18 18 13 18 19 17 17 18 13 18 19 18 18 13 18 17 17 13 18 18 18 18 19 19 13 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 8 0 0 0 0 0 0 8 1 1 0 0 0 0 0 0 0 0 5 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 7 0 0 0 0 0 0 0 0 1 1 8 0 0 0 0 0 0 8 1 1 1 1 1 1 1 1 1 1 1 "});



//var bossRoom = { width: 10, height: 10, layer0: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 ", layer1: "1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 2 2 2 0 0 2 2 2 1 1 1 1 1 1 4 1 1 1 1 "};
var bossRoom = { "width": 13, "height": 10, "layer0": "10 10 10 10 10 10 10 10 10 10 10 10 10 10 14 14 14 14 14 14 14 14 14 14 14 10 10 11 12 12 12 12 12 12 12 12 12 11 10 10 14 9 9 9 12 12 12 9 9 9 14 10 10 15 9 9 9 12 12 12 9 9 9 15 10 10 15 9 9 9 12 12 12 9 9 9 15 10 10 15 9 9 9 12 12 12 9 9 9 15 10 10 15 9 9 9 12 12 12 9 9 9 15 10 10 11 9 9 9 12 12 12 9 9 9 11 10 10 10 10 10 10 10 10 10 10 10 10 10 10 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 2 0 0 0 0 0 0 0 0 0 2 1 1 2 0 0 0 0 0 0 0 0 0 2 1 1 2 0 0 0 0 0 0 0 0 0 2 1 1 2 0 0 0 0 0 0 0 0 0 2 1 1 2 0 0 0 0 0 0 0 0 0 2 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 6 1 1 1 1 1 1 "};

var finalBossRoom = { "width": 10, "height": 10, "layer0": "17 17 17 17 17 17 17 17 17 17 17 17 13 18 18 19 18 13 17 17 17 13 18 18 18 19 18 18 13 17 17 18 18 13 18 19 13 18 18 17 17 19 18 19 13 13 18 19 19 17 17 18 19 18 13 13 18 18 18 17 17 18 19 13 18 18 13 19 19 17 17 13 18 19 19 18 18 18 13 17 17 17 13 19 18 19 18 13 17 17 17 17 17 17 17 17 17 17 17 17 ", "layer1": "1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 1 1 1 1 1 1 1 6 1 1 1 1 "};
//original objects for level
var originalBlockList = Array(); // for the background layer

var originalEntityFall;
var originalEntityRock;
var originalEntityDoorN;
var originalEntityDoorE;
var originalEntityDoorS;
var originalEntityDoorO;
var originalBoxCollider;

//init original prefabs
function initLevelLoader(scene)
{
    //first load the atlas texture
    var atlas = new BABYLON.Texture("./media/atlas.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

    //define default material for tiles
    var tileMaterial = new BABYLON.StandardMaterial("noLight", scene);
    tileMaterial.disableLighting = true;
    tileMaterial.emissiveColor = BABYLON.Color3.White();
    tileMaterial.diffuseTexture = atlas;
    tileMaterial.diffuseTexture.hasAlpha = true;

    //tiles
    for(let i=0; i<20; i++)
        originalBlockList.push(CreateTile(scene, i));

    originalEntityFall = CreateTile(scene, 2);
    originalEntityRock = CreateTile(scene, 3);
    originalEntityDoorN = CreateTile(scene, 4);
    originalEntityDoorE = CreateTile(scene, 5);
    originalEntityDoorS = CreateTile(scene, 6);
    originalEntityDoorO = CreateTile(scene, 7);

    originalBoxCollider = BABYLON.MeshBuilder.CreateBox("b", {size:0}, scene);
    originalBoxCollider.isVisible = false;

    function CreateTile(scene, textureIndex)
    {
        var columns = 8;
        var rows = 6;
        var textureOffset = 0.001; // pour fix les le clipping de la texture
        //var faceUV = new BABYLON.Vector4(textureIndex/8, 0, (textureIndex+1)/8, 1/6);
        var faceUV = new BABYLON.Vector4((textureIndex/8)%1 + textureOffset, Math.floor(textureIndex/8)/6 + textureOffset, (textureIndex/8)%1 + 1/8 - textureOffset, Math.floor(textureIndex/8)/6 + 1/6 - textureOffset);
        //var faceUV = new BABYLON.Vector4(5/8, 0/6, (5+1)/8, 1/6);
        console.log(faceUV);
        var tile = BABYLON.MeshBuilder.CreatePlane("tile", {frontUVs:faceUV, width:1, height:1, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
        tile.material = tileMaterial;
        tile.position = new BABYLON.Vector3(0, -100, 0);

        return tile;
    }
}

var walls = Array();
var doors = Array();
var backgroundTiles = Array();
var entities = Array();

var currentdjRoom = 0;
var dj = Array();
var djBossDefeat = false;
var levelCount = 1;

function loadnewlevel(level)
{
    var level_tab = level["layer0"].split(' ');

    var level_h = level.height;
    var level_w = level.width;

    var x_offset = level.width/2;
    var y_offset = level.height/2;

    walls.forEach(e => e.dispose());
    doors.forEach(e => e.dispose());
    backgroundTiles.forEach(e => e.dispose());
    entities.forEach(e => e.dispose());
    
    var levelwalls = Array();
    var leveldoors = Array();
    var levelbackgroundTiles = Array();
    var levelentities = Array();
    var levelMobs = Array();

    

    // first layer
    for(let h = 0; h < level_h; h++)
    {
        for(let w = 0; w < level_w; w++)
        {
            var tile = level_tab[w + h*level_w];
            var pos = new BABYLON.Vector3(w - x_offset, (level_h - h) - y_offset, 0);
            if(tile == "1")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[0], pos));
            if(tile == "2")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[1], pos));
            if(tile == "9")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[8], pos));
            if(tile == "10")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[9], pos));
            if(tile == "11")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[10], pos));
            if(tile == "12")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[11], pos));
            if(tile == "13")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[12], pos));
            if(tile == "14")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[13], pos));
            if(tile == "15")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[14], pos));
            if(tile == "17")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[16], pos));
            if(tile == "18")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[17], pos));
            if(tile == "19")
                levelbackgroundTiles.push(instantiateTile(originalBlockList[18], pos));
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

            if(tile == "1") //boxwall
                levelwalls.push(instantiateBlock(pos));

            if(tile == "2")
            {
                //you cant walk on a wall but projectile can go through
                //levelentities.push(instantiateTile(originalEntityFall, pos));
                levelentities.push(instantiateBlock(pos));
            }
            if(tile == "3")
            {
                levelentities.push(instantiateTile(originalEntityRock, pos));
                levelentities.push(instantiateBlock(pos));
            }
                
            if(tile == "4")
            {
                var door = instantiateTile(originalEntityDoorN, pos)
                //entities.push(door);
                leveldoors.push(["n",door, 0]);
            }
            if(tile == "5")
            {
                var door = instantiateTile(originalEntityDoorE, pos)
                //entities.push(door);
                leveldoors.push(["e",door, 0]);
            }
            if(tile == "6")
            {
                var door = instantiateTile(originalEntityDoorS, pos)
                //entities.push(door);
                leveldoors.push(["s",door, 0]);
            }
            if(tile == "7")
            {
                var door = instantiateTile(originalEntityDoorO, pos)
                //entities.push(door);
                leveldoors.push(["o",door, 0]);
            }
            if(tile == "8")
            {
                //enemy spawn...
                //var monster = new mob(pos.x, pos.y);
                let selection;
                let poro = "./media/poro.png";
                let slimeRed = "./media/slimeRouge.png";
                let slimeGreen = "./media/slimeVert.png";
                let kroctor = "./media/kroctor.png";
                let fire_spirit = "./media/fire_spirit.png";
                let oeuil = "./media/oeuil.png";
                if(levelCount < 3)
                {
                    if(Math.random() < 0.2)
                        levelMobs.push(new blob(pos.x, pos.y, poro));
                    else
                    {
                        if(Math.random() < 0.4)
                            levelMobs.push(new mob(pos.x, pos.y, slimeGreen));
                        else
                            levelMobs.push(new mob(pos.x, pos.y, slimeRed));
                    }
                }
                else
                {
                    var rdm = Math.random()
                    if(rdm > 0.6)
                        levelMobs.push(new krok(pos.x, pos.y, kroctor));
                    else if (rdm > 0.3 && rdm < 0.6)
                        levelMobs.push(new fireSpirit(pos.x, pos.y, fire_spirit));
                    else
                        levelMobs.push(new eye(pos.x, pos.y, oeuil));

                }
                
                
            }
        }
    }
    
    console.log("level loaded!");
    //reload le level fait bug les projectiles
    var level = {"walls": levelwalls, "doors": leveldoors, "tiles": levelbackgroundTiles, "entities": levelentities, "mobs": levelMobs, "collectibles": Array() };
    return level;

}

// --- instances function ---

function instantiateTile(tile, position)
{
    var instance = tile.createInstance("tileInstance");
    instance.position = position;

    return instance;
}

function instantiateBlock(position)
{
    var instance = instantiateTile(originalBoxCollider, position);
    instance.checkCollisions = true;
    instance.isVisible = false;

    return instance;
}


function getOpposideDirection(dir)
{
    let targetDir = "s"; // south
    if(dir == "e") targetDir = "o"; //west
    if(dir == "s") targetDir = "n"; //north
    if(dir == "o") targetDir = "e"; //east

    return targetDir;
}

function findRoomWithDir(dir)
{
    let dirvalue = "4";
    if(dir == "e") dirvalue = "5";
    if(dir == "s") dirvalue = "6";
    if(dir == "o") dirvalue = "7";

    validRooms = Array();

    var levelPool;

    if(levelCount < 3)
        levelPool = llevel;
    else
        levelPool = llevel2;

    // if(levelCount > 1)
    //     levelPool = level2;

    levelPool.forEach(room => {
        if(room.layer1.includes(dirvalue))
            validRooms.push(room);
    })

    return validRooms[Math.floor(Math.random()*(validRooms.length))];
}

function generateDungeon()
{
    var dungeonRoomsMin = 5;
    var dungeonRoomsMax = 8;
    var dungeonRoomsCount = Math.floor(Math.random() * (dungeonRoomsMax - dungeonRoomsMin + 1) + dungeonRoomsMin);

    var dungeonLayout = Array();

    var randomStarter = Math.floor(Math.random() * (4 - 0) + 0);

    var startlevelData;

    if(levelCount < 3)
        startlevelData = loadnewlevel(lStarter[randomStarter]);
    else
        startlevelData = loadnewlevel(l2s[randomStarter]);

    startlevelData['doors'][0][2] = 1;
    dungeonLayout.push(startlevelData);
    //enableRoom(levelData, false);

    var lastRoomNextDir = "e";

    for(let i=0;i<dungeonRoomsCount;i++)
    {
        //we search for the opposite direction
        let targetDir = getOpposideDirection(lastRoomNextDir);
        var dungeonLevel = findRoomWithDir(targetDir);
        var levelData = loadnewlevel(dungeonLevel);

        if(levelData['doors'][0][0] == targetDir)
        {
            levelData['doors'][0][2] = -1;
            levelData['doors'][1][2] = 1;
            lastRoomNextDir = levelData['doors'][1][0];
        }
        else
        {
            levelData['doors'][0][2] = 1;
            levelData['doors'][1][2] = -1;
            lastRoomNextDir = levelData['doors'][0][0];
        }

        dungeonLayout.push(levelData);
        enableRoom(levelData, false);
    }

    //boss room
    var endlevelData;
    
    if(levelCount < 3)
    {
        endlevelData = loadnewlevel(bossRoom);
        endlevelData["mobs"].push(new boss(0,3,"./media/boss_1.png"));
    }
    else
    {

        endlevelData = loadnewlevel(finalBossRoom);
        endlevelData["mobs"].push(new bossDragon(0,3,"./media/boss_2.png"));
    }

    endlevelData['doors'][0][2] = -1;
        
    dungeonLayout.push(endlevelData);

    enableRoom(endlevelData, false);


    console.log("dungeon generated: " + dungeonRoomsCount + " rooms");
    return dungeonLayout;
}

function enableRoom(levelData, enabled)
{
    levelData['walls'].forEach(element => element.setEnabled(enabled));
    levelData['tiles'].forEach(element => element.setEnabled(enabled));
    levelData['doors'].forEach(element => element[1].setEnabled(enabled));
    levelData['entities'].forEach(element => element.setEnabled(enabled));
    levelData['mobs'].forEach(element => element.setActive(enabled));
}

function clearDungeon(dj)
{
    dj.forEach(room => {
        room['walls'].forEach(e => e.dispose());
        room['tiles'].forEach(e => e.dispose());
        room['doors'].forEach(e => e[1].dispose());
        room['entities'].forEach(e => e.dispose());
        room['mobs'].forEach(e => e.destroy());
        room["collectibles"].forEach(e => e.destroy());
    });
}