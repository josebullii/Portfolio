import { ArrowUpRight, Sprout } from 'lucide-react'
import { projects } from '../data'

function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">— 02 · Proyectos</p>
          <h2 className="section__title">En qué trabajo</h2>
        </header>

        <div className="projects">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="card project reveal"
            >
              <img
                src={project.image}
                alt={`Captura del proyecto ${project.name}`}
                className="project__image"
                loading="lazy"
              />
              <div className="project__top">
                <span className="card__icon">
                  <Sprout size={20} />
                </span>
                <span className="status">
                  <span className="dot dot--green" /> {project.status.toUpperCase()}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project__bottom">
                <span className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </span>
                <span className="project__link">
                  {project.url.replace('https://', '')} <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
