# Lowan -- 邏輯萬國語

Lowan is a project for the Lojban artificial language.

邏輯萬國語計畫是為「邏輯語」這個人造語言所創建的一個計畫。

If you can read chinese , you may read the following slide to understand why the project started.

如果您能閱讀中文(漢語)，您可以閱讀下列簡報，以瞭解這個計畫的起源。

* [程式人為何學邏輯語 Lojban ?](http://www.slideshare.net/ccckmit/lojban)

We target to build a set of tools for Lojban multilingual applications , include kowledge base in JSON format (KB), multilingual machine translation (MT) , information retrieval (IR), multilingual wiki system (include editor) for lojban (WS), and the other tools and application that may be useful for Lojban users.

我們企圖建立一組專為邏輯語設計的工具與應用，包含知識庫(KB)、多語言機器翻譯(MT)、資訊檢索(IR)、維基系統 (WS) 以及其他對邏輯語使用者有幫助的工具與應用。


We hope the project may help the widespreading of Lojban, and let more people know, learn, speak and write in Lojban.

我們希望這個計畫對邏輯語的推廣會有幫助，並且希望能讓更多人知道與學習邏輯語，並且採用邏輯語來書寫或交談。

## KB 知識庫

在邏輯語官方網站中有 [各國語言對邏輯語的翻譯字典檔](http://jbovlaste.lojban.org/export/xml.html) 。

我們運用程式 /kb/buildKB.js 將這些字典轉換成 JSON 格式，像是 l2e.json (邏翻英), l2c.json (邏翻中), e2l.json (英翻邏) 等字典，以便讓後續的程式可以方便的處理。 (注意 e2c.json 並非 lojban 官網的字典，而是我們用維基百科某詞頻表加上 google 翻譯所做出來的)。

您可以用下列指令建構這些 JSON 字典。

> cd kb
> node buildKB.js

建構出來的字典格式如下：

```javascript
{
"a":"and/or",
"a":"or",
"a":"sumti or",
"a'a":"attentive",
"a'acu'i":"inattentive",
"a'anai":"avoiding",
"a'au":"attitudal: moved",
...
```

## MT 翻譯系統

在 /mt/ 資料夾中存放有邏輯語的翻譯系統，目前已經建構好(邏翻英) 的部分，等到成熟一點再開始考慮 (邏翻中) 的部分。

您可以在下列網址中看到此翻譯系統的線上展示。

* <https://ccc.nqu.edu.tw/web/lowan/mt/lmt.html>

## parser 剖析器 (採用 camxes.js)

在 /parser/ 資料夾中有 parser.js ，是我們將 lojban 官網中推薦的 camxes.js 程式轉成 node.js 模組後，用來進行剖析 (parsing) 的程式。

以下範例是我們用 parser 剖析輸入行中的語句 "mi klama vi vu" 所得到的結果。

```
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
```

## 展望

目前其他部分尚未完成，專案還在進行當中 ....


