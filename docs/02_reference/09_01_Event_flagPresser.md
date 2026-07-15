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
