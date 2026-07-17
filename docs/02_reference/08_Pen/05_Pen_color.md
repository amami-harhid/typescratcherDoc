---
outline: deep
---

# Pen(ペン)

## Pen.HSVColor ( カラー )

### Pen.HSVColor.hsv ( hsvカラー値を設定 )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penColor.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const thread = async function*(this:Sprite) {
    // HSVカラー値を設定する
    this.Pen.HSVColor.hsv = {
        hue: 67,          // 色
        saturation: 95,   // 鮮やかさ
        brightness: 73,   // 明るさ
        transparency: 0,  // 透明度
    }; 
} 

```



### Pen.HSVColor.hue ( 色相 )

---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penHueSetter.svg"/>
    </td>
    <td>
    <img class="block" src="/penHueChange.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const threadA = async function*(this:Sprite) {
    this.Pen.HSVColor.hue = 10; // HSV(色相)を設定する
} 
const threadB = async function*(this:Sprite) {
    this.Pen.HSVColor.hue += 10; // HSV(色相)を10ずつ変える
} 

```

---

### Pen.HSVColor.saturation ( 彩度 )

---

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penSaturationSetter.svg"/>
    </td>
    <td>
    <img class="block" src="/penSaturationChange.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const threadA = async function*(this:Sprite) {
    this.Pen.HSVColor.saturation = 10; // HSV(彩度)を設定する
} 
const threadB = async function*(this:Sprite) {
    this.Pen.HSVColor.saturation += 10; // HSV(彩度)を10ずつ変える
} 
```


### Pen.HSVColor.brightness ( 明度 )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penBrightnessSetter.svg"/>
    </td>
    <td>
    <img class="block" src="/penBrightnessChange.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const threadA = async function*(this:Sprite) {
    this.Pen.HSVColor.saturation = 10; // HSV(彩度)を設定する
} 
const threadB = async function*(this:Sprite) {
    this.Pen.HSVColor.saturation += 10; // HSV(彩度)を10ずつ変える
} 
```

---

### Pen.HSVColor.transparency ( 透明度 )

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/penTransparencySetter.svg"/>
    </td>
    <td>
    <img class="block" src="/penTransparencyChange.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const threadA = async function*(this:Sprite) {
    this.Pen.HSVColor.transparency = 10; // HSV(透明度)を設定する
} 
const threadB = async function*(this:Sprite) {
    this.Pen.HSVColor.transparency += 10; // HSV(透明度)を10ずつ変える
} 

