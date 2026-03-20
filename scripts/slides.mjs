import { readdirSync, existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'

const decksDir = path.resolve('decks')

function getDecks() {
  if (!existsSync(decksDir)) return []
  return readdirSync(decksDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(path.join(decksDir, entry.name, 'slides.md')))
    .map((entry) => entry.name)
    .sort()
}

function resolveDeck(inputDeck) {
  const decks = getDecks()
  if (decks.length === 0) {
    console.error('No decks found in ./decks')
    process.exit(1)
  }

  const deck = inputDeck || process.env.SLIDE_DECK || decks[0]
  if (!decks.includes(deck)) {
    console.error(`Unknown deck: ${deck}`)
    console.error(`Available decks: ${decks.join(', ')}`)
    process.exit(1)
  }
  return deck
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: false })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const [command = 'list', maybeDeck, ...rest] = process.argv.slice(2)
const decks = getDecks()

if (command === 'list') {
  decks.forEach((deck) => console.log(deck))
  process.exit(0)
}

if (command === 'build-all') {
  if (decks.length === 0) {
    console.error('No decks found in ./decks')
    process.exit(1)
  }
  for (const deck of decks) {
    console.log(`\n=== Building ${deck} ===`)
    run('npx', ['slidev', 'build', path.join('decks', deck, 'slides.md'), '--out', path.join('dist', deck), ...rest])
  }
  process.exit(0)
}

const deck = resolveDeck(maybeDeck)
const entry = path.join('decks', deck, 'slides.md')

switch (command) {
  case 'dev':
    run('npx', ['slidev', entry, '--open', ...rest])
    break
  case 'build':
    run('npx', ['slidev', 'build', entry, '--out', 'dist', ...rest])
    break
  case 'export':
    run('npx', ['slidev', 'export', entry, ...rest])
    break
  default:
    console.error(`Unknown command: ${command}`)
    console.error('Usage: node scripts/slides.mjs <list|dev|build|build-all|export> [deck]')
    process.exit(1)
}
