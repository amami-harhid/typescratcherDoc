---
outline: deep
---
# Event(イベント)

## Event.backdropSwitcher (背景が変わったときのスレッド定義)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/eventBackdropSwitched.svg"/>
    </td>
    <td>
    </td>
    </tr>
</tbody>
</table>

---

### Sprite

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

// 背景のイメージを取り出すサブモジュール
import { BackdropImage01, BackdropImage02 } from './sub/images';

const cat = new Ts.Sprite('cat');

const stage = new Ts.Stage();
stage.Backdrop.add( BackdropImage01, BackdropImage02 );

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = function( this : Sprite ) {
    this.Looks.backdrop.switch( BackdropImage01 ); // <-- 背景『BackdropImage01』
    this.Control.wait( 5 ); // 5秒待つ
    this.Looks.backdrop.next(); // 次の背景にする
}

// 指定した背景になったときの『cat』のスレッド
cat.Event.backdropSwitcher(BackdropImage02).func = function( this : Sprite ) {
    // 背景が『BackdropImage02』になったとき、このスレッドが起動される。
}

// 開始
Ts.engine.start();
```

---

### Stage

```typescript:line-numbers
import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

// 背景のイメージを取り出すサブモジュール
import { BackdropImage01, BackdropImage02 } from './sub/images';

const cat = new Ts.Sprite('cat');

const stage = new Ts.Stage();
stage.Backdrop.add( BackdropImage01, BackdropImage02 );

// 旗が押されたときの『cat』のスレッド
cat.Event.flagPresser().func = function( this : Sprite ) {
    this.Looks.backdrop.switch( BackdropImage01 ); // <-- 背景『BackdropImage01』
    this.Control.wait( 5 ); // 5秒待つ
    this.Looks.backdrop.next(); // 次の背景にする
}

// 指定した背景になったときの『stage』のスレッド
const BackdropImage02Swicther = function(this : Sprite) {
    // 背景が『BackdropImage02』になったとき、このスレッドが起動される。
}
// functionをconst定義しておいて ～.func へ代入してもOK
stage.Event.backdropSwitcher( BackdropImage02 ).func = BackdropImage02Swicther;


// 開始
Ts.engine.start();
```

---

