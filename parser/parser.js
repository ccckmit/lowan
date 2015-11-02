// BNF of lojban -- http://www.lojban.org/publications/formal-grammars/bnf.300.txt
// usage example : node parser "mi klama vi vu"

var camxes = require("./camxes");

function parse(text) {
  var tree, error;
  try {
    tree=camxes.parse(text);
  } catch (e) {
    error = e;
  }
  return { tree:tree, error:error } ;
}

var p=parse(process.argv[2]);
console.log("%j", p);

/*
D:\Dropbox\cccwd\web\lowan\parser>node parser "mi klama klama mi vu"
{"tree":["text",["text_1",["paragraphs",["paragraph",["statement",["statement_1"
,["statement_2",["statement_3",["sentence",[["terms",["terms_1",["terms_2",["ter
m",["term_1",["sumti",["sumti_1",["sumti_2",["sumti_3",["sumti_4",["sumti_5",["s
umti_6",["KOhA_clause",[["KOhA","mi"]]]]]]]]]]]]]]]],["bridi_tail",["bridi_tail_
1",["bridi_tail_2",["bridi_tail_3",["selbri",["selbri_1",["selbri_2",["selbri_3"
,["selbri_4",["selbri_5",["selbri_6",["tanru_unit",["tanru_unit_1",["tanru_unit_
2",["BRIVLA_clause",[["BRIVLA",["gismu","klama"]]]]]]]]]],["selbri_4",["selbri_5
",["selbri_6",["tanru_unit",["tanru_unit_1",["tanru_unit_2",["BRIVLA_clause",[["
BRIVLA",["gismu","klama"]]]]]]]]]]]]]],["tail_terms",["terms",["terms_1",["terms
_2",["term",["term_1",["sumti",["sumti_1",["sumti_2",["sumti_3",["sumti_4",["sum
ti_5",["sumti_6",["KOhA_clause",[["KOhA","mi"]]]]]]]]]]]]]],["terms_1",["terms_2
",["term",["term_1",["tag",["tense_modal",["simple_tense_modal",[["space",["VA_c
lause",["VA","vu"]]]]]]]]]]]]]]]]]]]]]]]]]]}

D:\Dropbox\cccwd\web\lowan\parser>node parser "mi klama klama mi vu le"
{"error":{"name":"SyntaxError","expected":[],"found":"l","message":"Expected end
 of input but \"l\" found.","offset":21,"line":1,"column":22}}

*/ 