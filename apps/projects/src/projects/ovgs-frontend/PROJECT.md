# PROJETO.md — Context for AI Agents

> This file exists to give any AI coding agent (Claude Code, Copilot, Cursor, etc.) full context to continue this project consistently with decisions already made. Read this before making changes.

## What this project is

Frontend-only implementation of a technical challenge: **OVGS — Sales Order Management System** (Sistema de Gestão de Ordens de Venda), applied for a **Senior Frontend Developer** position.

- Only the **frontend** scope of the original challenge is being implemented (backend is out of scope).
- APIs are **mocked with MSW**, simulating a real REST backend.
- The candidate is being mentored step-by-step (not having the whole project built for them) — code is written incrementally, explained, and only produced when explicitly requested. Any AI agent picking this up should preserve that incremental, explained style if the human is still learning alongside it, unless told otherwise.

## Required tech stack (from job posting)

React, Next.js, TypeScript, React Query, Redux Toolkit, Redux Saga, Tailwind CSS, React Hook Form, Jest + React Testing Library, Git, Azure DevOps/CI-CD.

## Confirmed setup choices

- `create-next-app`: TypeScript yes, ESLint yes, Tailwind yes, `src/` directory yes, **App Router** yes, import alias `@/*`.
- **React Compiler: disabled.** Decision: keep memoization (`useMemo`/`useCallback`/`React.memo`) explicit rather than automatic, for predictability alongside Redux + React Query's own caching, and to demonstrate deliberate performance decisions (this challenge explicitly evaluates performance awareness).
- All folder/file names in **English**, even though the business domain (statuses, "OV", etc.) originates from a Portuguese spec — enum-like domain values (`CRIADA`, `ENTREGUE`, etc.) are kept as-is since they represent real business vocabulary.

## Folder structure

```
src/
  app/                    # Next.js routes — kept thin, imports from features/
    sales-orders/
      page.tsx              # list (Monitoramento reuses SalesOrdersList via MonitoringScreen)
      new/page.tsx          # create form
      [id]/page.tsx         # detail + status transitions (async params, see below)
    customers/
    transport-types/
    items/
    scheduling/
    monitoring/
    audit/
  features/               # one folder per business domain (screaming architecture)
    sales-orders/
      components/
        SalesOrderForm.tsx
        SalesOrdersList.tsx     # accepts optional `filters` prop, reused by both plain list and Monitoring
        SalesOrderDetail.tsx
        StatusBadge.tsx
        MonitoringFilters.tsx
        MonitoringScreen.tsx    # composes MonitoringFilters + SalesOrdersList, reads Redux filters
      hooks/
      services/
        queryKeys.ts
        salesOrdersService.ts
      store/
        salesOrderFiltersSlice.ts
      constants.ts          # STATUS_LABELS, STATUS_STYLES (single source, avoids duplication)
      types.ts
      schemas.ts
    customers/
      components/
        CustomerForm.tsx      # supports create AND edit (like TransportTypeForm)
        CustomerList.tsx
      hooks/
      services/
        queryKeys.ts
        customersService.ts
      types.ts
      schemas.ts
    transport-types/       # same React Query pattern as customers — DONE
      services/
        queryKeys.ts
        transportTypesService.ts
      hooks/
      types.ts
      schemas.ts
    items/                  # same React Query pattern as customers — DONE (list/create only, no edit)
      components/
        ItemForm.tsx
        ItemList.tsx
      services/
        queryKeys.ts
        itemsService.ts
      hooks/
      types.ts
      schemas.ts
    scheduling/
      components/
        SchedulingForm.tsx    # dispatches confirmSchedulingRequested, reads schedulingSlice
        SchedulingList.tsx    # lists PLANEJADA/AGENDADA orders, opens SchedulingForm for one
      services/
        schedulingService.ts
      store/
        schedulingSlice.ts
        schedulingSaga.ts
      types.ts
      schemas.ts
  shared/
    components/
      ui/                     # Material-inspired Tailwind primitives — see UI Design System section
        TextField.tsx
        Select.tsx
        Checkbox.tsx
        Button.tsx
        Card.tsx
      AuditTrail.tsx          # cross-cutting audit trail screen — not owned by one feature
    test-utils/
      renderWithQueryClient.tsx   # fresh QueryClient per test
      renderWithProviders.tsx     # fresh QueryClient + fresh Redux store per test; tracks saga tasks;
                                  # returns { ...renderResult, store } so tests can dispatch after render
    store/
      auditSlice.ts        # client-side audit trail (see Trade-offs)
    types.ts              # cross-cutting types (AuditEvent)
  lib/
    api/
      httpClient.ts        # generic fetch wrapper
      mocks/
        data.ts            # in-memory fixtures
        handlers.ts        # MSW request handlers
        browser.ts          # setupWorker (dev)
        server.ts           # setupServer (tests), shares `handlers` with browser.ts
        MockProvider.tsx    # starts worker in dev only, client component
    query/
      queryClient.ts
      QueryProvider.tsx
    store/
      store.ts             # createAppStore() factory (returns {store, task}) + app singleton; thunk DISABLED
      rootReducer.ts
      rootSaga.ts
      hooks.ts             # useAppDispatch / useAppSelector (typed)
      StoreProvider.tsx
```

