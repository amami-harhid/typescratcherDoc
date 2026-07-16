---
outline: deep
---
# Looks(見た目)

## 【Sprite限定】Looks.costume (コスチューム操作)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/costumeNext.svg"/>
    </td>
    <td>
    <img class="block" src="/costumeSwitch.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
// 次のコスチュームにする
sprite.Looks.costume.next(); 

// 指定したコスチュームにする ( HogeImage にする )
sprite.Looks.costume.name = HogeImage.name;

// 指定したコスチュームにする ( HogeImage にする )
sprite.Looks.costume.switch( HogeImage );

```

---
