---
outline: deep
---
# Sensing(調べる)

## Sensing.edge (端 関連)

### 枠に触っていることの判定

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingEdgeTouching.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Sprite

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        this.Motion.move.steps(10); // 10 進める
        if( this.Sensing.edge.isTouching ) {
            // Trueのとき端にふれている
            this.Motion.direction.degree *= -1; // 向きを反転させる
        }
        yield;
    }
}
```
---

### Stage

ステージには「クローンされたとき」のメソッドはありません。<br>(ステージにはクローンする機能を持たせていないため)
