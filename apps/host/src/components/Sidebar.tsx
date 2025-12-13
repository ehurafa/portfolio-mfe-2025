import { useState } from 'react'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa6'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { TiSocialLinkedin } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import brandImage from '../assets/brand.png'
import profileImage from '../assets/profile.jpg'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const avatarVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      scale: {
        type: 'spring' as const,
        bounce: 0.5
      }
    }
  }
}

const slideLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const socialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      scale: {
        type: 'spring' as const,
        bounce: 0.5
      }
    }
  }
}

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="avatar" variants={avatarVariants}>
        <img src={profileImage} alt="Foto de perfil" />
      </motion.div>

      <NavLink to="/" end>
        <motion.h1 className="brand" variants={slideLeftVariants}>
          <img src={brandImage} alt="Rafael Gomes" />
        </motion.h1>
      </NavLink>

      <motion.span className="role" variants={fadeInVariants}>
        Front-end Developer
      </motion.span>

      <motion.div className="social" variants={socialVariants}>
        <motion.button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          variants={iconVariants}
        >
          {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
        </motion.button>

        <motion.a
          href="https://www.linkedin.com/in/rflrafa/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
          variants={iconVariants}
        >
          <span>
            <TiSocialLinkedin />
          </span>
        </motion.a>

        <motion.a
          href="https://br.pinterest.com/ehurafa/jobs"
          aria-label="Pinterest"
          target="_blank"
          rel="noreferrer"
          variants={iconVariants}
        >
          <span>
            <BiLogoPinterestAlt />
          </span>
        </motion.a>

        <motion.a
          href="https://github.com/ehurafa"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
          variants={iconVariants}
        >
          <span>
            <FaGithubAlt />
          </span>
        </motion.a>
      </motion.div>

      <motion.nav className={`nav ${isOpen ? 'open' : ''}`} variants={navVariants}>
        <motion.div variants={navItemVariants}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Projetos
          </NavLink>
        </motion.div>
        <motion.div variants={navItemVariants}>
          <NavLink to="/sobre-mim" onClick={() => setIsOpen(false)}>
            Sobre mim
          </NavLink>
        </motion.div>
        <motion.div variants={navItemVariants}>
          <NavLink to="/certificados" onClick={() => setIsOpen(false)}>
            Certificados
          </NavLink>
        </motion.div>
        <motion.div variants={navItemVariants}>
          <NavLink to="/laboratorio" onClick={() => setIsOpen(false)}>
            Laboratório
          </NavLink>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}
