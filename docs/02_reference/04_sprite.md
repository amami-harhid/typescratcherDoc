---
outline: deep
---

# Sprite(スプライト)

## スプライトを作る

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

const cat = new Ts.Sprite('cat');

```
:::tip Sprite への渡し方
`new Ts.Sprite( 'cat' )` と スプライトの名前を引数で渡してください。<br><br>
スプライトの名前は、他のスプライトの名前と重複しても動作上の問題はありませんが、デバッグ時に『名前』を見たいときがありますので、面倒でない範囲で、区別がつくような名前にしたほうがよいです（推奨）。<br>
<br>

生成したインスタンスは、コンスタント宣言をしましょう（推奨）。

`const cat = ～` 

:::


## スプライトコスチューム

イメージを読み込んだ後に、スプライトへコスチュームを設定します。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// イメージを取り出す
import { CatAImage, Cat2Image } from "./sub/images";

// スプライトを作る
const cat = new Ts.Sprite('cat');

// コスチュームを設定する
cat.Costume.add( [ CatImage, Cat2Image ] );
// これで、スプライトcat に ２つのコスチュームを持たせました。

```

:::tip Costume の渡し方
`cat.Costume.add( [ CatImage, Cat2Image ] )` と イメージを配列で渡してください。<br><br>
コスチューム１個だけのときでも １個の要素を持つ配列を渡してください。<br>
`cat.Costume.add( [ CatImage ] )`
<br>
<br>
最初に渡したイメージが、デフォルトのコスチュームになります。
<br><br>
コスチュームを１個も渡さないときは、スプライトは姿がなく、見えないままですので、何かのイメージをコスチュームとして渡すべきです。

:::

## スプライトの座標

スプライトの座標を設定できます。

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/positionX150Y100.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

座標の位置はScratch3と同じです(中央が(X:0, Y:0))

```typescript:line-numbers

// スプライトを作る
const cat = new Ts.Sprite('cat');
// 座標を設定する
cat.Motion.position.xy = [ 150, 100 ];

```
:::tip Motion(動き)系
動き系のメソッドは、Motionを経由して参照します。
動かす、座標を設定する、回転させる、向ける、などは Motionに属します。
:::


## スプライトの大きさ

スプライトの大きさを設定できます（パーセンテージ）。

```typescript:line-numbers

// スプライトを作る
const cat = new Ts.Sprite('cat');
// 座標を設定する
cat.Looks.scale.size = [ 50, 150 ]; // 横50%, 縦150%

```
:::tip Looks(見た目)系
見た目系のメソッドは、Looksを経由して参照します。<br>
コスチュームを変える、大きさを設定する、色を変える、言う（考える）などは Looksに属します。
:::

:::tip Looks.scale.size (大きさのサイズ)
大きさ(サイズ)は、TypeScratcherでは、横方向の大きさ、縦方向の大きさを別々にパーセンテージで指定します。<br><br>
また、TypeScratcherでは、マイナスの大きさも指定できます。<br><br>
マイナスの大きさを設定するとき、横方向のときは左右反転、縦方向のときは上下反転します。
:::

