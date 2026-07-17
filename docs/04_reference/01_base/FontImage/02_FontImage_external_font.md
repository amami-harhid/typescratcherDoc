---
outline: deep
---

# FontImage(文字列イメージ)

## 『`Ts.Font`』(フォントをロードする)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 外部フォントを読み込む
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font({HarryPotter});

```

## 『`Ts.FontImage`』(フォントイメージを作る)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite, SvgImageAttributes } from "@tscratch3/typescratcher";

// 外部フォントを読み込む
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font({HarryPotter});

// フォント属性を指定
const fontAttribute: SvgImageAttributes = {
    font_family: HarryPotterFont.name,
};

// フォントイメージを作成
const mojiImage = new Ts.FontImage(fontAttribute);
// フォントイメージへテキストを渡す（SVGイメージ化）
mojiImage.textToSvg('HarryPotter text');

// スプライトを作成
const moji = new Ts.Sprite('moji');

// フォントイメージをコスチュームとして追加
moji.Costume.add([mojiImage]);

```

