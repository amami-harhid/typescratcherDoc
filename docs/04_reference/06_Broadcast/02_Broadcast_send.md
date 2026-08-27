---
outline: deep
---
# Broadcast(メッセージ)

## Broadcast.send (メッセージを送る)

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

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite( 'cat' );

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = function( this : Sprite ) {

    this.Control.wait( 10 ); // 10秒待つ
    // ※ TypsScratcherにより自動的に『await』が付きます

    // メッセージを送る
    this.Broadcast.send( messageId );
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = function( this : Sprite ) {
    this.Looks.bubble.say( 'メッセージ受信した' );
}
```
---

## Broadcast.sendAndWait (メッセージを送り、終わるまで待つ)

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

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite( 'cat' );

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = function( this : Sprite ) {

    this.Control.wait( 10 ); // 10秒待つ
    // ※ TypsScratcherにより自動的に『await』が付きます

    // メッセージを送って待つ
    this.Broadcast.sendAndWait( messageId );
    // ※ TypsScratcherにより自動的に『await』が付きます

    // 『２秒間言う』が終わった
    console.log( '終わり' )
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = function( this : Sprite ) {
    // 2秒間言う
    this.Looks.bubble.sayForSecs( 'メッセージ受信した', 2 ); 
    // ※ TypsScratcherにより自動的に『await』が付きます
}

// 開始
Ts.engine.start();
```

---
