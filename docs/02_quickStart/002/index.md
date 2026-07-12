---
outline: deep
---
# スプライトとステージを表示

::: tip スプライトとステージを表示
画像を読み込み、スプライトや背景を作成して表示する例です。<br>
画像を読み込みイメージ化する処理は sub/images.tsとして分離しています。
:::

### **`sub/images.ts`**
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
::: warning sub/sounds.ts
サウンドを作りだすコードです。<br><br>このコードを本体(index.ts)の中に書いてもOKですが、サブモジュールとして分離してみました。<br>
『`new Image( { 〇〇 } )`』を使い、サウンドインスタンスを生成しています。<br>
引数『`{ CatSvg }`』は、オブジェクトであり、これは 『`{ CatSvg: CatSvg }`』, 『`{ 'CatSvg': CatSvg }`』 と同義です。<br>
『`new Image( オブジェクト )`』は、名前キー付きのオブジェクトを与える仕様ですので『`{ }`』とすることに注意してください。<br>
『`export`』 と書かれている部分は、このサブモジュールを使用する側へインスタンスを引き渡すための書き方です。<br>
このサブモジュールは、次に紹介する`index.ts`の LINE #4 にて 『`import`』しています。
:::

### **`index.ts`**
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
::: warning sub/sounds.ts
スプライトを `new Sprite('名前')`でして生成します。<br>
ステージを `new Stage()` で生成します。<br>
Javascriptの流儀として、それぞれ、`const` (コンスタント定義) で宣言することを推奨します。<br>
`Costume.add( [ イメージ ] )`, `Backdrop.add( [ イメージ ] )` は、コスチューム、背景としてイメージを追加している箇所です。<br>
`[ ]` は配列を表現する書き方であり、`add`メソッドへは同時に複数のイメージを 配列として与えることが可能です。
:::

### 動作例
Typescracherマークをクリックすると表示を開始します。<br>
スプライトと背景を表示します。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/002/"
/>

---
<br>
