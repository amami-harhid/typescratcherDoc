---
outline: deep
---
# マウスが触れた 

::: tip マウスが触れた
マウスが触れたときに、何かをしてみよう。
:::

### 動作例 【タブレット非推奨】

TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/010/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
マウスポインターがスクラッチネコに触れている間、スクラッチネコの画像効果（色）が変化します。
<br>
:::

---

### **sub/images.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像読み込み】
import catSvg from './assets/cat.svg';
import WaterSvg from './assets/water.svg';

/* ネコ */
export const CatImage = new Ts.Image( {catSvg} );
/* 水中 */
export const WaterImage = new Ts.Image( {WaterSvg} );

```


### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { CatImage, WaterImage } from './sub/images';

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// 大きさの設定
cat.Looks.size.scale = [250, 250];

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const touch = Ts.Variable.string( '' ); // タッチ
Ts.Variable.monitoring( { touch } );

// 旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    this.Looks.size.scale = [250, 250];
    touch.text = ''; // 変数の値を初期化
};

// 旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    /** 色の変化量 */
    const changeColor = 15;
    for(;;) {
        if( this.Sensing.mouse.isTouching ) {
            // マウスが触れたとき
            this.Looks.effect.change(Ts.ImageEffective.COLOR, changeColor); // 色の効果を変える
            touch.text = '触れた';

        }else{

            touch.text = '';
        }
        yield;
    }
};

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Sensing.mouse.isTouching`』 は、マウスポインターに触れているか否かの論理値を返します。
:::



<br>
