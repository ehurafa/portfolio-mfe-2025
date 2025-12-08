import React from 'react'

interface CardProps {
  variant?: 'default' | 'project' | 'info' | 'interactive'
  title?: string
  children?: React.ReactNode
  className?: string
  thumbnail?: string
  tags?: Array<{ name: string; color?: string }>
  onClick?: () => void
}

export default function Card({
  variant = 'default',
  title,
  children,
  className = '',
  thumbnail,
  tags,
  onClick
}: CardProps) {
  const baseClass = 'card'
  const variantClass = variant !== 'default' ? `card--${variant}` : ''
  const classes = [baseClass, variantClass, className].filter(Boolean).join(' ')

  return (
    <div className={classes} onClick={onClick}>
      {/* Project variant: thumbnail with tags */}
      {variant === 'project' && thumbnail && (
        <div className="card__thumb">
          {tags &&
            tags.map((tag, i) => (
              <span key={i} className={`card__tag ${tag.color || ''}`}>
                {tag.name}
              </span>
            ))}
          <img src={thumbnail} alt={title || ''} loading="lazy" />
        </div>
      )}

      <div className="card__body">
        {/* Info variant: title with border */}
        {variant === 'info' && title && (
          <h2 className="card__title card__title--bordered">{title}</h2>
        )}

        {/* Default/project title */}
        {variant !== 'info' && title && <h3 className="card__title">{title}</h3>}

        <div className="card__content">{children}</div>
      </div>
    </div>
  )
}