Root ESLint/Prettier/Husky config files (all done): `eslint.config.mjs` (flat config, uses `defineConfig`/`globalIgnores` from `eslint/config` + `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` + `eslint-config-prettier/flat` appended last), `.prettierrc.json` (includes `prettier-plugin-tailwindcss`), `.prettierignore`, `.lintstagedrc.json`, `.husky/pre-commit` (`npx lint-staged`).

`app/` route files stay thin, e.g.:

```tsx
// src/app/sales-orders/page.tsx
import { SalesOrdersList } from "@/features/sales-orders/components/SalesOrdersList";
export default function SalesOrdersPage() {
  return <SalesOrdersList />;
}
```

Root layout must wrap children with all three providers, in this order (**MockProvider outermost** — worker must be ready before any query/mutation fires; `StoreProvider`/`QueryProvider` relative order doesn't matter since the saga imports the `queryClient` singleton directly rather than via React Context):

```tsx
// src/app/layout.tsx
<MockProvider>
  <StoreProvider>
    <QueryProvider>{children}</QueryProvider>
  </StoreProvider>
</MockProvider>
```

## UI Design System

`shared/components/ui/` — Material Design-inspired, plain Tailwind (no component library):

- **`TextField.tsx` / `Select.tsx`** — "outlined" style, label above, error state, `forwardRef` so they compose with React Hook Form's `register(...)`.
- **`Button.tsx`** — `variant="filled"` (primary, `rounded-full`) / `variant="text"` (low emphasis).
- **`Checkbox.tsx`**, **`Card.tsx`** (elevated surface wrapper).
- Color tokens defined in `globals.css`'s `@theme` block as semantic roles (`--color-primary`, `--color-on-primary`, `--color-surface`, `--color-on-surface`, `--color-outline`, `--color-error`) — components reference the role (`bg-primary`), never a literal Tailwind palette color, so a full re-theme is a one-file change.
- Known trade-off: a `<button>` cannot be nested inside a Next.js `<Link>` (`<a>`) — HTML/accessibility violation. Where a link needs to look like a filled `Button`, its classes are duplicated manually onto the `Link` (see `src/app/sales-orders/page.tsx`) rather than composing the two components. Flagged as a possible future refactor (e.g. a shared class-name util or a `Button` that can render `as="a"`).

## Domain modeling decisions

- **Union types, not `enum`** for fixed value sets (`SalesOrderStatus`, `DeliveryWindow`) — avoids runtime artifacts, integrates cleanly with `z.enum`.
- **Entity types (`types.ts`) vs. input types (`schemas.ts`)**: entity types represent persisted objects (with `id`, timestamps); Zod schemas represent what a form submits (narrower). Input TS types are derived via `z.infer<typeof schema>`, not hand-written — schema is the single source of truth for form shape.
- **Status transitions centralized**: `VALID_STATUS_TRANSITIONS` (in `features/sales-orders/types.ts`) is the one place that defines the state machine (`CRIADA → PLANEJADA → AGENDADA → EM_TRANSPORTE → ENTREGUE`). UI, form guards, and the mocked API handler all read from this map — never duplicate transition logic elsewhere.
- **Delivery window simplified** to a fixed enum (`MANHA` | `TARDE` | `NOITE`) instead of free-form start/end times, per candidate's choice — matches the challenge's allowance for simplified scheduling rules.
- **`AuditEvent` lives in `shared/types.ts`**, not in any single feature, since auditing spans multiple entities. **Its Redux slice (`shared/store/auditSlice.ts`) is client-side only** — no backend persistence (out of scope), an explicit simplification, not an oversight.
- **Cross-entity business rule ("transport type must be authorized for customer") is intentionally NOT enforced inside the Zod schema.** A static schema has no access to server-fetched customer data. It must be validated at form-submission time (in the component/hook, after the customer is loaded via React Query), e.g.:
  ```ts
  if (!customer.authorizedTransportTypeIds.includes(transportTypeId)) {
    throw new Error("Transport type not authorized for this customer");
  }
  ```

## State management — implemented

- **React Query** → server state (orders, customers, items, transport types — anything fetched from the API/mocks). Done for all four data features.
- **Redux Toolkit** → global/UI state. Slices so far: `salesOrderFilters` (Monitoramento Operacional filters — feeds directly into `useSalesOrders(filters)`), `scheduling` (confirmation flow status: `idle | confirming | confirmed | error`), `audit` (client-side event log, in `shared/store/`).
- **`thunk` middleware disabled** in `configureStore` — Saga is the single async pattern in this project; mixing thunk + saga would be redundant.
- **Redux Saga** → orchestration of multi-step async side effects. First (and so far only) saga: `schedulingSaga`, triggered by `confirmSchedulingRequested`. Sequence: call `schedulingService.confirm` → dispatch `auditEventLogged` → sync React Query cache directly (`queryClient.setQueryData` for the order detail + `invalidateQueries` for lists, **in its own nested try/catch** — a cache-sync failure must never be reported to the user as "the operation failed", since the API call already succeeded by that point) → dispatch `confirmSchedulingSucceeded`/`confirmSchedulingFailed`. The saga imports the `queryClient` singleton directly — this is intentional and is why provider order between Redux and React Query doesn't matter (see Folder Structure section).
- **`store.ts` exports a `createAppStore()` factory** (returns `{ store, task }`), not just a bare singleton. The app uses one singleton instance (`export const store`); tests create their own via `renderWithProviders` (see Testing Setup section) so state and the running saga never leak between tests. **Always use this factory in tests, never the app singleton.**
- **Real bug found and fixed via testing**: `schedulingSlice`'s `confirmSchedulingRequested` reducer originally never set `state.orderId` (the parameter was named `_action`, signaling "unused" — but it _should_ have been used). This meant `SchedulingForm`'s `isForThisOrder` check (`schedulingState.orderId === order.id`) was always `false`, so confirming/succeeding/failing never rendered any feedback, for any order. Lesson: an underscore-prefixed unused parameter in a reducer that's supposed to derive state from its payload is a red flag, not just a lint convention — double check it's not hiding a real bug.
- **Saga is reserved for genuine multi-step orchestration, not used for simple CRUD.** Plain `useMutation` (React Query) is still used for straightforward create/update calls (customers, items, transport types, sales order creation/status update). Don't wrap a single API call in a saga just for consistency — that would be indirection without benefit.
- **Mock endpoint added to support scheduling:** `PATCH /api/sales-orders/:id/scheduling` in `handlers.ts` — allowed only from `PLANEJADA` (first confirmation) or `AGENDADA` (reschedule); sets `order.scheduling` and advances `order.status` to `AGENDADA`.
- **Audit logging also happens directly from React Query mutation hooks**, not only from the saga. `useCreateSalesOrder` and `useUpdateSalesOrderStatus` both call `store.dispatch(auditEventLogged(...))` on the app's singleton `store`, imported directly (same pattern as the saga's `queryClient` import — a side effect reaching a singleton outside the render tree, not through React Context). For `STATUS_CHANGED`, the previous status is read via `queryClient.getQueryData(salesOrderKeys.detail(id))` **before** `setQueryData` overwrites it in the same `onSuccess` — that's the only source for "what it changed from", since the mutation response only carries the new state.
- **`createAppStore()`/`renderWithProviders` updated**: `renderWithProviders` now returns `{ ...renderResult, store }` (not just the render result), so a test can `store.dispatch(...)` directly after rendering — used by `AuditTrail.test.tsx` to seed events without going through a saga or a simulated user interaction.

