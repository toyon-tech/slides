# slides

Slidev ベースの登壇資料置き場。
GitHub Pages で複数スライドを 1 リポジトリから配信する前提にしてある。

## Development

既存スライドを起動:

- `npm install`
- `npm run dev:rails-talk`

デフォルト起動 (`npm run dev`) も `rails-talk` を開く。

## Structure

```txt
slides/
  rails-talk.md
components/
public/
scripts/
  build-slides.mjs
.github/workflows/
  deploy.yml
```

- `slides/*.md` にスライド本体を置く
- `components/`, `public/` は複数スライドで共有する
- `scripts/build-slides.mjs` で複数スライドをまとめて build する
- GitHub Pages 配信用に、ビルド時の base path を環境変数で切り替えられる

## Build

ローカル確認用:

```bash
npm run build
```

GitHub Pages 用に repository 名を base path に含めて build する場合:

```bash
SLIDEV_BASE_PREFIX=slides npm run build
```

ビルド成果物は `dist/` に出力される。

- `/` : スライド一覧ページ
- `/rails-talk/` : ローカル確認時の既存スライド
- `/slides/rails-talk/` : GitHub Pages 配信時の既存スライド

## GitHub Pages

このリポジトリは GitHub Actions で GitHub Pages へ deploy する。

1. GitHub の `Settings > Pages` を開く
2. `Build and deployment` は **GitHub Actions** を選ぶ
3. `main` へ push すると `.github/workflows/deploy.yml` が自動で deploy する

公開 URL は通常こうなる。

- `https://toyon-tech.github.io/slides/`
- `https://toyon-tech.github.io/slides/rails-talk/`

## Add a new slide

1. `slides/<slug>.md` を追加
2. `scripts/build-slides.mjs` の `slides` 配列に `slug`, `entry`, `title`, `description` を追加
3. 必要なら `package.json` に `dev:<slug>` / `build:<slug>` を追加
