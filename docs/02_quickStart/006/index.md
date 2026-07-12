---
outline: deep
---


# 音を鳴らす


::: tip 音を鳴らす
スプライトが端に触れたら音を鳴らしてみましょう。
:::


### **`sub/sounds.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【音の URL 】
const Boing = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/53a3c2e27d1fb5fdb14aaf0cb41e7889.wav/get'; 
const AElecGuitar = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/fa5f7fea601e9368dd68449d9a54c995.wav/get';
// サウンド作成
export const BoingSound = new Ts.Sound({ Boing })
export const AElecGuitarSound = new Ts.Sound({ AElecGuitar });
```
::: warning sub/sounds.ts
『サウンド』を作るサブモジュールです。<br>
『`new Sound( { 音 } )`』としてサウンドを作ります。<br>
『`{ 音 }`』は、イメージ作成のサブモジュールでの解説と同じですので、そちらを見てください。
:::

### **`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, CatBImage, BlueskyImage, CanyonImage } from './sub/images';

// サウンド作成
import { BoingSound, AElecGuitarSound } from "./sub/sounds";

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage, CatBImage ] ); // イメージを追加
cat.Sound.add( [ AElecGuitarSound, BoingSound ] ); // 音を追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage, CanyonImage ] ); // 背景を追加

// 【旗クリックされたとき】のイベント定義
cat.Event.flagPresser().func = async function*(this: Sprite) {

    for(;;) {
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        this.Looks.costume.next(); // 次のコスチュームにする
        this.Looks.backdrop.next(); // 次の背景にする
        await this.Control.wait(0.1); // 0.1秒だけ待つ
        yield;
    }
}
// 【旗クリックされたとき】のイベント定義（別スレッド）
cat.Event.flagPresser().func = async function*(this: Sprite) {
    
    let boingSoundFlag = true;
    for(;;){
        // Sensing: 「調べる」系
        // edge: 「端」に関する処理
        // Sensing.edge.isTouching:  端にふれていたら true を返す
        if(this.Sensing.edge.isTouching === true) {
            // 鳴らす音のフラグ＝BoingSound のとき
            if(boingSoundFlag === true){
                // Sound: 「音」系
                // Sound.play :  指定したサウンドを鳴らす
                this.Sound.play(BoingSound);
            }else{
                this.Sound.play(AElecGuitarSound);
            }
            await this.Control.wait(0.1);
            // 鳴らす音のフラグを反転させる
            boingSoundFlag = !boingSoundFlag;
        }
        yield;
    }
}

// 開始
Ts.engine.start();
```
::: warning index.ts
同じイベント定義を２つ用意していることに着目してください。<br>
『旗クリックされたとき』に２つの別々のスレッドが同時に起動し、『同時に並列動作』します。<br>
１つ目のスレッドはネコを動かして端に触れたら跳ね返る処理を実行しています。<br>
２つ目のスレッドはそれと同時に、『端に触れたか』を判定し続け、『端に触れた』ときに『音を鳴らす』ようにしています。<br>
<br>
『Sound.play(サウンド)』とすることで、サウンドの音が鳴ります。<br>
TypeScratcherには『終わるまで鳴り続ける』メソッドもありますが、ここでは紹介を割愛します。
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトが移動し、端に触れたら音を鳴らします<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/006/"
/>

---
<br>
