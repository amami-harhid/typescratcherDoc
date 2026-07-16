---
outline: deep
---
# Sensing(調べる)

## Sensing.color (色 関連)

### 『色』に触れていることの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const targetColor = '#000000'; // 黒色

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        // マウスポインターの方向へ向く
        this.Motion.point.toMouse(); 
        // ターゲットの色に触れたか？
        if( this.Sensing.color.isTouching( targetColor ) ) {
            // Trueのとき色にふれている
            // どこかに行く
            this.Motion.move.toRandom();
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingColorTouch.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


### 『色』が『色』に触れていることの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const maskColor = '#ff0000'; // 赤色

const targetColor = '#000000'; // 黒色

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        // マウスポインターの方向へ向く
        this.Motion.point.toMouse(); 
        // マスク色がターゲットの色に触れたか？
        if( this.Sensing.color.isTouchingBy( maskColor, targetColor ) ) {
            // Trueのとき色にふれている( 赤色が 黒色に触れている)
            // どこかに行く
            this.Motion.move.toRandom();
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingColorTouchColor.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
