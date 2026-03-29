---
theme: seriph
title: Test Slide
info: |
  複数 deck 運用の確認用サンプル
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

# Test Slide

<div class="mt-8 text-xl opacity-70">複数資料運用の確認用 deck</div>

<div class="mt-14 text-lg opacity-60">t0yohei</div>

---
layout: section
---

# これは何か

---

# 確認したいこと

- 同じ repo に複数 deck を置ける
- deck ごとに entry を分けられる
- 一覧ページから各資料へ飛べる

---
layout: center
class: text-center
---

# OK

一覧・追加・build が通れば十分
