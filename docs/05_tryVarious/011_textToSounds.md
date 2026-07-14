---
outline: deep
---
# テキストを音声にする

::: tip テキストを音声にする
テキストを音声にしてスピーチさせよう。
:::

### **`sub/images.ts`***
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// デバグモード=Trueのとき
// スプライトを囲む矩形を自動描画する
Ts.Env.debugMode = true;

// 【画像読み込み】
import catSvg from './assets/cat.svg';
import WaterSvg from './assets/water.svg';

/* ネコ */
export const CatImage = new Ts.Image( {catSvg} );
/* 水中 */
export const WaterImage = new Ts.Image({WaterSvg});

```

### **`index.ts`**
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

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数(タッチ)
const speechText = Ts.Variable.string( 'こら、触ったね' ); 
Ts.Variable.monitoring( { text: speechText } );

// 緑の旗が押されたときの「ねこ」のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite){
    this.Looks.size.scale = [250, 250];
    // Speech 
    // 国をJAPANESEとし、
    // 声タイプ(ALTO)⇒声タイプ(FEMAIL)へ新規コピー
    // 声タイプ(FEMAIL)のピッチを 150 に変更する。
    this.Speech.locale(Ts.SpeechLocale.JAPANESE).type(Ts.VoiceType.ALTO).typeCopyTo("FEMAIL").pitch(150);
    // Speech 
    // 国をJAPANESEとし、
    // 声タイプ(TENOR)⇒声タイプ(MAIL)へ新規コピー
    // 声タイプ(MAIL)のピッチを 50 に変更する。
    this.Speech.locale(Ts.SpeechLocale.JAPANESE).type(Ts.VoiceType.TENOR).typeCopyTo("MAIL").pitch(50);
    /** タッチ判定 */
    const _touch = () => {
        return this.Sensing.mouse.isTouching;
    }
    /** 声タイプ切り分けフラグ */
    let speechFlag = true;
    for(;;) {

        if(_touch()){ // タッチしているとき
            if(speechFlag){ 
                // ピッチ加工したFEMAILの声
                await this.Speech.type("FEMAIL").speech(speechText.text);

            }else{
                // ピッチ加工したMAILの声
                await this.Speech.type("MAIL").speech(speechText.text);

            }
            // 声タイプ反転
            speechFlag = !speechFlag;
            // マウスが触っている間、待つ
            await this.Control.waitWhile(_touch);
        }
        yield;
    }
};


// 開始
Ts.engine.start();
```

::: warning index.tsについて
『`this.Speech.locale(Ts.SpeechLocale.JAPANESE)`』 <br>
locale(国)を設定します。<br>
デフォルト(省略時)はJAPANESEです。<br>
ENGLISHにしたい場合は`Ts.SpeechLocale.ENGLISH`とします。<br>
<br>
『`this.Speech.type(Ts.VoiceType.ALTO)`』 <br>
声タイプを選択します。<br>
<br>
『`this.Speech.typeCopyTo("FEMAIL")`』 <br>
新たな声タイプを作り出します。<br>
ここではピッチを変えてみるので元の声タイプピッチを破壊しないように、新たに声タイプを作り出しています。<br>
元のALTOのまま使う場合は、新たに作り出す必要はありません。<br>
<br>
『`this.Speech.pitch(150)`』 <br>
現在選択している声タイプのピッチを指定値で設定します。<br>
<br>
『`await this.Speech.speech(文字列)`』<br>
選択中の声タイプによる音声合成を行い、発声します。<br>
声タイプを切り替えない場合は １度だけ声タイプを選択しておけばよいのですが、声タイプを切り替えて発声したい場合は、『this.Speech.type(声タイプ)』として声タイプを都度選択しましょう。

:::


### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/02_tryVarious/011/"
/>

::: tip メッセージ
緑の旗を押して開始します。<br>
<br>
スプライトにマウスが触れると、「こら、触ったね」とスピーチします。<br>
スプライトにマウスが触れるつど、声が「女性」⇒「男性」⇒「女性」・・・<br>
と切り替わります。
<br>
:::

---
<br>
