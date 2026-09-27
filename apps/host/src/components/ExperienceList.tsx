import type { Experience } from '../data/experience'

interface ExperienceListProps {
  items: Experience[]
  showDescription?: boolean
}

export default function ExperienceList({ items, showDescription = false }: ExperienceListProps) {
  return (
    <ol className="experience-list">
      {items.map(item => (
        <li key={`${item.company}-${item.period}`} className="experience-item">
          <span className="experience-item__period">{item.period}</span>
          <div>
            <h3>
              {item.role}
              {' ·'} <span className="experience-item__company">{item.company}</span>
            </h3>
            {showDescription && <p className="experience-item__description">{item.description}</p>}
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
