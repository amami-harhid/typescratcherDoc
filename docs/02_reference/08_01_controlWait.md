---
outline: deep
---

# Control (制御)

### Control.wait (指定した秒数、待つ)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/controlWait.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

#### sprite
```typescript:line-numbers
// 指定した秒数、待つ
await sprite.Control.wait( 2 ); 
```
---

#### stage
```typescript:line-numbers
// 指定した秒数、待つ
await stage.Control.wait( 2 ); 
```
---

### Control.waitUntil (指定した条件が成立するまで、待つ)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/controlWaitUntil.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

#### Sprite/Stage
```typescript:line-numbers
// 指定した秒数、待つ 
await spriteA.Control.waitUntil( () => spriteA.Looks.size.scale.w < 90 ); 
// ↑ スプライトAの大きさ(横)が 90%より小さくなるまで、
// スプライトAのスレッドを止めて待つ

// 指定した秒数、待つ
await stage.Control.waitUntil( () => spriteA.Looks.size.scale.w < 90 ); 
// ↑ スプライトAの大きさ(横)が 90%より小さくなるまで、
// ステージAのスレッドを止めて待つ

```
::: tip 条件式
条件は、アロー関数で指定してください。<br>
<br>
アロー関数は、『`() => 条件式`』　の形式で書きます。
:::


---

### Control.waitWhile (指定した条件が成立している間、待つ)

#### Sprite/Stage

```typescript:line-numbers
let hogeFlag = true; // <-- どこかで falseにしているとする。
```

```typescript:line-numbers
// 指定した秒数、待つ 
await spriteA.Control.waitWhile( () => hogeFlag == true ); 
// ↑ hogeFlagがtrueである間、
// スプライトAのスレッドを止めて待つ

// 指定した秒数、待つ
await stage.Control.waitWhile( () => hogeFlag == true ); 
// ↑ hogeFlagがtrueである間、
// ステージAのスレッドを止めて待つ

```
::: tip 条件式
条件は、アロー関数で指定してください。<br>
<br>
アロー関数は、『`() => 条件式`』　の形式で書きます。
:::
