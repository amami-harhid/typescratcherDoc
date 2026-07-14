---
outline: deep
---

# Motion(動き)

Motionは次のメソッドを持ちます。

## Sprite.Motion

- Motion.position(座標)
- Motion.direction(角度)
- Motion.move(動かす)
- Motion.rotate(回転方法)

### Motion.position (座標)

#### [X座標,Y座標]を指定
```typescript:line-numbers

// [X座標,Y座標]を指定する
sprite.Motion.position.xy = [150, 100]; 

```
---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionX150Y100.svg"/>
    </td>
    </tr>
</table>

---

#### X座標を指定, Y座標を指定

```typescript:line-numbers

// X座標を指定する
sprite.Motion.position.x = 150; 

// Y座標を指定する
sprite.Motion.position.y = 100; 

```
---
<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionX150.svg"/>
    </td>
    <td>
    <img class="block" src="/positionY100.svg"/>
    </td>
    </tr>
</table>

---

#### X座標を◎ずつ変える, Y座標を◎ずつ変える

```typescript:line-numbers

// X座標を10ずつ変える
sprite.Motion.position.x += 10; 

// Y座標を10ずつ変える
sprite.Motion.position.y += 10; 

```
---
<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionChangeX.svg"/>
    </td>
    <td>
    <img class="block" src="/positionChangeY.svg"/>
    </td>
    </tr>
</table>

---

### Motion.direction (角度)

#### 角度を設定

```typescript:line-numbers

// 角度を設定
sprite.Motion.direction.degree = 90; // 右向きにする

// 角度を◎ずつ変える（ 時計回り ）
sprite.Motion.position.y += 15; 

// 角度を◎ずつ変える（ 反時計回り ）
sprite.Motion.position.y -= 15; 

```

---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/degree90.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/turnRight15.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/turnLeft15.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
---

### Motion.move (動かす)

```typescript:line-numbers

// 10歩動かす
sprite.Motion.move.steps(10);

// 指定した座標へ行く( [X座標, Y座標 ] )
sprite.Motion.move.to( [ 150, 100] )

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveSteps10.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/positionX150Y100.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>


```typescript:line-numbers

// 指定した秒数をかけて、指定した座標へ行く
// 第一引数(秒数)、第二引数( [X座標, Y座標 ] )
await sprite.Motion.move.glideTo( 1, [200, 50]);

// 指定した秒数をかけて、どこかの座標へ行く
// 第一引数(秒数)
await sprite.Motion.move.glideToRandom( 1 );

// 指定した秒数をかけて、マウスポインターの座標へ行く
// 第一引数(秒数)
await sprite.Motion.move.glideToMouse( 1 );

// 指定した秒数をかけて、他のスプライトの座標へ行く
// 第一引数(秒数)、第二引数( 他のスプライト )
await sprite.Motion.move.glideToMouse( 1, otherSprite );

```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideTo.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToRandom.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToMousePointer.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToOtherSprite.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>

```typescript:line-numbers

// どこかの場所へ行く
sprite.Motion.move.toRandom();

// マウスポインターの場所へ行く
sprite.Motion.move.toMouse()

// 指定したスプライトの場所へ行く
sprite.Motion.move.toSprite( otherSprite );


```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveToRandom.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/moveToMousePointer.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveToOtherSprite.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>

---

```typescript:line-numbers
// 端についたら跳ね返る
sprite.Motion.move.ifOnEdgeBounce();

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/ifOnEdgeBounce.svg"/>
    </td>
    </tr>
</table>
<br>

---

### Motion.point (向ける)

```typescript:line-numbers
// マウスポインターへ向ける
sprite.Motion.point.toMouse();

// 他のスプライトの座標へ向ける
sprite.Motion.point.toSprite( otherSprite );

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/pointToMousePointer.svg"/>
    </td>
    <td>
    <img class="block" src="/pointToOtherSprite.svg"/>
    </td>
    </tr>
</table>
<br>

---

### Motion.rotate (回転方法)

```typescript:line-numbers

// 回転方法を「自由に回転」にする( 未指定の場合、「自由に回転」 )
sprite.Motion.Motion.rotation.style = Ts.Rotation.ALL_AROUND;

// 回転方法を「左右のみ」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT;

// 回転方法を「回転しない」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/rotationAllaround.svg"/>
    </td>
    <td>
    <img class="block" src="/rotationLeftRight.svg"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/rotationDontRotate.svg"/>
    </td>
    </tr>
</table>

### Stage
StageはMotionメソッドを持ちません。

