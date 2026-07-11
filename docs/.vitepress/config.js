import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "TypeScratcher",
    base: "/typescratcherDoc/",
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
    },
    head: [
        ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
        ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
        [
            "link",
            { href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Mono:wght@100..900&family=Noto+Sans+TC:wght@100..900&display=swap", rel: "stylesheet" },
        ],
    ],
})