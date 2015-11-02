var fs = require('fs');
var c  = console;

var dicFile = "lojban.json";
if (process.argv[2].endsWith(".json")) {
  dicFile = process.argv[2];
  wordStart = 3;
} else
  wordStart = 2;

var dic = JSON.parse(fs.readFileSync(dicFile, "utf-8"));
var toWords = mt(dic, process.argv.slice(wordStart));
c.log("%j", toWords);

function mt(dic, words) {
  var toWords = [];
  for (var i in words) {
    toWords.push(dic[words[i]]);
  }
  return toWords;
}




