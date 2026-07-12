---
outline: deep
---
# メッセージ送受信

::: tip メッセージ
メッセージを送信し、受信したときのスレッドを定義してみましょう。
:::

### **`sub/images.ts`***
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像読み込み】
import dogPng from './assets/front_01.svg';
import blockSvg from './assets/block.svg';
import WaterSvg from './assets/water.svg';

/* 犬 */
export const DogImage = new Ts.Image( {dogPng} );
/* ブロック */
export const BlockImage = new Ts.Image({blockSvg});
/* 水中 */
export const WaterImage = new Ts.Image({WaterSvg});

```
### **`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { DogImage, BlockImage, WaterImage } from './sub/images';

// ステージの幅
const StageWidth = Ts.StageBounds.w;
const StageHeight = Ts.StageBounds.h;

// 【スプライト】(犬)
const dog = new Ts.Sprite('shark');
// 画像をスプライトへ追加
dog.Costume.add( [DogImage] );
// 大きさを設定
dog.Looks.size.scale = [30, 30];
// 位置座標を設定
dog.Motion.position.xy = [ 0, -130 ];

// 【スプライト】(ブロック)
const block = new Ts.Sprite('block');
// 画像をスプライトへ追加
block.Costume.add( [ BlockImage ] );
// 非表示にする
block.Looks.hide();
// 半透明にする
block.Looks.effect.set(Ts.ImageEffective.GHOST, 50);

// 【ステージ】
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] ); // 背景を追加

// 変数
const method = Ts.Variable.string(''); 
Ts.Variable.monitoring({'ジャンプ': method});
method.hide(); // 隠す

/* 着地フラグ */
let onFloor = false;
/* スピード */
let speed = 0;

// 旗が押されたとき（犬）
dog.Event.flagPresser().func = async function*(this:Sprite){
    this.Motion.position.xy = [ 0, 250 ];
    this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT; // 左右のみ反転
    speed = 0;
    onFloor = false;

};

// 旗が押されたとき（ブロック）
block.Event.flagPresser().func = async function*(this:Sprite){
    this.Motion.position.xy = [0,0];
    const bounds = block.Looks.size.drawingSize;
    this.Looks.size.w = StageWidth;
    const blockY = bounds.height/2 -StageHeight/2
    this.Motion.position.y = blockY;

    this.Looks.show();

    this.Broadcast.send('START', bounds);
};

/** 初期速度 */
const INIT_JUMP = 70;
/** 重力 */
const GRAVITY = 10;
/** 速度 */
let speed = 0;
/** 着地フラグ  */
let onFloor = false; // 着地していない
/**
 * moveSpeed の速さで移動したとき targetに衝突するかを判定する
 */
const isTouching = function(this:Sprite, target:Sprite, moveSpeed: number):boolean {

    // 自分自身の高さ
    const ownHeight = this.Looks.size.drawingSize.height;
    // ターゲットの上辺の座標位置
    const targetUpperY = target.Looks.size.drawingSize.top;
    // 次に予想される自分自身の位置
    const nextY = this.Motion.position.y + moveSpeed;
    // 次に予想される自分自身の底辺の座標位置
    const ownBottomY = nextY - ownHeight / 2;
    if( ownBottomY > targetUpperY ) {
        return false;
    }
    return true;

}

/** 最初の着地 */
let firstTouch = true;
/** 歩く速さ */
let walkSpeed = 0;

// 犬がメッセージ(START)を受信したとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite, blockBound: Bounds) {
    firstTouch = true;
    speed = 0;
    onFloor = false;
    const Bounds = this.Looks.size.drawingSize;
    const DogHeigth = Bounds.height;
    const _IsTouching = isTouching.bind(this);
    this.Pen.penDown(); // 自由落下中ペン描画をする
    // ずっと繰り返す
    for(;;){
        if(_IsTouching(block, speed)){
            firstTouch = false;
            // 次に衝突が予想されるとき
            this.Motion.position.y = blockBound.height - StageHeight/2 + (DogHeigth/2);;
            onFloor = true;
            speed = 0;
        }
        // 自由落下
        if(onFloor === false ) {
            this.Motion.position.y += speed;
            this.Motion.move.steps(walkSpeed);
            speed -= GRAVITY;
            if(firstTouch === false){
            }
        }
        yield;
    }
}

// 犬がメッセージ(START)を受信したとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite) {

    this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT; // 左右のみ反転
    // ずっと繰り返す
    for(;;){
        if( onFloor === true){
            // 進める
            if(this.Sensing.keyboard.isDown(Ts.Keyboard.RIGHT)) {
                this.Motion.direction.degree = 90;
                walkSpeed = 10;
                this.Motion.move.steps(walkSpeed);
            }else if(this.Sensing.keyboard.isDown(Ts.Keyboard.LEFT)) {
                this.Motion.direction.degree = -90;
                walkSpeed = 10;
                this.Motion.move.steps(walkSpeed);
            }else{
                // 地面についていないときはゼロにはならない
                walkSpeed = 0;
            }
            // 端についたら跳ね返る
            this.Motion.move.ifOnEdgeBounce();
        }
        yield;
    }
}

// 犬がメッセージ(START)を受信したとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite) {

    method.text = '放物風';
    method.show();
    for(;;) {
        if(onFloor === true && this.Sensing.keyboard.isDown(Ts.Keyboard.SPACE)){
            speed = INIT_JUMP;
            onFloor = false;
            // スペースキーが押されている間、待つ
            await this.Control.waitWhile(()=>this.Sensing.keyboard.isDown(Ts.Keyboard.SPACE));
        }
        yield;
    }

}
// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Broadcast.send('START', bounds);`』にて　メッセージID『START』を送ります。<br>
(第一引数：メッセージID、第二引数：パラメータ）<br>
<br>
『`dog.Broadcast.receiver("START").func = async function*(this: Sprite, blockBound: Bounds) {  }`』<br>
にて メッセージ『START』を受け取ったときのスレッドを定義します。<br>
<br>
『`function*()`』の第二パラメータで、`send`で付与したパラメータを受け取ります。<br>

:::


### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/006/"
/>

::: tip メッセージ
緑を旗を押すと、ブロックの横幅をステージ横幅に合わせ、ステージの底部に合わせます。<br>
ブロックの配置が終わった後にメッセージを送信し、メッセージを受信したときに次を行います<br>
<br>
(1)『犬』が自由落下しブロックに触れる直前でブロックの上部で落下を止めます。 <br>
(2) 左右の矢印キーで『犬』が左右に動きます。<br>
(3) スペースキーを押すと、『放物風ジャンプ』をします。<br>
<br>
PEN機能を有効にしているので、落下したり、ジャンプする軌跡を線で描きます。
:::

---
<br>
