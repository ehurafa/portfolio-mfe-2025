import { useEffect, useState } from 'react'
import { VscPreview } from 'react-icons/vsc'
import Spinner from '../components/Spinner'

export default function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="title-warpper">
        <div className="title">
          <h1>
            {' '}
            <VscPreview /> <span>Minha História no Front-End</span>
          </h1>
        </div>
      </div>

      <div className="about">
        <p>
          Sou Rafael Gomes, Desenvolvedor Front-end especializado no ecossistema JavaScript há mais
          de 14 anos, atuando na construção de interfaces escaláveis, performáticas e sustentáveis
          para aplicações de alta criticidade. Minha principal expertise está em React, Vue e
          Angular, aplicando conceitos avançados de arquitetura e padrões de projeto para entregar
          produtos robustos, manuteníveis e orientados à experiência do usuário. <br />
          <br />
          Minha atuação é fortemente guiada por princípios como Clean Code, SOLID, separação de
          responsabilidades, componetização eficiente e padronização de camadas. Tenho experiência
          em estruturar aplicações utilizando design patterns e arquiteturas como Microfrontends,
          Design Systems, modularização inteligente, Server-Side Rendering, componentização nativa
          (Web Components), além de organização de pastas em múltiplos formatos (colocation, atomic,
          domain-driven, feature-driven). <br />
          <br />
          Trabalho diariamente com ferramentas que fortalecem processos de qualidade — Storybook,
          Cypress, Jest, GitFlow, Docker, Webpack, Vite — sempre aliado a ciclagens ágeis
          (Scrum/Kanban) e boas práticas de performance e otimização de entrega. Sempre respeitando
          a "boa e velha" semântica
          <br />
          <br />
          Atualmente atuo no Mercado Bitcoin, onde participo da criação e evolução de módulos Vue.js
          em arquitetura server-side, desenvolvimento de componentes do Design System, implementação
          de padrões de UI/UX, manutenção de web components, integrações analíticas (GTM, GA,
          Insider) e suporte operacional em ambientes Kubernetes em uma arquitetura BFF. Tenho foco
          contínuo na criação de interfaces documentadas, previsíveis e escaláveis. <br />
          <br />
          Com formação em Design Gráfico e Técnico em Informática (ênfase em Programação), consigo
          unir fundamentos visuais à engenharia de front-end, trazendo visão de UX, consistência
          visual e experiência fluida ao usuário final. <br />
          <br />
          Sou movido por resolver problemas através de código, criar arquiteturas sólidas e elevar o
          nível técnico dos produtos em que atuo — sempre com o objetivo de construir aplicações
          mais rápidas, seguras, modulares e com uma base bem estruturada em JavaScript.
        </p>
      </div>
    </>
  )
}
