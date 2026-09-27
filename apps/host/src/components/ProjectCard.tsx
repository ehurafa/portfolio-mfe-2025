import { Link } from 'react-router-dom'
import { type TechnologyTag, type WPPost, getPostImage } from '../api/wp'
import Card from './Card'

const MAX_TECH_TAGS = 6

// WordPress terms are free text; show them with canonical names and skip non-technologies
const TECH_DISPLAY_NAMES: Record<string, string> = {
  'css 3': 'CSS3',
  css3: 'CSS3',
  'html 5': 'HTML5',
  html5: 'HTML5',
  hrml5: 'HTML5',
  javascript: 'JavaScript',
  jquery: 'jQuery',
  sass: 'Sass',
  vue: 'Vue',
  node: 'Node.js',
  gulp: 'Gulp',
  webpack: 'Webpack',
  vtex: 'VTEX',
  git: 'Git',
  react: 'React',
  typescript: 'TypeScript',
  angular: 'Angular',
  bootstrap: 'Bootstrap'
}
const NON_TECH_TERMS = new Set(['urban summer', 'e-commerce', 'front-end'])

function toDisplayTechnologies(techs: TechnologyTag[] | unknown): string[] {
  // ACF returns false (not []) for empty fields, so check the shape before using it
  if (!Array.isArray(techs)) return []
  const names = techs
    .map((tech: TechnologyTag) => tech.name?.trim().toLowerCase())
    .filter((name): name is string => !!name && !NON_TECH_TERMS.has(name))
    .map(name => TECH_DISPLAY_NAMES[name] ?? name)
  return [...new Set(names)].slice(0, MAX_TECH_TAGS)
}

export default function ProjectCard({ post }: { post: WPPost }) {
  const img = getPostImage(post)
  const title = post.acf.title_post || 'Sem título'
  // data_post comes as 'YYYYMMDD' or 'YYYY-MM-DD'; the year is enough here
  const date = post.acf.data_post
  const year = typeof date === 'string' ? date.slice(0, 4) : undefined

  return (
    <Link to={`/projeto/${post.slug}`} className="card-link">
      <Card
        thumbnail={img || '/placeholder.jpg'}
        title={title}
        tag={year}
        technologies={toDisplayTechnologies(post.acf.list_of_technologies)}
        showArrow
      />
    </Link>
  )
}
