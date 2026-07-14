---
outline: deep
---

# Motion(動き)

Motionは次のメソッドを持ちます。

## Sprite.Motion

- Motion.position(座標)
- Motion.direction(角度)
- Motion.move(動かす)
- Motion.rotate(回転方法)

### Motion.position (座標)

#### [X座標,Y座標]を指定
```typescript:line-numbers

// [X座標,Y座標]を指定する
sprite.Motion.position.xy = [150, 100]; 

```
---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionX150Y100.svg"/>
    </td>
    </tr>
</table>

---

#### X座標を指定, Y座標を指定

```typescript:line-numbers

// X座標を指定する
sprite.Motion.position.x = 150; 

// Y座標を指定する
sprite.Motion.position.y = 100; 

```
---
<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionX150.svg"/>
    </td>
    <td>
    <img class="block" src="/positionY100.svg"/>
    </td>
    </tr>
</table>

---

#### X座標を◎ずつ変える, Y座標を◎ずつ変える

```typescript:line-numbers

// X座標を10ずつ変える
sprite.Motion.position.x += 10; 

// Y座標を10ずつ変える
sprite.Motion.position.y += 10; 

```
---
<table class="block">
    <tr>
    <td>
    <img class="block" src="/positionChangeX.svg"/>
    </td>
    <td>
    <img class="block" src="/positionChangeY.svg"/>
    </td>
    </tr>
</table>

---

### Motion.direction (角度)

#### 角度を設定

```typescript:line-numbers

// 角度を設定
sprite.Motion.direction.degree = 90; // 右向きにする

// 角度を◎ずつ変える（ 時計回り ）
sprite.Motion.position.y += 15; 

// 角度を◎ずつ変える（ 反時計回り ）
sprite.Motion.position.y -= 15; 

```

---

<table class="block">
    <tr>
    <td>
    <img class="block" src="/degree90.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/turnRight15.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/turnLeft15.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
---

### Motion.move (動かす)

```typescript:line-numbers

// 10歩動かす
sprite.Motion.move.steps(10);

// 指定した座標へ行く( [X座標, Y座標 ] )
sprite.Motion.move.to( [ 150, 100] )

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveSteps10.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/positionX150Y100.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>


```typescript:line-numbers

// 指定した秒数をかけて、指定した座標へ行く
// 第一引数(秒数)、第二引数( [X座標, Y座標 ] )
await sprite.Motion.move.glideTo( 1, [200, 50]);

// 指定した秒数をかけて、どこかの座標へ行く
// 第一引数(秒数)
await sprite.Motion.move.glideToRandom( 1 );

// 指定した秒数をかけて、マウスポインターの座標へ行く
// 第一引数(秒数)
await sprite.Motion.move.glideToMouse( 1 );

// 指定した秒数をかけて、他のスプライトの座標へ行く
// 第一引数(秒数)、第二引数( 他のスプライト )
await sprite.Motion.move.glideToMouse( 1, otherSprite );

```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideTo.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToRandom.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToMousePointer.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/glideToOtherSprite.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>

```typescript:line-numbers

// どこかの場所へ行く
sprite.Motion.move.toRandom();

// マウスポインターの場所へ行く
sprite.Motion.move.toMouse()

// 指定したスプライトの場所へ行く
sprite.Motion.move.toSprite( otherSprite );


```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveToRandom.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    <td>
    <img class="block" src="/moveToMousePointer.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/moveToOtherSprite.svg" style="min-width: 150px; margin: 5px;"/>
    </td>
    </tr>
</table>

---

```typescript:line-numbers
// 端についたら跳ね返る
sprite.Motion.move.ifOnEdgeBounce();

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/ifOnEdgeBounce.svg"/>
    </td>
    </tr>
</table>
<br>

---

### Motion.point (向ける)

```typescript:line-numbers
// マウスポインターへ向ける
sprite.Motion.point.toMouse();

// 他のスプライトの座標へ向ける
sprite.Motion.point.toSprite( otherSprite );

```
<table class="block">
    <tr>
    <td>
    <img class="block" src="/pointToMousePointer.svg"/>
    </td>
    <td>
    <img class="block" src="/pointToOtherSprite.svg"/>
    </td>
    </tr>
</table>
<br>

---

### Motion.rotate (回転方法)

```typescript:line-numbers

// 回転方法を「自由に回転」にする( 未指定の場合、「自由に回転」 )
sprite.Motion.Motion.rotation.style = Ts.Rotation.ALL_AROUND;

// 回転方法を「左右のみ」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT;

// 回転方法を「回転しない」にする
sprite.Motion.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
```

