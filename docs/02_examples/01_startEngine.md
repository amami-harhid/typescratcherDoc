---
outline: deep
---
# 例題：エンジン起動

::: tip エンジン起動する
スプライトや背景を作成せずに、単にエンジンだけを起動してみましょう。<br>
ステージの枠と制御ボタン（緑の旗ボタン、一時停止ボタン、停止ボタン）が見えるだけです。
:::

### 動作例
TypeScratcherロゴをクリックすると表示を始めます。

なにも表示しないステージだけが表示されるはずです。

<AutoReloadIframe
src="https://amami-harhid.github.io/typeScratchCoder/src/01_quickStart/001/"
/>

---


### **index.html**
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
::: warning index.htmlについて
`index.html`は、`index.ts`を呼び出すために用意しているものです。<br>
他サンプルでも同じ内容ですので、sample02以降、`index.html`の記載は割愛します。
:::

### **index.ts**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 開始
Ts.engine.start();
```
::: warning index.tsについて
`@tscratch3/typescratcher`をimportする、`engine.start()`、この２つが最小限の構成要素です。
:::

<br>
