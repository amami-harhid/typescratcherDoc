---
outline: deep
---

# Looks(見た目)

## 『Sprite限定』 Looks.layer (階層操作)

<table class="block">
<tbody>
    <tr>
    <td>
    <img class="block" src="/looksLayerGotoFront.svg"/>
    </td>
    <td>
    <img class="block" src="/looksLayerGotoBack.svg"/>
    </td>
    </tr>
    <tr>
    <td>
    <img class="block" src="/looksLayerGoForwardLayer.svg"/>
    </td>
    <td>
    <img class="block" src="/looksLayerGoBackwardLayer.svg"/>
    </td>
    </tr>
</tbody>
</table>

---

```typescript:line-numbers
// 最前面にする
sprite.Looks.layer.gotoFront(); 

// 最背面にする
sprite.Looks.layer.gotoBack(); 

// 手前に出す
sprite.Looks.layer.goForwardLayers( 1 ); // 1つ手前に出す

// 奥に下げる
sprite.Looks.layer.goBackwardLayers( 1 ); // 1つ奥にさげる
```

---