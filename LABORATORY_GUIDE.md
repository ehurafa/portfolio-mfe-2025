# 🚀 Laboratory - Quick Reference Guide

## ✅ Everything is Working!

A solução com **iframes** está funcionando perfeitamente. Você já tem 2 projetos (To-Do e Weather) e está pronto para adicionar os outros 18!

---

## 📋 Como Adicionar um Novo Projeto

### 1️⃣ Copie o Projeto
```bash
apps/projects/src/projects/{nome-do-projeto}/
├── App.tsx
├── styles.css
└── assets/ (se tiver)
```

### 2️⃣ Adicione a Rota

**Arquivo**: `apps/projects/src/App.tsx`
```tsx
import SeuProjeto from './projects/seu-projeto/App';

// Dentro de <Routes>:
<Route path="/seu-projeto" element={<SeuProjeto />} />
```

### 3️⃣ Adicione os Metadados

**Arquivo**: `apps/host/src/pages/projectsData.ts`
```tsx
{
  id: 'seu-projeto',           // Mesmo nome da rota
  name: 'Nome do Projeto',
  description: 'Descrição breve',
  technologies: ['React', 'CSS3', 'API'],
  screenshot: '/screenshots/seu-projeto.png',
  githubUrl: 'https://github.com/ehurafa/20-react-projects',
  category: 'Tools'  // ou: UI, API, Games, Data, Other
}
```

### 4️⃣ (Opcional) Adicione Screenshot
- Tire um print do projeto
- Salve em: `apps/projects/public/screenshots/seu-projeto.png`
- Dimensão sugerida: 640x480px

### 5️⃣ Teste!
- Recarregue a página
- Veja o projeto na galeria
- Clique para abrir no iframe

---

## 🎯 Categorias Disponíveis

Use uma destas categorias no `projectsData.ts`:

- **UI** → Componentes visuais, layouts
- **Tools** → Ferramentas úteis (calculadora, to-do, etc)
- **API** → Projetos que consomem APIs (weather, etc)
- **Games** → Jogos e interativos
- **Data** → Visualização de dados, dashboards
- **Other** → Outros tipos

---

## 🚀 Scripts Úteis

```bash
# Rodar os 2 servidores (host + projects)
npm run dev

# Build de produção
npm run build

# Rodar apenas o host
npm run dev:host

# Rodar apenas projects
npm run dev:projects
```

---

## 📁 Estrutura de Pastas

```
static-portfolio-2025/
├── apps/
│   ├── host/              # Porta 5000 - Portfolio principal
│   │   └── src/
│   │       └── pages/
│   │           ├── Laboratory.tsx      ← Página da galeria
│   │           └── projectsData.ts     ← ADICIONE METADADOS AQUI
│   │
│   └── projects/          # Porta 5001 - Servidor de projetos
│       └── src/
│           ├── App.tsx                 ← ADICIONE ROTAS AQUI
│           └── projects/               ← COPIE PROJETOS AQUI
│               ├── todo-app/
│               ├── weather-app/
│               └── seu-projeto/        ← Novos projetos aqui
```

---

## ⚡ Dicas Rápidas

### Seus projetos já tem React Router?
Se seus projetos usam React Router internamente, envolva com `<BrowserRouter basename="/seu-projeto">` para evitar conflitos.

### Projeto precisa de API keys?
Coloque em `.env` no `apps/projects/` e acesse normalmente.

### Estilos conflitando?
Use CSS Modules ou certifique-se que os estilos estão scoped ao componente.

### Quer testar um projeto individualmente?
Acesse diretamente: `http://localhost:5001/seu-projeto`

---

## 🎨 URLs de Acesso

- **Portfolio Principal**: http://localhost:5000
- **Laboratório**: http://localhost:5000/laboratorio
- **Servidor de Projetos**: http://localhost:5001
- **Projeto Individual**: http://localhost:5001/{project-id}

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Projeto não aparece na galeria | Verifique se adicionou em `projectsData.ts` |
| Iframe vazio/404 | Verifique se a rota existe em `apps/projects/src/App.tsx` |
| Erro de import | Verifique o caminho do import no `App.tsx` |
| Estilos quebrados | Certifique-se que `styles.css` está importado no componente |

---

**Pronto!** Agora é só continuar adicionando seus 18 projetos restantes seguindo esse padrão! 🚀

Qualquer dúvida, só perguntar! 😊
