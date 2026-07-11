---
outline: deep
---
## TypeScracherとは

TypeScratcherは、Scratch3のRender処理、Audio処理を組み込んだ、Scratch3風の動きを再現できるようにしたTypescriptゲームエンジンです。

![画像](/typescratcher_header.png)

Scratch3を愛する人間を代表して、Typescriptでプログラミングができる『TypeScratcher』を作りました。

Scratch3に慣れ親しんだ方のScratch3のノウハウを、そのままコードプログラミングでも生かしていけるゲームエンジンが欲しい！と思い立ち、開発を始めた次第です。

最初にアイデアを得て評価版ができたのが2024年初旬、評価を繰り返す中で構想見直し+全面作り直し経て、2026年夏現在、それなりの仕上がりになりました。

是非、お使いください(:smile:)

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


## お勧めしたい方

Scratch3を卒業してコードプログラミング学習に進んだのはいいけれど、なんか味気ないんだよな・・と思う人へおすすめ。

コードプログラミングのゲームエンジンは敷居が高そうで・・と思うことがありそうですよね。

慣れ親しんだScratch3のコードの書き方を思い出しながら、それをTypescratcherに置き換えていけばいいので。

## 特徴

::: tip Scratch3に寄せた動き
- Scratch3風 ～ Scratch3でやれることを「同様に」で表現できることを目指しています
- イベント起動型 ～ イベントにより起動するスレッドが非同期/並列動作します
- 見えるままの衝突判定 ～ 見えている画像のままで衝突判定をします（Scratch3と同じ)
- 繰り返しループはフレームに連動 ～ フレームごとに繰り返しループを１回分処理します(Scratch3と同じ)
:::

::: tip Scratch3に寄せた動き
- 見えるままの衝突判定 ～ 見えている画像のままで衝突判定をします（Scratch3と同じ)
- 繰り返しループはフレームに連動 ～ フレームごとに繰り返しループを１回分処理します(Scratch3と同じ)
:::

::: tip プログラミングが楽
- コーディングが楽 ～ Typescriptの型を活用したコード補完ができます
- 危ないコードを排除 ～ ELINTを活用して危ないコードを自動で警告します
:::


## 利用されるうえで
::: warning 免責
『TypeScratcher』は『Scratch Foundation』とは一切関係がない『非公式』なゲームエンジンです。<br>
また提携・承認・公式プロジェクトでもありません。
:::

::: tip 利用条件
本ライブラリは無償でご利用可能です（個人・商用の両方で）。<br>
:::

::: warning 権利とライセンス
本ライブラリの作成者は個人「@amami-harhid」、諸権利は「MiraiLogic株式会社」に帰属します。<br>
本ライブラリはライセンス「GPL-3」であり、ライセンスに違反しないご利用をお願いします。<br>
:::

::: tip 利用条件
第三者および不特定多数の方へ本ライブラリを使ったプログラム作品を提供する場合は、ライセンス「GPL-3」にもとづき、(1)「コードの公開義務」、(2) 作成者と権利者を「明示する義務」、があることにご注意ください。
:::
