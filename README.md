# サンプル ブログ

参考サイト: https://hackbar.jp/blog

## 機能

- 記事一覧
- カテゴリー別記事一覧
- 最新の記事一覧
- 検索
- パンくずリスト
- 記事詳細
  - 目次
  - 著者
  - SNS シェアボタン
  - 下書きプレビュー
  - 関連記事
- Google Analytics
- サイトマップ
- RSS

## 技術構成

- Next（SSG）
- microCMS（コンテンツ）
- Vercel（Hosting, Functions）
- ESLint
- Prettier
- PostCSS
- aspida
- pathpida
- SWR

## microCMS の API スキーマ設定

### ブログ

endpoint: blog  
type: リスト形式

| フィールド ID | 表示名     | 種類                        | 必須  |
| ------------- | ---------- | --------------------------- | ----- |
| title         | タイトル   | テキストフィールド          | true  |
| category      | カテゴリー | コンテンツ参照 - カテゴリー | true  |
| toc_visible   | 目次       | 真偽値                      | true  |
| body          | 本文       | リッチエディタ              | true  |
| description   | 概要       | テキストフィールド          | true  |
| ogimage       | OGP 画像   | 画像                        | true  |
| writer        | 著者       | コンテンツ参照 - 著者       | false |
| related_blogs | 関連記事   | 複数コンテンツ参照 - ブログ | true  |

### 著者

endpoint: authors  
type: リスト形式

| フィールド ID | 表示名   | 種類               | 必須  |
| ------------- | -------- | ------------------ | ----- |
| name          | 名前     | テキストフィールド | true  |
| text          | 自己紹介 | テキストエリア     | true  |
| image         | 画像     | 画像               | true  |
| SNS           | リンク   | テキストフィールド | false |

### カテゴリー

endpoint: categories  
type: リスト形式

| フィールド ID | 表示名 | 種類               | 必須 |
| ------------- | ------ | ------------------ | ---- |
| name          | 名前   | テキストフィールド | true |

## 環境変数

プロジェクトルートに`.env`ファイルを作成し、以下の項目を設定してください。

- NEXT_PUBLIC_API_KEY（microCMS の API キー）
- NEXT_PUBLIC_SERVICE_ID（microCMS のサービス ID）
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID（Google Analytics の ID）
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_BASE_PATH（BasePath が'/'なら空白で大丈夫です）

例:

```env
NEXT_PUBLIC_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_SERVICE_ID=your-service-id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-xxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://blog.microcms.io
NEXT_PUBLIC_BASE_PATH=/test(or NEXT_PUBLIC_BASE_PATH=)
```

## 開発方法

```bash
# パッケージをインストール
$ yarn install

# 開発サーバーを起動（localhost:3000）
$ yarn dev

# アプリケーションを生成
$ yarn build

# 生成したアプリケーションを起動
$ yarn start
```
