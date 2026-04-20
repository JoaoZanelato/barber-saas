# CLAUDE.md

## MANDATORY SKILL WORKFLOW (Non-Negotiable)

These rules override everything else. No exceptions, no rationalizations.

### Skill Triggers by Task Type

| Task | Skills to invoke (in order) |
|------|----------------------------|
| Nova feature / componente | `superpowers:brainstorming` → `superpowers:writing-plans` → `superpowers:test-driven-development` |
| Bug / falha inesperada | `superpowers:systematic-debugging` |
| UI / frontend | `superpowers:brainstorming` → `frontend-design:frontend-design` |
| Antes de dizer "está pronto" | `superpowers:verification-before-completion` |
| Ao completar branch | `superpowers:finishing-a-development-branch` |
| Explorar código desconhecido | `claude-mem:smart-explore` (antes de ler arquivos brutos) |
| Qualquer tarefa multi-step | `superpowers:writing-plans` antes de tocar código |
| Refatoração significativa | `superpowers:brainstorming` → `simplify` ao final |

**Red flags que indicam que você está racionalizando para não usar uma skill:**
- "É só uma pergunta simples" → skills se aplicam mesmo assim
- "Vou explorar primeiro" → `claude-mem:smart-explore` vem ANTES
- "Deixa eu só dar uma olhada" → leia o Graphify ANTES dos arquivos brutos

---

## AI Agent Behavior (Diretrizes Operacionais)

Postura: Engenheiro de Software Sênior pragmático, focado em MVP e KISS. Siga estas regras antes de escrever ou modificar qualquer código:

1. **Graphify primeiro, sempre:** Leia `graphify-out/GRAPH_REPORT.md` ou use `claude-mem:smart-explore` antes de qualquer proposta. Só leia arquivos brutos se o grafo não responder.
2. **O Básico que Funciona:** Sem abstrações prematuras, interfaces desnecessárias ou novas bibliotecas. Respeite a separação estrita Controllers → Services.
3. **Modificações Cirúrgicas:** Altere estritamente o necessário. Nunca reformate código funcional adjacente.
4. **Self-QA obrigatório antes de responder:**
   - Tipagens TypeScript corretas (zero `any` implícito)
   - Imports apontando para caminhos reais
   - Regra de multi-tenant (`tenant_id` sempre do JWT, nunca do body)
   - Nenhum arquivo novo criado sem necessidade real

---

## Context Navigation (Integração Graphify)

**Gatilho Obrigatório (Pre-Hook):**
ANTES de invocar qualquer skill de exploração (`claude-mem:smart-explore`) ou ler o arquivo `graphify-out/GRAPH_REPORT.md`, você DEVE obrigatoriamente executar o comando `graphify update .` no terminal. 
*Apenas prossiga com a leitura após o terminal confirmar que o Grafo foi atualizado.*

**Ordem obrigatória de consulta:**
1. `graphify-out/GRAPH_REPORT.md` → God Nodes, dependências, comunidades
2. `claude-mem:smart-explore` → estrutura AST sem ler arquivos completos
3. Arquivos brutos → somente se as etapas 1-2 forem insuficientes

**Quando usar `/graphify`:** Para mapear código novo ou atualizar o grafo após mudanças estruturais significativas.

---

## Project Overview

BarbAgenda é uma plataforma SaaS multi-tenant para gestão de barbearias — monorepo com três apps:
- **Backend** (`src/`): Node.js + Express + Prisma + PostgreSQL REST API
- **Web** (`web/`): React + Vite + Tailwind — painel admin para donos de barbearia
- **Mobile** (`mobile/`): React Native + Expo — app cliente para clientes finais

---

## Commands

### Graphify
```bash
graphify update .        # Atualiza AST e grafo
graphify watch .         # Modo watch para rebuild automático
```

