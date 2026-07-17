---
outline: deep
---
# ペンを引いたりスタンプしたり

::: tip ペンとスタンプ
ランダムな場所へスプライトを移動させながら、ペンで線を引いてみましょう。
そして、スタンプを押してみましょう。
:::
### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/003/"
/>

::: tip 線とスタンプ
緑の旗を押すと、『サメ』が『どこかへ行く』動作をします（ランダムな場所へ移動）。<br>
移動しながら、ペンで線を引きます。<br>
ペンの太さや色がジョジョに変化していきます。<br>
<br>
ペンを引き終えたら、スタンプを押し始めます。
:::

---


### **sub/images.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// ローカルのassetsフォルダーの中に shark.png, water.svg があるとします。
// assetsフォルダーの場所は相対パスで指定しています。
// 【画像読み込み】
import sharkPng from './assets/shark.png';
import WaterSvg from './assets/water.svg';

/** サメ **/
export const SharkImage = new Ts.Image( {sharkPng} );
/** 水中 **/
export const WaterImage = new Ts.Image({WaterSvg});

```
### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { SharkImage, WaterImage } from './sub/images';

// 【スプライト】(さめ)
const shark = new Ts.Sprite('shark');
// サメイメージをスプライトへ追加
shark.Costume.add( [SharkImage] );
// サメの大きさを 30%にする
shark.Looks.size.scale = [30, 30];

// 【ステージ】(water)
const stage = new Ts.Stage();
// 水中のイメージをスプライトへ追加
stage.Backdrop.add( [WaterImage] );

// 旗が押されたときの『shark』のスレッド
shark.Event.flagPresser().func = async function*(this: Sprite) {
    // 初期位置 ( 中央 )
    this.Motion.position.xy = [0, 0];
    // 初期の大きさ ( 30% )
    this.Looks.size.scale = [30, 30];
    // 画像効果初期化
    this.Looks.effect.clear();
    // 少しまつ
    await this.Control.wait(1);

    // ペンを準備する(クリア)
    this.Pen.penClear();

    // ずっと繰り返す
    for(;;){

        // 20回繰り返す
        this.Looks.bubble.say('ペンをひく');
        this.Pen.HSVColor.hue = 0; // 色相 [0 - 360]
        //this.Pen.HSVColor.saturation = 0;
        this.Pen.HSVColor.transparency = 0; // 透明度
        this.Pen.penDown();
        for(const _ of Ts.Loop.Iterator(20)) {
            this.Looks.effect.change(Ts.ImageEffective.COLOR, +25);

            // どこかに行く
            this.Motion.move.toRandom();

            // ペン太さを太くしていく
            this.Pen.size.thickness += 1;

            // ペンの色を変える
            this.Pen.HSVColor.hue += 15; // 色相 [0 - 360]
            this.Pen.HSVColor.transparency += 10; // 透明度
            // すこし待つ
            await this.Control.wait(0.5);

            yield;
        }
        this.Pen.penUp();
        this.Pen.penClear();

        // 20回繰り返す
        this.Looks.bubble.say('スタンプ')
        for(const _ of Ts.Loop.Iterator(20)) {
            this.Looks.effect.change(Ts.ImageEffective.COLOR, +25);

            // どこかに行く
            this.Motion.move.toRandom();

            // スタンプする
            this.Pen.stamp();

            // すこし待つ
            await this.Control.wait(0.5);

            yield;
        }
        // ペンをクリアする
        this.Pen.penClear();
        yield;
    }
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Pen`』は、『Pen機能』を意味します。『Pen機能』はスプライトでしか使えません。<br>
<br>
『色』の設定は `Pen.HSVColor`で与えます。<br><br>
`this.Pen.HSVColor.hue` は色相で 範囲は[0 - 360]です。<br>
`this.Pen.HSVColor.saturation` は彩度です。<br>
`this.Pen.HSVColor.brightness` は明度です。<br>
`this.Pen.HSVColor.transparency` は 透明度です<br>
<br>
『Penの太さ』は、`Pen.size.thickness` で与えます。<br>
<br>
『スタンプ』は、`Pen.stamp()`でとることができます。

:::

<br>
