---
outline: deep
---
# 音の効果（音量・ピッチ）

::: tip 音の効果（音量・ピッチ）
音量を変更したり、ピッチ（音の高さ）を変更したりしてみましょう。
:::

### 動作例 【タブレット非推奨】
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/008/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
(1) スペースキーを押すと『Chill』が鳴り始めます<br>
(2) Ｄキーを押すと、音量が５下がります（下限０）<br>
(3) Ａキーを押すと、音量が５上がります（上限１００）<br>
(4) Ｗキーを押すと、ピッチが５上がります（上限３６０）<br>
(5) Ｘキーを押すと、ピッチが５下がります（下限－３６０）<br>
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
### **sub/sounds.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【音読み込み】
import ChillWav from './assets/Chill.wav';

/* CHILL SOUND */
export const ChillSound = new Ts.Sound({ChillWav});

```


### **index.ts**
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
音が鳴っている最終に、音量、ピッチを変更しています。
『`this.Sound.addVolume(ChillSound, 5);`』 →音量を5だけUPします（マイナス値にするとDOWNします）
『`this.Sound.addPitch(ChillSound, 5);`』 →ピッチを5だけUPします（マイナス値にするとDOWNします）
:::



<br>
