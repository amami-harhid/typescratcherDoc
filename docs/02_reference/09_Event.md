---
outline: deep
---

# Event(イベント)

Eventは次の分類を持ちます。

## Sprite/Stage 共通.Event

<table>
<thead>
<tr><th>分類</th><th>意味</th></tr>
</thead>
<tbody>
<tr><td>Event.flagPresser</td><td>旗が押されたときのスレッド定義</td></tr>
<tr><td>Event.keyPresser</td><td>キーが押されたときのスレッド定義</td></tr>
<tr><td>Event.clicker</td><td>自身が押されたときのスレッド定義</td></tr>
<tr><td>Event.backdropSwitcher</td><td>背景が変わったときのスレッド定義</td></tr>
</tbody>
</table>

## sprite.Event

<table>
<thead>
<tr><th>分類</th><th>意味</th></tr>
</thead>
<tbody>
<tr><td>Event.clone</td><td>クローンが作られたときのスレッドを定義</td></tr>
</tbody>
</table>

## stage.Event
- ステージ限定のEventはありません。


