---
outline: deep
---


# Samples

## Sample01
::: tip エンジン起動
スプライトや背景がない状態でエンジンだけ起動する例です
:::


**`index.html`**
```html:line-numbers
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="data:,">
  </head>
  <body>
    <script type="module" src="./index.ts"></script>
  </body>
</html>
```
**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 開始
Ts.engine.start();
```

### 動作例
TypeScratcherロゴをクリックすると表示を始めます

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/001/"
/>

## Sample02
::: tip スプライトとステージを表示
画像を読み込み、スプライトや背景を作成して表示する例です。<br>
画像を読み込みイメージ化する処理は sub/images.tsとして分離しています。
:::

**`sub/images.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像 URL 】ここではScratch財団が公開してる画像URLを使います
// URLを探すビューアー :  https://amami-harhid.github.io/typescratcherAssets/web/
const CatASvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get';
const BlueskySvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/e7c147730f19d284bcd7b3f00af19bb6.svg/get';

// イメージ作成
export const CatAImage = new Ts.Image({ CatASvg });
export const BlueskyImage = new Ts.Image({ BlueskySvg });

```
**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from './sub/images';

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 開始
Ts.engine.start();
```

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
スプライトと背景を表示します。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/002/"
/>

---
## Sample03
::: tip スプライトを移動させてみよう
旗をクリックしたら少しだけ進ませる
:::

**`sub/images.ts`**
```typescript:line-numbers
// Sample01 と同じ
```

**`index.ts`**
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

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックするたび、スプライトを少しだけ右側へ移動させます。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/003/"
/>

## Sample04

::: tip ずっと繰り返す
旗クリックで「ずっと」動き続けるに挑戦しましょう。
:::
for( ; ; ){ } は ずっと繰り返すループ処理です。


**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, BlueskyImage } from './sub/images';

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 【旗クリックされたとき】のイベント定義
cat.Event.flagPresser().func = async function*(this: Sprite) {
    // ずっと繰り返す
    for(;;) {
        // Motion: 「動き」系
        // move: 「動かす」系
        // Motion.move.ifOnEdgeBounce: もし端についていたら跳ね返る
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        // フレームごとに休止
        yield;
    }
}

// 開始
Ts.engine.start();
```
### 動作例(004)
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトを移動させます。<br>
スプライトが端に触れたとき、反転させます。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/004/"
/>

## Sample05

::: tip ずっと繰り返す
コスチュームと背景を切り替えましょう。
:::

**`sub/images.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【画像 URL 】
// ここではScratch財団が公開してる画像URLを使います
const CatASvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get';
const CatBSvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/0fb9be3e8397c983338cb71dc84d0b25.svg/get';
const BlueskySvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/e7c147730f19d284bcd7b3f00af19bb6.svg/get';
const CanyonPng = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/c7c0b27b959193a0b570a9639cfe8158.png/get';

// イメージ作成
export const CatAImage = new Ts.Image({ CatASvg });
export const CatBImage = new Ts.Image({ CatBSvg });
export const BlueskyImage = new Ts.Image({ BlueskySvg });
export const CanyonImage = new Ts.Image({CanyonPng});

```

**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, CatBImage, BlueskyImage, CanyonImage } from './sub/images';

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage, CatBImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage, CanyonImage ] ); // 背景を追加

// 【旗クリックされたとき】
cat.Event.flagPresser().func = async function*(this: Sprite) {
    
    
    for(;;) {
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        // Looks: 「見た目」系
        // Looks.costume.next: 「次のコスチュームにする」
        // Looks.backdrop.next: 「次の背景にする」
        this.Looks.costume.next(); // 次のコスチュームにする
        this.Looks.backdrop.next(); // 次の背景にする
        // Control: 「制御」
        // Control.wait : 指定した秒数だけ待つ。 awaitをつけること！
        await this.Control.wait(0.1); // 0.1秒だけ待つ
        // フレームごとの休止
        yield;
    }
}

// 開始
Ts.engine.start();
```
### 動作例(005)
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトが移動しながら、コスチュームと背景が切り替わります。<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/005/"
/>

## Sample06

::: tip 音を鳴らす
スプライトが端に触れたら音を鳴らしてみましょう。
:::

**`sub/images.ts`**
```typescript:line-numbers
// Sample05 と同じです
```

**`sub/sounds.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【音の URL 】
const Boing = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/53a3c2e27d1fb5fdb14aaf0cb41e7889.wav/get'; 
const AElecGuitar = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/fa5f7fea601e9368dd68449d9a54c995.wav/get';
// サウンド作成
export const BoingSound = new Ts.Sound({ Boing })
export const AElecGuitarSound = new Ts.Sound({ AElecGuitar });
```

**`index.ts`**
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

### 動作例(006)
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトが移動し、端に触れたら音を鳴らします<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/006/"
/>

## Sample07

::: tip ふきだし
ふきだしを使って、なにかを言わせましょう。<br>
座標の扱いは Scratch3の座標と同じ値です。
:::

**`sub/images.ts`**
```typescript:line-numbers
// Sample05 と同じです
```
**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// イメージ作成
import { CatAImage, CatBImage, BlueskyImage } from "./sub/images";

// スプライト作成(左のネコ)
const catA = new Ts.Sprite( "catA" );
catA.Costume.add( [ CatAImage ] ); // イメージを追加
catA.Motion.position.xy = [-100, -100]; // 座標の位置[X座標、Y座標]

// スプライト作成(右のネコ)
const catB = new Ts.Sprite( "catB" );
catB.Costume.add( [ CatBImage ] ); // イメージを追加
catB.Motion.position.xy = [ 100, -100]; // 座標の位置[X座標、Y座標]
catB.Looks.size.w = -100;  // 幅をマイナスとすることで 反対に向く

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 【旗クリックされたとき】( 左のネコ )
catA.Event.flagPresser().func = async function*(this: Sprite) {
    this.Looks.bubble.say('やあ、こんにちは');
    await this.Control.wait(4); // 4秒間待つ
    this.Looks.bubble.say(''); // 空 ( ふきだしを消す )

}
// 【旗クリックされたとき】( 右のネコ )
catB.Event.flagPresser().func = async function*(this: Sprite) {
    await this.Control.wait(2); // 2秒間待つ
    this.Looks.bubble.think('こんにちは');
    await this.Control.wait(2); // 2秒間待つ
    this.Looks.bubble.say(''); // 空 ( ふきだしを消す )
}

// 開始
Ts.engine.start();
```
### 動作例(007)
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、左右のネコが挨拶を交わします。<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/007/"
/>
