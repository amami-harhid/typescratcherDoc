---
outline: deep
---
# 色に触れたとき

::: tip ペンとスタンプ
指定した色に触れたとき、の判定をさせてみましょう。
:::


### 動作例 【タブレット非推奨】

TypeScratcherロゴをクリックすると表示を始めます。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/004/"
/>

::: tip 線とスタンプ
緑の旗を押すと、『サメ』が『マウスの方向へ進む』動作をします。<br>
『サメ』『雲の色』(白) 、『道路の色』(薄いオレンジ)に触れたら、左上の変数表示『Touching』が変化します。<br>
:::

---

### **sub/images.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像読み込み】
import sharkPng from '@Assets/shark.png';
const ColorfulCityPng = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/04d18ddd1b85f0ea30beb14b8da49f60.png/get';

/** サメ **/
const SharkImage = new Ts.Image( {sharkPng} );
/** カラフルな街 **/
const ColorfulCityImage = new Ts.Image({ColorfulCityPng});

```
### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { SharkImage, ColorfulCityImage } from './sub/images';

// 【スプライト】(さめ)
const shark = new Ts.Sprite('shark');
// サメイメージをスプライトへ追加
shark.Costume.add( [SharkImage] );
// サメの大きさを 10%にする
shark.Looks.size.scale = [10, 10];
shark.Looks.size.scale.w *= -1; // サメの横の向きを反転させる( マイナスを掛けている )

// 【ステージ】
const stage = new Ts.Stage();
stage.Backdrop.add( [ColorfulCityImage] ); // 背景を追加

// 変数（文字列の変数を用意）
const Touching = Ts.Variable.string('');
Ts.Variable.monitoring({Touching}); // モニター監視対象


// 旗が押されたとき（マウスの方向へ移動させる）
shark.Event.flagPresser().func = async function*(this: Sprite) {

    this.Motion.position.xy = [ 0, 0 ];
    // ずっと繰り返す
    for(;;){
        // マウスに向ける
        this.Motion.point.toMouse();
        // 進める
        this.Motion.move.steps(5);
        yield;
    }
}

// 旗が押されたとき( )
shark.Event.flagPresser().func = async function*(this: Sprite) {

    // ずっと繰り返す
    for(;;){
        if(this.Sensing.color.isTouching('#ffffff')) {
            Touching.text = '雲の色に触れた';
        }else if(this.Sensing.color.isTouching('#FFED9C')) {
            Touching.text = '道路の色に触れた';
        }else{
            Touching.text = '';
        }

        yield;
    }
}
// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Sensing.color.isTouching('#ffffff')`』は、『色に触れているか』を意味します。<br>
色は 16進数のRGB指定で表現します。
<br>
ブラウザCHROMEでは、プラグイン「ColorZilla」で色をピックできます。

:::

::: tip 『Ts.Variable』
『`Ts.Variable`』を使って変数を定義することができます。<br>
この変数は ステージの上に表示することができます。
:::

### ColorZilla
---
<video controls>
    <source src="/colorZilla.mp4"/>
</video>

---
<br>
