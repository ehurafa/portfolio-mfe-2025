import { motion } from 'motion/react'
import { VscMortarBoard } from 'react-icons/vsc'
import Card from '../components/Card'
import Spinner from '../components/Spinner'

// Animation variants for the grid
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
}

export default function Certificates() {
  const mappedTags: Record<string, string> = {
    udemy: 'purple',
    alura: 'white',
    coder: 'red',
    'internet innovation': 'orange'
  }

  const certificates = [
    {
      title: 'Arquitetura Limpa e Hexagonal',
      description: 'Dominando Arquitetura Hexagonal (Ports and Adapters)',
      pdf: '/certificates/ports-and-adapters.pdf',
      thumb: '/certificates/clean-architecture.png',
      tags: ['udemy']
    },
    {
      title: 'Next',
      description: 'NextJS do zero ao avançado na pratica 2025',
      pdf: '/certificates/next-2.pdf',
      thumb: '/certificates/next-2.png',
      tags: ['udemy']
    },
    {
      title: 'Javascript',
      description: 'Javascript Ninja',
      pdf: '/certificates/js-5.pdf',
      thumb: '/certificates/javascript-ninja-v4.png',
      tags: ['udemy']
    },
    {
      title: 'Micro-frontend',
      description: 'Treinamento prático de MicroFrontend com SingleSPA',
      pdf: '/certificates/mfe.pdf',
      thumb: '/certificates/mfe.jpg',
      tags: ['udemy']
    },
    {
      title: 'Cypress',
      description: 'AUTOMATIZAÇÃO DE TESTES WEB E CI',
      pdf: '/certificates/cypress-2.pdf',
      thumb: '/certificates/cypress-2.jpg',
      tags: ['alura']
    },
    {
      title: 'React',
      description: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
      school: 'Udemy',
      pdf: '/certificates/react-2.pdf',
      thumb: '/certificates/react-2.jpg',
      tags: ['udemy']
    },
    {
      title: 'Vue 3',
      description: 'Vue 3 Completo com Composition API, Vuex & Vue Router',
      pdf: '/certificates/vue-3.pdf',
      thumb: '/certificates/vue-3.jpg',
      tags: ['udemy']
    },
    {
      title: 'Azure Pipelines',
      description: 'CI/CD, Docker e Kubernetes no Azure DevOps',
      pdf: '/certificates/pipelines.pdf',
      thumb: '/certificates/pipelines.png',
      tags: ['udemy']
    },
    {
      title: 'Webpack',
      description: 'Trabalhando com módulos na sua webapp',
      pdf: '/certificates/webpack.pdf',
      thumb: '/certificates/webpack.jpg',
      tags: ['alura']
    },
    {
      title: 'Javascript',
      description: 'JS com TDD na prática',
      pdf: '/certificates/js-2.pdf',
      thumb: '/certificates/javascript-tdd.png',
      tags: ['udemy']
    },
    {
      title: 'Vue 2',
      description: 'O Guia Completo (incl. Vue Router & Vuex)',
      pdf: '/certificates/vue-2.pdf',
      thumb: '/certificates/vue-2.jpg',
      tags: ['udemy']
    },
    {
      title: 'Angular 9',
      description: 'Angular 9 - Essencial',
      pdf: '/certificates/angular-9.pdf',
      thumb: '/certificates/angular-9.jpg',
      tags: ['coder']
    },
    {
      title: 'HTTP',
      description: 'Entendendo a Web por baixo dos panos',
      pdf: '/certificates/http.jpg',
      thumb: '/certificates/http.png',
      tags: ['alura']
    },
    {
      title: 'Typescript',
      description: 'Dominando o Typescript',
      pdf: '/certificates/ts.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: ['udemy']
    },
    {
      title: 'Next',
      description: 'TOUR PELO NEXT.JS',
      pdf: '/certificates/next.pdf',
      thumb: '/certificates/next.jpg',
      tags: ['alura']
    },
    {
      title: 'Javascript',
      description: 'Programando na linguagem da web',
      pdf: '/certificates/js.jpg',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      title: 'Javascript',
      description: 'Conhecendo o Browser e Padrões de Projeto',
      pdf: '/certificates/js-3.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      title: 'Vue 3',
      description: 'Entendendo Componentes, Diretivas e Reatividade no Framework',
      pdf: '/certificates/vue-3-2.pdf',
      thumb: '/certificates/vue-3-2.jpg',
      tags: ['alura']
    },
    {
      title: 'Javascript',
      description: 'ES6, Orientação a Objetos e Patterns',
      pdf: '/certificates/js-4.jpg',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      title: 'Javascript',
      pdf: '/certificates/js-6.jpg',
      description: 'Lógica de Programação I: Comece na carreira JS',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      title: 'React',
      description: 'Eleve o nível da sua documentação no Storybook',
      pdf: '/certificates/react.pdf',
      thumb: '/certificates/react.jpg',
      tags: ['alura']
    },

    {
      title: 'Regex',
      description: 'Fundamentos de Expressões Regulares',
      pdf: '/certificates/regex.pdf',
      thumb: '/certificates/regex.jpg',
      tags: ['udemy']
    },
    {
      title: 'Sass',
      description: 'Sass e Compass: Descomplicando o CSS',
      pdf: '/certificates/sass.pdf',
      thumb: '/certificates/sass.jpg',
      tags: ['alura']
    },
    {
      title: 'Cypress',
      pdf: '/certificates/cypress.pdf',
      description: 'AUTOMATIZANDO TESTES E2E',
      thumb: '/certificates/cypress.jpg',
      tags: ['alura']
    },
    {
      title: 'S.E.O',
      pdf: '/certificates/seo.pdf',
      thumb: '/certificates/seo.jpg',
      tags: ['internet innovation']
    },

    {
      title: 'Typescript',
      description: 'Typescript I: Evoluindo seu Javascript',
      pdf: '/certificates/ts-2.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: ['alura']
    },
    {
      title: 'AngularJS',
      description: 'Crie webapps poderosas',
      pdf: '/certificates/angular-1.jpg',
      thumb: '/certificates/angular-1.jpg',
      tags: ['alura']
    }
  ]

  return (
    <>
      <header className="title-wrapper">
        <div className="title">
          <h1>
            <VscMortarBoard />{' '}
            <span>
              Alguns
              <br />
              <span>Certificados</span>
            </span>
          </h1>
        </div>
        <p>Os meus certificados mais relevantes</p>
      </header>

      {!certificates ? (
        <Spinner />
      ) : (
        <motion.div className="grid" variants={gridVariants} initial="hidden" animate="visible">
          {certificates.map(cert => (
            <motion.div key={cert.pdf} variants={cardVariants}>
              <Card
                thumbnail={cert.thumb}
                title={cert.title}
                description={cert.description}
                tag={cert.tags[0]}
                tagColor={mappedTags[cert.tags[0]] as 'purple' | 'red' | 'orange' | 'white'}
                href={cert.pdf}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  )
}
