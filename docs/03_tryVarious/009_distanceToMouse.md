---
outline: deep
---
# マウスとの距離

::: tip マウスとの距離
マウスを近づけたとき、何かをしてみよう。
:::

### 動作例 【タブレット非推奨】

TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/009/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
変数「distance」がスプライト中心座標からのマウス座標距離です。<br>
スプライトを囲む矩形の上下・左右の辺のいずれかに接する円を想定し、円の半径が変数「radius」です。<br>
変数「distance」< 変数「radius」の場合、画像効果が発生することを観察してください。
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
export const WaterImage = new Ts.Image({WaterSvg});

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
const distance = Ts.Variable.number( 100 ); //距離
Ts.Variable.monitoring( { distance } );
const radius = Ts.Variable.number( 0 ); // 半径
Ts.Variable.monitoring( { radius } );
const ghost = Ts.Variable.number( 0 ); // 幽霊効果の値
Ts.Variable.monitoring( { ghost } );
const pixelate = Ts.Variable.number( 0 ); // ピクセル効果の値
Ts.Variable.monitoring( { pixelate } )

// 緑の旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    this.Looks.size.scale = [250, 250];
    // スプライトを囲む矩形の情報を取り出す
    const bounds = this.Looks.size.drawingSize;
    //スプライトを囲む矩形の上下・左右の辺のいずれかに接する円を
    // 想定し、円の半径を計算しておく（距離の閾値値として）
    radius.value = Math.floor(Math.max( bounds.width / 2, bounds.height / 2 )); // 上下・左右の大きい方を採用
};

// 緑の旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    // スプライト中心座標とマウス座標の間の距離を取得する。
    // 距離を元にスプライトを囲む「円」にマウスポインターが入ったか
    // を計算し、円に入っているときは画像効果（幽霊効果・ピクセル効果）
    // を変化させる。
    for(;;) {
        const _distance = this.Sensing.mouse.distance;
        distance.value = Math.floor(_distance);
        if(distance.value < radius.value) {
            const _ghost = (1 - distance.value/radius.value)*100;
            ghost.value = Math.floor(_ghost); 
            const _pixelate = (1 - distance.value/radius.value)*100;
            pixelate.value = Math.floor( _pixelate );
            this.Looks.effect.set(Ts.ImageEffective.GHOST, ghost.value);
            this.Looks.effect.set(Ts.ImageEffective.PIXELATE, pixelate.value);
        }else{
            this.Looks.effect.clear();
        }
        yield;
    }
};


// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Sensing.mouse.distance`』<br>
スプライト中心座標とマウス座標の間の距離を計算して返します。<br>
<br>
『`this.Looks.size.drawingSize`』<br>
次のプロパティをもつ、「スプライト矩形」を返します。<br>
(1) left: 左辺のX座標値(Scratch座標)<br>
(2) right: 右辺のX座標値(Scratch座標)<br>
(3) top: 上辺のY座標値(Scratch座標)<br>
(4) bottom: 下辺のY座標値(Scratch座標)<br>
(5) width: 幅<br>
(6) height: 高さ<br>
:::



<br>
