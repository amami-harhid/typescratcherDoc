---
outline: deep
---

# Control (制御)

### Control.stopThisScript (このスレッドを止める)

#### Sprite/Stage
```typescript:line-numbers

const hoge = new Ts.Sprite('hoge');
hoge.Event.flagPresser().func = async function*(this:Sprite) {

    for(const _idx of Ts.Loop.Iterator(100)) {
        if(_idx == 50) {
            // このスクリプトを止める
            this.Control.stopThisScript();
        }
        yield;
    }
}

```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/controlStopThisScript.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Control.stopOtherScripts (スプライトの他のスレッドを止める)

#### Sprite/Stage
```typescript:line-numbers

const hoge = new Ts.Sprite('hoge');

const fuga = new Ts.Sprite('fuga');

// 旗が押されたときのスレッド（hoge): スレッド０１
hoge.Event.flagPresser().func = async function*(this:Sprite) {
    // 『5秒間』待つ
    await this.Control.wait( 5 );
    // スクリプトの他のスクリプトを停止する 
    // → hogeの他のスクリプトを停止する
    this.Control.stopOtherScripts();
}

// 旗が押されたときのスレッド（hoge) : スレッド０２
hoge.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        this.Motion.move.steps(10); // 進む
        yield;
    }
}
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
// ◆◆ 5秒後にスレッド０２が終わる
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆

// 旗が押されたときのスレッド（hoge): スレッド０３
hoge.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        this.Motion.direction.degree += 5; // 回転する
        yield;
    }
}
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
// ◆◆ 5秒後にスレッド０３が終わる
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆

// 旗が押されたときのスレッド（fuga): スレッド０４
fuga.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        this.Motion.position.y += 5; // Y座標を +5 ずつ増やす
        yield;
    }
}
// ◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
// スレッド０４は『hoge』のスレッドではない
// よってスレッド０４は終わらない
// ◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇


```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/controlStopOtherScript.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---


### Control.stopAll (すべてのスクリプトを止める)

#### Sprite/Stage
```typescript:line-numbers

const hoge = new Ts.Sprite('hoge');

const fuga = new Ts.Sprite('fuga');

// 旗が押されたときのスレッド（hoge): スレッド０１
hoge.Event.flagPresser().func = async function*(this:Sprite) {
    // 『5秒間』待つ
    await this.Control.wait( 5 );
    // 全てのスクリプトを停止する 
    this.Control.stopAll();
}

// 旗が押されたときのスレッド（hoge) : スレッド０２
hoge.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        this.Motion.move.steps(10); // 進む
        yield;
    }
}
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
// ◆◆ 5秒後にスレッド０２が終わる
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆

// 旗が押されたときのスレッド（fuga): スレッド０３
fuga.Event.flagPresser().func = async function*(this:Sprite) {
    // ずっと繰り返す
    for( ;; ) {
        this.Motion.position.y += 5; // Y座標を +5 ずつ増やす
        yield;
    }
}
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
// ◆◆ 5秒後にスレッド０３が終わる
// ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆


```
<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/controlStopAll.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
