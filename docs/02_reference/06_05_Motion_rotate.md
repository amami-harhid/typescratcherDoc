---
outline: deep
---

# Motion(動き)

## Motion.rotate (回転方法)

```typescript:line-numbers

// 回転方法を「自由に回転」にする( 未指定の場合、「自由に回転」 )
sprite.Motion.Motion.rotation.style = Ts.Rotation.ALL_AROUND;

// 回転方法を「左右のみ」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT;

// 回転方法を「回転しない」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/rotationAllaround.svg"/>
    </td>
    <td>
    <img class="block" src="/rotationLeftRight.svg"/>
    </td>
    </tr>
    <tr>
        <td>
            <img class="block" src="/rotationDontRotate.svg"/>
        </td>
        <td>
        </td>
    </tr>
</tbody>
</table>

