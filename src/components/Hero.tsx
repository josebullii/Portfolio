import { ArrowDown } from 'lucide-react'
import { languages, profile, projects } from '../data'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text reveal">
            <h1 className="hero__title">
              Del diseño
              <br />
              <em>al código.</em>
            </h1>
            <div className="hero__byline">
              <span className="line" />
              <strong>{profile.name}</strong>
              <span className="sep">·</span>
              <span>“{profile.alias}”</span>
            </div>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a href="#sobre-mi" className="btn btn--ghost">
                Conóceme <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="terminal reveal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <i /> <i /> <i />
              </span>
              <span className="terminal__path">~/bulli/perfil</span>
              <span className="status">
                <span className="dot" /> LIVE
              </span>
            </div>
            <div className="terminal__body">
              <p className="terminal__cmd">$ cat expediente.toml</p>
              <p className="terminal__comment"># certificados · EOI</p>
              <ul className="bars">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <span>{lang.name}</span>
                    <span className="bar">
                      <span style={{ width: `${lang.value}%` }} />
                    </span>
                    <span className="bar__level">{lang.level}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <p className="terminal__status">
                <span className="dot" /> estudiando: ingeniería informática
              </p>
              <p className="terminal__muted">
                proyecto actual: <a href={projects[0].url} target="_blank" rel="noreferrer" className="plain-link">
                  <b>{projects[0].url.replace('https://', '')}</b>
                </a>
                <span className="cursor" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
