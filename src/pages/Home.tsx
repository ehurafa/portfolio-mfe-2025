import { useEffect, useMemo, useState } from 'react';
import { VscBeaker } from 'react-icons/vsc';
import { fetchPosts, WPPost } from '../api/wp';
import ProjectCard from '../components/ProjectCard';
import Spinner from '../components/Spinner';

export default function Home() {
  const [posts, setPosts] = useState<WPPost[] | null>(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  const filtered = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post => {
      return (post.acf.title_post || '').toLowerCase();
    });
  }, [posts]);

  return (
    <div>
      <div className="title-warpper">
        <div className="title">
          <h1>
            {' '}
            <VscBeaker /> <span>Projetos</span>
          </h1>
        </div>
        <p>Alguns projetos (públicos) desenvolvidos durante a minha carreira</p>
      </div>

      {!posts ? (
        <Spinner />
      ) : (
        <div className="grid">
          {filtered.map(p => (
            <ProjectCard key={p.id} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
