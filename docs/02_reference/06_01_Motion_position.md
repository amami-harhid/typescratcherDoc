---
outline: deep
---

# Motion(動き)

## Motion.position (座標)

### [X座標,Y座標]を指定
```typescript:line-numbers

// [X座標,Y座標]を指定する
sprite.Motion.position.xy = [150, 100]; 

```
---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/positionX150Y100.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

### X座標を指定, Y座標を指定

```typescript:line-numbers

// X座標を指定する
sprite.Motion.position.x = 150; 

// Y座標を指定する
sprite.Motion.position.y = 100; 

```
---
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/positionX150.svg"/>
    </td>
    <td>
    <img class="block" src="/positionY100.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

### X座標を◎ずつ変える, Y座標を◎ずつ変える

```typescript:line-numbers

// X座標を10ずつ変える
sprite.Motion.position.x += 10; 

// Y座標を10ずつ変える
sprite.Motion.position.y += 10; 

```
---
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/positionChangeX.svg"/>
    </td>
    <td>
    <img class="block" src="/positionChangeY.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
