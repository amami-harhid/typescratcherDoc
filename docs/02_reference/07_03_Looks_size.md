---
outline: deep
---

# Looks(見た目)

## 【Sprite限定】Looks.size (サイズ操作)

### 大きさ（パーセンテージ）

```typescript:line-numbers
// 大きさ(パーセンテージ)を設定する ( 横150%, 縦150% )
sprite.Looks.size.scale = [150, 150]; 

// 大きさ(パーセンテージ)を設定する ( 横150%  )
sprite.Looks.size.scale.w = 150; 

// 大きさ(パーセンテージ)を設定する ( 縦150%  )
sprite.Looks.size.scale.h = 150; 
```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksSizeScale.svg"/>
    </td>
    </tr>
</tbody>
</table>

---


```typescript:line-numbers
// 大きさ(パーセンテージ)を〇〇ずつ変える ( 横10%  )
sprite.Looks.size.scale.w += 10; 

// 大きさ(パーセンテージ)を〇〇ずつ変える ( 縦10%  )
sprite.Looks.size.scale.h += 10; 
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksChangeScale.svg"/>
    </td>
    </tr>
</tbody>
</table>

### 大きさ（ピクセル）

```typescript:line-numbers
// スプライトのサイズ(ピクセルサイズ)を設定する
sprite.Looks.size.drawingSize = {w: 200, h: 200}; // 横、縦、200ピクセル

// スプライトの横サイズ(ピクセルサイズ)を設定する
sprite.Looks.size.drawingSize = {w: 200}; // 横　00ピクセル

// スプライトの縦サイズ(ピクセルサイズ)を設定する
sprite.Looks.size.drawingSize = {h: 200}; // 縦　00ピクセル

```
::: tip 矩形情報
パーセンテージではなく、ピクセル数で描画する大きさを指定します。<br>
例えば、コスチュームが異なる２つのスプライトの横サイズをぴったりと合わせたいとき、<br>
ステージの横幅にスプライトの横幅をぴったりと合わせたいとき、<br>
などのときに使うと便利です。 
:::

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

