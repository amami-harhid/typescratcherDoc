---
outline: deep
---

# Stage(ステージ)

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
