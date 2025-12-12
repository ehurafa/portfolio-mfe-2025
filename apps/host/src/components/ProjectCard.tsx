import { Link } from 'react-router-dom'
import { type WPPost, getPostImage } from '../api/wp'
import Card from './Card'

export default function ProjectCard({ post }: { post: WPPost }) {
  const img = getPostImage(post)
  const title = post.acf.title_post || 'Sem título'

  // We wrap Card in a Link for navigation
  return (
    <Link to={`/projeto/${post.slug}`} style={{ textDecoration: 'none', height: '100%' }}>
      <Card thumbnail={img || '/placeholder.jpg'} title={title} />
    </Link>
  )
}
