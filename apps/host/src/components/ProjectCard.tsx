import { Link } from 'react-router-dom'
import { getPostImage, WPPost } from '../api/wp'
import Card from './Card'

export default function ProjectCard({ post }: { post: WPPost }) {
  const img = getPostImage(post)
  const title = post.acf.title_post || 'Sem título'

  return (
    <Link to={`/projeto/${post.slug}`} style={{ textDecoration: 'none' }}>
      <Card variant="project" thumbnail={img || undefined} title={title} />
    </Link>
  )
}
