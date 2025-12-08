// GitHub API service
const GITHUB_USERNAME = 'ehurafa'

interface GithubLanguage {
  name: string
  percentage: number
  color: string
}

// Cores oficiais das linguagens (GitHub)
const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Vue: '#41b883',
  SCSS: '#c6538c',
  PHP: '#4F5D95',
  Python: '#3572A5',
  Java: '#b07219',
  React: '#61dafb',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  C: '#555555',
  'C++': '#f34b7d',
  Shell: '#89e051'
}

// Cache para evitar múltiplas requisições
let languagesCache: GithubLanguage[] | null = null
let languagesCacheTime: number | null = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutos

export async function fetchGithubLanguages(): Promise<GithubLanguage[]> {
  // Retornar do cache se ainda válido
  if (languagesCache && languagesCacheTime && Date.now() - languagesCacheTime < CACHE_DURATION) {
    return languagesCache
  }

  try {
    // Buscar apenas os repos principais (mais recentes e não-forks)
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=15&sort=updated&type=owner`
    )

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repos')
    }

    const repos = await reposResponse.json()
    const languageTotals: Record<string, number> = {}
    let totalBytes = 0

    // Buscar apenas repos não-fork (máximo 10)
    const nonForkRepos = repos.filter((repo: { fork: boolean }) => !repo.fork).slice(0, 10)

    // Fetch em paralelo
    const results = await Promise.all(
      nonForkRepos.map(async (repo: { languages_url: string }) => {
        try {
          const res = await fetch(repo.languages_url)
          return res.ok ? await res.json() : null
        } catch {
          return null
        }
      })
    )

    // Agregar
    results.forEach(langs => {
      if (langs) {
        Object.entries(langs).forEach(([lang, bytes]) => {
          languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number)
          totalBytes += bytes as number
        })
      }
    })

    // Calcular percentuais
    const languagesArray: GithubLanguage[] = Object.entries(languageTotals)
      .map(([name, bytes]) => ({
        name,
        percentage: (bytes / totalBytes) * 100,
        color: languageColors[name] || '#858585'
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 6)

    // Cache
    languagesCache = languagesArray
    languagesCacheTime = Date.now()

    return languagesArray
  } catch {
    // Silent fallback - API can fail due to CORS or rate limits
    if (import.meta.env.DEV) {
      console.info('Using fallback data for GitHub languages')
    }
    return [
      { name: 'JavaScript', percentage: 31.06, color: '#f1e05a' },
      { name: 'CSS', percentage: 26.78, color: '#563d7c' },
      { name: 'HTML', percentage: 16.25, color: '#e34c26' },
      { name: 'PHP', percentage: 11.8, color: '#4F5D95' },
      { name: 'TypeScript', percentage: 8.45, color: '#3178c6' },
      { name: 'Vue', percentage: 2.31, color: '#41b883' }
    ]
  }
}

interface GithubContribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4 // GitHub uses 0-4 levels
}

// Cache para contribuições
let contributionsCache: { total: number; contributions: GithubContribution[] } | null = null
let contributionsCacheTime: number | null = null

export async function fetchGithubContributions(): Promise<{
  total: number
  contributions: GithubContribution[]
}> {
  // Retornar do cache se ainda válido
  if (
    contributionsCache &&
    contributionsCacheTime &&
    Date.now() - contributionsCacheTime < CACHE_DURATION
  ) {
    return contributionsCache
  }

  try {
    // Buscar eventos do usuário (últimos 90 dias)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`
    )

    if (!eventsResponse.ok) {
      throw new Error('Failed to fetch events')
    }

    const events = await eventsResponse.json()

    // Contar contribuições por dia
    const contributionsByDate: Record<string, number> = {}

    events.forEach((event: { created_at: string }) => {
      const date = new Date(event.created_at).toISOString().split('T')[0]
      contributionsByDate[date] = (contributionsByDate[date] || 0) + 1
    })

    // Gerar últimas 52 semanas (364 dias)
    const contributions: GithubContribution[] = []
    const today = new Date()
    const totalDays = 364

    for (let i = totalDays; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const count = contributionsByDate[dateStr] || 0

      // Determinar nível (0-4) baseado na quantidade
      let level: 0 | 1 | 2 | 3 | 4 = 0
      if (count > 0) level = 1
      if (count >= 3) level = 2
      if (count >= 6) level = 3
      if (count >= 10) level = 4

      contributions.push({ date: dateStr, count, level })
    }

    const total = Object.values(contributionsByDate).reduce((sum, count) => sum + count, 0)

    const result = { total, contributions }

    // Salvar no cache
    contributionsCache = result
    contributionsCacheTime = Date.now()

    return result
  } catch {
    // Silent fallback - API can fail due to CORS or rate limits
    if (import.meta.env.DEV) {
      console.info('Using simulated data for GitHub contributions')
    }

    // Fallback com dados simulados realistas
    const contributions: GithubContribution[] = []
    const today = new Date()
    const totalDays = 364
    let total = 0

    for (let i = totalDays; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]

      // Simular padrão realista de contribuições (mais atividade em dias úteis)
      const dayOfWeek = date.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

      let count = 0
      let level: 0 | 1 | 2 | 3 | 4 = 0

      // ~30% de chance de ter atividade em dias úteis, ~10% em finais de semana
      const hasActivity = Math.random() < (isWeekend ? 0.1 : 0.3)

      if (hasActivity) {
        count = Math.floor(Math.random() * 15) + 1 // 1-15 contribuições
        total += count

        if (count >= 1) level = 1
        if (count >= 4) level = 2
        if (count >= 8) level = 3
        if (count >= 12) level = 4
      }

      contributions.push({ date: dateStr, count, level })
    }

    return { total, contributions }
  }
}
