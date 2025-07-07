# どんぶらっこ - ランディングサイト

フルスタック夫婦エンジニアによるシステム開発サービス「どんぶらっこ」のランディングサイトです。

## 🌟 サイト概要

- **サービス名**: どんぶらっこ (Don Blanc Co.)
- **URL**: https://don-blanc-co.com
- **技術スタック**: React + Vite + Tailwind CSS
- **ホスティング**: AWS S3 + CloudFront

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js (推奨: 18.x以上)
- npm または yarn
- AWS CLI (デプロイ用)

### インストール
```bash
# リポジトリをクローン
git clone <repository-url>
cd landing-site

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 📋 利用可能なコマンド

```bash
# 開発サーバー起動 (localhost:5173)
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# コードの構文チェック
npm run lint

# S3への自動デプロイ
npm run deploy
```

## 🔧 デプロイ手順

### 自動デプロイ（推奨）
```bash
# ビルド + S3アップロード + キャッシュ設定
npm run deploy
```

### 手動デプロイ
```bash
# 1. ビルド
npm run build

# 2. S3にアップロード
aws s3 sync dist/ s3://donblancco-sideproject-site/ --delete
aws s3 cp sitemap.xml s3://donblancco-sideproject-site/
aws s3 cp robots.txt s3://donblancco-sideproject-site/

# 3. CloudFrontキャッシュクリア（必要に応じて）
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

## 📁 プロジェクト構造

```
landing-site/
├── public/                 # 静的ファイル
│   ├── img/               # 画像ファイル
│   ├── vite.svg           # ファビコン
├── src/                   # ソースコード
│   ├── LandingPage.jsx    # メインコンポーネント
│   ├── main.jsx          # エントリーポイント
│   └── App.css           # スタイル
├── terraform/             # インフラ設定（Terraform）
├── dist/                  # ビルド出力（自動生成）
├── sitemap.xml           # サイトマップ
├── robots.txt            # 検索エンジン向け設定
├── deploy-s3.sh          # デプロイスクリプト
└── README.md             # このファイル
```

## ✨ SEO対策

### 実装済みの最適化
- [x] **メタタグ最適化** - title、description、keywords、OGタグ
- [x] **構造化データ** - Schema.org Organization形式
- [x] **画像最適化** - alt属性、遅延読み込み、適切なサイズ指定
- [x] **パフォーマンス** - 画像遅延読み込み、圧縮、CDN配信
- [x] **モバイル対応** - レスポンシブデザイン、適切なviewport設定
- [x] **サイトマップ** - XML形式、画像情報も含む
- [x] **セマンティックHTML** - 適切なHTML5要素の使用
- [x] **アクセシビリティ** - aria-label、適切なコントラスト

### SEO関連ファイル
- `sitemap.xml` - 検索エンジン用サイトマップ
- `robots.txt` - クローラー向けの設定
- `index.html` - 全SEOメタタグとStructured Data

## 🛠 技術仕様

### フロントエンド
- **React**: 18.x（関数コンポーネント + Hooks）
- **Vite**: 6.x（高速ビルドツール）
- **Tailwind CSS**: ユーティリティファーストCSS
- **Intersection Observer**: 画像遅延読み込み

### インフラストラクチャ
- **S3**: 静的ウェブサイトホスティング
- **CloudFront**: CDN、SSL/TLS対応
- **Route53**: DNS管理
- **ACM**: SSL証明書管理

### パフォーマンス
- **画像最適化**: WebP対応、適切なサイズ指定
- **キャッシュ戦略**: HTML短期、アセット長期キャッシュ
- **圧縮**: Gzip/Brotli対応
- **CDN**: グローバル配信

## 🎯 サービス内容

### 提供サービス
1. **MVP伴走開発** - Django/Rails + AWS/GCP
2. **レガシーリプレース** - 旧システムのモダン化
3. **業務自動化** - Python/GAS による効率化
4. **API連携** - Slack/LINE等の外部サービス統合
5. **データ分析** - Python/Pandas によるダッシュボード
6. **クラウド移行** - ECS/Lambda/Terraform自動化

### 開発フロー
無料相談 → 要件定義 → 設計 → 実装 → テスト → リリース

## 👥 チーム

- **長嶋優貴**: クラウドインフラ、Web開発、PM
- **長嶋遥香**: 業務自動化、データ分析、UI/UX

## 📞 お問い合わせ

- **ウェブサイト**: https://don-blanc-co.com
- **GitHub**: https://github.com/donblancco/
- **お問い合わせフォーム**: サイト内のGoogleフォーム

## 📄 ライセンス

© 2025 Yuki & Haruka Nagashima - どんぶらっこ

---

**注意**: AWS CLIの設定とS3バケットへの適切な権限が必要です。デプロイ前にAWS認証情報が正しく設定されていることを確認してください。