### Backend
```bash
docker-compose up -d             # Inicia PostgreSQL (obrigatório primeiro)
npx tsx watch src/server.ts      # Dev server (porta 3333)
npx prisma migrate dev           # Migrations
npx prisma db seed               # Seed (super-admin: admin@saas.com / 123456)
npx prisma studio                # GUI do banco
```

### Web Admin Panel
```bash
cd web
npm run dev      # Dev server → http://localhost:5173
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
```

### Mobile App
```bash
cd mobile
npx expo start           # Expo dev server
npx expo start --android
npx expo start --ios
```

---

## Architecture

### Backend API (`src/`)

**Camadas (nunca misturar):**
- `src/controllers/` — handlers HTTP finos; delegam tudo para services
- `src/services/` — toda lógica de negócio
- `src/routes/index.ts` — definição única de rotas (public vs. protected)
- `src/middlewares/` — `ensureAuthenticated` (JWT barber/admin) e `ensureMobileAuth` (JWT client)

**Auth split:** Barbers/admins → `POST /login` (email+senha). Mobile clients → `POST /mobile/register` e `POST /mobile/login` (phone+PIN). `req.user` e `req.tenant_id` injetados pelo middleware (`src/@types/express.d.ts`).

**Multi-tenancy:** `tenant_id` SEMPRE do JWT autenticado — nunca do request body. Violação disso é bug de segurança crítico.

**Key services:**
- `ListAvailabilityService.ts` — slots disponíveis (30min intervals, 45min duration hardcoded)
- `CreateAppointmentService.ts` — valida e cria agendamentos + push notification
- `CronService.ts` — lembretes e feedback pós-atendimento
- `NotificationService.ts` — wrapper Expo Server SDK

**File uploads:** Multer → `/uploads/`. Servido em `/files`. TODO produção: migrar para S3/Cloudflare R2.

### Database Schema

```
tenants (barbearias)
  ├── users (barbers) — push_token para notificações
  ├── services (tipos de corte: preço + duração)
  ├── operating_hours (por day_of_week + lunch_start/lunch_end)
  ├── blocked_slots (férias, pausas por profissional)
  ├── appointments
  │     ├── users (professional_id)
  │     ├── services
  │     ├── customers (anônimos) ou app_clients (autenticados)
  │     └── self-referential (reschedules)
  └── reviews

app_clients (usuários mobile)
  ├── appointments (1:N)
  ├── client_favorites (N:M com tenants)
  └── reviews (1:N)
```

`appointments` rastreiam: `status` (scheduled/cancelled), `reminder_sent`, `feedback_sent`, `reschedule_count`.

### Web Admin Panel (`web/src/`)

- `App.tsx` — React Router com definição de rotas
- `pages/` — Login, Dashboard (owner), SaaSAdmin (super-admin)
- `lib/api.ts` — Axios com base URL e auth header
- `components/ui/` — Button, Card, Input, Modal compartilhados
- Paleta gold customizada em `web/tailwind.config.cjs`

### Mobile App (`mobile/src/`)

- `App.tsx` — AuthProvider → seleciona árvore de rotas correta
- `context/AuthContext.tsx` — auth state (token, role: `client` | `barber`) em AsyncStorage
- `routes/` — três navigators: `auth.routes`, `client.routes`, `barber.routes`
- `services/API.ts` — Axios apontando para o backend
- `hooks/useNotifications.ts` — registra Expo push token no backend

---

## Environment Variables

```env
DATABASE_URL=postgresql://admin:password123@localhost:5432/barbearia_saas
JWT_SECRET=<your-secret>
PORT=3333
```

---

## Key Implementation Details

- **Slot duration:** 45 min hardcoded em `ListAvailabilityService.ts`; geração em intervalos de 30 min.
- **Super-admin:** `role: super_admin` + `tenant_id: null`; gerencia todos os tenants via SaaSAdmin.
- **Reschedule flow:** novo appointment linkado ao original via FK, incrementa `reschedule_count`.
- Backend: porta `3333`. Web dev: aponta para essa porta (`web/lib/api.ts`).
