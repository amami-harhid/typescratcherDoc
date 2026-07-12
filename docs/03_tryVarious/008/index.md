---
outline: deep
---
# 音の効果（音量・ピッチ）

::: tip 音の効果（音量・ピッチ）
音量を変更したり、ピッチ（音の高さ）を変更したりしてみましょう。
:::

### **`sub/images.ts`***
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
### **`sub/sounds.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【音読み込み】
import ChillWav from './assets/Chill.wav';

/* CHILL SOUND */
export const ChillSound = new Ts.Sound({ChillWav});

```


### **`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージを取り込む
import { CatImage, WaterImage } from './sub/images';

// サウンドを取り込む
import { ChillSound } from './sub/sounds';

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// サウンドをスプライトへ追加
cat.Sound.add([ ChillSound ]);

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

/** 変数：音量 */
const volume = Ts.Variable.number( 100 ); 
Ts.Variable.monitoring( { volume } );
/** 変数：ピッチ */
const pitch = Ts.Variable.number( 0 );
Ts.Variable.monitoring( { pitch } );

// 緑の旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    // ずっと繰り返し音を鳴らす
    for(;;) {
        await this.Sound.playUntilDone(ChillSound);
        yield;
    }
};

// キー「A」を押されたときの「ねこ」のスレッド
cat.Event.keyPresser( 'a' ).func = async function*(this:Sprite) {
    // ボリュームを あげる
    this.Sound.addVolume(ChillSound, +5);
    volume.value = this.Sound.getVolume(ChillSound);
}
// キー「D」を押されたときの「ねこ」のスレッド
cat.Event.keyPresser( 'd' ).func = async function*(this:Sprite) {
    // ボリュームを さげる
    this.Sound.addVolume(ChillSound, -5);
    volume.value = this.Sound.getVolume(ChillSound);
}
// キー「W」を押されたときの「ねこ」のスレッド
cat.Event.keyPresser( 'w' ).func = async function*(this:Sprite) {
    // ピッチを あげる
    this.Sound.addPitch(ChillSound, +5);
    pitch.value = this.Sound.getPitch(ChillSound);
}
// キー「X」を押されたときの「ねこ」のスレッド
cat.Event.keyPresser( 'x' ).func = async function*(this:Sprite) {
    // ピッチを さげる
    this.Sound.addPitch(ChillSound, -5);
    pitch.value = this.Sound.getPitch(ChillSound);
}

// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`await this.Sensing.askAndWait('今日はご機嫌よろしいですか？')`』: 質問をして答えが返るのを待ちます。<br>
スプライトから質問をすると、フキダシで質問文を表示します。<br>
ステージから質問すると、質問欄の上部に質問文を表示します。
:::


### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/008/"
/>

::: tip メッセージ
緑を旗を押して開始します。<br>
<br>
(1) スペースキーを押すと『ねこ』が質問します。<br>
(2) Ａキーを押すと、『ステージ』が質問をします。<br>
(3) 答えが「はい」「いいえ」以外の場合は、再度の質問をします。<br>
(4) 答えが「はい」「いいえ」の場合、スレッドはすべて終了します。<br>
(5) 再開するときは「緑の旗」を押してください。<br>
<br>
:::

---
<br>
