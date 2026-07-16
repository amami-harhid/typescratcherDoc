---
outline: deep
---
# Event(イベント)

## Event.clicker (自身が押されたときのスレッド定義)

### Sprite

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 自身のスプライトが押されたときの『cat』のスレッド
cat.Event.clicker().func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
}

```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventClickSprite.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Stage

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Stage } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

// 自身(ステージ)が押されたときの『stage』のスレッド
stage.Event.clicker().func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
} 
```
---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventClickStage.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


