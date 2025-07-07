# どんぶらっこ ウェブサイト Terraform設定

## 概要
このTerraformコードは、どんぶらっこのランディングサイトをAWSでホスティングするためのインフラストラクチャを定義します。

## 構成要素
- S3バケット（静的ウェブサイトホスティング）
- CloudFrontディストリビューション（CDN）
- ACM SSL証明書
- Origin Access Control（OAC）

## 使用方法

### 1. 初期化
```bash
cd terraform
terraform init
```

### 2. プランの確認
```bash
terraform plan
```

### 3. 適用
```bash
terraform apply
```

### 4. ファイルのアップロード
Terraformでインフラを作成後、以下のファイルをS3バケットにアップロードしてください：

```bash
# distフォルダの内容をアップロード
aws s3 cp ../dist/ s3://donblancco-sideproject-site/ --recursive

# ルートファイルをアップロード
aws s3 cp ../sitemap.xml s3://donblancco-sideproject-site/
aws s3 cp ../robots.txt s3://donblancco-sideproject-site/
```

### 5. CloudFrontのキャッシュクリア（デプロイ後）
```bash
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

## 設定のカスタマイズ
`terraform.tfvars`ファイルで以下の値を変更できます：
- `aws_region`: AWSリージョン
- `domain_name`: ドメイン名
- `bucket_name`: S3バケット名

## 注意事項
1. SSL証明書の検証が必要です（DNS検証）
2. Route53でドメインの設定が必要です
3. 初回デプロイ時はCloudFrontの配布に15-20分かかります

## SEO対応済み機能
✅ HTTPS対応
✅ 高速配信（CloudFront）
✅ 適切なキャッシュ設定
✅ Gzip圧縮
✅ SPA対応（404/403エラーをindex.htmlにリダイレクト）

## 出力値
- `bucket_name`: S3バケット名
- `cloudfront_domain`: CloudFrontドメイン
- `website_endpoint`: S3ウェブサイトエンドポイント
- `certificate_arn`: SSL証明書ARN