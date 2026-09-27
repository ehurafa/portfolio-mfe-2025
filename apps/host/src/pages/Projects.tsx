import { useEffect, useMemo, useState } from 'react'
import { type WPPost, fetchPosts } from '../api/wp'
import ProjectCard from '../components/ProjectCard'
import Spinner from '../components/Spinner'

export default function Projects() {
  const [posts, setPosts] = useState<WPPost[] | null>(null)

  useEffect(() => {
    let mounted = true
    fetchPosts()
      .then(data => {
        if (mounted) setPosts(data)
      })
      .catch(() => {
        if (mounted) setPosts([])
      })
    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    if (!posts) return []
    return posts.filter(post => {
      // Ensure we have a title to display
      return !!post.acf.title_post
    })
  }, [posts])

  return (
    <>
      <header className="page-header">
        <h1>Projetos</h1>
        <p>Alguns projetos públicos que desenvolvi ao longo da carreira.</p>
      </header>

      {!posts ? (
        <Spinner />
      ) : filtered.length === 0 ? (
        <p className="empty-state">
          Não consegui carregar os projetos agora. Tente de novo em instantes.
        </p>
      ) : (
        <ul className="card-list">
          {filtered.map(p => (
            <li key={p.id}>
              <ProjectCard post={p} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
