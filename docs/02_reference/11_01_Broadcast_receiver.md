---
outline: deep
---
# Broadcast(メッセージ)

## Broadcast.reciever (メッセージを受信したときのスレッド定義)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite, Stage } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');
const stage = new Ts.Stage();

/** メッセージID */
const messageId = 'BroadcastTest';

// メッセージを受信したときの『cat』のスレッド
cat.Broadcast.reciever( messageId ).func = async function*(this:Sprite) {
    // ここにスレッドのコードを書く
}
// メッセージを受信したときの『stage』のスレッド
stage.Broadcast.reciever( messageId ).func = async function*(this:Stage) {
    // ここにスレッドのコードを書く
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/broadcastReceiver.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
