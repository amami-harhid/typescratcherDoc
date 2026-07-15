---
outline: deep
---
# Motion(動き)

## Motion.point (向ける)

```typescript:line-numbers
// マウスポインターへ向ける
sprite.Motion.point.toMouse();

// 他のスプライトの座標へ向ける
sprite.Motion.point.toSprite( otherSprite );

// ランダムな方向へ向く
sprite.Motion.point.toRandom();

```
<table class="block">
    <tbody>
        <tr>
            <td>
                <img class="block" src="/pointToMousePointer.svg"/>
            </td>
            <td>
                <img class="block" src="/pointToOtherSprite.svg"/>
            </td>
        </tr>
    </tbody>
</table>
<table class="block">
    <tbody>
        <tr>
            <td>
                <img class="block" src="/motionPointToRandom.svg"/>
            </td>
        </tr>
    </tbody>
</table>
<br>

---
