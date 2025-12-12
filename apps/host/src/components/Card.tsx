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
  // If variant="info", use the old Card layout (for Home page)
  if (variant === 'info') {
    return (
      <div className={`card card--info ${className}`.trim()}>
        <div className="card__body">
          {title && <h2 className="card__title card__title--bordered">{title}</h2>}
          <div className="card__content">{children}</div>
        </div>
      </div>
    )
  }

  // Otherwise, use GenericCard layout
  const cardClasses = `generic-card ${className}`.trim()
  const isClickable = onClick || href

  const CardContent = (
    <>
      {thumbnail && (
        <div className="generic-card__thumbnail">
          {tag && <span className={`generic-card__tag generic-card__tag--${tagColor}`}>{tag}</span>}
          <img src={thumbnail} alt={title || ''} loading="lazy" />
        </div>
      )}

      <div className="generic-card__body">
        {title && <h3 className="generic-card__title">{title}</h3>}
        {description && <p className="generic-card__description">{description}</p>}

        {technologies && technologies.length > 0 && (
          <div className="generic-card__tech-tags">
            {technologies.map(tech => (
              <span key={tech} className="generic-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {children && <div className="generic-card__content">{children}</div>}
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
