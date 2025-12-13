# Sistema de Mock para Desenvolvimento

Este projeto inclui um sistema de mock simples para evitar problemas de CORS durante o desenvolvimento local.

> **✨ Atualizado**: Variáveis de ambiente não utilizadas foram removidas. Agora o sistema usa apenas `VITE_WP_API_BASE` e `VITE_USE_MOCK_DATA`.

## Localização dos Arquivos

**✅ Correto**: `.env` deve estar em `apps/host/.env` (não na raiz do projeto)

## Como Usar


### 1. Configurar Variável de Ambiente

Crie ou edite o arquivo `.env` na pasta `apps/host/` e adicione:

```env
VITE_USE_MOCK_DATA=true
```

### 2. Reiniciar o Servidor de Desenvolvimento

Após alterar o arquivo `.env`, você precisa reiniciar o servidor:

```bash
npm run dev
```

### 3. Verificar no Console

Quando o modo mock estiver ativo, você verá mensagens no console do navegador como:

```
🎭 Using mock data for projects
```

## Dados Disponíveis

Os dados de mock estão definidos em `apps/host/src/api/mockData.ts`:

- **Projetos**: 6 projetos de exemplo com tecnologias variadas
- **Certificados**: 4 certificados principais
- **Laboratório**: 3 projetos de laboratório

## Personalizando os Dados

Você pode editar o arquivo `mockData.ts` para adicionar, remover ou modificar os dados de mock conforme necessário.

## Desabilitar Mock

Para voltar a usar a API real do WordPress, basta definir:

```env
VITE_USE_MOCK_DATA=false
```

Ou remover a variável completamente do arquivo `.env`.

## Páginas Afetadas

- ✅ **Projetos** (`/projects`) - Usa `fetchPosts()` da API
- ⚠️ **Certificados** (`/certificates`) - Dados já estão hardcoded no componente
- ⚠️ **Laboratório** (`/laboratory`) - Dados estão em `projectsData.ts`

> **Nota**: Apenas a página de Projetos está integralmente conectada ao sistema de mock da API. As outras páginas já usam dados locais e não são afetadas por CORS.
