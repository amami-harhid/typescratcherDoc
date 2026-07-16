---
outline: deep
---
# Event(イベント)

## Event.flagPresser (旗が押されたときのスレッド定義)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗を押されたときのスプライト(cat)のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
} 
```

::: tip 『`async function*(this:Sprite) `』

スレッドの function 引数として、『`this: 型`』を渡していますが、これは本当に呼出し時に『`this`』が渡されてくるわけではありません。<br>

functionのなかで使われる『`this`』の型を明示するために、引数がゼロ個の場合でも『`this:型`』を疑似引数として付与しています。

これは『`Typescript`』における『`this`』の使い方の仕様です。<br>

『`this`』の型は『`Sprite`』です、『`Stage`』です！！、と宣言をしているわけです。
:::

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventFlagpresser.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>
---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Stage } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

// 旗を押されたときのステージのスレッド
stage.Event.flagPresser().func = async function*(this:Stage) {
    // ここにスレッドのコードを書く
} 
```
---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventFlagpresser.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>
---
