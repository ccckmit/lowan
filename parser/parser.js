// BNF of lojban -- http://www.lojban.org/publications/formal-grammars/bnf.300.txt
// usage example : node parser "mi klama vi vu"

var camxes = require("./camxes");

function parse(text) {
  return camxes.parse(text);
}

var tree=parse(process.argv[2]);
console.log("%j", tree);

/*
D:\Dropbox\cccwd\web\lowan\parser>node parser "mi klama vi vu"
["text",["text_1",["paragraphs",["paragraph",["statement",["statement_1",["state
ment_2",["statement_3",["sentence",[["terms",["terms_1",["terms_2",["term",["ter
m_1",["sumti",["sumti_1",["sumti_2",["sumti_3",["sumti_4",["sumti_5",["sumti_6",
["KOhA_clause",[["KOhA","mi"]]]]]]]]]]]]]]]],["bridi_tail",["bridi_tail_1",["bri
di_tail_2",["bridi_tail_3",["selbri",["selbri_1",["selbri_2",["selbri_3",["selbr
i_4",["selbri_5",["selbri_6",["tanru_unit",["tanru_unit_1",["tanru_unit_2",["BRI
VLA_clause",[["BRIVLA",["gismu","klama"]]]]]]]]]]]]]],["tail_terms",["terms",["t
erms_1",["terms_2",["term",["term_1",["tag",["tense_modal",["simple_tense_modal"
,[["space",["VA_clause",["VA","vi"]]]]]]]]]]],["terms_1",["terms_2",["term",["te
rm_1",["tag",["tense_modal",["simple_tense_modal",[["space",["VA_clause",["VA","
vu"]]]]]]]]]]]]]]]]]]]]]]]]]]
*/ 