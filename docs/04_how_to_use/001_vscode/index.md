---
outline: deep
---

# VS CODE

`TypeScratcher` を使う環境をVS-CODEで作成する方法です。

なお、ここでは Windows環境を想定して説明します。

---
## NODEを入れておく

2026年7月現在の最新は V24

### 利用中のバージョン ###
```
> node -v
v20.11.1
```

## GITを入れておく
```
> git -v
git version 2.40.0.windows.1
```

## 練習プロジェクトをクローン

ローカルの適当な場所にプロジェクトフォルダを作成します。<br>
ここでは、`D:\project`フォルダを用意したものとします。<br>
<br>

```
> d:
> cd \project
> git clone  https://github.com/amami-harhid/typeScratcherPractice.git
```

## VSCODEでプロジェクトを開く

`D:\project\typeScratcherPractice`をVSCODEで開きましょう。

## 下準備

使用する「拡張機能」をインストールします。<br>

### 拡張機能

::: tip VS Code ESLint extension 
<img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.2.3/1642067257652/Microsoft.VisualStudio.Services.Icons.Default" 
style="width:20%;" alt="ロゴ">
:::

(1) ESLINTをインストール

(2) ESLINT設定

次の設定があることを確認しておきましょう。

### `.vscode/settings.json` ###
```json
{
    "eslint.runtime": "node",
    "eslint.useFlatConfig": true,
    "eslint.problems.shortenToSingleLine": true
}
```
::: warning  runtime
"eslint.runtime": "node"<br>
<br>
eslintを実行するnodeを開発環境のnodeと同じにしますよ！という意味です。<br>
あるに越したことはない設定です。この設定は無くても大抵の場合は問題ありません。
:::

::: warning  useFlatConfig
"eslint.useFlatConfig": true"<br>
<br>
eslint9系以降を使用する場合の設定です。ESLINT9系を使うので、忘れずに設定しておきましょう。<br>
:::
::: warning  shortenToSingleLine
"eslint.problems.shortenToSingleLine": true"<br>
<br>
eslintで検知した問題をコードに表示するとき、関連行全てではなく１行だけに絞って表示しますよ！という意味です。<br>
問題個所が見やすくなるのでこの設定をしておくとよいです（推奨）。
:::

## npm クリーンインストール

```
> npm ci
```

##　テンプレート表示確認

```
> npm run dev /000/
```

このように表示されたら下準備は完了です。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/001/"
/>

##　新規作成

テンプレート(src/000)をコピーして新しい自分のフォルダーを作りましょう( src/001 へ)

### src/001/sub/images.ts ###
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

import CatSvg from '@Assets/cat.svg';
export const CatImage = Ts.Image( {CatSvg} );
```
### src/001/index.ts ### 
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

//　イメージを読み込む
import { CatImage } from './sub/images';

// スプライト（ネコ）を作る
const cat = Ts.Sprite('cat');
// イメージをコスチュームへ追加する
cat.Costume.add( [ CatImage ] );

```
### 表示する

```
> npm run dev /001/
```

スクラッチネコが中央に表示されたらOKです。<br>

さあ、自由に作品を作り上げていきましょう。