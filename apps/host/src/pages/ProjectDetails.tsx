import { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { type TechnologyTag, type WPPost, fetchPostBySlug } from '../api/wp'
import Spinner from '../components/Spinner'

export default function ProjectDetails() {
  const { slug } = useParams()
  const [post, setPost] = useState<WPPost | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadPost(): Promise<void> {
      if (!slug) return
      try {
        const data = await fetchPostBySlug(slug)
        setPost(data)
      } catch (err) {
        console.error('Erro ao buscar post:', err)
      } finally {
        setLoading(false)
      }
    }

    void loadPost()
  }, [slug])

  if (loading) return <Spinner />
  if (!post)
    return (
      <div className="empty-state">
        <p>
          Projeto não encontrado. <Link to="/projetos">Voltar para a lista de projetos</Link>.
        </p>
      </div>
    )

  return (
    <article className="project-details">
      <Link to="/projetos" className="back-link">
        <FiArrowLeft aria-hidden="true" /> Projetos
      </Link>
      <h1>{post.acf?.title_post}</h1>
      <img
        className="cover"
        src={post.acf?.image_post?.sizes?.large || post.acf?.image_post?.url || '/fallback.jpg'}
        alt={post.acf?.title_post || 'Imagem do projeto'}
      />
      {/*
				biome-ignore lint/security/noDangerouslySetInnerHtml:
				Conteúdo HTML vem do WordPress e é necessário para preservar o rich text dos posts.
				O backoffice é controlado pelo autor do portfólio e não aceita entrada arbitrária de usuário final.
			*/}
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }}
      />
      <ul className="tags" aria-label="Tecnologias">
        {(Array.isArray(post.acf?.list_of_technologies) ? post.acf.list_of_technologies : []).map(
          (tag: TechnologyTag) => (
            <li key={tag.term_id}>{tag.name || ''}</li>
          )
        )}
      </ul>
    </article>
  )
}