## React Query layer — pattern established

Each feature that talks to the API follows this exact pattern (fully implemented for **all four data features**: `sales-orders`, `customers`, `transport-types`, `items`):

1. `features/<feature>/services/queryKeys.ts` — hierarchical key factory (`all → lists()/list(filters) → details()/detail(id)`). Import the real filter type from the service (e.g. `SalesOrderFilters`) — **do not** type list params as generic `Record<string, string | undefined>`, it's structurally incompatible with a named interface (caused a real TS2345 error, see Known Gotchas).
2. `features/<feature>/services/<feature>Service.ts` — pure functions using `httpClient` (`lib/api/httpClient.ts`), no React/Query imports. Framework-agnostic, easy to reuse/test.
3. `features/<feature>/hooks/use<Feature>.ts`, `use<Feature>ById.ts`, `useCreate<Feature>.ts`, `useUpdate<Feature>...ts` — thin `useQuery`/`useMutation` wrappers around the service, using the query key factory, invalidating/updating cache in `onSuccess`.

Example decisions worth remembering:

- `useUpdateSalesOrderStatus`: uses `setQueryData` to update the detail cache directly (response already has the fresh data) but `invalidateQueries` for lists (the order may now fall outside a previously matching status filter).
- `useCreate...`: invalidates `lists()` (broad), never a specific `list(filters)` (new record could match any filter combination).

