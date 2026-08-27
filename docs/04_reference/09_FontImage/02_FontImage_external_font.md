---
outline: deep
---

# FontImage(文字列イメージ)

ネットで公開されている各種フォントを入手して使用することができます。

## 対象フォントの種類

- woff
- woff2
- ttf


## 『`Ts.Font`』(フォントを読み込む)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 【FONT】
//  https://www.fontspace.com/commercial-fonts
//  100% free (商用利用可!), Moogalator by Tup Wanders
//  ダウンロードした後、assetsフォルダーに入れて使用
import Moogalator from '../../../assets/fonts/Moogalator-yYJr3.ttf';

const MoogalatorFont = new Ts.Font( Moogalator );

```

## 『`Ts.FontImage`』(フォントイメージを作る)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite, FontImageAttribute, SvgImageAttributes } from "@tscratch3/typescratcher";

// 外部フォントを読み込む
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font( HarryPotter );

// 【文字スプライト】
const moji = new Ts.Sprite( "moji" );
const fontAttribute : SvgImageAttributes = {
    fill: "#f00000", // 文字色
    font_family: MoogalatorFont.name,
    font_size: 30,
};
const fotImageAttr : FontImageAttribute = {
    text: "Moogalator Font",
    attributes: fontAttribute,
};
const mojiImage = new Ts.FontImage( fotImageAttr );
moji.Costume.add( mojiImage );

moji.Looks.size.scale = [ 70, 70 ];

// 開始
Ts.engine.start();
```

## 表示例

![画像](/externalFont_Moogalator.png)

::: tip 文字を表示するスプライト
文字列画像をコスチュームとするスプライトです。<br>
スプライトがもつメソッドは全て使用可能です。
:::

## フリーフォントの入手について

::: tip ライセンスに注意！
フリーフォントといっても 個人利用のみを許可するもの、商用利用も許可するもの、とあります。<br>
個人利用の解釈は「利益を得ない範囲での利用」というのが一般的です。<br>
一番安全な選択は「商用利用可」のフォントを使う！です。<br><br>
個人利用のみ許可： `free for personal use`, とか `personal use only` と表記されている場合があります。<br>
商用利用可： `free for commercial use` とか `100% free` と表記されている場合があります。<br>
:::

::: tip フリーフォントを使う場合のマナー
自作ソースコードの中のコメントなどで、使用するフリーフォントのことがわかるように次のような説明文を書いておくとよいでしょう。<br>
★「ライセンスの種類」<br>
★「使用しているフォントの名前」の情報<br>
★「入手先」「作成者」の情報<br>

:::

### 【事例】フリーフォントサイトの紹介

`https://www.fontspace.com/`

![画像](/fontSpacePage.png)

::: tip FONTSPACE
COMMERCIAL-USE ボタンを押すと、商用利用可( 100% FREE )のフォントの一覧を表示します。<br>
気にいったフォントがあれば、ダウンロード(およびZIP展開)をしてフォントを使ってください。<br>
:::