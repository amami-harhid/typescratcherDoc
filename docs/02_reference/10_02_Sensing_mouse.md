---
outline: deep
---
# Sensing(調べる)

## Sensing.mouse (マウス 関連)

### マウスが押されていることの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.mouse.isDown ) {
            // Trueのとき『マウス』が押されている
            this.Looks.visible.hide(); // 隠す
            break; // ループを抜ける
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseDown.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Stage } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

// 旗が押されたときの『stage』のスレッド
stage.Event.flagPresser().func = async function*(this:Stage) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.mouse.isDown ) {
            // Trueのとき『マウス』が押されている
            break; // ループを抜ける
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseDown.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### マウス座標（X座標、Y座標）

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.mouse.isDown ) {
            // マウスが押されたとき
            const _x = this.Sensing.mouse.x; // マウスのX座標
            const _y = this.Sensing.mouse.y; // マウスのY座標
            // マウスが押されたとき、マウス座標へスプライト移動させる
            this.Mouse.position.xy = [_x, _y];
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseX.svg"/>
    </td>
    <td>
    <img class="block" src="/sensingMouseY.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Stage } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

// 旗が押されたときの『stage』のスレッド
stage.Event.flagPresser().func = async function*(this:Stage) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.mouse.isDown ) {
            // マウスが押されたとき
            const _x = this.Sensing.mouse.x; // マウスのX座標
            const _y = this.Sensing.mouse.y; // マウスのY座標
            if(_x < -200 ) {
                // マウスX座標が -200 未満のとき
                // スレッドループを抜ける
                break;
            }
            if(_y < -150 ) {
                // マウスY座標が -150 未満のとき
                // スレッドループを抜ける
                break;
            }
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseX.svg"/>
    </td>
    <td>
    <img class="block" src="/sensingMouseY.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

### 【Sprite限定】マウスタッチしていることの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.mouse.isTouching ) {
            // Trueのとき『マウス』にふれている
            this.Looks.visible.hide(); // 隠す
            break; // ループを抜ける
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseTouching.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### 【Sprite限定】マウスポインターまでの距離

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const distanceVal = Ts.Variable.number(0);
Ts.Variable.monitoring(distanceVal);

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        // マウスポインターまでの距離
        const distance = this.Sensing.mouse.distance;
        if( distance < 20 ) {
            // 距離が20未満になったらループを抜ける
            break;
        }
        // 変数表示欄に『距離』を表示する
        distanceVal.value = distance;
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingMouseDistance.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### 【Sprite限定】マウスポインターへの向き

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        // マウスポインターへの向き
        const _degree = this.Sensing.mouse.degree;
        // スプライトの向きを マウスポインターへの向きにする
        this.Motion.direction.degree = _degree;
        yield;
    }
}
```

---

::: tip マウスポインターへの向き
『スプライトの向きをマウスポインターへの向きにする』は、<br>
```typescript
Motion.point.toMouse();
```
と同じ結果になる。

:::

