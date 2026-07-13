---
outline: deep
---

# サウンド

## ローカル音ファイルを読み込むとき

ローカルにあるアセットをおいてあるフォルダーを相対パスで指定してインポートしてください。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

import ChillWav from '../../assets/chill.wav'; 
const ChillSound = new Ts.Sound( { ChillWav } );
```
:::tip Soundへの渡し方
`Ts.Sound( { ChillWav } )` と `{ 変数 }` の形で渡してください。<br><br>
`{  }`で囲むとオブジェクトになります。<br><br>
`{ ChillWav }` は、次と同じです。<br>
`{ 'ChillWav': ChillWavの中身 }`<br><br>
変数名と変数の中身を一緒に渡したいので `{ ChillWav }`の形で渡す必要があります。
:::


なお、『typeScratcherPractice』をクローンして利用する場合は、プロジェクトトップにある`/assets`フォルダーを別名 `@Assets`として指定可能です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

import ChillWav from '@Assets/chill.wav'; 
const ChillSound = new Ts.Sound( { ChillWav } );
```


## クラウド画像を読み込むとき
アセットのURLをコンスタント値として定義し、Ts.Soundを使ってロードしてサウンドの形にします。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

const Chill = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/c4e9e84fd9244ca43986c2bdb6669ae8.wav/get';

const ChillSound = new Ts.Sound( { Chill } );
```

## Scratchアセットの探し方

:::tip 検索サイト
https://amami-harhid.github.io/typescratcherAssets/web/
:::
<br>
コスチュームの一覧を表示しているので、音を探したいときはプルダウン選択を変えてください。<br>
