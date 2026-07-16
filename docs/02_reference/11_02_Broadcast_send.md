---
outline: deep
---
# Broadcast(メッセージ)

## Broadcast.send (メッセージを送る)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    await this.Control.wait(10); // 10秒待つ
    // メッセージを送る
    this.Broadcast.send( messageId );
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = async function*(this:Sprite) {
    this.Looks.bubble.say('メッセージ受信した');
}
```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/broadcastSend.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

## Broadcast.sendAndWait (メッセージを送り、終わるまで待つ)

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    await this.Control.wait(10); // 10秒待つ
    // メッセージを送る
    await this.Broadcast.sendAndWait( messageId );
    // 『２秒間言う』が終わった
    console.log('終わり')
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = async function*(this:Sprite) {
    // 2秒間言う
    await this.Looks.bubble.sayForSecs('メッセージ受信した', 2); 
}
```

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/broadcastSendAndWait.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
