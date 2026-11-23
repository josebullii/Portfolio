import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data'
import { useActiveSection } from '../hooks'

const ids = navItems.map((item) => item.id)

function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          {profile.alias}
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn--light navbar__cta">
          Hablemos
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
