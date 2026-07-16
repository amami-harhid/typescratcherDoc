---
outline: deep
---
# Sensing(調べる)

## Sensing.sprite (スプライト 関連)

### スプライトに触れているかの判定

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const dog = new Ts.Sprite('dog');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {
        // スプライト『dog』に触れているかの判定
        if( this.Sensing.sprite.isTouching( [dog] ) ) {
            // Trueのとき『dog』に触れている
            // 非表示にする
            this.Looks.visible.hide();
        }
        yield;
    }
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingSpriteTouch.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### スプライトとの距離

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

const dog = new Ts.Sprite('dog');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す    
    for( ;; ) {

        // スプライト『dog』までの距離
        const _disatnce = this.Sensing.sprite.distance( dog );
        
        if( _distance < 20 ) {
            // 『dog』までの距離が 20未満になったときは
            //  ループを抜ける（スレッドが終わる）
            break;
        }
        yield;
    }
}
```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingSpriteDistance.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---