// BNF of lojban -- http://www.lojban.org/publications/formal-grammars/bnf.300.txt
// 用法 : 
//   範例： node parser "mi klama vi vu"            ==> 印出完整語法樹
//   範例： node parser "mi klama vi vu" -s         ==> 印出簡化語法樹
//   範例： node parser "mi klama vi vu" -s -pretty ==> 印出有縮排的簡化語法樹
//   範例： node parser "mi klama klama vi vu le"   ==> 傳回錯誤
//   範例： node parser lojban1.txt -f -s           ==> 讀檔後印出簡化語法樹

var fs = require("fs");
var camxes = require("./camxes");
var argv = process.argv;

function parse(text) {
  var tree, error;
  try {
    tree=camxes.parse(text);
  } catch (e) {
    error = e;
  }
  return { tree:tree, error:error } ;
}

function simplify(tree) {
  if (tree.length === 2) {
    if (typeof tree[0] === "string") {
      if (tree[1] instanceof Array) { // [string, array]
        return simplify(tree[1]);  
      } else { // [string, string]
        return tree;
      }
    }
  }
  var stree = [];
  for (var i in tree) {
    if (tree[i] instanceof Array)
      stree.push(simplify(tree[i]));
    else
      stree.push(tree[i]);
  }
  return stree;
}

var ltext;
if (argv.indexOf("-f")>=0) {
  ltext = fs.readFileSync(process.argv[2], "UTF8"); // 注意：一定要指定 UTF8, 否則 readFileSync 函數會傳回 buffer, 而非 string
} else {
  ltext = process.argv[2];
}

console.log("ltext=%s", ltext);

var p=parse(ltext);
var tree;
if (argv.indexOf("-s")>=0 && typeof p.tree !== 'undefined')
  tree = simplify(p.tree);
else
  tree = p.tree;

console.log("error=%j", p.error);
console.log("================================");

if (argv.indexOf("-pretty")>=0)
  console.log("tree=%s", JSON.stringify(tree, null, 2));
else
  console.log("tree=%j", tree);
