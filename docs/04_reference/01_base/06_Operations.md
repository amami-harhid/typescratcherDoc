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


### 剰余


### 比較演算


### 論理演算


### 文字列の結合


### 
