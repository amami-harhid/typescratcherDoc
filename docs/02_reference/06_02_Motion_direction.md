---
outline: deep
---

# Motion(動き)

## Motion.direction (角度)

### 角度を設定

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
<tbody>
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
</tbody>
</table>
---
