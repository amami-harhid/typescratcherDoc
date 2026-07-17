---
outline: deep
---


# 例題：フキダシを表示

::: tip フキダシ
フキダシを使って、なにかを言わせましょう。<br>
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、左右のネコが挨拶を交わします。<br>
スプライト座標は Scratch3の座標と同じ設定値です。<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/007/"
/>

---

### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, CatBImage, BlueskyImage } from "./sub/images";

// スプライト作成(左のネコ)
const catA = new Ts.Sprite( "catA" );
catA.Costume.add( [ CatAImage ] ); // イメージを追加
catA.Motion.position.xy = [-100, -100]; // 座標の位置[X座標、Y座標]

// スプライト作成(右のネコ)
const catB = new Ts.Sprite( "catB" );
catB.Costume.add( [ CatBImage ] ); // イメージを追加
catB.Motion.position.xy = [ 100, -100]; // 座標の位置[X座標、Y座標]
catB.Looks.size.w = -100;  // 幅をマイナスとすることで 反対に向く

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 【旗クリックされたとき】( 左のネコ )
catA.Event.flagPresser().func = async function*(this: Sprite) {
    this.Looks.bubble.say('やあ、こんにちは');
    await this.Control.wait(4); // 4秒間待つ
    this.Looks.bubble.say(''); // 空 ( ふきだしを消す )

}
// 【旗クリックされたとき】( 右のネコ )
catB.Event.flagPresser().func = async function*(this: Sprite) {
    await this.Control.wait(2); // 2秒間待つ
    this.Looks.bubble.think('こんにちは');
    await this.Control.wait(2); // 2秒間待つ
    this.Looks.bubble.say(''); // 空 ( ふきだしを消す )
}

// 開始
Ts.engine.start();
```

::: tip 『言う』『考える』
２匹(catA, catB)のスプライト別に『旗をクリックされたとき』に動くスレッドを用意します。<br>
<br>
『`Looks.buble.say('〇〇〇')`』『`Looks.buble.think('〇〇〇')`』を順番にタイミングをずらしながら実行することで、会話をしているように見せます。<br>
<br>
『`Looks.buble.say('')`』または『`Looks.buble.think('')`』と「空」の文字を渡すと、フキダシが消えます。<br>
<br>
TypeScratcherは『〇秒間、言う』『〇秒間、考える』メソッドも用意しています（別で解説します）。
:::


<br>

