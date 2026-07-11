---
outline: deep
---


# Samples

## Sample01
::: tip エンジン起動
スプライトや背景がない状態でエンジンだけ起動する例です
:::

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/001/"
/>

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

## Sample02
::: tip スプライトとステージを表示
画像を読み込み、スプライトや背景を作成して表示する例です
:::

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/002/"
/>

**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 画像URL
// ここではScratch財団が公開してる画像URLを使います
const CatASvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get';
const BlueskySvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/e7c147730f19d284bcd7b3f00af19bb6.svg/get';

// イメージ作成
const CatAImage = new Ts.Image( { CatASvg } );
const BlueskyImage = new Ts.Image( { BlueskySvg } );

// スプライト作成
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [ CatAImage ] ); // イメージを追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add( [ BlueskyImage ] ); // 背景を追加

// 開始
Ts.engine.start();
```

## Sample03
::: tip スプライトを移動させてみよう
旗をクリックしたら少しだけ進ませる
:::

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/003/"
/>


**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// 画像URL
const CatASvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get';
const BlueskySvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/e7c147730f19d284bcd7b3f00af19bb6.svg/get';

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
## Sample04

::: tip ずっと繰り返す
旗クリックで「ずっと」動き続けるに挑戦しよう
:::

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/004/"
/>
