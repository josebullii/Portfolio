import { useEffect, useState } from 'react'

/** Añade la clase `is-visible` a los elementos `.reveal` cuando entran en pantalla. */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Devuelve el id de la sección que está actualmente en pantalla. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

/** Desplaza la página con una animación suave hasta el elemento indicado. */
export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const navHeight = document.querySelector<HTMLElement>('.navbar')?.offsetHeight ?? 0
  const start = window.scrollY
  const end = Math.max(0, target.getBoundingClientRect().top + start - navHeight)
  const distance = end - start
  if (Math.abs(distance) < 2) return

  const duration = Math.min(1100, Math.max(500, Math.abs(distance) * 0.45))
  const startTime = performance.now()

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration)
    window.scrollTo({ top: start + distance * easeInOutCubic(progress), behavior: 'instant' })
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
  history.replaceState(null, '', `#${id}`)
}

/** Intercepta los enlaces internos (`href="#..."`) para animar el scroll entre secciones. */
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      const id = link?.getAttribute('href')?.slice(1)
      if (!id || !document.getElementById(id)) return
      event.preventDefault()
      scrollToSection(id)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