## MSW mocking layer

- `lib/api/mocks/data.ts`: mutable in-memory arrays (`customers`, `transportTypes`, `items`, `salesOrders`). Persistence lasts only for the browser session (resets on reload) — accepted simplification, documented in README.
- `lib/api/mocks/handlers.ts`: implements REST endpoints under `/api/*`. Notably, the `PATCH /sales-orders/:id/status` handler **re-validates the transition server-side** using `VALID_STATUS_TRANSITIONS` (mirrors real API behavior — never trust client-only validation), returning `400` on invalid transitions. This is deliberately there to support an integration test exercising error handling.
- `request.json()` bodies **must be cast explicitly** to the matching `CreateXInput` type (e.g. `(await request.json()) as CreateCustomerInput`) — otherwise spreading (`{ id, ...body }`) fails with TS2698 (see Known Gotchas). This cast is a type assertion only, not runtime validation — acceptable here since the mock's job is to unblock the frontend, but worth noting as a trade-off in the README (a stricter version would `.parse()` the body against the Zod schema inside the handler).
- `lib/api/mocks/browser.ts`: `setupWorker(...handlers)` from `msw/browser` (MSW v2 API).
- `lib/api/mocks/MockProvider.tsx`: client component, starts the worker via dynamic import inside `useEffect`, only when `NODE_ENV === "development"`, renders `null` until ready to avoid a flash of unmocked requests.
- Requires `npx msw init public/ --save` to generate `public/mockServiceWorker.js` (candidate confirmed this was needed/run).

## Testing setup — MSW v2 + Jest + jsdom (hard-won configuration)

This combination requires non-obvious setup. If tests start failing with cryptic errors after touching Jest/MSW config, re-read this section before re-debugging from scratch.

**Files involved:**

- `jest.config.mjs` — wraps `next/jest`'s config in an async function that applies `transformIgnorePatterns` _after_ `createJestConfig` resolves (not merged into the input config) — next/jest's internal merge silently overrides a custom `transformIgnorePatterns` otherwise. Set to `[]` (transform everything, including `node_modules`) because MSW ships several ESM-only internal deps (`@mswjs/interceptors`, `rettime`, others) that surface one at a time if allow-listed individually — not worth the whack-a-mole for this project's test suite size.
- `jest.polyfills.js` — loaded via `setupFiles` (runs _before_ the test environment/framework, unlike `setupFilesAfterEnv`). Defines, in this order: `TextEncoder`/`TextDecoder` → `ReadableStream`/`TransformStream`/`WritableStream`/`MessageChannel`/`MessagePort` (must exist before `undici` is required, since its fetch implementation reads them at import time) → `require("undici")` for `fetch`/`Request`/`Response`/`Headers`/`FormData` → `BroadcastChannel`. **Every property uses `configurable: true`** — MSW's interceptors redefine these same globals again later to do their job, and a non-configurable property throws `Cannot redefine property` the second time.
- `jest.setup.ts` — loaded via `setupFilesAfterEnv`. Imports `@testing-library/jest-dom`, and runs the MSW `server` lifecycle (`beforeAll`/`afterEach`/`afterAll`) with `onUnhandledRequest: "error"`.
- `lib/api/mocks/server.ts` — `setupServer(...handlers)` from `msw/node`, sharing the same `handlers` array as `browser.ts`.
- `shared/test-utils/renderWithQueryClient.tsx` — gives every test a fresh `QueryClient` (never the app singleton).
- `shared/test-utils/renderWithProviders.tsx` — same, plus a fresh Redux store via `createAppStore()` (never the app singleton) for anything touching Redux/Saga. Tracks every saga `task` it creates in a module-level array; exports `cancelActiveSagaTasks()`, called from `jest.setup.ts`'s `afterEach` alongside `server.resetHandlers()`. **Without this, an uncancelled saga keeps running after its test ends** — this can mask bugs (a later test's dispatch might still be "caught" by a previous test's leftover watcher in edge cases) and reliably triggers Jest's "worker process failed to exit gracefully... Active timers" warning.
- `@types/jest` is required as a dev dependency even though `next/jest` runs tests fine without it — without it, the editor's TS server can't resolve `describe`/`it`/`beforeAll`/etc. globals (a pure editor-experience issue, not a runtime one).

