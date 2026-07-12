---
outline: deep
---


# 画像の切り替え


::: tip ずっと繰り返す
コスチュームと背景を切り替えましょう。
:::

### **`sub/images.ts`**
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
        // フレームごとの休止
        yield;
    }
}

// 開始
Ts.engine.start();
```
::: warning index.ts
ここでは『コスチューム』『背景』を切り替える動きを追加しています。<br>
『`Looks`』は『見た目』系のグループです。<br>
『`Looks.costume`』は『コスチューム関係』、『`Looks.backdrop`』は『背景関係』です。<br>
『`Looks.costume.next()`』は『コスチューム関係』、『`Looks.backdrop.next()`』」とすることで、次のコスチュームにする、次の背景にする、を実行します
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
緑の旗をクリックすると、ずっとスプライトが移動しながら、コスチュームと背景が切り替わります。<br>

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/005/"
/>

---
<br>
