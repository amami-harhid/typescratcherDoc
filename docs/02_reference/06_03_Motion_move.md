---
outline: deep
---

# Motion(動き)

## Motion.move (動かす)

```typescript:line-numbers

// 10歩動かす
sprite.Motion.move.steps(10);

// 指定した座標へ行く( [X座標, Y座標 ] )
sprite.Motion.move.to( [ 150, 100] )

```
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

### スライド移動

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
<tbody>
<tr>
    <td style="width:80%;">
    <img class="block" src="/glideTo.svg"/>
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    <img class="block" src="/glideToRandom.svg"/>
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    <img class="block" src="/glideToMousePointer.svg"/>
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    <img class="block" src="/glideToOtherSprite.svg"/>
    </td>
    <td>
    </td>
</tr>
</tbody>
</table>

### ランダムに移動

```typescript:line-numbers

// どこかの場所へ行く
sprite.Motion.move.toRandom();

// マウスポインターの場所へ行く
sprite.Motion.move.toMouse()

// 指定したスプライトの場所へ行く
sprite.Motion.move.toSprite( otherSprite );


```
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
    <img class="block" src="/moveToOtherSprite.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### 跳ね返る

```typescript:line-numbers
// 端についたら跳ね返る
sprite.Motion.move.ifOnEdgeBounce();

```
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
<br>

---
