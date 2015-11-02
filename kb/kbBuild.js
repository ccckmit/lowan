var sax = require("sax"),
  util = require("util"),
  fs = require('fs'),
  strict = true, // set to false for html-mode
  parser = sax.parser(strict);
  
function xml2json(xmlFile, x2lFile, l2xFile) {
  var saxStream = require("sax").createStream(strict);
  var x2lStream = fs.createWriteStream(x2lFile),
      l2xStream = fs.createWriteStream(l2xFile);
  x2lStream.write("{\n");
  l2xStream.write("{\n");

  saxStream.on("opentag", function (node) {
    if (node.name === "nlword") {
      var word  = node.attributes.word.trim().replace(/"/g, '＂').replace(/\\/g, '\\\\');
      var valsi = node.attributes.valsi.trim().replace(/"/g, '＂').replace(/\\/g, '\\\\');
      x2lStream.write(util.format('"%s":"%s",\n', word, valsi));
      l2xStream.write(util.format('"%s":"%s",\n', valsi, word));
    }
  })

  saxStream.on("end", function () {
    x2lStream.write('"":""}\n');
    l2xStream.write('"":""}\n');
    x2lStream.end();
    l2xStream.end();
  })

  fs.createReadStream(xmlFile)
    .pipe(saxStream)
}

xml2json("../dictionary/xml-export_english.html", "e2l.json", "l2e.json");
xml2json("../dictionary/xml-export_chinese.html", "c2l.json", "l2c.json");
