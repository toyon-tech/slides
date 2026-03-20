# slides

Slidev ベースのスライド置き場。
1つのリポジトリで複数の発表資料を管理できるように整理してある。

## 構成

- `decks/<slug>/slides.md` - 各発表の本体
- `public/decks/<slug>/...` - その発表専用の画像や素材
- `components/` - 複数 deck で使い回す Vue コンポーネント
- `snippets/` - 共通で参照したいコード断片
- `scripts/slides.mjs` - deck を切り替えて起動・build するラッパー

## 使い方

### deck 一覧

```bash
npm run deck:list
```

### 既定 deck を起動

```bash
npm run dev
```

既定では `decks/` 配下の先頭 deck を開く。

### deck を指定して起動

```bash
node scripts/slides.mjs dev rails-omae-datta-no-ka
```

### deck を指定して build

```bash
node scripts/slides.mjs build rails-omae-datta-no-ka
```

単体 build はデプロイ互換のため `dist/` に出る。

### 全 deck をまとめて build

```bash
npm run build:all
```

全件 build は `dist/<slug>/` に出る。

## 新しい発表を追加する流れ

1. `decks/<new-slug>/slides.md` を作る
2. 発表専用の画像は `public/decks/<new-slug>/` に置く
3. 共通化したいものだけ `components/` や `snippets/` に上げる
4. `node scripts/slides.mjs dev <new-slug>` で確認する

## 現在の deck

- `rails-omae-datta-no-ka` - Rails、お前だったのか。
