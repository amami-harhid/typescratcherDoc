---
outline: deep
---

# Looks(見た目)

Looksは次のメソッドを持ちます。

## sprite.Looks

- Looks.costume (コスチューム操作)
- Looks.backdrop (背景操作)
- Looks.size (サイズ操作)
- Looks.effect ( 画像効果操作 )
- Looks.layer (階層操作)
- Looks.bubble ( フキダシ操作 )
- Looks.show() ( 表示する )
- Looks.hide() ( 隠す )

## stage.Looks

- Looks.backdrop (背景操作)
- Looks.effect ( 画像効果操作 )

## 【Sprite限定】Looks.costume (コスチューム操作)

```typescript:line-numbers
// 次のコスチュームにする
sprite.Looks.costume.next(); 

// 指定したコスチュームにする ( HogeImage にする )
sprite.Looks.costume.name = HogeImage.name;
```
---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/costumeNext.svg"/>
    </td>
    <td>
    <img class="block" src="/costumeSwitch.svg"/>
    </td>
    </tr>
</table>
---

## Looks.backdrop (背景操作)

```typescript:line-numbers
// 次の背景にする
sprite.Looks.backdrop.next(); 

// 指定した背景にする ( HogeBackdropImage にする )
sprite.Looks.backdrop.name = HogeBackdropImage.name;

// 前の背景にする
sprite.Looks.backdrop.previous();

// どれかの背景にする
sprite.Looks.backdrop.switchRandom();

```
---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/backdropNext.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropSwitch.svg"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/backdropPrevious.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropRandom.svg"/>
    </td>
    </tr>
</table>

---

## 【Stage限定】Looks.backdrop (背景操作)

```typescript:line-numbers
// 次の背景にして待つ
await stage.Looks.backdrop.nextAndWait(); 

// 指定した背景にして待つ ( HogeBackdropImage にする )
await stage.Looks.backdrop.name = HogeBackdropImage.name;

// 前の背景にして待つ
await stage.Looks.backdrop.previousAndWait();

// どれかの背景にして待つ
await stage.Looks.backdrop.switchRandomAndWait();

```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/backdropNextWait.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropSwitchWait.svg"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/backdropPreviousWait.svg"/>
    </td>
    <td>
    <img class="block" src="/backdropRandomWait.svg"/>
    </td>
    </tr>
</table>

---


## 【Sprite限定】Looks.size (サイズ操作)

```typescript:line-numbers
// 大きさ(パーセンテージ)を設定する ( 横150%, 縦150% )
sprite.Looks.size.scale = [150, 150]; 
```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/looksSizeScale.svg"/>
    </td>
    </tr>
</table>

---

```typescript:line-numbers
// 大きさ(パーセンテージ)を設定する ( 横150%  )
sprite.Looks.size.scale.w = 150; 

// 大きさ(パーセンテージ)を設定する ( 縦150%  )
sprite.Looks.size.scale.h = 150; 
```

```typescript:line-numbers
// スプライトのサイズ(ピクセルサイズ)を設定する
sprite.Looks.size.w = 200; // 200ピクセル

```

### 矩形情報

```typescript:line-numbers
// スプライトの矩形情報を得る
const bounds = sprite.Looks.size.drawingSize;
```

::: tip 矩形情報
以下の情報を得ることができます。<br>
<br>
width:  スプライト矩形の幅(ピクセル)<br>
height: スプライト矩形の高さ(ピクセル)<br>
left:   スプライト矩形の左辺 X座標<br>
bottom: スプライト矩形の右辺 X座標<br>
top:    スプライト矩形の上辺 Y座標<br>
bottom: スプライト矩形の下辺 Y座標<br>
:::

::: warning 【要注意】
この情報は スレッドの中でのみ利用可能です。<br>
スレッド外で実行した場合、正しい値を得ることができません。
:::