<table class="block">
    <tr>
    <td>
    <img class="block" src="/rotationAllaround.svg"/>
    </td>
    <td>
    <img class="block" src="/rotationLeftRight.svg"/>
    </td>
    </tr>
</table>
<table class="block">
    <tr>
    <td>
    <img class="block" src="/rotationDontRotate.svg"/>
    </td>
    </tr>
</table>

### Stage
StageはMotionメソッドを持ちません。

## ステージを作る

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

const stage = new Ts.Stage();

```
:::tip Stage 
`new Ts.Stage( )` のように 引数は無しです。<br><br>
スプライトの場合は名前を付けるために引数を渡しますが、ステージは１個だけの存在なので名前の引数は不要です。<br>
生成したインスタンスは、コンスタント宣言をしましょう（推奨）。

`const cat = ～` 

:::


## ステージ背景(backdrop)

イメージを読み込んだ後に、ステージへ背景(backdrop)を設定します。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// イメージを取り出す
import { WaterImage, BlueskyImage } from "./sub/images";

// ステージを作る
const stage = new Ts.Stage();

// 背景(Backdrop)へイメージを追加する
stage.Backdrop.add( [ WaterImage, BlueskyImage ] );
// これで、ステージ へ ２つの背景を持たせました。

```

:::tip Backdrop の渡し方
`stage.Backdrop.add( [ WaterImage, BlueskyImage ] )` と 背景イメージを配列で渡してください。<br><br>
背景が１個だけのときでも １個の要素を持つ配列を渡してください。<br>
`stage.Backdrop.add( [ WaterImage ] )`
<br>
<br>
最初に渡したイメージが、デフォルトの背景になります。
<br><br>
背景を１個も渡さないときは、ステージは存在はしますが、描画はされずに見えないままです。
:::

## 表示する背景を変える

::: tip 『Looks』(見た目)
背景の操作は『Looks』(見た目)系を使います。
:::

### 次の背景にする

---
<img class="left" src="/backdrop_next.svg" style="width:15%;"/>

---

```typescript:line-numbers

// 『次の背景にする』
stage.Looks.backdrop.next();

```

:::tip 次の背景にする
現在表示している背景の次の背景を表示します。<br>
最後の背景を表示しているとき、「次の背景」は先頭の背景です。<br>
:::


### 背景を◎◎にする

---
<img class="left" src="/backdrop_name.svg" style="width:30%;"/>

---

```typescript:line-numbers

// 『背景を◎◎にする』
// イメージの名前を指定する。
stage.Looks.backdrop.name = BlueskyImage.name;
// イメージはステージへ設定している背景である必要がある。

```

:::tip 背景を◎◎にする
指定する背景イメージは、背景追加『`stage.Backdrop.add( [～,～,] )`』にて追加している背景イメージとします<br>追加されていないイメージを指定した場合は、この処理の結果、何も変化しません。<br>
:::


### 背景を◎◎にして待つ

---
<img class="left" src="/backdrop_name_wait.svg" style="width:35%;"/>

---

```typescript:line-numbers

// 『背景を◎◎にして待つ』
async function*( this:Stage ) { 
    // ステージのスレッドのなかで実行する
    // 背景が切り替わったときのスレッドが終わるまで待つ。
    await this.Looks.backdrop.switchAndWait(BlueskyImage.name);
}

```

:::tip 背景を◎◎にして待つ
指定する背景イメージは、背景追加『`stage.Backdrop.add( [～,～,] )`』にて追加している背景イメージとします<br>追加されていないイメージを指定した場合は、この処理の結果、何も変化しません。<br>
:::

:::tip 背景が◎◎になったときのスレッド
背景が◎◎になったときのスレッドは別に定義しておきます。<br>
当該スレッド定義がない場合は、「待つ」ことはしません。
:::

### 背景が◎◎になったときのスレッド

---
<img class="left" src="/backdrop_when_change.svg" style="width:35%;"/>

---

```typescript:line-numbers
// 背景が◎◎になったときのスレッドの定義
stage.Event.backdropSwitcher(BlueSkyImage).func = async function*(this:Stage) {

}

```
:::tip 背景が◎◎になったときのスレッド
『`backdropSwitcher()`』の引数は、イメージインスタンスです。<br>
背景が切り替わったときに定義したスレッドが起動します。
:::
