import { motion } from 'motion/react'
import { BsCodeSlash, BsLightningCharge, BsStars } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const // Custom easeOutQuint for smooth slide
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 12,
      stiffness: 100
    }
  }
}

export default function Home() {
  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={textVariants}>
        Criando experiências
        <span className="gradient-text">digitais incríveis</span>
      </motion.h1>

      <motion.p className="subtitle" variants={textVariants}>
        Desenvolvedor Front-end especializado em criar interfaces modernas, responsivas e
        performáticas com Javascript e as melhores práticas do mercado.
      </motion.p>

      <motion.div className="cta-group" variants={textVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/projetos" className="btn btn-primary">
            Ver Projetos
            <HiOutlineSparkles />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/sobre-mim" className="btn btn-secondary">
            Sobre mim
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="features-grid" variants={containerVariants}>
        <motion.div
          className="feature-card"
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="icon-box purple glow-effect">
            <BsCodeSlash />
          </div>
          <h3>Clean Code</h3>
          <p>
            Código limpo e manutenível, seguindo princípios SOLID e padrões de arquitetura modernos.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="icon-box pink glow-effect">
            <BsLightningCharge />
          </div>
          <h3>Performance</h3>
          <p>
            Otimização extrema para garantir o melhor tempo de carregamento e pontuação no
            Lighthouse.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="icon-box blue glow-effect">
            <BsStars />
          </div>
          <h3>UX/UI</h3>
          <p>
            Foco total na experiência do usuário, com micro-interações e design system consistente.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
