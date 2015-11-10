var sax = require("sax"),
  util = require("util"),
  fs = require('fs'),
  strict = true, // set to false for html-mode
  parser = sax.parser(strict);
  
var c = console;
  
function std(s) {
  return s.trim().replace(/"/g, '＂').replace(/\\/g, '\\\\');
}
  
function xml2json(path) {
  var saxStream = require("sax").createStream(strict);
  var hitStream = fs.createWriteStream(path+".hit.json"),
      objStream = fs.createWriteStream(path+".obj.json");
  hitStream.write("{\n");
  objStream.write("{\n");

  var obj = {}, hits=[], tags=[];
  
  saxStream.on("opentag", function (node) {
    tags.push(node.name);
//    c.log("node.name=%s", node.name);
    if (node.name === "valsi") {
      obj = { word:std(node.attributes.word), type:std(node.attributes.type) };
      hits = [];
    }
    if (node.name==="glossword") {
      hits.push(std(node.attributes.word));
    }
  })

  saxStream.on("text", function (text) {
    var tag = tags[tags.length-1];
    if (tag==="selmaho") {
      obj.selmaho = std(text);
    }
    if (tag==="definition") {
//      obj !== null && obj.type ==="gismu" && 
      obj.def = std(text);
    }
  })
  
  saxStream.on("closetag", function (tag) {
//    c.log("tag=%s", tag);
    if (tag === "valsi") {
      objStream.write(util.format('"%s":%j,\n', obj.word, obj));
      hitStream.write(util.format('"%s":%j,\n', obj.word, hits));
//      c.log(util.format('"%s":%j,', obj.word, obj));
      obj = null; hits = null;
    }
    tags.pop();
  })
  
  saxStream.on("end", function () {
    objStream.end('"":null}\n');
    hitStream.end('"":null}\n');
  })

  fs.createReadStream(path+".xml").pipe(saxStream);
}

xml2json("../dictionary/l2e");
xml2json("../dictionary/l2c");

/*    
    if (node.name === "nlword") {
      var w = std(node.attributes.word);
      var v = std(node.attributes.valsi);
      x2lStream.write(util.format('"%s":"%s",\n', w, v));
      l2xStream.write(util.format('"%s":"%s",\n', v, w));
    }
*/    
//      gStream.write(util.format('%s:"%s",\n', word, std(text)));
//    gStream = fs.createWriteStream(gismuFile);
