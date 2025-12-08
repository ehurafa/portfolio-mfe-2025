import { Link } from 'react-router-dom';
import { getPostImage, WPPost } from '../api/wp';

export default function ProjectCard({ post }: { post: WPPost }) {
  const img = getPostImage(post);
  const title = post.acf.title_post || 'Sem título';

  return (
    <Link to={`/projeto/${post.slug}`} className="card">
      <div className="thumb">{img ? <img src={img} alt={title} loading="lazy" /> : null}</div>
      <div className="body">
        <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </Link>
  );
}
