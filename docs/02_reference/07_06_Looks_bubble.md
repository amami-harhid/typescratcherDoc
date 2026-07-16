---
outline: deep
---

# Looks(見た目)

## 【Sprite限定】Looks.bubble (フキダシ操作)

### フキダシを表示する

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksBubbleSay.svg"/>
    </td>
    <td>
    <img class="block" src="/looksBubbleThink.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
// 言う
sprite.Looks.bubble.say('こんにちは'); 

// 考える
sprite.Looks.bubble.think('うーん...'); 

```

---


### フキダシを〇秒、表示する

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksBubbleSayAndWait.svg"/>
    </td>
    <td>
    <img class="block" src="/looksBubbleThinkAndWait.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
// 〇秒、言う
await sprite.Looks.bubble.sayForSecs('こんにちは', 2 ); // 2秒、言う 

// 〇秒、考える
await sprite.Looks.bubble.thinkForSecs('うーん...', 2 ); // 2秒、考える

```


---

### フキダシを消す

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksBubbleSayClear.svg"/>
    </td>
    <td>
    <img class="block" src="/looksBubbleThinkClear.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
// 消す
sprite.Looks.bubble.say( '' ); 

// 消す
sprite.Looks.bubble.think( '' );

```


---

### スプライトの大きさに自動で連動

スプライトの大きさが変化するとき、それに自動連動してフキダシの大きさを変えることができます。

```typescript:line-numbers
// スプライトの大きさに連動させる
Ts.Env.bubbleScaleLinkedToSprite = true;

```

::: tip スプライトの大きさに連動
フキダシの大きさは、スプライトの大きさの絶対値としています。<br>
<br>
TypeScratcherでは スプライトの大きさとして マイナス値を指定できます。<br>
スプライトの大きさがマイナスの場合、スプライトの向きが反転する効果を得られるが、フキダシを反転させるとフキダシの文字も裏返ってしまう弊害を生じます。<br>
文字を裏返さない(左右反転、上下反転をさせない)ように、マイナスの大きさはプラスの大きさに変える仕様です。

:::

### スプライトの大きさを個別に指定

フキダシを表示する都度、大きさ（横・縦）をパーセンテージで指定することが可能です。<br>

『`Ts.Env.bubbleScaleLinkedToSprite = true`』の場合でも、個別の指定が優先されます。

```typescript:line-numbers
// 言う
// 横150%, 縦 50%
sprite.Looks.bubble.say(
                        'こんにちは', 
                        {scale: {w: 150,  h: 50 } });

// 考える
// 横150%, 縦 50%
sprite.Looks.bubble.think(
                        'うーん...', 
                        {scale: {w: 150,  h: 50 } }); 

// 〇秒、言う
// 横150%, 縦 50%
await sprite.Looks.bubble.sayForSecs(
                            'こんにちは', 2, 
                            {scale: { w: 150,  h: 50 } }); 

// 〇秒、考える
// 横150%, 縦 50%
await sprite.Looks.bubble.thinkForSecs(
                            'うーん...', 2, 
                            {scale: {w: 150,  h: 50 } });

```



