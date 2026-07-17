---
outline: deep
---
# テキストを画像に

::: tip テキストを画像にする
テキストをスプライトとして表示してみよう。
:::

### 動作例

TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/012/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
「Ohoo my typescratcher」をイメージ化して、スプライトのコスチュームとして使用しています。<br>
<br>
文字をスプライトとしている証拠として、文字が端に触れたら跳ね返えらせています。
:::

---

### **sub/images.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像読み込み】
import BluSkySvg from './assets/Blue Sky.svg';
export const BlueSkyImage = new Ts.Image({BluSkySvg});

```

### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { BlueSkyImage } from './sub/images';

// 【ステージ】(BlueSkyImage)
const stage = new Ts.Stage();
stage.Backdrop.add( [BlueSkyImage] );

// 文字列イメージ化
const HELLO = 'Ohoo my typescratcher';
const attribute : SvgImageAttributes = {
    fill: '#f00000', // 文字色
    font_family: Ts.ScratchFontFamily.Scratch
};
const helloImage = new Ts.FontImage(attribute);
await helloImage.textToSvg(HELLO);

// 文字スプライトを作成
const moji = new Ts.Sprite('moji');
moji.Costume.add( [helloImage] );
moji.Looks.size.scale = [50,50];

// 旗が押されたときの「文字」のスレッド
moji.Event.flagPresser().func = async function*(this: Sprite) {
    // 中心座標
    this.Motion.position.xy = [0, 0];
    // 右90度
    this.Motion.direction.degree = 90;
    // 回転方法は自由に回転
    this.Motion.rotation.style = Ts.Rotation.ALL_AROUND;
    // ずっと繰り返す
    for(;;) {
        // 向いている方向へ進む
        this.Motion.move.steps(2);
        // 向きを変える
        this.Motion.direction.degree += 1;
        // もし端に触れたら跳ね返る
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }   
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
文字列イメージ化<br>
『`new Ts.FontImage(attribute)`』<br>
これはイメージ作成をする`new Ts.Image({イメージ変数})` の拡張版であり、<br>
『`await helloImage.textToSvg(HELLO)`』<br>
のように文字列を与えることができます。
<br>
出来上がったイメージを スプライトのコスチュームとして使うことができます。
:::



<br>
