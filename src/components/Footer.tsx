import { currentYear, profile } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {currentYear} {profile.name}
        </span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  )
}

export default Footer
