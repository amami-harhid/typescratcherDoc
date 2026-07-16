---
outline: deep
---
# Sensing(調べる)

## Sensing.keyboard (キーボード 関連)

### キーが押されているかの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.edge.isDown(Ts.Keyboard.SPACE) ) {
            // Trueのときキーが押されている
            this.Motion.direction.degree *= -1; // 向きを反転させる
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingKeyboardDown.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

#### 『`Ts.Keyboard`』
次のキーの指定ができます。

|キー      | Ts.Keyboard       |
|----------|-------------------|
|スペース   | Ts.Keyboard.SPACE|
|左矢印キー | Ts.Keyboard.LEFT|
|右矢印キー | Ts.Keyboard.RIGHT  |
|上矢印キー | Ts.Keyboard.UP  |
|下矢印キー | Ts.Keyboard.DOWN  |
|エンターキー | Ts.Keyboard.ENTER  |
|エスケープキー | Ts.Keyboard.ESCAPE |


### どれかのキーが押されているかの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.edge.isDown(Ts.Keyboard.ANY) ) {
            // どれかのキーが押されていたらTrueが返る
            this.Motion.direction.degree *= -1; // 向きを反転させる
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingKeyboardDownAny.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


