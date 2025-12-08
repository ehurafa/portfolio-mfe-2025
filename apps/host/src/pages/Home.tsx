import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
import { fetchGithubLanguages, fetchGithubContributions } from '../api/github'

interface GithubLanguage {
  name: string
  percentage: number
  color: string
}

interface GithubContribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [languages, setLanguages] = useState<GithubLanguage[]>([])
  const [contributions, setContributions] = useState<{
    total: number
    contributions: GithubContribution[]
  }>({ total: 0, contributions: [] })

  useEffect(() => {
    const loadData = async () => {
      const [langs, contribs] = await Promise.all([
        fetchGithubLanguages(),
        fetchGithubContributions()
      ])
      setLanguages(langs)
      setContributions(contribs)
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="home-page">
      <section className="intro-section">
        <h1 className="intro-title">Olá, eu sou Rafael.</h1>
        <p className="intro-text">
          Rafael Gomes com paixão pelo desenvolvimento front-end. Experiência em projetos diversos,
          sempre buscando aprender e compartilhar conhecimento.
        </p>
      </section>

      <div className="home-cards-grid">
        <Card variant="info" title="Linguagens Mais Usadas">
          {/* Barra de cores empilhada */}
          <div className="languages-bar">
            {languages.map(lang => (
              <div
                key={lang.name}
                className="language-segment"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color
                }}
                title={`${lang.name}: ${lang.percentage.toFixed(2)}%`}
              ></div>
            ))}
          </div>

          {/* Lista de linguagens em 2 colunas */}
          <div className="languages-grid">
            {languages.map(lang => (
              <div key={lang.name} className="language-item">
                <span className="language-dot" style={{ backgroundColor: lang.color }}></span>
                <span className="language-name">{lang.name}</span>
                <span className="language-percent">{lang.percentage.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="info" title="Experiência">
          <div className="experience-item">
            <h3 className="experience-role">UI Developer</h3>
            <p className="experience-company">
              UI Developer a uma startup tech folojpis de entr arionalizar com interesta tamalhando
              em om oncentuai mento aumnino.
            </p>
          </div>
        </Card>

        <Card variant="info" title="Contribuições GitHub">
          <p className="contributions-count">{contributions.total} contribuições no último ano</p>
          <div className="contributions-graph">
            <div className="contribution-weeks">
              {Array.from({ length: 52 }, (_, weekIndex) => {
                const weekContribs = contributions.contributions.slice(
                  weekIndex * 7,
                  (weekIndex + 1) * 7
                )
                return (
                  <div key={weekIndex} className="contribution-week">
                    {weekContribs.map((contrib, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`contribution-day level-${contrib.level}`}
                        title={`${contrib.date}: ${contrib.count} contribuições`}
                      ></div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="contribution-legend">
            <span>Menos</span>
            <div className="contribution-day level-0"></div>
            <div className="contribution-day level-1"></div>
            <div className="contribution-day level-2"></div>
            <div className="contribution-day level-3"></div>
            <div className="contribution-day level-4"></div>
            <span>Mais</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
