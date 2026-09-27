import type React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export interface CardProps {
  // GenericCard props (for Projects, Certificates, Laboratory)
  thumbnail?: string
  title?: string
  description?: string
  tag?: string
  /** @deprecated tags render as plain text; kept for API compatibility */
  tagColor?: 'purple' | 'red' | 'orange' | 'white'
  href?: string
  onClick?: () => void
  technologies?: string[]
  className?: string
  /** Show the title arrow when the card is wrapped by an external Link */
  showArrow?: boolean

  // Info variant (simple titled block)
  variant?: 'info'
  children?: React.ReactNode
}

export default function Card({
  thumbnail,
  title,
  description,
  tag,
  href,
  onClick,
  technologies,
  className = '',
  showArrow = false,

  variant,
  children
}: CardProps) {
  if (variant === 'info') {
    return (
      <div className={`info-card ${className}`.trim()}>
        <div className="info-card__body">
          {title && <h2 className="info-card__title info-card__title--bordered">{title}</h2>}
          <div className="info-card__content">{children}</div>
        </div>
      </div>
    )
  }

  const cardClasses = `card ${thumbnail ? '' : 'card--no-thumb'} ${className}`
    .replace(/\s+/g, ' ')
    .trim()

  const CardContent = (
    <>
      {thumbnail && (
        <div className="card__thumbnail">
          <img src={thumbnail} alt={title || ''} loading="lazy" />
        </div>
      )}

      <div className="card__body">
        {title && (
          <h3 className="card__title">
            {title}
            {(href || showArrow) && <FiArrowUpRight className="card__arrow" aria-hidden="true" />}
          </h3>
        )}
        {description && <p className="card__description">{description}</p>}
        {tag && <span className="card__tag">{tag}</span>}

        {technologies && technologies.length > 0 && (
          <div className="card__tech-tags">
            {technologies.map(tech => (
              <span key={tech} className="card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {children && <div className="card__content">{children}</div>}
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {CardContent}
      </a>
    )
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cardClasses}>
        {CardContent}
      </button>
    )
  }

  return <div className={cardClasses}>{CardContent}</div>
}
