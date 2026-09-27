import type { Experience } from '../data/experience'

interface ExperienceListProps {
  items: Experience[]
  /** Full mode shows exact dates, summary and highlights (About); compact is the Home summary */
  detailed?: boolean
}

export default function ExperienceList({ items, detailed = false }: ExperienceListProps) {
  return (
    <ol className={`experience-list ${detailed ? 'experience-list--detailed' : ''}`.trim()}>
      {items.map(item => (
        <li key={`${item.company}-${item.dates}`} className="experience-item">
          <span className="experience-item__period">{detailed ? item.dates : item.period}</span>
          <div>
            <h3>
              {item.role}
              {' ·'} <span className="experience-item__company">{item.company}</span>
            </h3>
            {detailed && (
              <>
                <p className="experience-item__description">{item.summary}</p>
                <ul className="experience-item__highlights">
                  {item.highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
            <ul className="tech-list" aria-label="Tecnologias">
              {item.stack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
