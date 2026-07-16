---
outline: deep
---
# Sensing(調べる)

## Sensing.timer (タイマー 関連)

### タイマーリセットとタイマー値

タイマーは エンジンが起動してから、またはリセットしてからのミリ秒単位の時間です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    // タイマーをリセットする
    this.Sensing.timer.reset();

    // ずっと繰り返す    
    for( ;; ) {
        if( this.Sensing.timer.timer > 1500 ) { // ミリ秒
            // スレッド開始から 1500 秒経過していたら
            // ループを抜ける
            breka;
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingTimer_reset.svg"/>
    </td>
    <td>
    <img class="block" src="/sensingTimer_timer.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
