---
outline: deep
---

# イメージ

## ローカル画像を読み込むとき

ローカルにあるアセットをおいてあるフォルダーを相対パスで指定してインポートしてください。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

import CatSvg from '../../assets/cat.svg'; 
const CatImage = new Ts.Image( { CatSvg } );
```
:::tip Imageへの渡し方
`Ts.Image( { CatSvg } )` と `{ 変数 }` の形で渡してください。<br><br>
`{  }`で囲むとオブジェクトになります。<br><br>
`{ CatSvg }` は、次と同じです。<br>
`{ 'CatSvg': CatSvgの中身 }`<br><br>
変数名と変数の中身を一緒に渡したいので `{ CatSvg }`の形で渡す必要があります。
:::


なお、『typeScratcherPractice』をクローンして利用する場合は、プロジェクトトップにある`/assets`フォルダーを別名 `@Assets`として指定可能です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

import CatSvg from '@Assets/cat.svg'; 
const CatImage = new Ts.Image( { CatSvg } );
```


## クラウド画像を読み込むとき
アセットのURLをコンスタント値として定義し、Ts.Imageを使ってロードしてイメージの形にします。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

const Ballerina_b = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/4ccb1752a43f48aafe490c9c08e58c27.svg/get';

const BallerinaBImage = new Ts.Image( { Ballerina_b } );
```

## Scratchアセットの探し方

:::tip 検索サイト
https://amami-harhid.github.io/typescratcherAssets/web/
:::
<br>
コスチュームの一覧を表示します。背景や音を探したいときはプルダウン選択を変えてください。<br>

![画像](/ScratchAssetsBank.png)
<br>
確認したい画像をクリックすると拡大します。<br>

![画像](/ScratchAssetsImage.png)
<br>
『Copy URL』ボタンを押すと、クリップボードにURLをコピーしますので、好きなテキストの場所に張り付けることができます。<br>

![画像](/ScratchAssetsImageCopied.png)