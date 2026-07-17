---
outline: deep
---
# 質問する

::: tip 質問する
スプライトが質問して応答を待つ、ステージが質問して応答を待つ、を試してみましょう。
:::

### 動作例 【タブレット非推奨】

TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/007/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
(1) スペースキーを押すと『ねこ』が質問します。<br>
(2) Ａキーを押すと、『ステージ』が質問をします。<br>
(3) 答えが「はい」「いいえ」以外の場合は、再度の質問をします。<br>
(4) 答えが「はい」「いいえ」の場合、スレッドはすべて終了します。<br>
(5) 再開するときは「緑の旗」を押してください。<br>
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

// ステージの幅
const StageWidth = Ts.StageBounds.w;
const StageHeight = Ts.StageBounds.h;

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const answer = Ts.Variable.string(''); 
Ts.Variable.monitoring({'答え': answer});
answer.hide(); // 隠す

/** 質問中のフラグ */
let askingNow = false;
// 旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    answer.hide(); // 変数(answer)を隠す
    askingNow = false;
    this.Motion.position.xy = [ 0, 0 ];

};
/** スプライト（ねこ）に質問をさせるメッセージ */
const ASKING = 'ASKING';
// スペースキーが押されたときの「ねこ」のスレッド
cat.Event.keyPresser(Ts.Keyboard.SPACE).func = async function*(this:Sprite) {
    if(askingNow === true)
        return;
    // 質問処理中でないときメッセージ（ASKING）を送る
    this.Broadcast.send(ASKING);
}
// メッセージ「ASKING」を受け取ったときの「ネコ」のスレッド
cat.Broadcast.receiver(ASKING).func = async function*(this:Sprite) {
    askingNow = true;
    // 質問をして応答を待つ
    // 応答が返ったとき変数(answer)に答えを入れる
    answer.text = await this.Sensing.askAndWait('今日はご機嫌よろしいですか？');
    answer.show();

    if(answer.text == 'はい') {
        this.Looks.bubble.say('YES');   // フキダシ（言う）

    }else if(answer.text == 'いいえ') {
        this.Looks.bubble.think('no....'); // フキダシ（考える）

    }else{
        // 答えが「はい」「いいえ」でない場合
        this.Looks.bubble.say(''); // フキダシを消す
        askingNow = false;
        // 彩度、質問をするため、メッセージを送る
        this.Broadcast.send(ASKING);
    }
}
/** メッセージＩＤ(ステージに質問させる) */
const ASKING_STAGE = "ASKING_STAGE";
// キー「Ａ」が押されたときの「ステージ」のスレッド
stage.Event.keyPresser('A').func = async function*(this:Stage) {
    if(askingNow === false){
        askingNow = true;
        // メッセージを送り、終わるまで待つ
        await this.Broadcast.sendAndWait(ASKING_STAGE);
        askingNow = false;
    }

}
// メッセージ「ASKING_STAGE」を受け取ったときの「ステージ」のスレッド
stage.Broadcast.receiver(ASKING_STAGE).func = async function*(this:Sprite) {
    answer.hide();

    // 質問をして応答を待つ
    // 応答が返ったとき変数(answer)に答えを入れる
    answer.text = await this.Sensing.askAndWait('ステージだよ。「はい」か「いいえ」で答えて')
    answer.show();
    if(answer.text == 'はい' || answer.text == 'いいえ'){
        return;
    }
    // 答えが「はい」「いいえ」でない場合
    // 彩度、質問をするためのメッセージを送る
    this.Broadcast.send(ASKING_STAGE);
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`await this.Sensing.askAndWait('今日はご機嫌よろしいですか？')`』: 質問をして答えが返るのを待ちます。<br>
スプライトから質問をすると、フキダシで質問文を表示します。<br>
ステージから質問すると、質問欄の上部に質問文を表示します。
:::



<br>
