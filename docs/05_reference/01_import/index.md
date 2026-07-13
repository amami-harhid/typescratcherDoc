---
outline: deep
---

# IMPORTと起動

## IMPORT
TypeScracher は npmパッケージとして公開されています。<br>
<br>
TypeScracherをインストールしておけば、次の方法でインポートできます<br>

```typescript:line-numbers
import { Typescratcher } from "@tscratch3/typescratcher";
```
<br>
`Typescracher` は長い文字列でコードに書くとき横に長くなるので、別名をつけると便利です。

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
```

## 起動

`Typescratcher.engine.start();` で起動します。<br>
<br>
別名を使うときは<br>
`Ts.engine.start();` です。<br>

### index.ts ###
```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";

Ts.engine.start();
```




