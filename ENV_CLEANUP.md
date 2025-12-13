# Arquivos .env Desnecessários na Raiz

## ⚠️ Problema Identificado

Os seguintes arquivos `.env` estão na **raiz do projeto** mas **NÃO são necessários**:

- `.env`
- `.env.development`  
- `.env.production`

## Por que não são necessários?

Este é um **monorepo com workspaces**. Cada aplicação em `apps/*` gerencia suas próprias variáveis de ambiente.

Quando você executa:
```bash
npm run dev --workspace=apps/host
```

O Vite procura por `.env` em `apps/host/`, **NÃO na raiz**.

## Estrutura Correta

```
portfolio-mfe-2025/
├── package.json          # Orquestrador (sem .env)
├── apps/
│   ├── host/
│   │   ├── .env          # ✅ Variáveis do host
│   │   └── .env.example  # ✅ Template
│   └── projects/
│       └── .env          # ✅ Se necessário
```

## Recomendação

Você pode **deletar com segurança** os arquivos `.env` da raiz:

```bash
# Na raiz do projeto
del .env
del .env.development
del .env.production
```

Ou mantê-los ignorados pelo Git (já estão no `.gitignore`), mas eles não têm função no projeto atual.

## Variáveis Utilizadas

Após a limpeza, o projeto usa apenas **2 variáveis de ambiente**:

| Variável | Usado em | Obrigatório |
|----------|----------|-------------|
| `VITE_WP_API_BASE` | `apps/host/src/api/wp.ts` | Apenas se `USE_MOCK_DATA=false` |
| `VITE_USE_MOCK_DATA` | `apps/host/src/api/wp.ts` | Não (default: false) |

### Variáveis Removidas ✂️

Foram removidas por não estarem sendo utilizadas:
- ~~`VITE_WP_BASE`~~
- ~~`VITE_WP_POSTS_PATH`~~
- ~~`VITE_WP_ACF_POSTS_PATH`~~
