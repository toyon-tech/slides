# slides

Slidev ベースのスライド置き場。

## ローカル開発

- `npm install`
- `npm run dev`
- <http://localhost:3030> を開く

編集対象は `slides.md`。

## build

通常 build:

```bash
npm run build
```

GitHub Pages 向け build:

```bash
npm run build:pages
```

このリポジトリは GitHub Pages で `https://toyon-tech.github.io/slides/` 配下に公開する前提なので、`build:pages` では `--base /slides/` を付けている。

## GitHub Pages への deploy

`.github/workflows/deploy.yml` で GitHub Actions から `dist/` をそのまま Pages に publish する。

1. GitHub の `Settings > Pages` で **Build and deployment** を **GitHub Actions** にする
2. `main` に push する
3. Actions が自動で deploy する

公開 URL:

- <https://toyon-tech.github.io/slides/>

Slidev の詳細は <https://sli.dev/> を見る。
