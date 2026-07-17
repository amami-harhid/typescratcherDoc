---
outline: deep
---

# Variable(変数)

ステージへ表示する変数を定義します。

![画像1](/Sample_variables.png)


<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/variables.svg"/>
    </td>
    <td>
    <img class="block" src="/variablesSetter.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

## Variable.number ( 数値型の変数 を作る )

変数『`volume`』を作成します。変数の表示は変数名と同じ『`volume`』です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 変数を定義する
const volume = Ts.Variable.number( 100 ); // 初期値を100とする
Ts.Variable.monitoring( { volume } ); // モニター対象にする

volume.hide(); // 変数を隠す

volume.show(); // 変数を表示する

volume.value = 20;  // 変数の値を 20 にする

volume.value += 10;  // 変数の値に 10を加算する


```

変数『`volume`』を表示するときのモニターの名前を変えるときは次のようにします。

```typescript:line-numbers

// 変数を定義する
const volume = Ts.Variable.number( 100 ); // 初期値を100とする
// モニター表示の名前を 'ボリューム'にする
Ts.Variable.monitoring( { 'ボリューム': volume } ); 

```

![画像2](/Sample_variables_change_name.png)


## Variable.string ( 文字列型の変数 を作る )

変数『`message`』を作成します。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 変数を定義する
const message = Ts.Variable.string( 'こんにちは' ); // 初期値を'こんにちは'とする
Ts.Variable.monitoring( { message } ); // モニター対象にする

message.hide(); // 変数を隠す

message.show(); // 変数を表示する

```

![画像3](/Sample_variables_string.png)


```typescript:line-numbers
message.text = 'こんばんは';  // 変数の値を 「こんばんは」 にする
```
![画像4](/Sample_variables_string2.png)

```typescript:line-numbers
message.text += '、みなさん';  // 変数の値に 「、みなさん」を追加する
```
![画像5](/Sample_variables_string3.png)
