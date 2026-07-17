---
outline: deep
---
# 画像効果を変化させてみよう

::: tip ずっと「大きくして」「小さくして」を繰り返します。
１０回繰り返して大きくして、１０回繰り返して小さくします。
:::

### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/002/"
/>


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
// さめ画像をスプライトへ追加
shark.Costume.add( [SharkImage] ); 

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 旗が押されたときの『shark』のスレッド
shark.Event.flagPresser().func = async function*(this: Sprite) {
    // 初期位置 ( 中央 )
    this.Motion.position.xy = [0, 0];
    // 初期の大きさ ( 100% )
    this.Looks.size.scale = [100, 100];
    // 画像効果初期化
    this.Looks.effect.clear();
    // 少しまつ
    await this.Control.wait(1);

    // ずっと繰り返す
    for(;;){
        // 50回繰り返す
        this.Looks.bubble.say('色の効果を変えるよ')
        for(const _ of Ts.Loop.Iterator(50)) {
            this.Looks.effect.change(Ts.ImageEffective.COLOR, +25);
            yield;
        }
        this.Looks.bubble.say('');
        // 画像効果クリア
        this.Looks.effect.clear();
        // 少しまつ
        await this.Control.wait(1);

        // 50回繰り返す
        this.Looks.bubble.say('魚眼レンズの効果を変えるよ')
        for(const _ of Ts.Loop.Iterator(50)) {
            this.Looks.effect.change(Ts.ImageEffective.FISHEYE, +25);
            yield;
        }
        this.Looks.bubble.say('');
        // 画像効果クリア
        this.Looks.effect.clear();
        // 少しまつ
        await this.Control.wait(1);

        // 50回繰り返す
        this.Looks.bubble.say('モザイクの効果を変えるよ')
        for(const _ of Ts.Loop.Iterator(50)) {
            this.Looks.effect.change(Ts.ImageEffective.MOSAIC, +5);
            yield;
        }
        this.Looks.bubble.say('');
        // 画像効果クリア
        this.Looks.effect.clear();
        // 少しまつ
        await this.Control.wait(1);

        // 50回繰り返す
        this.Looks.bubble.say('ピクセルの効果を変えるよ')
        for(const _ of Ts.Loop.Iterator(50)) {
            this.Looks.effect.change(Ts.ImageEffective.PIXELATE, +5);
            yield;
        }
        this.Looks.bubble.say('');
        // 画像効果クリア
        this.Looks.effect.clear();
        // 少しまつ
        await this.Control.wait(1);

        // 50回繰り返す
        this.Looks.bubble.say('幽霊の効果を変えるよ')
        for(const _ of Ts.Loop.Iterator(50)) {
            this.Looks.effect.change(Ts.ImageEffective.GHOST, +2);
            yield;
        }
        this.Looks.bubble.say('');
        // 画像効果クリア
        this.Looks.effect.clear();
        // 少しまつ
        await this.Control.wait(1);

        yield;
    }
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`Ts.ImageEffective`』は、『画像効果の種類』です。<br>
<br>
『画像効果の種類』には、<br>`COLOR`(色), <br>`FISHEYE`(魚眼レンズ), <br>`MOSAIC`(モザイク), <br>`PIXELATE`(ピクセル), <br>`GHOST`(幽霊の効果)<br><br>
があり、画像効果の設定や変更のときに使います。<br>
<br>
『`this.Looks.effect.clear()`』をすると、画像効果が消えます<br>
<br>
『`this.Looks.effect.set( 画像効果の種類、数値)`』で、画像効果を設定します。<br>
<br>
『`this.Looks.effect.change( 画像効果の種類、数値)`』で、画像効果を加算します。<br>

:::

<br>
