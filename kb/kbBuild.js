var sax = require("sax"),
  util = require("util"),
  fs = require('fs'),
  strict = true, // set to false for html-mode
  parser = sax.parser(strict);
  
var c = console;
  
function std(s) {
  return s.trim().replace(/"/g, '＂').replace(/\\/g, '\\\\');
}
  
function xml2json(xmlFile, x2lFile, l2xFile, lFile, gismuFile) {
  var saxStream = require("sax").createStream(strict);
  var x2lStream = fs.createWriteStream(x2lFile),
      l2xStream = fs.createWriteStream(l2xFile),
      lStream = fs.createWriteStream(lFile),
      gStream = fs.createWriteStream(gismuFile);
  x2lStream.write("{\n");
  l2xStream.write("{\n");
  lStream.write("{\n");
  gStream.write("{\n");

  var word = null, type = null;
  var tags = [];
  
  saxStream.on("opentag", function (node) {
    tags.push(node.name);
//    c.log("node.name=%s", node.name);
    if (node.name === "valsi") {
      word = std(node.attributes.word);
      type = std(node.attributes.type);
      lStream.write(util.format('"%s":{type:"%s" ', word, type))
    }
    if (node.name === "nlword") {
      var w = std(node.attributes.word);
      var v = std(node.attributes.valsi);
      x2lStream.write(util.format('"%s":"%s",\n', w, v));
      l2xStream.write(util.format('"%s":"%s",\n', v, w));
    }
  })

  saxStream.on("text", function (text) {
    var tag = tags[tags.length-1];
    if (tag==="selmaho") {
      lStream.write('selmaho:"'+text+'" }\n');
    }
    if (type ==="gismu" && tag==="definition") {
      gStream.write(util.format('%s:"%s",\n', word, std(text)));
    }
  })
  
  saxStream.on("closetag", function (node) {
    if (node.name === "valsi") {
      word = null;
      type = null;
    }
    tags.pop();
  })
  
  saxStream.on("end", function () {
    x2lStream.write('"":""}\n');
    l2xStream.write('"":""}\n');
    lStream.write('"":""}\n');
    gStream.write('"":""}\n');
    x2lStream.end();
    l2xStream.end();
    lStream.end();
    gStream.end();
  })

  fs.createReadStream(xmlFile)
    .pipe(saxStream)
}

xml2json("../dictionary/xml-export_english.html", "e2l.json", "l2e.json", "le.json", "l2e_gismu.json");
xml2json("../dictionary/xml-export_chinese.html", "c2l.json", "l2c.json", "lc.json", "l2c_gismu.json");
