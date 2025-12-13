import { useEffect, useMemo, useState } from 'react'
import { VscBeaker } from 'react-icons/vsc'
import { motion } from 'motion/react'
import { type WPPost, fetchPosts } from '../api/wp'
import ProjectCard from '../components/ProjectCard'
import Spinner from '../components/Spinner'

// Animation variants for the grid container
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
}

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
      return (post.acf.title_post || '').toLowerCase()
    })
  }, [posts])

  return (
    <div>
      <header className="title-wrapper">
        <div className="title">
          <h1>
            {' '}
            <VscBeaker /> <span>Projetos</span>
          </h1>
        </div>
        <p>Alguns projetos (públicos) desenvolvidos durante a minha carreira</p>
      </header>

      {!posts ? (
        <Spinner />
      ) : (
        <motion.div className="grid" variants={gridVariants} initial="hidden" animate="visible">
          {filtered.map(p => (
            <motion.div key={p.id} variants={cardVariants}>
              <ProjectCard post={p} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
