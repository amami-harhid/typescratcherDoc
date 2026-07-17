---
outline: deep
---
# Broadcast(メッセージ)

## Broadcast.send with params<br>(引数付きでメッセージを送る)

::: tip 引数付きのメッセージ送受信
Scratch3 本家では、メッセージ送受信時に引数（可変パラメーター）を一緒に渡すことができません。<br>
これは『TypeScratcher』独自仕様です。
:::

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    await this.Control.wait(10); // 10秒待つ
    const bubbleMessage = 'メッセージ受信した';
    // メッセージを送る
    this.Broadcast.send( messageId, bubbleMessage );
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = async function*(this:Sprite, 
    bubbleMessage: string) {

    // 渡された文字列を使って『言う』
    this.Looks.bubble.say( bubbleMessage );
}
```

---

## Broadcast.sendAndWait with params <br>(引数付きでメッセージを送り、終わるまで待つ)

::: tip 引数付きのメッセージ送受信
Scratch3 本家では、メッセージ送受信時に引数（可変パラメーター）を一緒に渡すことができません。<br>
これは『TypeScratcher』独自仕様です。
:::

---

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

/** メッセージID */
const messageId = 'BroadcastTest';

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = async function*(this:Sprite) {

    await this.Control.wait(10); // 10秒待つ
    const bubbleMessage = 'メッセージ受信した';
    const bubbleSec = 2;
    // メッセージを送って待つ
    await this.Broadcast.sendAndWait( messageId, bubbleSec );// 引数２つ
    // 『変数を使って言う』が終わった
    console.log('終わり')
}

// メッセージ『messageId』を受信したときの『cat』のスレッド
cat.Broadcast.receiver( messageId ).func = async function*(this:Sprite, 
    bubbleMessage: string, bubbleSec: number) {

    // 渡された文字列を使って『言う』
    // 渡された秒数の間、言う
    await this.Looks.bubble.sayForSecs('メッセージ受信した', bubbleSec); 
}
```

