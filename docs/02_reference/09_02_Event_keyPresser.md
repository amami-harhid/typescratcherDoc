---
outline: deep
---
# Event(イベント)

## Event.keyPresser (キーが押されたときのスレッド定義)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventKeyPressSpace.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Ts.Keyboard を使う場合

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// キー『スペース』が押されたときのスプライト(cat)のスレッド
cat.Event.keyPresser( Ts.Keyboard.SPACE ).func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
} 
```
---

#### 『`Ts.Keyboard`』
次のキーの指定ができます。

|キー      | Ts.Keyboard       |
|----------|-------------------|
|スペース   | Ts.Keyboard.SPACE|
|左矢印キー | Ts.Keyboard.LEFT|
|右矢印キー | Ts.Keyboard.RIGHT  |
|上矢印キー | Ts.Keyboard.UP  |
|下矢印キー | Ts.Keyboard.DOWN  |
|エンターキー | Ts.Keyboard.ENTER  |
|エスケープキー | Ts.Keyboard.ESCAPE |


### コンスタント値を使う場合

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventKeyPressKeyA.svg"/>
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

const cat = new Ts.Sprite('cat');

const KEY_A = 'a';

// キー『A』が押されたときのスプライト(cat)のスレッド
cat.Event.keyPresser( KEY_A ).func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
} 
```
---



### どれかのキーが押されたときの定義


<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventKeyPressAny.svg"/>
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

const cat = new Ts.Sprite('cat');

// 『どれかの』キーが押されたときのスプライト(cat)のスレッド
cat.Event.keyPresser( Ts.Keyboard.ANY ).func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
} 
```
---



