---
outline: deep
---


# 課題：クローンを作る

::: tip クローンと大きさの設定
スプライトのクローンを作り、クローンされたとき、クローンの大きさを変えてみましょう。
:::

### **`index.ts`**

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from "./sub/images";

// スプライト作成(ネコ)
const cat = new Ts.Sprite( "catA" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 【旗クリックされたとき】( ネコ )
catA.Event.flagPresser().func = async function*(this: Sprite) {
    // ずっと繰り返す
    for(;;){
        // 1秒ごとにクローンを作る
        await this.Control.wait(1);
        this.Control.clone();
        yield;
    }
}
// ネコがクローンされたときのクローンのスレッド
cat.Event.cloned().func = async function*(this:Sprite) {
    // Looks.size.scale　へ 大きさの配列を設定
    this.Looks.size.scale = [20, 20]; // 横・縦 20% にする
    this.Motion.direction.degree = Ts.Utils.randomValue(0, 360);
    // ずっと繰り返す
    for(;;) {
        this.Motion.move.steps(10);
        // Sensing.edge.isTouching は「端に触れた」ときにTrueを返す
        if(this.Sensing.edge.isTouching){
            // break で繰り返しループを抜ける
            break;
        }
        yield;
    }
    // クローンを削除する
    this.Control.removeClone();
}

// 開始
Ts.engine.start();
```

::: tip 『クローン』を作る
『`this.Control.clone()`』を実行すると、クローンが作成されます。<br>
クローンは本体のプロパティ（位置、大きさ、表示非表示、画像効果、など）を全て引き継ぎますので、本体と異なるプロパティにするならばクローン側で変更する必要があります。<br>
<br>
`cat.Event.cloned().func = async function*(this:Sprite) {  
    // クローンのコード
}`
<br>
にて、クローンのスレッドを作り出します。<br>
<br>
クローンを消したいときは 『`this.Control.removeClone()`』で削除します。
<br>
<br>
『繰り返し構文』のなかで、途中で繰り返しから抜け出したい場合は、『`break`』文を使います。

:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、１秒ごとにクローンを作成し（大きさ２０％にする）、クローンはランダムな方向へ「端に触れるまで」走り出します。<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/008/"
/>
