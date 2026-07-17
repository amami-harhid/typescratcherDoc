---
outline: deep
---

# Pen(ペン)

## Pen.**penDown** ( ペンを下げる )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penDown.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const thread = async function*(this:Sprite) {
    this.Pen.penDown();
} 
```


## Pen.**penUp** ( ペンを上げる )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penUp.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const thread = async function*(this:Sprite) {
    this.Pen.penUp();
} 
```

