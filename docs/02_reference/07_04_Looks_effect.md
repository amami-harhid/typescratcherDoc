---
outline: deep
---

# Looks(見た目)

## Looks.effect (画像効果操作)

### 画像効果の種類

```typescript:line-numbers

// 色の効果
Ts.ImageEffective.COLOR

// 魚眼レンズの効果
Ts.ImageEffective.FISHEYE

// 渦巻きの効果
Ts.ImageEffective.WHIRL

// ピクセルの効果
Ts.ImageEffective.PIXELATE

// モザイクの効果
Ts.ImageEffective.MOSAIC

// 明るさの効果
Ts.ImageEffective.BRIGHTNESS

// 幽霊の効果
Ts.ImageEffective.GHOST

```
### 画像効果をクリア

```typescript:line-numbers

// 画像効果をクリアする
sprite.Looks.effect.clear();


```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectClear.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

### 画像効果を設定する

```typescript:line-numbers

// 色の効果
sprite.Looks.effect.set(Ts.ImageEffective.COLOR, 50);

// 魚眼レンズの効果
sprite.Looks.effect.set(Ts.ImageEffective.FISHEYE, 50);

// 渦巻きの効果
sprite.Looks.effect.set(Ts.ImageEffective.WHIRL, 50);

// ピクセルの効果
sprite.Looks.effect.set(Ts.ImageEffective.PIXELATE, 50);

// モザイクの効果
sprite.Looks.effect.set(Ts.ImageEffective.MOSAIC, 50);

// 明るさの効果
sprite.Looks.effect.set(Ts.ImageEffective.BRIGHTNESS, 50);

// 幽霊の効果
sprite.Looks.effect.set(Ts.ImageEffective.GHOST, 50);

```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectSetColor.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectSetFisheye.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectSetWhirl.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectSetPixelate.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectSetMosaic.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectSetBrightness.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectSetGhost.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

### 画像効果を〇〇ずつ変える

```typescript:line-numbers

// 色の効果
sprite.Looks.effect.change(Ts.ImageEffective.COLOR, 50);

// 魚眼レンズの効果
sprite.Looks.effect.change(Ts.ImageEffective.FISHEYE, 50);

// 渦巻きの効果
sprite.Looks.effect.change(Ts.ImageEffective.WHIRL, 50);

// ピクセルの効果
sprite.Looks.effect.change(Ts.ImageEffective.PIXELATE, 50);

// モザイクの効果
sprite.Looks.effect.change(Ts.ImageEffective.MOSAIC, 50);

// 明るさの効果
sprite.Looks.effect.change(Ts.ImageEffective.BRIGHTNESS, 50);

// 幽霊の効果
sprite.Looks.effect.change(Ts.ImageEffective.GHOST, 50);

```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectChangeColor.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectChangeFisheye.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectChangeWhirl.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectChangePixelate.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectChangeMozaic.svg"/>
    </td>
    <td>
    <img class="block" src="/looksEffectChangeBrightness.svg"/>
    </td>
    </tr>
</tbody>
</table>
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksEffectChangeGhost.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
