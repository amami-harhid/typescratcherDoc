---
outline: deep
---
# Sensing(調べる)

## Sensing.askAndWait (質問をして答えを待つ)

### Spriteが質問する

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        // スプライトが質問する
        const answer = await this.Sensing.askAndWait('何か答えて');
        if(answer == 'YES') {
            // ループを抜ける
            break;
        }
        console.log('Answer=', answer); // コンソールログへ答えを出力する
        yield;
    }
    console.log('おわり');
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingAskAndWait.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

::: tip スプライトが質問すると
質問内容は、スプライトの『フキダシ』で表示されます。
:::

### Stage

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Stage } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

// 旗が押されたときの『stage』のスレッド
stage.Event.flagPresser().func = async function*(this:Stage) {
    // ずっと繰り返す
    for( ;; ) {
        // ステージが質問する
        const answer = await this.Sensing.askAndWait('何か答えて');
        if(answer == 'YES') {
            // ループを抜ける
            break;
        }
        console.log('Answer=', answer); // コンソールログへ答えを出力する
        yield;
    }
    console.log('おわり');
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/sensingAskAndWait.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


::: tip ステージが質問すると
質問内容は、質問欄(トップ部)に表示されます。
:::
