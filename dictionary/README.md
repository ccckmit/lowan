## 邏輯語的 XML 字典結構

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


有時我們會在 definition 中看到比較複雜的欄位定義，像是：

```
j1=t1 listens to j2=t2 against background noise t3
```

或者

```
d1=b1=l1 is a day following b2=l2, d2 days later (default 1) by standard d3
```

或者

```
  ``cadzu'': c1 walks on surface c2 using limbs c3
    ``klama'': k1 goes to k2 from k3 via route k4 using k5
    ``dzukla'': c1=k1 walks to k2 from k3 via route k4
        using limbs k5=c3 on surface c2
```

以下是另一個案例：

```xml
<valsi word="pairkamnycmi" type="lujvo">
  <user>
    <username>rspeer</username>
    <realname>Rob Speer</realname>
  </user>
  <definition>$c_1$ is a member of jury/judging panel $c_2=p_1=k_1$ deciding matter $p_2$ in court/judging body $k_3$.</definition>
  <definitionid>14517</definitionid>
  <glossword word="juror" />
  <keyword word="juror" place="1" />
  <keyword word="jury" place="2" />
  <keyword word="decided by jury" place="3" />
  <keyword word="thing having jury" place="4" />
</valsi>
```

How To Write Definitions: A Walk-Through Example

```
Here's a walk through for adding an English definition for the lujvo "samru'e".

Go to http://jbovlaste.lojban.org/dict/listing.html and enter the word in the provided box.

Click the button, read the instructions, click the button, go to the record.

Select a language from the New Definition drop down box, click 'Go'.

In the Definition box, enter:

$p_1$ is a computer process with inputs $p_2$ and outputs/results $p_3$, passing through stages $p_4$, on computer $s_1$
We're using $p_1$ rather than $x_1$ to identify which word of the lujvo the place comes from. See Chapter 12 of the RefGram. The dollar signs are explained below.
```

samru'e 的完整定義如下：

```
<valsi word="samru'e" type="lujvo">
  <user>
    <username>rlpowell</username>
    <realname>Robin Lee Powell</realname>
  </user>
  <definition>$p_1$ is a computer process with inputs $p_2$ and outputs/results $p_3$, passing through stages $p_4$, on computer $s_1$.</definition>
  <definitionid>2434</definitionid>
  <notes>Taken from NORALUJV.TXT.  lujvo from {skami} and {pruce}.</notes>
  <glossword word="process" sense="computer process" />
  <glossword word="computer program" sense="running process" />
  <glossword word="computer software" sense="running process" />
  <glossword word="computer process" />
  <glossword word="program" sense="running computer process" />
  <keyword word="computer process" place="1" />
  <keyword word="computer process inputs" place="2" />
  <keyword word="computer process outputs" place="3" />
  <keyword word="computer process stages" place="4" />
  <keyword word="processing computer" place="5" />
</valsi>
```

注意 `<notes>Taken from NORALUJV.TXT.  lujvo from {skami} and {pruce}.</notes>` 這一條，其中的 skami 以 s 代表 ($s_1$)，pruce 以 p 代表 ($p_1$, $p_2$, $p_3$, $p_4$)。

以下為何是 b_i 與 d_i ???? (因為 ba'ur + du'u)

```
<valsi word="ba'urdu'u" type="lujvo">
  <user>
    <username>sarefo</username>
    <realname>sarefo</realname>
  </user>
  <definition>$d_1=b_1$ whines/bitches about $d_2$ by uttering $b_2$.</definition>
  <definitionid>17504</definitionid>
  <notes>Cf. {fengu}, {krixa}, {klaku}, {pante}.</notes>
  <glossword word="bitch" sense="whine" />
  <glossword word="whine" sense="bitch" />
</valsi>
```


```
<valsi word="bisyladru" type="lujvo">
  <user>
    <username>daniel</username>
    <realname>Daniel Brockman</realname>
  </user>
  <definition>$x_1=b_1=l_1$ is ice cream/frozen yoghurt made from milk of source $x_2=l_2$.</definition>
  <definitionid>18353</definitionid>
  <glossword word="frozen yoghurt" />
  <glossword word="ice cream" />
</valsi>
```


您可以在下列文件中看到這種定義的解讀方法：

* <http://www.lojban.org/publications/reference_grammar/chapter12.html>

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


