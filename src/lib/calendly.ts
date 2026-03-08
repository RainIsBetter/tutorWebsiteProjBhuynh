const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_STYLESHEET_HREF = 'https://assets.calendly.com/assets/external/widget.css'

export const CALENDLY_URL = 'https://calendly.com/bonfireblue/30min'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

let calendlyScriptPromise: Promise<void> | null = null
let calendlyStylesPromise: Promise<void> | null = null

function loadCalendlyStyles() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (!calendlyStylesPromise) {
    calendlyStylesPromise = new Promise((resolve, reject) => {
      const existingLink = document.querySelector<HTMLLinkElement>(
        `link[href="${CALENDLY_STYLESHEET_HREF}"]`,
      )

      if (existingLink) {
        resolve()
        return
      }

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CALENDLY_STYLESHEET_HREF
      link.onload = () => resolve()
      link.onerror = () => reject(new Error('Failed to load Calendly widget styles.'))
      document.head.appendChild(link)
    })
  }

  return calendlyStylesPromise
}

function loadCalendlyScript() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.Calendly) {
    return Promise.resolve()
  }

  if (!calendlyScriptPromise) {
    calendlyScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_SCRIPT_SRC}"]`,
      )

      if (existingScript) {
        if (window.Calendly) {
          resolve()
          return
        }

        existingScript.addEventListener('load', () => resolve(), { once: true })
        existingScript.addEventListener(
          'error',
          () => reject(new Error('Failed to load Calendly widget script.')),
          { once: true },
        )
        return
      }

      const script = document.createElement('script')
      script.src = CALENDLY_SCRIPT_SRC
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Calendly widget script.'))
      document.body.appendChild(script)
    })
  }

  return calendlyScriptPromise
}

export function preloadCalendly() {
  void Promise.allSettled([loadCalendlyStyles(), loadCalendlyScript()])
}

export async function openCalendlyPopup(url = CALENDLY_URL) {
  try {
    await Promise.all([loadCalendlyStyles(), loadCalendlyScript()])

    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url })
      return
    }
  } catch {
    // fall back to direct booking URL below
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}
