var rl = require('readline');
var fs = require('fs');
var c  = console;

function dic2json(file) {
  var dic = {};
  
  var reader = rl.createInterface({ 
    input: fs.createReadStream(file)
  });

  c.log("{");
  
  reader.on('line', function (line) {
    var line1 = line.split("//")[0].trim();
    if (line1.length > 0) {
      var parts = line1.split("=");
      var word  = parts[0].trim();
      var towords = parts[1].split("|");
      c.log('"%s":"%s",', word, towords[0].trim());
      for (var i in towords) {
        dic[word] = towords[i];
        c.log('"%s":"%s",', towords[i].trim(), word);
      }
    }
  });  
  
  reader.on("close",function(){    
    c.log('"":""}');
  })
}

if (process.argv.length === 3)
  dic2json(process.argv[2]);
else
  c.log("Usage : node dic2json [file.dic] > [file.json]");

