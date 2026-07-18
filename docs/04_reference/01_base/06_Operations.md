---
outline: deep
---

# Operations(演算)

演算で使うユーティリティです。

### 乱数

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/operationsRandomize.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

#### **Ts.operations.randomValue**<br>**Ts.operations.randomDecimalValue**

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

// 乱数を生成する( 0 以上 ～ 10 以下の間の整数の乱数 )
const randomValue = Ts.operations.randomValue( 0, 10 );
console.log(`randomValue=${randomValue}`);
// → 整数で 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 がランダムに出力される

// 乱数を生成する( 0 以上 ～ 10 未満の間の小数付きの乱数 )
const randomDecimalValue = Ts.operations.randomDecimalValue( 0, 10 );
console.log(`randomDecimalValue=${randomDecimalValue}`);
// → 0 ～ 10 (0を含み,10を含まない)小数値がランダムに出力される
```

### 加減乗算

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsPlus.svg"/>
    </td>
    <td>
    <img class="block" src="/OperationsMinus.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/OperationsMulti.svg"/>
    </td>
    <td>
    <img class="block" src="/OperationsDivide.svg"/>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
加減乗算はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const val01 = 10 + 5; // ==> 15
const val02 = 10 - 2; // ==>  8
const val03 = 10 * 3; // ==> 30
const val04 = 10 / 4; // ==> 2.5
```

### 剰余

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsSurplus.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
剰余はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const val01 = 4 % 2; // ==> 0
const val02 = 4 % 3; // ==> 1
```

### 四捨五入

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsRounding.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
四捨五入はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const val01 = Math.round(2.6); // ==> 3
const val02 = Math.round(2.4); // ==> 2
```

### 比較演算

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsLarger.svg"/>
    </td>
    <td>
    <img class="block" src="/OperationsSmaller.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/OperationsEqual.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
比較演算はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
let val01 = 5;
let val02 = 2;
if( val01 > val02 ) { 

}else if( val01 < val02 ) { 

}else if( val01 == val02 ) {

}
```


### 論理演算

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsAND.svg"/>
    </td>
    <td>
    <img class="block" src="/OperationsOR.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/OperationsNOT.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
論理演算はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
let num01 = 15;
if( 5 < num01 && num01 < 20 ) {
    // AND ( && )
}
if( 5 < num01 || num01 < 20 ) {
    // OR ( || )
}
if( !(num01 < 15) ) {
    // NOT ( ! )
}
```


### 文字列の結合

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsStringConcat.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
文字列の結合はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const str01 = "Hello";
const str02 = "World";
const str03 = str01 + " "+ str02; // ==> "Hello World"
```
### 文字列の長さ

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsStringLength.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
文字列の長さはTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const str = "Hello";
const length = str.length(); // ==> 5
```

### 文字列の〇番目の文字

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsStringSubstr.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
「文字列の〇番目の文字」はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const str = "Hello";
const moji01 = str.substring(0, 1); // "H" 
const moji02 = str.substring(1, 1); // "e" 
```

### 文字列に"〇"が含まれている

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/OperationsStringContains.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---
加減乗算用の **TypeScratcher**のメソッドは提供していません。<br>
「文字列に"〇"が含まれている」はTypescript(Javascript)の標準構文で実現してください。

```typescript:line-numbers
const str = "Hello";

if( str.includes("e") ){

}
```
