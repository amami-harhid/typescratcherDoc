---
outline: deep
---

# FontImage(文字列イメージ)

## Scratch3 Fontを指定

### 『Ts.ScratchFontFamily』

```typescript:line-numbers
// SansSerif
Ts.ScratchFontFamily.SansSerif
// Serif
Ts.ScratchFontFamily.Serif
// Handwriting
Ts.ScratchFontFamily.Handwriting
// Marker
Ts.ScratchFontFamily.Marker
// Curly
Ts.ScratchFontFamily.Curly
// Pixel
Ts.ScratchFontFamily.Pixel
// Scratch
Ts.ScratchFontFamily.Scratch
```

---

### 『`Ts.FontImage`』

テキストをSVGイメージに変換するメソッドを持つ『`Ts.Image`』の拡張版です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite, SvgImageAttributes } from "@tscratch3/typescratcher";

const HellText = "Hello TypeScratcher's World!";

const attribute : SvgImageAttributes = {
    fill: '#f0f0f0', // 文字色
    font_family: Ts.ScratchFontFamily.Scratch // Scratch3のフォントを使用
};

// 属性を指定して、FontImageを作成
const helloImage = new Ts.FontImage( attribute );
// 文字列を設定してSVGイメージに変換
await helloImage.textToSvg(HellText);

// スプライトを作成
const helloSprite = new Ts.Sprite('hello');
// コスチュームとして FontImageを設定
helloSprite.Costume.add( [ helloImage ] );

```
