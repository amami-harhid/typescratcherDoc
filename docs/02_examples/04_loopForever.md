---
outline: deep
---
# 例題：ずっと繰り返す

::: tip ずっと繰り返す
旗クリックのときのスレッドの中で「ずっと」動き続けるコードを書きましょう。
ずっと繰り返すは、`for( ; ; ){ }` の文法を使ってみましょう。
:::

### 動作例

緑の旗をクリックすると、ずっとスプライトを移動させます。<br>
スプライトが端に触れたとき、反転させます。

---
<small>※ TypeScratcherロゴをクリックで表示、緑の旗クリックで動作開始</small>
<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/01_quickStart/004/"
/>

---

### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from './sub/images';

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( CatAImage ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( BlueskyImage ); // 背景を追加

// 【旗クリックされたとき】のイベント定義
cat.Event.flagPresser().func = function( this: Sprite ) {
    // ずっと繰り返す
    for( ;; ) {
        // Motion: 「動き」系
        // move: 「動かす」系
        // Motion.move.ifOnEdgeBounce: もし端についていたら跳ね返る
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        
        // 繰り返しの最後で次のフレームになるまで一時停止する
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
TypsScratcherの『ずっと繰り返す』の書き方としては、『`for( ;; ) { }`』の形で統一しています。<br>
<br>
他に 『`while( true ) { }`』や 『`while( 1 == 1 ) { }`』がありますが、繰り返し構文は『`for`』で統一したいという『個人的コダワリ』がありまして、本サイトでは『`for( ;; ) { }`』を多用しています。<br><br>TypeScratcherでは制限はありませんので、お好きなやり方でＯＫです。
:::

::: tip 『`繰り返しの最後`』
TypeScratcherは、繰り返し構文のとき『`次のフレームになるまで一時停止`』します。<br>
30FPS（1秒間に30フレーム)の場合、登場キャラクターの変化を 1秒間に30回描画し直すわけですが、フレームとフレームの間で『`一時停止`』する仕様になっています。<br>
<br>
この『`一時停止`』がない繰り返し構文はフレームの切り替えに関係なく超高速動作をし、たいていの場合はブラウザハングを引き起こします。<br>
ブラウザハングを予防するため、TypeScratcherの繰り返し構文では、TypeScratcherが自動的に『`一時停止`』を発生させています。<br>


:::


