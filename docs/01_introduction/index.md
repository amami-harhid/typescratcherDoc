---
outline: deep
---
# TypeScracherとは何？

『`TypeScratcher`』は、コードプログラミングにより、Scratch3風の動きを実現する『`Typescript`』で書かれたゲームエンジンのライブラリです。

Scratch3のコアライブラリである『Scratch-Render』/『Scratch-Audio』を組み込んでおり、コードプログラミングでありながらも、Scratch3と同等の動きを提供可能です。<br>
<br>

![画像](/typescratcher_header.png)

## 作者(Amami-Harhid)より

Typescriptでプログラミングができるゲームエンジン『TypeScratcher』を作りました。

Scratch3に慣れ親しんだ方々のもつ、Scratch3のノウハウや感覚を、コードプログラミングでも生かしてもらいたいなぁ、そんなゲームエンジンがあったらいいなぁ！と思い立ち、開発に着手した次第です。

マニュアルをみなくても何となくコードをかけるように、TypeScratcherが必要なコードを教えてくれるよう、コード補完の恩恵をフル活用するため、Typescriptを使って実装しています。

なんとなくコードがかけてしまうので、Scratch3からコードプログラミングへの移行を助けてくれると思います。

Scratch3で書いていた「あのブロック」はどう書くのかな？を入口にして、コードプログラミングの世界へ進んでみてください。Scratch3を愛する方々におすすめの学習用ゲームエンジンだと思います。

利用条件は「ゆるーい」ものですので、子どもさんの教育にかかわる方々（学校・教室）も安心してご利用ください。後から「やっぱり金寄こせ」とは言いません。基本的に「無償」でご利用いただけます。

<br>
最初にアイデアを得て試行版ができたのが2024年初旬、評価を繰り返し、数回の全面作り直しを経て、2026年夏現在、それなりの仕上がりになってきたと思います。


TypeScratcherを楽しんでみてくださいね。

ＳＮＳ拡散希望よろしくです。

それと作者のことも応援してもらうととてもうれしいです(:smile:)

### 特徴

::: tip Scratch3に寄せた動き
- Scratch3風 ～ Scratch3でやれることを「同様に」で表現できることを目指しています
- イベント起動型 ～ イベントにより起動するスレッドが非同期/並列動作します
- 見えるままの衝突判定 ～ 見えている画像のままで衝突判定をします（Scratch3と同じ)
- 繰り返しループはフレームに連動 ～ フレームごとに繰り返しループを１回分処理します(Scratch3と同じ)
:::

::: warning プログラミングが楽
- 危ないコードを排除 ～ 危ないコードを教えてくれて、適切なコードに補正可能です(ESLINTを利用)。
- コーディングが楽 ～ Typescriptのコード補完により、候補メソッドを教えてくれます。
- 体系的なメソッド構成 ～ 提供するメソッドはScratch3のブロック群を参考にして構成されています。
:::




## 簡単なサンプル

<video width="100%" controls preload="metadata">
<source src="/sample01.mp4" type="video/mp4"></source>
</video>

**`index.ts`**
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";

// 画像を読み込みます。ここではScratch財団が公開してる画像URLを使います
const CatASvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/bcf454acf82e4504149f7ffe07081dbc.svg/get';
const BlueskySvg = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/e7c147730f19d284bcd7b3f00af19bb6.svg/get';

// イメージを作成します
const CatAImage = new Ts.Image({ CatASvg });
const BlueskyImage = new Ts.Image({ BlueskySvg });

// スプライトを作成します
const cat = new Ts.Sprite( "cat" );
cat.Costume.add( [CatAImage] ); // イメージ追加

// ステージを作成します
const stage = new Ts.Stage();
stage.Backdrop.add([BlueskyImage]); // 背景追加

// 旗クリックされたときのイベントを定義します
cat.Event.flagPresser().func = async function*(this: Sprite) {
    // ずっと繰り返す
    for(;;) {
        // Motion.move.steps: 指定した数だけ動かします
        this.Motion.move.steps(5);
        // Motion.move.ifOnEdgeBounce: もし端についていたら跳ね返る
        this.Motion.move.ifOnEdgeBounce();
        // 1フレーム単位で一時停止する
        yield; 
    }
}

// エンジンを開始します
Ts.engine.start();
```

::: tip コードプログラミングならでは
前半部 #1 ～ #18 は 素材の読み込みやスプライト作成などの事前準備のコードです。<br>
Scratch3では事前準備のステップが非常に簡単ですが、コードプログラミングではちょっと面倒ですね<br>
この準備作業は「はしょれない」ので、面倒といわずに付き合ってくださいね。
:::


### お勧めしたい方

Scratch3を卒業してコードプログラミング学習に進んだのはいいけれど、

- Scratch3と違いすぎて気持ちが折れちゃうよ
- コードプログラミングのゲームエンジンは敷居が高そうで

と思うことがありそうですよね。

TypeScratcherなら、慣れ親しんだScratch3のコードの書き方を思い出しながら、それをTypescriptに置き換えていけばコードが出来上っていくので、楽ですよ。


### Scratch Foundationとの関係

::: warning ライセンス上の宣言
『TypeScratcher』は『Scratch Foundation』とは一切関係がない『非公式』なゲームエンジンであり
、提携・承認・公式プロジェクトでもありませんので、あらかじめご承知おきください。<br><br>
本サイト内では、Scratch3アセットを使用していますが、これらは『CC BY-SA 2.0』ライセンスの元、『Scratch Foundation』が提供しているものです。本サイトではアセットの加工は一切行わずに『Scratch Foundation』提供のまま利用しておりますことを、ここで明示いたします。<br>
:::

### 本ライブラリの利用条件


::: warning 利用条件
本ライブラリは無償でご利用可能です（個人・商用の両方で）。<br>
:::

::: tip 権利とライセンス
作成者は個人「@amami-harhid」、諸権利は「MiraiLogic株式会社」「有限会社アイ.タイムズ」に帰属します。<br>
本ライブラリはライセンス「GPL-v3」です。ライセンスを逸脱しないご利用をお願いします。<br>
:::

::: warning 利用条件
第三者および不特定多数の方へ本ライブラリを使ったプログラム作品を提供する場合は、<br>ライセンス「GPL-v3」の条項にもとづき、<br>&nbsp;&nbsp;(1)「コードの公開義務」<br>&nbsp;&nbsp;(2) 作成者と権利者を「明示する義務」<br>があることに十分にご注意ください。
:::
