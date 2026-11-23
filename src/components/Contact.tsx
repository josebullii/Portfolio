import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { contact, profile } from '../data'

function Contact() {
  const links = [
    contact.email && {
      label: 'Gmail',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`,
    },
    contact.github && { label: 'GitHub', href: contact.github },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact card reveal">
          <p className="eyebrow">— 03 · Contacto</p>
          <h2 className="section__title">¿Hablamos?</h2>
          <p className="contact__text">
            Si tienes una propuesta o una idea, estaré encantado de leerte.
          </p>

          {links.length > 0 ? (
            <div className="hero__actions">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${i === 0 ? 'btn--primary' : 'btn--ghost'}`}
                >
                  {i === 0 && <Mail size={16} />} {link.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          ) : (
            <p className="terminal__muted">Datos de contacto próximamente.</p>
          )}

          <p className="contact__location">
            <MapPin size={16} /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
