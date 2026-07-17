---
outline: deep
---
# 例題：ずっと繰り返す

::: tip ずっと繰り返す
旗クリックのときのスレッドの中で「ずっと」動き続けるコードを書きましょう。
ずっと繰り返すは、`for( ; ; ){ }` の文法を使ってみましょう。
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトを移動させます。<br>
スプライトが端に触れたとき、反転させます。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/004/"
/>

---

### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from './sub/images';

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 【旗クリックされたとき】のイベント定義
cat.Event.flagPresser().func = async function*(this: Sprite) {
    // ずっと繰り返す
    for(;;) {
        // Motion: 「動き」系
        // move: 「動かす」系
        // Motion.move.ifOnEdgeBounce: もし端についていたら跳ね返る
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        // フレームごとに休止
        yield;
    }
}

// 開始
Ts.engine.start();
```
::: warning index.ts
ここでは『旗クリックされたときのイベント』として用意したスレッドの中で『ずっと繰り返す』のコードを書いています。<br>
<br>
なお、Scratch3にならい、『永久ループ』とは呼ばすに『ずっと繰り返す』と呼ぶことにしています。<br>
<br>
Javascriptによる『ずっと繰り返す』の一番簡単な書き方は 『`for( ; ; ) { }`』だと思います。<br>
<br>
他に 『`while( true ) { }`』や 『`while( 1 == 1 ) { }`』がありますが、繰り返し構文は『`for`』で統一したいという『個人的コダワリ』がありまして、本サイトでは『`for( ; ; ) { }`』を多用しています。<br><br>TypeScratcherでは制限はありませんので、お好きなやり方でＯＫです。
:::

::: tip 『`yield`』
TypeScratcherは、構文チェックをしますので、繰り返し構文の最後に『`yield`』がないと『エラー』になります。<br>
30FPS（1秒間に30フレーム)の場合、登場キャラクターの変化を 1秒間に30回描画しなおすわけですが、１回の繰り返しとフレーム切り替えを同期させるために『`yield`』を必要とします。<br>
<br>
『`yield`』がないと繰り返し構文はフレームの切り替えに関係なく超高速動作をし、たいていの場合はブラウザハングを引き起こします。<br>
ブラウザハングを予防するため、TypeScratcherの繰り返し構文では、TypeScratcherが強制的に『yield』を付けるように誘導します。<br>
<br>
なお、Scratch3のターボモードのように高速で繰り返し構文を実行したい!という場合(『`yield`』無視せせたい場合)があります。<br>
意図的に『`yield`』を無視する方法については、ここでは割愛します（別の箇所で解説をします）。<br>


:::


