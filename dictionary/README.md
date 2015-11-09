## 邏輯語的知識庫 KB

在 xml-export_english.html 這個檔案中，我們可以看到像下列的字詞定義：

```xml
<valsi word="a" type="cmavo">
  <selmaho>A</selmaho>
  <user>
    <username>officialdata</username>
    <realname>Official Data</realname>
  </user>
  <definition>logical connective: sumti afterthought or.</definition>
  <definitionid>1339</definitionid>
  <glossword word="sumti or" />
  <glossword word="and/or" sense="inclusive or" />
  <glossword word="or" sense="inclusive or" />
</valsi>
```

其中的 valsi 就是英文的 word 的意思，而 selmaho 應該寫為 selma'o，意思是詞類，以下是其定義：

```
 Word: selma'o
        Type: lujvo
  Gloss Word: structure word class
  Definition: x1 is the class of structure word x2, which means or has
       function x3 in language x4.
       Notes: x2 can, for some speakers, take not just cmavo but any word.
```

在中文版的檔案中，其內容被翻譯為中文，以下是 a 一詞的中文 xml 定義。

```xml
<direction from="lojban" to="中文"><valsi word="a" type="cmavo">
  <selmaho>A</selmaho>
  <user>
    <username>panabsent</username>
    <realname>Panabsent</realname>
  </user>
  <definition>逻辑连词：或 （置于sumti之后）</definition>
  <definitionid>42459</definitionid>
  <glossword word="或" />
</valsi>
```

接著讓我們看看動詞 (gismu) 的定義方式，我們以 klama (come, 來) 為例：

```
<valsi word="klama" type="gismu">
  <rafsi>kla</rafsi>
  <user>
    <username>officialdata</username>
    <realname>Official Data</realname>
  </user>
  <definition>$x_{1}$ comes/goes to destination $x_{2}$ from origin $x_{3}$ via route $x_{4}$ using means/vehicle $x_{5}$.</definition>
  <definitionid>583</definitionid>
  <notes>Also travels, journeys, moves, leaves to ... from ...; $x_1$ is a traveller; ($x_4$ as a set includes points at least sufficient to constrain the route relevantly).  See also {cadzu}, {bajra}, {marce}, {vofli}, {litru}, {muvdu}, {cpare}, cmavo list {ka&apos;a}, {pluta}, {bevri}, {farlu}, {limna}, {vitke}.</notes>
  <glossword word="come" />
</valsi>
```

其中的 rafsi 代表「字首、字中或字尾」，其定義如下：

```
 Word: rafsi [jbovlaste]
        Type: gismu
  Gloss Word: affix
       rafsi: raf
  Definition: x1 is an affix/suffix/prefix/combining-form for word/concept
       x2, form/properties x3, language x4.
```

您可以看到在 definition 中，每個填充格都以 $x_{i}$ 的方式撰寫，因此要將詞彙填入應該是很容易的。

中文版的 klama 定義如下：

```xml
<valsi word="klama" type="gismu">
  <rafsi>kla</rafsi>
  <user>
    <username>mxx</username>
    <realname>MENG  Xinxin</realname>
  </user>
  <definition>$x_1$ 移动到目的地 $x_2$, 从$x_3$出发, 经过路径$x_4$ ,使用方法/交通工具 $x_5$.</definition>
  <definitionid>38137</definitionid>
  <glossword word="移动" />
  <glossword word="去" />
  <glossword word="来" />
  <keyword word="行者" place="1" />
  <keyword word="目的地/去处" place="2" />
  <keyword word="出发地/来自" place="3" />
  <keyword word="路径/经由" place="4" />
  <keyword word="交通工具/方式" place="5" />
</valsi>
```

而每個 xml 檔案的最後通常都跟著一堆詞彙翻譯配對的列表，英文版範例如下：

```xml
<nlword word="or" sense="inclusive or" valsi="a" />
<nlword word="sumti or" valsi="a" />
<nlword word="attentive" valsi="a&apos;a" />
<nlword word="inattentive" valsi="a&apos;acu&apos;i" />
...
```

而中文版範例如下：

```xml
<nlword word="或" valsi="a" />
<nlword word="专心" valsi="a&apos;a" />
<nlword word="刻意" valsi="a&apos;a" />
<nlword word="警惕" valsi="a&apos;e" />
<nlword word="警戒" valsi="a&apos;e" />
```


