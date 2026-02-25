# Meshie LP - よもぎ蒸し専門店ランディングページ

## プロジェクト概要
福井市のよもぎ蒸し専門店「ミーシェ」のLP。Meta広告（Instagram/Facebook）からの集客用。
- 本番URL: https://yomogi-lp.vercel.app/
- 予約先: Hot Pepper Beauty（外部リンク）
- LINE: https://lin.ee/kGerKvo

## 技術スタック
- React 18 + TypeScript + Vite 5
- Tailwind CSS（現状: cdn.tailwindcss.com ランタイムCDN）
- Framer Motion（アニメーション）
- Lucide React（アイコン）
- ホスティング: Vercel
- トラッキング: GTM (GTM-NJ4C7LB9) + Meta Pixel (914156718241586)

## ディレクトリ構成
```
lp/yomogi/
├── App.tsx              # メインレイアウト（ヘッダー・フッター）
├── constants.ts         # BOOKING_URL, COLORS, コンテンツデータ
├── index.html           # GTM・Meta Pixel・Tailwind CDN・importmap
├── index.tsx            # Reactエントリーポイント
├── utils/
│   └── tracking.ts      # GA4・Meta Pixelイベント送信ユーティリティ
├── components/
│   ├── Hero.tsx          # ファーストビュー（CTA含む）
│   ├── ProblemAffinity.tsx # 悩み共感セクション
│   ├── Solution.tsx      # 解決策提示
│   ├── Features.tsx      # こだわり紹介（画像5枚）
│   ├── MenuFlow.tsx      # メニュー・施術の流れ
│   ├── TestimonialsFaq.tsx # お客様の声・FAQ
│   ├── FinalCta.tsx      # 店舗情報・最終CTA（Hot Pepper + LINE）
│   └── StickyCta.tsx     # モバイル用フローティング予約ボタン
└── public/images/        # WebP画像（hero-visual, feature-*, owner）
```

## 重要ルール
- BOOKING_URL は constants.ts で一元管理。直書き禁止
- 全ての予約リンク（Hot Pepper, LINE）には `utils/tracking.ts` の `trackBookingClick(location)` を必ず付与する
- 画像は WebP 形式。ヒーロー画像のみ `fetchPriority="high"`、それ以外は `loading="lazy"`
- ターゲットユーザーは25-65歳の女性。モバイル比率95%以上
- テキストやUIの日本語は自然で温かみのある表現にする

## 現状の課題（広告運用データに基づく）
### パフォーマンス
- LCP: 5.8秒（目標: 2.5秒以下）← 最大原因は cdn.tailwindcss.com と esm.sh の importmap
- スクロール深度: 平均16%（目標: 50%以上）
- 直帰率: 83-94%（目標: 60%以下）
- アウトバウンドクリック率: 2.4%（目標: 10%以上）

### トラッキング
- GA4キーイベント: 3つ設定済みだが全て未検出（close_convert_lead, purchase, qualify_lead）
- booking_click イベントをコード側から dataLayer push 実装済み → GTM側のタグ設定が未完了

## 改修の優先順位
1. **vite build によるバンドル化**（cdn.tailwindcss.com 廃止 + esm.sh importmap 廃止 → LCP大幅改善）
2. **ファーストビュー最適化**（モバイルでCTAが見える状態にする）
3. **全予約ボタンのクリックトラッキング**（GA4 + Meta Pixel）
4. **画像最適化**（lazy loading, サイズ適正化）
