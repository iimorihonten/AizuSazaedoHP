# AI Code CLI 用：会津さざえ堂HP 更新手順書 (AI-CLI Update Manual)

この手順書は、claude-code, gemini-cli, mistral-vibe-code, cursor, grok 等のローカル AI Code CLI エージェントが、既存のサイト表示やデプロイ環境を壊すことなく 安全に情報を更新するためのガイド用プロンプト・マニュアルです。AIエージェントに作業を依頼する際、この内容を事前コンテキストとして読み込ませてください。

## 1. プロジェクトの基本構造

- フレームワーク: Vite + React + TypeScript + Tailwind CSS
- ホスティング: GitHub Pages (独自ドメイン sazaedo.jp 適用)
- CI/CD環境: GitHub Actions (`.github/workflows/deploy.yml`) による自動ビルド・デプロイ

## 2. 絶対に守るべき禁止事項 ⚠️

### ❌ `vite.config.ts` の base を固定ディレクトリに変更しないこと

独自ドメイン（sazaedo.jp）経由でのアクセスがメインとなるため、本番環境の base URLは `/` になるよう作られています（`process.env.CUSTOM_DOMAIN` にて判定）。`base: '/AizuSazaedoHP/'` のように固定してしまうと、サイトが真っ白になり、CSS/JSが404エラーとなります。

### ❌ パッケージマネージャを混同しないこと

GitHub Actions 上では `npm install` および `npm run build` でビルドが通るようになっています。ローカルで新規パッケージを追加要求された場合は、必ず `package-lock.json` が適切に更新されるようにしてください。

## 3. お知らせ（News）の更新手順

お知らせ等を追加する際は、以下のステップを厳守してください。

### Step 1. データの追加

**編集対象ファイル**: `src/constants/newsData.ts`

- 新規のお知らせは、newsData 配列の一番上（最新） に `NewsItem` オブジェクトとして追加してください。
- 英語ページ対応のため、必ず `titleEn` および `contentEn` に英訳を併記してください。

### Step 2. 画像の追加（必要な場合のみ）

- **ファイル配置先**: `public/lovable-uploads/` 以下に配置。
- **newsData.ts 内での指定方法**: `imageUrl: getImagePath("/lovable-uploads/ファイル名.拡張子")` と記述してください。
- （注意）このリポジトリは画像等に対して git lfs（`.gitattributes` に定義）を使用しています。AIがターミナル操作で push する際、git-lfs が環境変数 PATH に存在することを確認してください（macOS環境では `export PATH="/opt/homebrew/bin:$PATH"` の実行が必要な場合があります）。

## 4. デプロイ（本番反映）手順

1. `npm run build` をローカル上で実行し、エラーが出ずに `dist/` が正しく生成されるか **必ず事前確認** してください。
2. エラーが無いことを確認後、以下のコマンドで `main` ブランチへ Push してください。

```bash
git add 追加・変更したファイル
git commit -m "Update: お知らせを追加"
git push origin main
```

3. Push 後、GitHub Actions によって自動的に GitHub Pages へのビルドと反映が行われます。これには通常1〜2分かかります。追加の CLI 上でのデプロイコマンド等は不要です。

---

**この手順書を守ることで、AI Code CLI を用いた安全なメンテナンスが可能になります。**
