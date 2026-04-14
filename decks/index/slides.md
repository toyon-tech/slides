---
theme: seriph
title: Slide Deck Catalog
info: |
  Multiple Slidev decks managed in one repository
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
routerMode: hash
---

<style>
:root {
  color-scheme: light;
}

html,
body,
#slide-content,
.slidev-layout {
  background: #fffaf5 !important;
  color: #111827 !important;
}

.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3,
.slidev-layout h4,
.slidev-layout h5,
.slidev-layout h6,
.slidev-layout p,
.slidev-layout li,
.slidev-layout div,
.slidev-layout span,
.slidev-layout blockquote {
  color: #111827 !important;
}

.slidev-layout strong {
  color: #0f172a !important;
}

.slidev-layout code {
  color: #b45309 !important;
}

.slidev-layout a {
  color: #c2410c !important;
  text-decoration-color: rgba(194, 65, 12, 0.35) !important;
}
</style>

# Slide Deck Catalog

<div class="mt-6 text-lg opacity-70">
このリポジトリで管理している発表資料一覧
</div>

---
layout: default
---

# Decks

<a href="/ohayou-kara-oyasumi-made/" target="_self">「おはよう」から「おやすみ」まで</a>
<div class="text-sm opacity-60 mt-1">decks/ohayou-kara-oyasumi-made/slides.md</div>

<a href="/openclaw-what-made-it-great/" target="_self">OpenClaw と始める AI 生活</a>
<div class="text-sm opacity-60 mt-1">decks/openclaw-what-made-it-great/slides.md</div>

<a href="/rails-omae-datta-no-ka/" target="_self">Rails、お前だったのか。</a>
<div class="text-sm opacity-60 mt-1">decks/rails-omae-datta-no-ka/slides.md</div>

<a href="/test-slide/" target="_self">Test Slide</a>
<div class="text-sm opacity-60 mt-1">decks/test-slide/slides.md</div>

<div class="mt-10 text-sm opacity-60">
新規追加: <code>npm run deck:new -- --slug your-deck-slug --title "Your Deck Title"</code>
</div>
