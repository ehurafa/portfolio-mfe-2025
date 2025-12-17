import type React from 'react'

export interface CardProps {
  // GenericCard props (for Projects, Certificates, Laboratory)
  thumbnail?: string
  title?: string
  description?: string
  tag?: string
  tagColor?: 'purple' | 'red' | 'orange' | 'white'
  href?: string
  onClick?: () => void
  technologies?: string[]
  className?: string

  // Old Card props (for Home - variant="info")
  variant?: 'info'
  children?: React.ReactNode
}

export default function Card({
  // GenericCard props
  thumbnail,
  title,
  description,
  tag,
  tagColor = 'purple',
  href,
  onClick,
  technologies,
  className = '',

  // Old Card props
  variant,
  children
}: CardProps) {
  // If variant="info", use the old Card layout (for Home page) - now Info Card
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

  // Otherwise, use GenericCard layout - now Standard Card
  const cardClasses = `card ${className}`.trim()
  const isClickable = onClick || href

  const CardContent = (
    <>
      {thumbnail && (
        <div className="card__thumbnail">
          {tag && <span className={`card__tag card__tag--${tagColor}`}>{tag}</span>}
          <img src={thumbnail} alt={title || ''} loading="lazy" />
        </div>
      )}

      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}

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

  // If href is provided, render as anchor
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {CardContent}
      </a>
    )
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cardClasses}>
        {CardContent}
      </button>
    )
  }

  // Otherwise, render as div
  return <div className={cardClasses}>{CardContent}</div>
}
