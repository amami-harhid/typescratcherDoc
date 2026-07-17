---
outline: deep
---
# Sensing(調べる)

## Sensing.dragMode (ドラッグ 関連)

### ドラッグ可能(draggable)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingDragmodeDraggable.svg"/>
    </td>
    <td>
    <img class="block" src="/sensingDragmodeNoDraggable.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    await this.Control.wait(10); // 10秒待つ

    // 旗が押されたあと 10秒経過したら、
    // スプライト『cat』をドラッグ移動可能とする。
    this.Sensing.dragMode.draggable = true;

    await this.Control.wait(10); // 10秒待つ

    // ドラッグ可能とした後、さらに10秒経過したら
    // スプライト『cat』をドラッグ移動不可とする。
    this.Sensing.dragMode.draggable = false;

}
```
---