**Why this was hard:** jsdom doesn't implement the Fetch API or several Node/Web globals MSW's Node interceptors need, and MSW's own dependency tree ships ESM that Jest doesn't transform by default. Any agent hitting a new "X is not defined" error in this exact stack should assume it's one more missing global in the same category (Node/Web API primitives) and add it to `jest.polyfills.js` with `configurable: true`, rather than treating it as a one-off bug.

## Known gotchas encountered (and fixes)

1. **TS2345** — `queryKeys.list(filters)` typed with `Record<string, string | undefined>` rejected the real `SalesOrderFilters` interface (interfaces lack an index signature). Fix: import and use the real filter type instead of a generic `Record`.
2. **TS2698 "Spread types may only be created from object types"** — `request.json()` in MSW handlers returns an untyped `DefaultBodyType`; spreading it (`...body`) fails type-check. Fix: cast with `as CreateXInput` for every POST/PATCH handler body.
3. **`Cannot read properties of undefined (reading 'start')`** on `MockProvider` — was a stale Turbopack dev-server cache after `browser.ts` had previously been missing (earlier "module not found" state). Fix: stop dev server, `rm -rf .next`, restart. Not a code bug.
4. Remember: `npx create-next-app` App Router → any folder placed directly inside `app/` becomes a route. `features/` must live as a **sibling** of `app/`, never nested inside it.
5. **ESLint config format varies by Next.js/create-next-app version.** This project's generated `eslint.config.mjs` uses `defineConfig`/`globalIgnores` from `"eslint/config"` with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` imported directly as arrays — NOT the older `FlatCompat`/`compat.extends(...)` pattern seen in older Next.js scaffolds. Any agent adding to this file should append further configs (e.g. `eslint-config-prettier/flat`) into the array passed to `defineConfig`, matching the existing style — don't assume the older pattern.
6. **`next/jest` silently overrides a custom `transformIgnorePatterns`** passed into its input config. Fix: apply it after `await createJestConfig(baseConfig)()` resolves, spread onto the result — see Testing Setup section.
7. **`ReferenceError: Request/ReadableStream/MessagePort is not defined`** in MSW+Jest+jsdom — missing Node/Web API polyfills. Fix: add the missing global to `jest.polyfills.js`, sourced from the relevant `node:*` built-in, with `configurable: true`. See Testing Setup section for the full list already handled and the required order.
8. **`TypeError: Cannot redefine property: Request`** — a polyfilled global was defined without `configurable: true`, so MSW's interceptor couldn't patch it a second time. Fix: always include `configurable: true` on every property in `jest.polyfills.js`.
9. **`SyntaxError: Cannot use import statement outside a module`** pointing at a file inside `node_modules/@mswjs` or similar — Jest's default `transformIgnorePatterns` skips all of `node_modules`, but MSW ships ESM-only internal packages. Fix: set `transformIgnorePatterns: []` in the Jest config (see gotcha #6 for how to make the override actually apply with `next/jest`).
10. **React warning "Calling setState synchronously within an effect can trigger cascading renders"** — happened in `TransportTypeForm`, which used `useEffect` to reset the form whenever the `transportType` prop changed (edit vs. create mode). Fix: don't use an Effect to sync state to a prop change — compare against the previous prop value **during render** and adjust state directly (React's "adjusting state when a prop changes" pattern), not inside `useEffect`.
11. **`react-hooks/incompatible-library` ESLint warning** — part of `eslint-config-next`'s bundled React Compiler lint rules, which fire regardless of whether the compiler is actually enabled. Since this project has the compiler explicitly **disabled**, this rule is noise. Fixed by turning it off in `eslint.config.mjs` with a comment explaining why — re-enable if the compiler is ever turned on.
12. **`<input type="date">` doesn't work with `userEvent.type()`** — date (and other specialized) inputs don't behave like plain text inputs; typing character-by-character can silently fail to set the value. Fix: use `fireEvent.change(input, { target: { value } })` instead for these input types.
13. **Stale DOM element reference after a re-render caused by async state change** — a test cached `const table = await screen.findByRole("table")` once, then reused it after triggering a filter change; the component actually re-rendered a _new_ `<table>` (the old one unmounted during the query's loading state), so subsequent assertions against the cached reference silently checked stale, detached content. Fix: never cache a queried element across an action that can cause its container to unmount/remount — re-query fresh inside each `waitFor` callback instead.
14. **`getAllByText`/`getByText` matching more elements than expected** — e.g. a customer's name appearing both in a table row _and_ as an `<option>` in an unrelated filter dropdown on the same screen. Fix: scope the query with `within(container)` whenever the same text could plausibly appear in more than one place.
15. **Real application bug caught by testing, not just a test bug**: `schedulingSlice`'s `confirmSchedulingRequested` reducer never set `state.orderId` (the parameter was named `_action` — "unused" — but it should have been used). This silently broke all scheduling confirmation/error feedback for every order, in the real running app, not just in tests. Lesson: an underscore-prefixed unused parameter in a reducer that's supposed to derive state from its payload is a red flag worth double-checking, not just a lint convention to satisfy.
16. **"Adjust state during render" is NOT safe for every kind of state sync** — it's fine for plain local `useState`, but `CustomerForm` hit a real runtime error: `Cannot update a component (Controller) while rendering a different component (CustomerForm)`. Cause: calling React Hook Form's `reset()` during render (the gotcha #10 pattern) tries to update the `Controller` component (used here for the authorized-transport-types checkbox group) — a genuinely separate, subscribed child component — mid-render, which React forbids. `TransportTypeForm` doesn't hit this because it has no `Controller` (plain `register()` on an uncontrolled input). Fix: when the "prop sync" involves an imperative call to an external library API that can affect a separately-subscribed component (not just this component's own local state), it belongs back inside a `useEffect` — that's a genuine side effect, not a pure state derivation.
17. **`react-hooks/set-state-in-effect` ESLint warning** — fires on the `useEffect` from gotcha #16 (calling `setJustSaved`/`reset` inside it). Same root cause as gotcha #11: this is another React Compiler-bundled lint rule, irrelevant since the compiler is disabled in this project. Turned off in `eslint.config.mjs` alongside `react-hooks/incompatible-library`.
18. **`MockProvider` originally only started MSW in development (`NODE_ENV === "development"`).** Since this project has no real backend at all, deploying it anywhere (e.g. Vercel) with that check in place would silently break every screen — every fetch would go unmocked and fail, with no visible error beyond stuck loading states. Fixed by making mocking **on by default everywhere**, gated by an opt-out env var (`NEXT_PUBLIC_API_MOCKING=disabled`) instead of an opt-in dev-only check. **Do not reintroduce a dev-only condition here** unless a real backend has actually been wired up behind the same REST contract.

## Deployment

Live demo: **https://ovgs-frontend-ruddy.vercel.app/** (Vercel, auto-detected Next.js build, no environment variables configured — mocking is on by default, see gotcha #18). Each visitor's data is local to their own browser session (MSW mocks run client-side); nothing is shared or persisted server-side.

## Status: what exists vs. what's pending

**Done:**

- Project scaffolding decisions (Next.js config choices, React Compiler off)
- Folder structure (English names)
- Domain types split per feature (`customers`, `transport-types`, `items`, `scheduling`, `sales-orders`, `shared`)
- Zod schemas per feature (`createCustomerSchema`, `createTransportTypeSchema`, `createItemSchema`, `createSalesOrderSchema`, `updateSalesOrderStatusSchema`, `schedulingSchema`)
- MSW mocking (data, handlers, browser worker, dev-only provider) — verified working end-to-end
- React Query infra (`httpClient`, `queryClient`, `QueryProvider`) — verified working
- React Query feature implementation for all four data features: `sales-orders` (list/detail/create/update-status), `customers` (list/create), `transport-types` (list/create/**update** — supports the "Editar" requirement), `items` (list/create)
- Added `PATCH /transport-types/:id` mock handler to support editing (mutates in place via `Object.assign`)
- ESLint + Prettier integrated (`eslint-config-prettier/flat` appended last in the flat config) + `prettier-plugin-tailwindcss` for class sorting
- Husky + lint-staged pre-commit hook (ESLint `--fix` + Prettier on staged files)
- Redux Toolkit store (`configureStore`, thunk disabled) + Redux Saga middleware wired via `StoreProvider`
- Slices: `salesOrderFilters`, `scheduling`, `audit`
- First saga: `schedulingSaga` (confirm scheduling → log audit event → sync React Query cache) — see State Management section
- Mock endpoint `PATCH /sales-orders/:id/scheduling` added to support the scheduling flow
- **First UI form: Customer registration** (`features/customers/components/CustomerForm.tsx`) — React Hook Form + `createCustomerSchema` + `useCreateCustomer` + `useTransportTypes` (cross-feature composition for the authorized-transport-types checklist). Wired at `src/app/customers/page.tsx`.
- **UI text convention adopted**: all user-facing strings in Portuguese (labels, buttons, empty/loading states, Zod validation messages), code/identifiers/URLs stay in English — retrofitted onto all existing Zod schemas (`customers`, `transport-types`, `items`, `sales-orders`, `scheduling`).
- **Jest + React Testing Library + MSW testing infrastructure fully configured** (`jest.config.mjs`, `jest.polyfills.js`, `jest.setup.ts`, `lib/api/mocks/server.ts`, `shared/test-utils/renderWithQueryClient.tsx`) — see Testing Setup section for the full (non-trivial) configuration required.
- First tests written for `CustomerForm`: 2 unit tests (`schemas.test.ts` — Zod validation) + 3 integration tests (`CustomerForm.test.tsx` — loading state via MSW `delay()`, happy path, validation errors) — **exceeds the challenge's minimum (2 unit + 1 integration)**.
- **UI Design System**: Material Design-inspired Tailwind primitives (`TextField`, `Select`, `Checkbox`, `Button`, `Card` in `shared/components/ui/`) — see UI Design System section. `CustomerForm` and `ItemForm` refactored to use them.
- **Item registration form** (`ItemForm.tsx`, simpler than Customer — no cross-feature dependency) + tests.
- **Transport Type registration form with Create AND Edit in one component** (`TransportTypeForm.tsx` + `TransportTypeList.tsx`) — demonstrates a single form switching hooks (`useCreateTransportType` vs `useUpdateTransportType`) based on whether a record prop is present, syncing via the "adjust state during render" pattern (not `useEffect` — see gotcha #10).
- **Sales Order creation form** (`SalesOrderForm.tsx`) — `useFieldArray` for the dynamic item list, cross-feature composition (customers + transport types + items), and the authorized-transport-type business rule enforced both in the UI (filtered dropdown) and at submit time (defense in depth).
- **Sales Orders list + detail screens** (`SalesOrdersList.tsx`, `SalesOrderDetail.tsx`) at `/sales-orders`, `/sales-orders/new`, `/sales-orders/[id]` — status transition buttons driven directly by `VALID_STATUS_TRANSITIONS`, so the UI can never offer an invalid transition; the mocked API still re-validates independently (defense in depth, tested explicitly).
- **Central de Agendamento screen** (`SchedulingForm.tsx` + `SchedulingList.tsx`) at `/scheduling` — first real UI wired to `schedulingSlice`/`schedulingSaga`. Uncovered (and fixed) a real bug here — see gotcha #15.
- **`store.ts` refactored into a `createAppStore()` factory** (returns `{ store, task }`) — app uses one singleton, tests get isolated instances via `renderWithProviders.tsx`, which also cancels saga tasks in `afterEach` (see Testing Setup section and gotcha on saga leakage).
- **Monitoramento Operacional screen** (`MonitoringFilters.tsx` + `MonitoringScreen.tsx`) at `/monitoring` — `salesOrderFiltersSlice` finally wired to `useSalesOrders(filters)`; added `date` filter support to `salesOrdersService`/`handlers.ts` (previously only status/customer/transport type). `SalesOrdersList` now accepts an optional `filters` prop, reused by both the plain list and Monitoring.
- README.md fully updated: UI Design System section, expanded testing section (patterns learned), and an honest **Implementation Status** section mapped against the challenge's own requirements (see Pending below for the gaps it documents).
- **Customer: Editar + Consultar screens** (`CustomerList.tsx` + `CustomerForm.tsx` extended to support edit mode). Added `useUpdateCustomer` hook, `customersService.update`, and `PATCH /customers/:id` mock handler. Same Create+Edit-in-one-form pattern as `TransportTypeForm`.
- **Item: Consultar (list) screen** (`ItemList.tsx`) — simplest of the "Consultar" screens, no edit needed per spec. `/items` now shows create form + list side by side.
- **Real bug found and fixed via manual testing (not caught by the automated tests)**: `CustomerForm`'s edit-mode sync originally used the "adjust state during render" pattern (like `TransportTypeForm`), but `CustomerForm` uses a `Controller` (for the authorized-transport-types checkbox group) — calling `reset()` during render tried to update that separately-subscribed child component mid-render, throwing "Cannot update a component (Controller) while rendering a different component (CustomerForm)". Fixed by moving `reset()` back into a `useEffect` (see gotcha #16) and disabling the resulting `react-hooks/set-state-in-effect` lint warning for the same "React Compiler is off" reason as `react-hooks/incompatible-library`.
- **`node` version documented**: README's Getting Started section states a minimum (`>=20`) and the exact version developed/tested against (`24.15.0`); `package.json` has a matching `engines` field (advisory only — no `.npmrc engine-strict`, to avoid being overly rigid for an evaluator on a slightly different LTS).
- **Audit trail screen** (`shared/components/AuditTrail.tsx`, at `/audit`) — table of all logged events, most-recent-first. Audit logging expanded beyond scheduling: `useCreateSalesOrder` and `useUpdateSalesOrderStatus` now also dispatch `auditEventLogged` directly via `store.dispatch(...)` on the singleton `store` (same "reach the singleton directly" pattern as the saga's `queryClient` usage) — see State Management section for the `STATUS_CHANGED` previous-value-capture detail.
- **`renderWithProviders` enhanced** to return `{ ...renderResult, store }`, letting tests dispatch actions directly after rendering (used to seed audit events in `AuditTrail.test.tsx` without a saga or simulated UI interaction).
- **Azure DevOps CI/CD pipeline** (`azure-pipelines.yml`, repo root): three gated stages (`dependsOn`) — Lint (ESLint + `format:check`) → Test (`npm run test:ci`, i.e. `jest --ci --coverage`, publishing JUnit results via `jest-junit` and Cobertura coverage) → Build (`next build`). Triggers on pushes and PRs to `main`.
- **README final pass**: added the previously-missing **Scalability Considerations** and **Performance Considerations** sections (both explicitly required by the challenge's README checklist), a **CI/CD** section, and updated **Implementation Status** to reflect that every functional requirement is now done.
- **Home page** (`src/app/page.tsx`) and **persistent navigation** (`shared/components/Navigation.tsx`, wired in the root layout) — the app previously had no landing page (still the `create-next-app` template) and no way to move between screens except typing URLs directly. Home is a lean single-CTA screen ("Nova Ordem de Venda"), not a duplicate sitemap of the nav.
- **`LinkButton` added to `shared/components/ui/Button.tsx`** — resolves the `Button`-inside-`Link` HTML/accessibility trade-off documented earlier by rendering a real `<Link>` styled identically to `Button`, instead of manually duplicating classes per usage.
- **Light responsive pass**: hamburger menu in `Navigation` below the `md` breakpoint; `whitespace-nowrap` + `shrink-0` added to `Button`/`LinkButton` base classes (prevents text wrapping when squeezed); page headers combining a title + action button now stack vertically below `sm`.
- **Deployed to Vercel** for a live demo (see README's Deployment section for the URL). Required fixing `MockProvider` to start MSW regardless of `NODE_ENV` (see gotcha #18) — it previously only ran in development, which would have silently broken every screen once deployed, since this project has no real backend.

**Pending:**
None outstanding from the challenge's functional requirements. Remaining work is incremental (broader test coverage as the app evolves, minor polish like the `Button`/`Link` duplication noted in the UI Design System section) rather than missing features.

## Working style to preserve

- **UI text convention: user-facing strings in Portuguese, code in English.** Labels, buttons, placeholders, empty/loading states, and validation error messages (including Zod `.min()`/`.refine()` messages, since those render directly to the user) are all in **Portuguese**. Code identifiers, comments, file/folder names, and URLs/routes stay in **English**. Apply this to every future form/screen. **This has slipped twice already** (Portuguese comments written into new files/tests) — any agent writing a comment should pause and check: is this a comment (English) or a string the user sees (Portuguese)? When in doubt, re-read the comment you just wrote before moving on.
- Guide step-by-step; don't jump ahead and implement unrequested features.
- Explain the _why_ behind each architectural choice, not just the _what_.
- Flag trade-offs explicitly — several are meant to be cited in the README's "Trade-offs" section.
- Prefer small, focused files per feature over large shared files.
- Keep code and identifiers in English; business-domain enum values from the original Portuguese spec stay as-is.
