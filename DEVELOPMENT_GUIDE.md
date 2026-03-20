# 会津さざえ堂HP 開発・更新ガイド (Development & Deployment Guide)

本プロジェクトを今後も「表示を壊さず」「問題なく更新」し続けるための、重要な環境設定と注意点です。

## 1. ビルド設定（`vite.config.ts`）の注意⚠️
GitHub Pagesを用いて独自ドメイン（`sazaedo.jp`）でホスティングされています。
そのため、`vite.config.ts` の `base` 設定は下記のようになっていなければなりません。**絶対に固定のディレクトリ名（例: `/AizuSazaedoHP/`）のみに書き換えないでください！**

```typescript
export default defineConfig(({ mode }) => ({
  // ✅ 独自ドメイン時は '/' を使用。それ以外（プレビュー等）は '/AizuSazaedoHP/'
  base: process.env.CUSTOM_DOMAIN ? '/' : (mode === 'production' ? '/AizuSazaedoHP/' : '/'),
  // ...
}));
```
これを崩すと、画像やCSS/JSファイルのパスがずれて「画面が真っ白になる」「画像が表示されない」といった深刻な障害につながります。

## 2. GitHub Actions による自動デプロイ
`.github/workflows/deploy.yml` にて、`main` ブランチにプッシュ（push）した時点で自動的に GitHub Pages へのデプロイが走る仕組みになっています。
- 記事の更新や画像の追加が終わったら、**`main` ブランチへコミットして push するだけ**で、数分後に本番環境に反映されます。
- GitHub Actions の中で `CUSTOM_DOMAIN: true` の環境変数が渡され、Vite が正しいパス設定でビルドします。

## 3. 画像の追加・画像の管理
- 記事やページ内に追加する画像は `public/lovable-uploads/` 等のディレクトリに配置してください。
- リポジトリに画像を追加する際、`git lfs` を経由する設定（`.gitattributes` に `*.png filter=lfs` があるため）になっています。もしローカル（ターミナル等）から push してエラーになる場合は、お使いのPCに `brew install git-lfs` 等により Git LFS がインストールされているか確認してください。

## 4. パッケージ管理について
現在 `package.json` および GitHub Actions では標準の `npm` を用いて依存解決（`npm install`）とビルド（`npm run build`）を行っています。手元（ローカル）で依存関係を追加（インストール）する際は、`package-lock.json` が生成・更新されるように操作してください。
不用意に他のパッケージマネージャ（Yarnや一部の機能でBun）の設定ファイルと混在してコンフリクトしないようご注意ください。

---

以上のルールを守ってコード編集やAI（Agent）への指示を行うことで、安全にサイト更新を続けることができます。
