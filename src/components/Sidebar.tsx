import { NavLink } from 'react-router-dom';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { FaGithubAlt } from 'react-icons/fa6';
import profileImage from '../assets/profile.jpg';
import brandImage from '../assets/brand.png';

export default function Sidebar() {
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
        <a href="https://github.com/ehurafa" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <span>
            <FaGithubAlt />
          </span>
        </a>
      </div>
      <nav className="nav">
        <NavLink to="/" end>
          Inicial
        </NavLink>
        <NavLink to="/sobre-mim">Sobre mim</NavLink>
        <NavLink to="/certificados">Certificados</NavLink>
      </nav>
    </div>
  );
}
