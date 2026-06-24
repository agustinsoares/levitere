import { translations, languages } from './translations'
import type { Lang } from './translations'

export { languages }
export type { Lang }

/**
 * Recorre recursivamente el objeto de traducciones y resuelve
 * cada nodo { en, no, es } al string del idioma pedido.
 */
function resolve(obj: unknown, lang: Lang): unknown {
  if (typeof obj !== 'object' || obj === null) return obj

  // Si el objeto tiene las tres claves de idioma, es un nodo hoja → devolver el string
  if ('en' in obj && 'no' in obj && 'es' in obj) {
    return (obj as Record<Lang, string>)[lang]
  }

  // Si no, es un nodo intermedio → resolver sus hijos recursivamente
  const result: Record<string, unknown> = {}
  for (const key of Object.keys(obj)) {
    result[key] = resolve((obj as Record<string, unknown>)[key], lang)
  }
  return result
}

/**
 * Devuelve el objeto de traducciones completamente resuelto para el idioma dado.
 *
 *   const t = useTranslations('es')
 *   t.nav.work           →  "Trabajo"
 *   t.services.items.fpv.title  →  "Filmación con dron FPV"
 */
export function useTranslations(lang: Lang) {
  return resolve(translations, lang) as TranslationProxy
}

/**
 * Extrae el idioma de la URL actual.
 * /        →  'en'
 * /no/     →  'no'
 * /es/     →  'es'
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
    const path = hasLangPrefix ? rest.join('/') : segments.join('/')
    return '/' + (path || '')
  }

  const path = hasLangPrefix ? rest.join('/') : segments.join('/')
  return `/${targetLang}/${path}`
}

// ─── Tipos ──────────────────────────────────────────────────────────────────

type S = string

type TranslationProxy = {
  nav: { work: S; about: S; services: S; contact: S }
  hero: { headline: S; subheadline: S; cta: S }
  services: {
    label: S
    title: S
    items: {
      fpv: { title: S; description: S }
      video: { title: S; description: S }
      photography: { title: S; description: S }
      d3: { title: S; description: S }
    }
  }
  work: { label: S; title: S; empty: S; emptySub: S }
  about: {
    label: S; title: S; titleItalic: S
    p1: S; p2: S; p3: S; p4: S
    oscarRole: S; emilioRole: S
  }
  contact: {
    label: S; title: S; titleItalic: S; subtitle: S
    namePlaceholder: S; emailPlaceholder: S; messagePlaceholder: S; button: S
  }
  footer: { copyright: S }
}