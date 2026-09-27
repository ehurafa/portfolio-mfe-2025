import { useState } from 'react'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import brandImage from '../assets/brand.png'
import profileImage from '../assets/vibrant-avatar.png'

const navItems = [
  { to: '/', label: 'Início', end: true },
  { to: '/projetos', label: 'Projetos', end: false },
  { to: '/sobre-mim', label: 'Sobre mim', end: false },
  { to: '/certificados', label: 'Certificados', end: false }
]

const socialLinks = [
  { href: 'https://github.com/ehurafa', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/rflrafa/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://br.pinterest.com/ehurafa/jobs', label: 'Pinterest', Icon: BiLogoPinterestAlt }
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div>
        <div className="identity">
          <img className="avatar" src={profileImage} alt="Ilustração de Rafael Gomes" />
          <NavLink to="/" end className="brand" aria-label="Rafael Gomes, página inicial">
            <img src={brandImage} alt="Rafael Gomes" />
          </NavLink>
        </div>

        <p className="role">Front-end Developer</p>
        <p className="pitch">
          Front-end sênior. Trabalho com <span className="nowrap">micro-frontends</span> e design
          systems em plataformas de alta escala.
        </p>

        <button
          className={`menu-toggle ${isOpen ? 'is-open' : ''}`.trim()}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="main-nav"
        >
          {/* Three bars that morph into an X when open */}
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="menu-toggle__bar" aria-hidden="true" />
        </button>

        <nav id="main-nav" className={`nav ${isOpen ? 'open' : ''}`} aria-label="Principal">
          <ul>
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={() => setIsOpen(false)}>
                  <span className="nav-rule" aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="social">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
