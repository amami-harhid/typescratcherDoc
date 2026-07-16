---
outline: deep
---

# Pen(ペン)

## Pen.penClear ( ペン描画をクリアする )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penClear.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const thread = async function*(this:Sprite) {
    this.Pen.penClear();
} 
```