import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "TypeScratcher",
    base: "/typescratcherDoc/docs/.vitepress/dist/",
    description: "Scratch3風TypeScriptゲームエンジン",
    themeConfig: {
        // 画面右上のナビゲーション
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'APIリファレンス', link: '/api/' }
        ],
        // 左側のサイドバー（TypeDocが出力したファイルを読み込む設定）
        sidebar: [
            {
                text: 'ガイド',
                items: [
                    { text: '※はじめに', link: '/' }
                ]
            },
            {
                text: 'API リファレンス',
                // TypeDoc(vitepressテーマ)が書き出す目次ファイルにリンク
                link: '/api/', 
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com' }
        ]
    }
})