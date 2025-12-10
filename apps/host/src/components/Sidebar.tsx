import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiSocialLinkedin } from 'react-icons/ti'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa6'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import profileImage from '../assets/profile.jpg'
import brandImage from '../assets/brand.png'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="avatar">
        <img src={profileImage} alt="Foto de perfil" />
      </div>
      <NavLink to="/" end>
        <h1 className="brand">
          <img src={brandImage} alt="Rafael Gomes" />
        </h1>
      </NavLink>
      <span className="role">Front-end Developer</span>
      <div className="social">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
        </button>
        <a
          href="https://www.linkedin.com/in/rflrafa/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <TiSocialLinkedin />
          </span>
        </a>
        <a
          href="https://br.pinterest.com/ehurafa/jobs"
          aria-label="Pinterest"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <BiLogoPinterestAlt />
          </span>
        </a>
        <a href="https://github.com/ehurafa" aria-label="GitHub" target="_blank" rel="noreferrer">
          <span>
            <FaGithubAlt />
          </span>
        </a>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Projetos
        </NavLink>
        <NavLink to="/sobre-mim" onClick={() => setIsOpen(false)}>
          Sobre mim
        </NavLink>
        <NavLink to="/certificados" onClick={() => setIsOpen(false)}>
          Certificados
        </NavLink>
        <NavLink to="/laboratorio" onClick={() => setIsOpen(false)}>
          Laboratório
        </NavLink>
      </nav>
    </div>
  )
}
