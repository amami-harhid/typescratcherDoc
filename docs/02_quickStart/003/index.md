---
outline: deep
---
# スプライト移動

::: tip スプライトを移動させてみよう
旗をクリックしたら少しだけ進ませる
:::

::: warning sub/images.ts
サウンドを作るサブモジュールの説明は割愛します。<br><br>
:::

### **`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from './sub/images';

// イメージ作成
const CatAImage = new Ts.Image( { CatASvg } );
const BlueskyImage = new Ts.Image( { BlueskySvg } );

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 旗クリックされたとき、のイベント定義
cat.Event.flagPresser().func = async function*(this: Sprite) {
    // Motion.move.steps : 指定した数だけ動かす
    this.Motion.move.steps(5);
}

// 開始
Ts.engine.start();
```
::: warning index.ts
ここでは、『旗クリックされたときのイベント』を受けて実行するイベント定義をしています。<br>
スプライトやステージのインスタンスを使い『`〇〇.Event.flagPresser().func`』として、旗をクリックするたびに動作する『スレッド』を作り出します。<br>
<br>
『スレッド』は同時に複数存在でき、『スレッド』は同時並列で動作します。
<br>
イベントを定義する関数の代表的な形は『`async function*( ) { }`』です。
:::

::: tip 『`this`』
スレッドのコードの中に書かれている『`this`』は、スプライトやステージのインスタンスです。<br>
『`this`』は、自分のことを表すプログラミング用語です。<br>
『function() { }』に紐づいているインスタンスを『`this`』として扱っているわけです。<br>
<br>
『`cat.Event.flagPresser().func`』の場合 スレッドのなかの『`this`』は　『`cat`』です。<br>
スレッドのなかではできる限り『`this`』を使うようにしましょう。
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックするたび、スプライトを少しだけ右側へ移動させます。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/003/"
/>

---
<br>