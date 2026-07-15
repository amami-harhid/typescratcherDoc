---
outline: deep
---

# Looks(見た目)

## Looks.backdrop (背景操作)

```typescript:line-numbers
// 次の背景にする
sprite.Looks.backdrop.next(); 

// 指定した背景にする ( HogeBackdropImage にする )
sprite.Looks.backdrop.name = HogeBackdropImage.name;

// 指定した背景にする ( HogeBackdropImage にする )
sprite.Looks.backdrop.switch( HogeBackdropImage );

// 前の背景にする
sprite.Looks.backdrop.previous();

// どれかの背景にする
sprite.Looks.backdrop.switchRandom();

```
---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/backdropNext.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropSwitch.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/backdropPrevious.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropRandom.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

## 【Stage限定】Looks.backdrop (背景操作)

```typescript:line-numbers
// 次の背景にして待つ
await stage.Looks.backdrop.nextAndWait(); 

// 指定した背景にして待つ ( HogeBackdropImage にする )
await stage.Looks.backdrop.name = HogeBackdropImage.name;

// 指定した背景にして待つ ( HogeBackdropImage にする )
await stage.Looks.backdrop.switch( HogeBackdropImage);

// 前の背景にして待つ
await stage.Looks.backdrop.previousAndWait();

// どれかの背景にして待つ
await stage.Looks.backdrop.switchRandomAndWait();

```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/backdropNextWait.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropSwitchWait.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/backdropPreviousWait.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropRandomWait.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
