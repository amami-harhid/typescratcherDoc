---
outline: deep
---
# Event(イベント)

## Event.clone (クローンが作られたときのスレッドを定義)

### Sprite

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    await this.Control.wait( 5 ); // 5秒待つ
    this.Control.clone(); // クローンを作る
}

// 『cat』のクローンが作られたときの『cat クローン』のスレッド
cat.Event.cloned().func = async function*(this:Sprite) {
    // このスレッドの中では、『this』は クローンのインスタンスである。
}

```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventCloned.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Stage

ステージには「クローンされたとき」のメソッドはありません。<br>(ステージにはクローンする機能を持たせていないため)
