---
outline: deep
---

# FontImage(文字列イメージ)

## 読み込み対象のフォント種類

- woff
- woff2
- ttf


## 『`Ts.Font`』(フォントをロードする)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 外部フォントを読み込む
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font( { HarryPotter } );

```

## 『`Ts.FontImage`』(フォントイメージを作る)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite, FontImageAttribute, SvgImageAttributes } from "@tscratch3/typescratcher";

// 外部フォントを読み込む
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font( HarryPotter );

// フォント属性を指定
const fontAttribute: SvgImageAttributes = {
    font_family: HarryPotterFont.name,
};
const fontImageAttr: FontImageAttribute = {
    text: 'Harry Potter Font',
    attributes: fontAttribute,
}
// フォントイメージを作成
const mojiImage = new Ts.FontImage( fontImageAttr );

// スプライトを作成
const moji = new Ts.Sprite( 'moji' );

// フォントイメージをコスチュームとして追加
moji.Costume.add( mojiImage );

// 開始
Ts.engine.start();
```

## 表示例

![画像](/externalFont_HarryPotter.png)

::: tip 文字を表示するスプライト
文字列画像をコスチュームとするスプライトです。<br>
スプライトがもつメソッドは全て使用可能です。
:::