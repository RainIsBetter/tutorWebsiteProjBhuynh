import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = process.cwd()
const distDir = path.resolve(projectRoot, 'dist')
const serverDir = path.resolve(distDir, 'server')
const htmlPath = path.resolve(distDir, 'index.html')

const serverFiles = await readdir(serverDir)
const serverEntryFile = serverFiles.find((file) =>
  /^entry-server\.(m?js|cjs)$/.test(file),
)

if (!serverEntryFile) {
  throw new Error(`Could not find SSR entry in ${serverDir}`)
}

const serverEntryUrl = pathToFileURL(path.resolve(serverDir, serverEntryFile)).href
const { render } = await import(serverEntryUrl)

if (typeof render !== 'function') {
  throw new Error('Expected `render` export from SSR entry')
}

const template = await readFile(htmlPath, 'utf8')
const appHtml = render()
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

if (html === template) {
  throw new Error('Failed to inject prerendered markup into dist/index.html')
}

await writeFile(htmlPath, html, 'utf8')
await rm(serverDir, { recursive: true, force: true })
