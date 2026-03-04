import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import { emojiToFaMap } from './emoji-map'

export function emojiToFontAwesomePlugin(md: MarkdownIt): void {
  md.core.ruler.push('emoji_fontawesome', (state) => {
    let inHeading = false
    for (const blockToken of state.tokens) {
      if (blockToken.type === 'heading_open') {
        inHeading = true
        continue
      }
      if (blockToken.type === 'heading_close') {
        inHeading = false
        continue
      }
      if (inHeading) continue
      if (blockToken.type !== 'inline' || !blockToken.children) continue
      blockToken.children = processChildren(blockToken.children, state.Token)
    }
  })
}

function containsAnyEmoji(text: string): boolean {
  for (const [emoji] of emojiToFaMap) {
    if (text.includes(emoji)) return true
  }
  return false
}

function processChildren(
  children: Token[],
  TokenCtor: typeof Token
): Token[] {
  const result: Token[] = []

  for (const child of children) {
    if (child.type === 'code_inline' && containsAnyEmoji(child.content)) {
      const fragments = splitByEmojis(child.content)
      const hasOnlyEmoji = fragments.every(
        (f) => f.type === 'emoji' || (f.type === 'text' && f.value.trim() === '')
      )

      if (hasOnlyEmoji) {
        for (const fragment of fragments) {
          if (fragment.type === 'emoji') {
            const t = new TokenCtor('html_inline', '', 0)
            t.content = `<code><i class="${fragment.faClass} myal-fa-emoji"></i></code>`
            result.push(t)
          }
        }
      } else {
        let html = ''
        for (const fragment of fragments) {
          if (fragment.type === 'text') {
            html += fragment.value
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
          } else {
            html += `<i class="${fragment.faClass} myal-fa-emoji"></i>`
          }
        }
        const t = new TokenCtor('html_inline', '', 0)
        t.content = `<code>${html}</code>`
        result.push(t)
      }
      continue
    }

    if (child.type !== 'text' || !containsAnyEmoji(child.content)) {
      result.push(child)
      continue
    }

    const fragments = splitByEmojis(child.content)

    for (const fragment of fragments) {
      if (fragment.type === 'text') {
        if (fragment.value) {
          const t = new TokenCtor('text', '', 0)
          t.content = fragment.value
          result.push(t)
        }
      } else {
        const t = new TokenCtor('html_inline', '', 0)
        t.content = `<i class="${fragment.faClass} myal-fa-emoji"></i>`
        result.push(t)
      }
    }
  }

  return result
}

type Fragment =
  | { type: 'text'; value: string }
  | { type: 'emoji'; faClass: string }

function splitByEmojis(text: string): Fragment[] {
  const fragments: Fragment[] = []
  let remaining = text

  while (remaining.length > 0) {
    let earliestIndex = Infinity
    let earliestEmoji = ''
    let earliestFaClass = ''

    for (const [emoji, faClass] of emojiToFaMap) {
      const index = remaining.indexOf(emoji)
      if (index !== -1 && index < earliestIndex) {
        earliestIndex = index
        earliestEmoji = emoji
        earliestFaClass = faClass
      }
    }

    if (earliestIndex === Infinity) {
      fragments.push({ type: 'text', value: remaining })
      break
    }
    if (earliestIndex > 0) {
      fragments.push({ type: 'text', value: remaining.slice(0, earliestIndex) })
    }
    fragments.push({ type: 'emoji', faClass: earliestFaClass })
    remaining = remaining.slice(earliestIndex + earliestEmoji.length)
  }

  return fragments
}
