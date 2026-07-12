---
outline: deep
---
# 大きくなったり小さくなったり

::: tip ずっと「大きくして」「小さくして」を繰り返します。
１０回繰り返して大きくして、１０回繰り返して小さくします。
:::

### **`sub/images.ts`***
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// ローカルのassetsフォルダーの中に obake.svg, Basketball 2.png があるとします。
// assetsフォルダーの場所は相対パスで指定しています。
import ObakeSvg from './assets/obake.svg';
import BasketballPng from './assets/Basketball 2.png';

export const ObakeImage = new Ts.Image( {ObakeSvg} );
export const BasketballImage = new Ts.Image({BasketballPng});

```
### **`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { ObakeImage, BasketballImage } from './sub/images';

// 【スプライト】(おばけ)
const obake = new Ts.Sprite('obake');
// おばけ画像をスプライトへ追加
obake.Costume.add( [ObakeImage] ); 

// 【ステージ】(BlueSky)
const stage = new Ts.Stage();
stage.Backdrop.add( [BasketballImage] );

// 旗が押されたときの『obake』のスレッド
obake.Event.flagPresser().func = async function*(this: Sprite) {
    // 初期位置 ( 中央 )
    this.Motion.position.xy = [0, 0];
    // 初期の大きさ ( 100% )
    this.Looks.size.scale = [100, 100];

    // ずっと繰り返す
    for(;;){
        // 10回繰り返す(横に大きくする)
        for(const _ of Ts.Loop.Iterator(10)) {
            this.Looks.size.w += 5;
            //console.log('w + 5 ', this.Looks.size.scale)
            yield;
        }
        // 10回繰り返す(縦に大きくする)
        for(const _ of Ts.Loop.Iterator(10)) {
            this.Looks.size.h += 5;
            //console.log('h + 5 ', this.Looks.size.scale)
            yield;
        }
        // 10回繰り返す(横に小さくする)
        for(const _ of Ts.Loop.Iterator(10)) {
            this.Looks.size.w -= 5;
            //console.log('w - 5 ', this.Looks.size.scale)
            yield;
        }
        // 10回繰り返す(縦に小さくする)
        for(const _ of Ts.Loop.Iterator(10)) {
            this.Looks.size.h -= 5;
            //console.log('h - 5 ', this.Looks.size.scale)
            yield;
        }
        yield;
    }
}


// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`Ts.Loop.Iterator(10)`』は、[0,1,2,3,4,5,6,7,8,9]のイテレータ(繰り返し)を返します。<br>
<br>
『`for( const _ of Ts.Loop.Iterator(10)){  }`』は、10回の繰り返しを意味します。<br>
<br>
『`for( const _ of `』の 『`_`』(アンダーバー)は、未使用だけど気にしないでね！の意味です。<br>
<br>
次のように 0,1,2,3,4,5,6,7,8,9 の値が順番に入る idx を使う場合もあります。<br>
<br>
『`for( const idx of Ts.Loop.Iterator(10)){ // idx を使う }`』<br>
<br>
今回は、0,1,2,3,4,5,6,7,8,9 の値を必要とせず、「１０回繰り返す」だけでよいので、『`_`』としています。
<br>
:::

### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/001/"
/>

::: warning 大きさの変化の方向
Scratch3本家では、大きさを変えるとき縦横が同じく変化しますが、`TypeScratcher`では、縦方向のみ、横方向のみ、と大きさを変化させることができます。<br>
<br>
ここでは試していませんが、大きさをマイナス値にすると、向きが反転します。<br>例えば横方向を -100 とすると、左右反転する効果を得られます。

:::

---
<br>
