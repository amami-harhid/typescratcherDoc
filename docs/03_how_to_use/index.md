---
outline: deep
---
![画像](/logo.svg)

```
Typescript(Javascript)でコーディング、Scratch3風の動きを表現できるゲームエンジンです。
```
<br><br>

# 特徴

- イベント起動型
- 

```
https://qiita.com/99no_exit/items/a54708c8a3586f67f894
```

## お勧めしたい方

Scratch3を卒業してコードプログラミング学習に進んだのはいいけれど、なんか味気ないんだよな・・と思う人へおすすめ。

コードプログラミングのゲームエンジンは敷居が高そうで・・と思うことがありそうですよね。

慣れ親しんだScratch3のコードの書き方を思い出しながら、それをTypescratcherに置き換えていけばいいので。


# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
