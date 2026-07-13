import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "TypeScratcher Docs",
    base: "/typescratcherDoc/web/",
    outDir: '../web',
    description: "Scratch3風TypeScriptゲームエンジン",
    themeConfig: {
        // 画面右上のナビゲーション
        nav: [
            { text: 'ホーム', link: '/' },
        ],
        // 左側のサイドバー（TypeDocが出力したファイルを読み込む設定）
        sidebar: [
            {
                text: '目次',
                items: [
                    { text: 'ホーム', link: '/' },
                    { text: '- はじめに', link: '/01_introduction/' },
                    { text: '- QuickStart', link: '/02_quickStart/' },
                    { text: '-- エンジン起動', link: '/02_quickStart/001/' },
                    { text: '-- スプライト背景表示', link: '/02_quickStart/002/' },
                    { text: '-- スプライト移動', link: '/02_quickStart/003/' },
                    { text: '-- ずっと繰り返す', link: '/02_quickStart/004/' },
                    { text: '-- 画像の切り替え', link: '/02_quickStart/005/' },
                    { text: '-- 音を鳴らす', link: '/02_quickStart/006/' },
                    { text: '-- フキダシを表示', link: '/02_quickStart/007/' },
                    { text: '-- クローンを作る', link: '/02_quickStart/008/' },
                    { text: '- いろいろ試す', link: '/03_tryVarious/' },
                    { text: '-- 大きくしたり小さくしたり', link: '/03_tryVarious/001/' },
                    { text: '-- 画像効果を変化させてみよう', link: '/03_tryVarious/002/' },
                    { text: '-- ペンを引いたりスタンプしたり', link: '/03_tryVarious/003/' },
                    { text: '-- 色に触れたとき', link: '/03_tryVarious/004/' },
                    { text: '-- いろいろなジャンプ', link: '/03_tryVarious/005/' },
                    { text: '-- 自由落下', link: '/03_tryVarious/006/' },
                    { text: '-- 質問をする', link: '/03_tryVarious/007/' },
                    { text: '-- 音の効果（音量・ピッチ）', link: '/03_tryVarious/008/' },
                    { text: '-- マウスとの距離', link: '/03_tryVarious/009/' },
                    { text: '-- マウスが触れた', link: '/03_tryVarious/010/' },
                    { text: '-- テキストを音声に', link: '/03_tryVarious/011/' },
                    { text: '-- テキストを画像に', link: '/03_tryVarious/012/' },
                    { text: '- 使用方法', link: '/04_how_to_use/' },
                    { text: '-- VS-CODE', link: '/04_how_to_use/001_vscode/' },
                    { text: '- レファレンス', link: '/05_reference/' },
                    { text: '-- IMPORTと起動', link: '/05_reference/01_import/' },
                    { text: '-- イメージ', link: '/05_reference/02_image/' },
                    { text: '-- サウンド', link: '/05_reference/03_sound/' },
                    { text: '-- スプライト', link: '/05_reference/04_sprite/' },
                ]
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/amami-harhid/typescratcher' }
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