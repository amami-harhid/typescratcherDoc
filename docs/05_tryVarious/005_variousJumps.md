---
outline: deep
---
# いろいろなジャンプ

::: tip いろいろなジャンプ
等速ジャンプと放物風ジャンプを試してみましょう。
:::

### 動作例 【タブレット非推奨】

TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/005/"
/>

::: tip 線とスタンプ
緑の旗を押すと、『犬』が左右に動きます。<br>
キー『A』を押すと、『等速ジャンプ』をします。<br>
キー『B』を押すと、『放物風ジャンプ』をします。<br>
:::

---

### **sub/images.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像読み込み】
import dogPng from './assets/front_01.svg';
import WaterSvg from './assets/water.svg';

/* 犬 */
export const DogImage = new Ts.Image( {dogPng} );
/* 水中 */
export const WaterImage = new Ts.Image({WaterSvg});

```
### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { DogImage, WaterImage } from './sub/images';

// 【スプライト】(犬)
const dog = new Ts.Sprite('shark');
// 画像をスプライトへ追加
dog.Costume.add( [DogImage] );
// 大きさを設定
dog.Looks.size.scale = [30, 30];
// 位置座標を設定
dog.Motion.position.xy = [ 0, -130 ];


// 【ステージ】
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] ); // 背景を追加

// 変数
const method = Ts.Variable.string(''); 
Ts.Variable.monitoring({'ジャンプ': method});
method.hide(); // 隠す


// 旗が押されたとき
dog.Event.flagPresser().func = async function*(this: Sprite) {

    this.Motion.position.xy = [ 0, -130 ];
    this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT; // 左右のみ反転

    // ずっと繰り返す
    for(;;){        
        // 進める
        this.Motion.move.steps(10);
        // 端についたら跳ね返る
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}
// A キーが押されたとき(等速ジャンプ)
dog.Event.keyPresser('a').func = async function*(this:Sprite) {
    method.text = '等速';
    method.show();
    const JUMP = 10;
    for(const _ of Ts.Loop.Iterator(10)) {
        this.Motion.position.y += JUMP;
        yield;
    }
    for(const _ of Ts.Loop.Iterator(10)) {
        this.Motion.position.y -= JUMP;
        yield;
    }
    method.hide();
    method.text = '';
}
// B キーが押されたとき(放物風ジャンプ)
dog.Event.keyPresser('b').func = async function*(this:Sprite) {
    method.text = '放物風';
    method.show();
    const INIT_JUMP = 30;
    const GRAVITY = 4;
    let speed = INIT_JUMP;

    for(;;) {
        this.Motion.position.y += speed;
        speed -= GRAVITY;
        if(this.Motion.position.y < -130) {
            break;
        }
        yield;
    }
    this.Motion.position.y = -130;
    method.hide();
    method.text = '';
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Motion.rotation.style`』は『回転方法』の指定です。<br>
『`Ts.Rotation.LEFT_RIGHT`』は『左右方向のみ』を意味します<br>
<br>
『`this.Motion.position.y`』は、スプライトのY座標です。<br>
<br>
『`dog.Event.keyPresser(キーボードキー).func`』を使って、指定したキーボードキーが押されたときに動き出すスレッドを定義します。<br>
<br>
『矢印キー』や『スペースキー』を指定したい場合は『Ts.Keybord』を使います。<br>
<br>
『`Ts.Keybord.Space`』 は、スペースキー<br>
『`Ts.Keybord.LEFT`』 は、左矢印キー<br>
『`Ts.Keybord.RIGHT`』 は、右矢印キー<br>
『`Ts.Keybord.UP`』 は、上矢印キー<br>
『`Ts.Keybord.DOWN`』 は、下矢印キー<br>
:::



<br>
