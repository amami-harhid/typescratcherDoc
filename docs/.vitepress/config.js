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
                    { text: '- レファレンス', link: '/02_reference/' },
                    { text: '-- IMPORTと起動', link: '/02_reference/01_import' },
                    { text: '-- イメージ', link: '/02_reference/02_image' },
                    { text: '-- サウンド', link: '/02_reference/03_sound' },
                    { text: '-- スプライト', link: '/02_reference/04_sprite' },
                    { text: '-- ステージ', link: '/02_reference/05_stage' },
                    { text: '-- Motion(動き)', link: '/02_reference/06_Motion' },
                    { text: '- 使用方法', link: '/03_how_to_use/' },
                    { text: '-- VS-CODE', link: '/03_how_to_use/001_vscode' },
                    { text: '- 例題集', link: '/04_examples/' },
                    { text: '-- エンジン起動', link: '/04_examples/01_startEngine' },
                    { text: '-- スプライト背景表示', link: '/04_examples/02_viewSpriteAndStage' },
                    { text: '-- スプライト移動', link: '/04_examples/03_moveingSprite' },
                    { text: '-- ずっと繰り返す', link: '/04_examples/04_loopForever' },
                    { text: '-- 画像の切り替え', link: '/04_examples/05_switchCostumeAndBackdrop' },
                    { text: '-- 音を鳴らす', link: '/04_examples/06_playSounds' },
                    { text: '-- フキダシを表示', link: '/04_examples/07_bubbles' },
                    { text: '-- クローンを作る', link: '/04_examples/08_clones' },
                    { text: '- いろいろ試す', link: '/05_tryVarious/' },
                    { text: '-- 大きくしたり小さくしたり', link: '/05_tryVarious/001_biggerAndSmaller' },
                    { text: '-- 画像効果を変化させてみよう', link: '/05_tryVarious/002_changeImageEffects' },
                    { text: '-- ペンを引いたりスタンプしたり', link: '/05_tryVarious/003_penAndStamp' },
                    { text: '-- 色に触れたとき', link: '/05_tryVarious/004_touchingColor' },
                    { text: '-- いろいろなジャンプ', link: '/05_tryVarious/005_variousJumps' },
                    { text: '-- メッセージ送受信', link: '/05_tryVarious/006_messages' },
                    { text: '-- 質問をする', link: '/05_tryVarious/007_askAndAnswer' },
                    { text: '-- 音の効果（音量・ピッチ）', link: '/05_tryVarious/008_changeSoundEffects' },
                    { text: '-- マウスとの距離', link: '/05_tryVarious/009_distanceToMouse' },
                    { text: '-- マウスが触れた', link: '/05_tryVarious/010_touchingMousePointer' },
                    { text: '-- テキストを音声に', link: '/05_tryVarious/011_textToSounds' },
                    { text: '-- テキストを画像に', link: '/05_tryVarious/012_textToImages' },
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