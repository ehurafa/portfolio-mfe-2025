import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';
import { fetchPostBySlug, WPPost, TechnologyTag } from '../api/wp';
import Spinner from '../components/Spinner';

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPost(): Promise<void> {
      if (!slug) return;
      try {
        const data = await fetchPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error('Erro ao buscar post:', err);
      } finally {
        setLoading(false);
      }
    }

    void loadPost();
  }, [slug]);

  if (loading) return <Spinner />;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div className="project-details">
      <img
        src={post.acf?.image_post?.sizes?.large || post.acf?.image_post?.url || '/fallback.jpg'}
        alt={post.acf?.title_post || 'Imagem do projeto'}
      />
      <h1>{post.acf?.title_post}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }} />
      <ul className="tags">
        {post.acf?.list_of_technologies?.map((tag: TechnologyTag, i: number) => (
          <li key={tag.term_id}>{tag.name || ''}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/')} className="btn">
        <TiChevronLeft /> Voltar
      </button>
    </div>
  );
}
