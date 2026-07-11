import DefaultTheme from 'vitepress/theme'
import './custom.css'                      // 自分のカスタムCSSを読み込む
import AutoReloadIframe from './components/AutoReloadIframe.vue'
export default{
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AutoReloadIframe', AutoReloadIframe)
    }
}