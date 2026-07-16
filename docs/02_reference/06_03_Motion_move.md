---
outline: deep
---

# Motion(動き)

## Motion.move (動かす)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/moveSteps10.svg"/>
    </td>
    <td>
    <img class="block" src="/positionX150Y100.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers

// 10歩動かす
sprite.Motion.move.steps(10);

// 指定した座標へ行く( [X座標, Y座標 ] )
sprite.Motion.move.to( [ 150, 100] )

```

### スライド移動

<table class="block">
<tbody>
<tr>
    <td>
    <img class="block" src="/glideTo.svg"/>
    </td>
    <td>
    <img class="block" src="/glideToRandom.svg"/>
    </td>
</tr>
<tr>
    <td>
    <img class="block" src="/glideToMousePointer.svg"/>
    </td>
    <td>
    <img class="block" src="/glideToOtherSprite.svg"/>
    </td>
</tr>
</tbody>
</table>

---

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


### ランダムに移動

<table class="block">
<tbody>
<tr>
    <td>
    <img class="block" src="/moveToRandom.svg"/>
    </td>
    <td>
    <img class="block" src="/moveToMousePointer.svg"/>
    </td>
</tr>
<tr>
    <td>
    <img class="block" src="/moveToOtherSprite.svg"/>
    </td>
    <td>
    </td>
</tr>
</tbody>
</table>

---

```typescript:line-numbers

// どこかの場所へ行く
sprite.Motion.move.toRandom();

// マウスポインターの場所へ行く
sprite.Motion.move.toMouse()

// 指定したスプライトの場所へ行く
sprite.Motion.move.toSprite( otherSprite );


```

---

### 跳ね返る

<table class="block">
    <tbody>
        <tr>
            <td>
                <img class="block" src="/ifOnEdgeBounce.svg"/>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

---

```typescript:line-numbers
// 端についたら跳ね返る
sprite.Motion.move.ifOnEdgeBounce();

```

---
