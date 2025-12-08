import { VscMortarBoard } from 'react-icons/vsc';
import Spinner from '../components/Spinner';

export default function Certificates() {
  const mappedTags: Record<string, string> = {
    udemy: 'purple',
    alura: 'white',
    coder: 'red',
    'internet innovation': 'orange'
  };

  const certificates = [
    {
      id: 0,
      title: 'Next',
      description: 'NextJS do zero ao avançado na pratica 2025',
      pdf: '/certificates/next-2.pdf',
      thumb: '/certificates/next-2.png',
      tags: ['udemy']
    },
    {
      id: 100,
      title: 'Angular 9',
      description: 'Angular 9 - Essencial',
      pdf: '/certificates/angular-9.pdf',
      thumb: '/certificates/angular-9.jpg',
      tags: ['coder']
    },
    {
      id: 500,
      title: 'Cypress',
      pdf: '/certificates/cypress.pdf',
      description: 'AUTOMATIZANDO TESTES E2E',
      thumb: '/certificates/cypress.jpg',
      tags: ['alura']
    },
    {
      id: 50,
      title: 'Cypress',
      description: 'AUTOMATIZAÇÃO DE TESTES WEB E CI',
      pdf: '/certificates/cypress-2.pdf',
      thumb: '/certificates/cypress-2.jpg',
      tags: ['alura']
    },
    {
      id: 3333,
      title: 'HTTP',
      description: 'Entendendo a Web por baixo dos panos',
      pdf: '/certificates/http.jpg',
      thumb: '/certificates/http.jpg',
      tags: ['alura']
    },
    {
      id: 33,
      title: 'Javascript',
      description: 'Programando na linguagem da web',
      pdf: '/certificates/js.jpg',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      id: 34,
      title: 'Javascript',
      description: 'JS com TDD na prática',
      pdf: '/certificates/js-2.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: ['udemy']
    },
    {
      id: 35,
      title: 'Javascript',
      description: 'Conhecendo o Browser e Padrões de Projeto',
      pdf: '/certificates/js-3.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      id: 36,
      title: 'Javascript',
      description: 'ES6, Orientação a Objetos e Patterns',
      pdf: '/certificates/js-4.jpg',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      id: 37,
      title: 'Javascript',
      description: 'Javascript Ninja',
      pdf: '/certificates/js-5.pdf',
      thumb: '/certificates/javascript.jpg',
      tags: ['udemy']
    },
    {
      id: 38,
      title: 'Javascript',
      pdf: '/certificates/js-6.jpg',
      description: 'Lógica de Programação I: Comece na carreira JS',
      thumb: '/certificates/javascript.jpg',
      tags: ['alura']
    },
    {
      id: 388,
      title: 'Micro-frontend',
      description: 'Treinamento prático de MicroFrontend com SingleSPA',
      pdf: '/certificates/mfe.pdf',
      thumb: '/certificates/mfe.jpg',
      tags: ['udemy']
    },
    {
      id: 1,
      title: 'Next',
      description: 'TOUR PELO NEXT.JS',
      pdf: '/certificates/next.pdf',
      thumb: '/certificates/next.jpg',
      tags: ['alura']
    },
    {
      id: 44,
      title: 'React',
      description: 'Eleve o nível da sua documentação no Storybook',
      pdf: '/certificates/react.pdf',
      thumb: '/certificates/react.jpg',
      tags: ['alura']
    },
    {
      id: 2,
      title: 'React',
      description: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
      school: 'Udemy',
      pdf: '/certificates/react-2.pdf',
      thumb: '/certificates/react-2.jpg',
      tags: ['udemy']
    },
    {
      id: 47,
      title: 'Regex',
      description: 'Fundamentos de Expressões Regulares',
      pdf: '/certificates/regex.pdf',
      thumb: '/certificates/regex.jpg',
      tags: ['udemy']
    },
    {
      id: 400,
      title: 'Sass',
      description: 'Sass e Compass: Descomplicando o CSS',
      pdf: '/certificates/sass.pdf',
      thumb: '/certificates/sass.jpg',
      tags: ['alura']
    },
    {
      id: 401,
      title: 'S.E.O',
      pdf: '/certificates/seo.pdf',
      thumb: '/certificates/seo.jpg',
      tags: ['internet innovation']
    },
    {
      id: 402,
      title: 'Typescript',
      description: 'Dominando o Typescript',
      pdf: '/certificates/ts.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: ['udemy']
    },
    {
      id: 403,
      title: 'Typescript',
      description: 'Typescript I: Evoluindo seu Javascript',
      pdf: '/certificates/ts-2.pdf',
      thumb: '/certificates/typescript.jpg',
      tags: ['alura']
    },
    {
      id: 404,
      title: 'Webpack',
      description: 'Trabalhando com módulos na sua webapp',
      pdf: '/certificates/webpack.pdf',
      thumb: '/certificates/webpack.jpg',
      tags: ['alura']
    },
    {
      id: 20,
      title: 'Vue 2',
      description: 'O Guia Completo (incl. Vue Router & Vuex)',
      pdf: '/certificates/vue-2.pdf',
      thumb: '/certificates/vue-2.jpg',
      tags: ['udemy']
    },
    {
      id: 4,
      title: 'Vue 3',
      description: 'Vue 3 Completo com Composition API, Vuex & Vue Router',
      pdf: '/certificates/vue-3.pdf',
      thumb: '/certificates/vue-3.jpg',
      tags: ['udemy']
    },
    {
      id: 5,
      title: 'Vue 3',
      description: 'Entendendo Componentes, Diretivas e Reatividade no Framework',
      pdf: '/certificates/vue-3-2.pdf',
      thumb: '/certificates/vue-3-2.jpg',
      tags: ['alura']
    },
    {
      id: 501,
      title: 'AngularJS',
      description: 'Crie webapps poderosas',
      pdf: '/certificates/angular-1.jpg',
      thumb: '/certificates/angular-1.jpg',
      tags: ['alura']
    },
    {
      id: 502,
      title: 'Azure Pipelines',
      description: 'CI/CD, Docker e Kubernetes no Azure DevOps',
      pdf: '/certificates/pipelines.pdf',
      thumb: '/certificates/pipelines.png',
      tags: ['udemy']
    }
  ];

  return (
    <>
      <div className="title-warpper">
        <div className="title">
          <h1>
            {' '}
            <VscMortarBoard /> <span>Certificados</span>
          </h1>
        </div>
        <p>Os meus certificados mais relevantes</p>
      </div>

      {!certificates ? (
        <Spinner />
      ) : (
        <div className="grid">
          {certificates
            .slice()
            .sort((a, b) => a.id - b.id)
            .map(cert => (
              <a
                key={cert.id}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <div className="thumb">
                  {cert.tags &&
                    cert.tags.map(t => (
                      <span key={t} className={`tag school ${mappedTags[t]}`}>
                        {cert.tags[0]}
                      </span>
                    ))}
                  <img 
                    src={cert.thumb} 
                    alt={cert.title}
                    onError={(e) => {
                      e.currentTarget.src = '/certificates/placeholder.svg';
                    }}
                  />
                </div>

                <div className="body">
                  <h3 className="title">{cert.title}</h3>
                  {cert.description && <p className="description">{cert.description}</p>}
                </div>
              </a>
            ))}
        </div>
      )}
    </>
  );
}
