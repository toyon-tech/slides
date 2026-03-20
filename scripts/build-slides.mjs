import { execSync } from 'node:child_process'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = process.cwd()
const distDir = resolve(rootDir, 'dist')
const rawBasePrefix = process.env.SLIDEV_BASE_PREFIX ?? ''
const basePrefix = rawBasePrefix
  ? `/${rawBasePrefix.replace(/^\/+|\/+$/g, '')}`
  : ''

const slides = [
  {
    slug: 'rails-talk',
    entry: 'slides/rails-talk.md',
    title: 'Rails、お前だったのか。',
    description: 'Cloudflare + Hono で新規開発して、Rails のレールの価値を痛感した話',
  },
]

rmSync(distDir, { recursive: true, force: true })
mkdirSync(distDir, { recursive: true })

for (const slide of slides) {
  const outDir = resolve(distDir, slide.slug)
  const base = `${basePrefix}/${slide.slug}/`
  execSync(`npx slidev build ${slide.entry} --base ${base} --out ${outDir}`, {
    stdio: 'inherit',
  })
}

const indexHtml = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slides</title>
    <style>
      :root { color-scheme: light dark; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        max-width: 760px;
        margin: 48px auto;
        padding: 0 16px 48px;
        line-height: 1.6;
      }
      h1 { margin-bottom: 8px; }
      p { opacity: 0.85; }
      ul { padding-left: 20px; }
      li { margin: 14px 0; }
      a { text-decoration: none; }
      a:hover { text-decoration: underline; }
      .desc { font-size: 0.95rem; opacity: 0.7; }
    </style>
  </head>
  <body>
    <h1>Slides</h1>
    <p>このリポジトリで管理している Slidev スライド一覧。</p>
    <ul>
      ${slides.map((s) => `<li><a href="${basePrefix}/${s.slug}/">${s.title}</a><div class="desc">${s.description}</div></li>`).join('\n')}
    </ul>
  </body>
</html>`

writeFileSync(resolve(distDir, 'index.html'), indexHtml)
