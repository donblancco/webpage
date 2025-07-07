#!/bin/bash

# S3への自動デプロイスクリプト

set -e

# 設定
BUCKET_NAME="donblancco-sideproject-site"

# 色付きの出力
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 S3へのデプロイを開始します${NC}"

# 1. ビルド
echo -e "${YELLOW}📦 プロジェクトをビルドしています...${NC}"
npm run build

# 2. S3にアップロード
echo -e "${YELLOW}☁️ S3にファイルをアップロードしています...${NC}"

# distフォルダの内容をアップロード（古いファイルは削除）
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete

# ルートファイルをアップロード
aws s3 cp sitemap.xml s3://$BUCKET_NAME/
aws s3 cp robots.txt s3://$BUCKET_NAME/

# HTMLファイルに適切なキャッシュヘッダーを設定
echo -e "${YELLOW}🔧 HTMLファイルのキャッシュ設定を更新しています...${NC}"
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --metadata-directive REPLACE \
  --cache-control "public, max-age=300" \
  --content-type "text/html; charset=utf-8"

echo -e "${GREEN}✅ S3へのデプロイが完了しました！${NC}"
echo -e "ウェブサイト: https://don-blanc-co.com"