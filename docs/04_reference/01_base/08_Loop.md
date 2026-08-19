---
outline: deep
---

# Loop ( 繰り返し )

### ずっと繰り返す

<table class="block_Y">
<tbody>
    <tr>
    <td>
    <img class="block_Y" src="/forever.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

スレッドの中で書くとします。

```typescript:line-numbers
sprite.Event.flagPresser().func = function( this : Sprite ) {

    // ずっと繰り返す
    for(;;) {
        // いろんな処理を書く
    }
}

stage.Event.flagPresser().func = function( this : Stage ) {

    // ずっと繰り返す
    for( ;; ) {
        // いろんな処理を書く
    }
}

```

::: tip 条件式
ずっと繰り返しの書き方は複数ありますが、`for( ;; )`の書き方を推奨します。<br><br>
※ 理由： 繰り返しは `for` で始まると統一したほうが覚えやすそう。<br>
<br>
その他の書き方の候補を参考として記載しておきます。<br>
```
while( true ) {
    // いろんな処理を書く
}
```
:::


### 指定した回数、繰り返す

<table class="block_Y">
<tbody>
    <tr>
    <td>
    <img class="block_Y" src="/forInterval.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


スレッドの中で書くとします。

```typescript:line-numbers
sprite.Event.flagPresser().func = function( this : Sprite ) {

    // 〇回繰り返す
    for( const _idx of Ts.Loop.Iterator( 10 ) ) { // 10回繰り返す
        // いろんな処理を書く
    }
}

// ↑  例文はspriteですが、stageでも同じ書き方です。

```
::: warning Ts.Loop.Iterator
『`Ts.Loop.Iterator( 10 )`』は、配列[0,1,2,3,4,5,6,7,8,9]を返す『TypeScratcher』のサポートメソッドです。<br>
<br>
```
for( const _idx of Ts.Loop.Iterator( 10 ) ) {
    console.log( `_idx=`, _idx );
}
```
<br>
上のコードは 次のログを出力します ( 10 行のログが出ます )<br>
_idx= 0<br>
_idx= 1<br>
_idx= 2<br>
途中省略<br>
_idx= 8<br>
_idx= 9<br>
:::


::: tip 条件式
〇回繰り返すの書き方<br>
`for( const _idx of 配列 )`<br>の書き方を推奨します。<br><br>
※ 理由： 必ずループが終わる！と保証されるため<br>
<br>
〇回の繰り返しは、`for...of`構文を使うことがベストです（推奨されています）。<br>
<br>
下のような書き方でも目的のコードになりますが、少し間違えるだけで永久ループに陥るリスクがあります。<br><br>
```
// idx++ を間違えて別の変数をインクリメントしてしまうと、下のループは永久に終わりません。
for(let idx = 0 ; idx < 10; idx++) {
    // いろんなコード
}
```
間違えて永久ループになってしまうことは絶対に避けるようにしてください。

:::


### 繰り返しの途中でループを抜ける

途中でループを抜けたいときは、『`break`』を使いましょう。

```typescript:line-numbers

sprite.Event.flagPresser().func = function( this: Sprite ) {

    for( ;; ) {
        // いろんなコードを書く
        this.Motion.move.steps(10); // 10 進める
        // (↓)端に触れたときのIF文
        if( this.Sensing.edge.isTouching ) {
            // 端に触れたなら
            // 繰り返しを抜ける
            break;
        }
    }
}
```
::: tip 繰り返しを抜ける

『`break`』のところで、繰り返しを抜けます。

::: 

### 繰り返しの途中でループ内の処理をスキップ

ループの途中で以降の処理をスキップしたいときは、『`continue`』を使いましょう。

```typescript:line-numbers

sprite.Event.flagPresser().func = function( this : Sprite ) {

    for( ;; ) {
        this.Motion.move.steps( 10 ); // 10 進める
        // (↓)端に触れたときのIF文
        if( this.Sensing.edge.isTouching ) {
            // 端に触れたなら
            // コード(B)をスキップし、次の繰り返しに入ります。
            continue;
        }
        // いろんなコード(B)を書く
    }
}
```
::: tip 繰り返しをスキップ

『`continue`』のところで、繰り返しをスキップします。

::: 



### ループの入れ子

<table class="block" style="height:200px;" >
<tbody>
    <tr>
    <td>
    <img class="block_Y" src="/forNesting.svg"  style="height:180px;"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>


例えば二重ループは次のように書きます。<br>
『Scratch3』流とするには、すべての繰り返しの最後に『`yield`』(次のフレームになるまで停止して待つ)が必要です。

```typescript:line-numbers
sprite.Event.flagPresser().func = function( this: Sprite ) {

    //　ずっと繰り返す (内部で〇回繰り返す)
    for( ;; ) {

        // 10回繰り返す
        for( const _idx of Ts.Loop.Iterator( 10 ) ) {
            // スプライトの大きさ(幅)を 5%ずつ大きくする
            this.Looks.size.scale.w += 5;
        }
        
        // 10回繰り返す
        for( const _idx of Ts.Loop.Iterator( 10 ) ) {
            // スプライトの大きさ(幅)を 5%ずつ小さくする
            this.Looks.size.scale.w -= 5;            
        }

    }
}
```
