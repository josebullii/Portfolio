import { GraduationCap, Languages } from 'lucide-react'
import { education, profile } from '../data'

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">— 01 · Sobre mí</p>
          <h2 className="section__title">Quién soy</h2>
        </header>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>
              Soy <strong>{profile.name}</strong>, aunque casi todo el mundo me conoce como{' '}
              <strong>{profile.alias}</strong>. Estudio Ingeniería Informática en la{' '}
              {profile.university}.
            </p>
            <p>
              Disfruto convirtiendo ideas en aplicaciones reales, y ahora mismo dedico buena parte de
              mi tiempo a desarrollar mi propio proyecto web.
            </p>
          </div>

          <ul className="cards">
            {education.map((item) => (
              <li key={item.title} className="card reveal">
                <span className="card__icon">
                  {item.title.startsWith('Grado') ? (
                    <GraduationCap size={20} />
                  ) : (
                    <Languages size={20} />
                  )}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <span className="tag">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
