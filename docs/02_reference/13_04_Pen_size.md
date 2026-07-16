---
outline: deep
---

# Pen(ペン)

## Pen.size ( ペンの太さ )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penSizeThickness.svg"/>
    </td>
    <td>
    <img class="block" src="/penSizeThicknessChange.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const threadA = async function*(this:Sprite) {
    this.Pen.size.thickness = 1; // 太さを 1 にする
} 
const threadB = async function*(this:Sprite) {
    this.Pen.size.thickness += 1; // 太さを 1 ずつ変える
} 
```

---
