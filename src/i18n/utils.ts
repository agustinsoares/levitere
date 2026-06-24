import { translations, languages } from './translations'
import type { Lang } from './translations'

export { languages }
export type { Lang }

/**
 * Devuelve el objeto de traducciones para el idioma dado.
 * Uso en componentes Astro:
 *
 *   const t = useTranslations(lang)
 *   t.nav.work   →  "Work" / "Arbeid" / "Trabajo"
 */
export function useTranslations(lang: Lang) {
  return new Proxy(translations, {
    get(target, section: string) {
      const s = target[section as keyof typeof target]
      if (!s) return {}
      return new Proxy(s, {
        get(sectionTarget, key: string) {
          const entry = sectionTarget[key as keyof typeof sectionTarget]
          if (entry && typeof entry === 'object' && lang in entry) {
            return (entry as Record<Lang, string>)[lang]
          }
          // Para objetos anidados (como services.items)
          return entry
        },
      })
    },
  }) as unknown as TranslationProxy
}

/**
 * Extrae el idioma de la URL actual.
 * / o /en/  →  'en'
 * /no/      →  'no'
 * /es/      →  'es'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  if (first in languages) return first as Lang
  return 'en'
}

/**
 * Devuelve la URL equivalente en otro idioma.
 * Útil para el selector de idioma del Navbar.
 */
export function getAlternatePath(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean)
  const [first, ...rest] = segments
  const hasLangPrefix = first in languages

  if (targetLang === 'en') {
    // Inglés es el idioma por defecto, sin prefijo
    const path = hasLangPrefix ? rest.join('/') : segments.join('/')
    return '/' + (path || '')
  }

  const path = hasLangPrefix ? rest.join('/') : segments.join('/')
  return `/${targetLang}/${path}`
}

// ─── Tipos ─────────────────────────────────────────────────────────────────

type StringNode = string

type ItemsProxy = {
  fpv: { title: StringNode; description: StringNode }
  video: { title: StringNode; description: StringNode }
  photography: { title: StringNode; description: StringNode }
  d3: { title: StringNode; description: StringNode }
}

type TranslationProxy = {
  nav: { work: StringNode; about: StringNode; services: StringNode; contact: StringNode }
  hero: { headline: StringNode; subheadline: StringNode; cta: StringNode }
  services: { label: StringNode; title: StringNode; items: ItemsProxy }
  work: { label: StringNode; title: StringNode; empty: StringNode; emptySub: StringNode }
  about: {
    label: StringNode
    title: StringNode
    titleItalic: StringNode
    p1: StringNode
    p2: StringNode
    p3: StringNode
    p4: StringNode
    oscarRole: StringNode
    emilioRole: StringNode
  }
  contact: {
    label: StringNode
    title: StringNode
    titleItalic: StringNode
    subtitle: StringNode
    namePlaceholder: StringNode
    emailPlaceholder: StringNode
    messagePlaceholder: StringNode
    button: StringNode
  }
  footer: { copyright: StringNode }
}
