# ERP Platform — Universal Architecture Blueprint

> **What this file is:** A technology-agnostic architectural blueprint for building
> ERP-style platforms. It is **not** tied to any one project, framework, language,
> library, or version. Follow these rules for **every** project.
>
> **How to use this file:**
> 1. **Edit ONLY §0 (Project Config)** for each new project — nothing else.
> 2. Keep §1–11 exactly as-is; they are the reusable architecture.
> 3. Give this whole file to the AI as the architecture contract.

---

## 0. Project Config — ✏️ EDIT THIS FOR EACH PROJECT

> **Change everything between the markers below when starting a new project.**
> The rest of this file never changes. If a value is left as a placeholder (`<...>`),
> the AI must **ask** instead of guessing.

<!-- ======================== EDIT ZONE START ======================== -->

| Key                     | Value (edit me)                                                        |
|-------------------------|------------------------------------------------------------------------|
| **Project name**        | `saylani-job-bank`                                                     |
| **One-line purpose**    | `Employment Matchmaking Platform for Saylani Job Bank`                 |
| **Domains (business)**  | `applicant, auth, branch, company, job, matching, notifications, settings, user` |
| **UI framework**        | `Next.js 15 + React 19 + Tailwind CSS 4`                               |
| **Language**            | `TypeScript 5`                                                         |
| **Validation library**  | `Zod`                                                                  |
| **ORM / query builder** | `Drizzle ORM`                                                          |
| **Database**            | `PostgreSQL 16 + PostGIS`                                              |
| **Cache / queue**       | `Redis 7`                                                              |
| **Object storage**      | `S3-compatible (SeaweedFS / AWS S3)`                                   |
| **Email provider**      | `SMTP (Nodemailer / Mailpit)`                                          |
| **Test tools**          | `Vitest, Playwright`                                                   |
| **Workspace manager**   | `Turborepo + pnpm`                                                     |
| **Shared pkg scope**    | `@jobbank/shared`                                                      |
| **Roles**               | `SUPER_ADMIN, BRANCH_ADMIN, VERIFIER, STAFF, EMPLOYER, APPLICANT`      |
| **Tables / entities**   | `users, branches, applicants, companies, jobs, matches, notifications` |
| **Infra services**      | `postgres, seaweedfs, redis, mailpit`                                  |
| **Env variables**       | `DATABASE_URL, BETTER_AUTH_SECRET, S3_ENDPOINT, REDIS_URL, SMTP_HOST`  |
| **Brand / theme**       | `#8CC641, Serotiva`                                                    |
| **Extra services**      | `none`                                                                 |

<!-- ========================= EDIT ZONE END ========================= -->

**Rule:** §1–11 below are fixed for every project. Section 0 is the *only* part you
customize per project. Concrete tech choices, versions, domains, tables, and branding
live here — **never** hardcoded inside the architecture rules.

---

## 1. Architectural Style

**Monorepo + Domain-Driven Design (DDD) + Layered Architecture.**

```
┌────────────────────────────────────────────────────────────────┐
│  Presentation Layer   →  routes/pages + UI components           │
├────────────────────────────────────────────────────────────────┤
│  Domain Layer         →  one folder per business domain        │
│                         (business rules / use-cases)            │
├────────────────────────────────────────────────────────────────┤
│  Data Access Layer    →  schemas, queries, migrations          │
├────────────────────────────────────────────────────────────────┤
│  Infrastructure Layer →  adapters: cache, storage, mail, HTTP   │
├────────────────────────────────────────────────────────────────┤
│  Contracts Layer      →  shared types, validation schemas, consts│
└────────────────────────────────────────────────────────────────┘
```

**Golden rule — dependencies point downward only:**
`Presentation → Domain → Data/Infrastructure → Contracts`.

- UI never talks to the database directly.
- Every operation goes through a **domain service**.
- Infrastructure is reached only through **adapters**.

---

## 2. Technology Roles (filled from §0 per project)

The architecture names **roles**, never brands or versions. Each project fills these
roles in §0; the architecture only requires that each role exists and is isolated.

| Role                | Responsibility                          |
|---------------------|-----------------------------------------|
| Workspace manager   | monorepo + task pipeline                |
| UI framework        | component-based frontend                |
| Language            | statically typed, strict mode           |
| Validation library  | schema-based input validation           |
| ORM / query builder | typed data access                       |
| Database            | relational persistence                  |
| Cache / queue       | ephemeral state, jobs, rate limits      |
| Object storage      | files / uploads                         |
| Email provider      | transactional mail                      |
| Test tools          | unit + end-to-end                       |

---

## 3. Universal Repository Structure

```
<repo-root>/
├── apps/
│   └── <app>/                    # the main application
│       └── src/
│           ├── routes/           # pages / route handlers
│           ├── domains/          # ← BUSINESS LOGIC (core of DDD)
│           │   └── <domain>/     # one folder per business domain (see §0)
│           ├── components/       # atomic UI library
│           │   ├── atoms/
│           │   ├── molecules/
│           │   ├── organisms/
│           │   └── templates/
│           ├── design-system/    # tokens, theme, global styles
│           ├── lib/              # infrastructure adapters + helpers
│           └── middleware/       # route guards
├── packages/
│   ├── config/                   # shared linter/compiler configs
│   ├── db/                       # schemas, migrations, seed
│   └── shared/                   # contracts: types, schemas, constants
├── services/                     # optional extra services (see §0)
├── infrastructure/               # local/dev environment definitions
└── architecture.md               # ← this file
```

> Same shape for every project. Only the concrete `domains/*` and `packages/*`
> contents differ per project (declared in §0).

---

## 4. Domain Module Contract (the heart of the architecture)

Every domain lives in `src/domains/<domain>/` and follows **one consistent shape**.

```
domains/<domain>/
├── service.ts        # business logic / use-cases (pure, testable)
├── repository.ts     # data access (wraps the data layer)
├── schema.ts         # input/output validation schemas
├── types.ts          # domain types (inferred from schemas where possible)
├── index.ts          # public surface (barrel export)
└── *.test.ts         # unit / integration tests
```

### Layer responsibilities

| File            | May depend on                          | Must NOT do                        |
|-----------------|----------------------------------------|------------------------------------|
| `service.ts`    | repository, schema, types, adapters     | touch UI or request objects        |
| `repository.ts` | data layer only                         | contain business rules             |
| `schema.ts`     | validation library only                 | import DB or UI                    |
| `index.ts`      | re-export the public surface            | leak internals                     |

### Cross-domain rules
- A domain may call **another domain's `service`** — never its `repository`.
- No circular domain imports. Shared logic goes to `domains/shared/` or `packages/shared`.
- Domains never import from `routes/` or `components/`.

### Recipe — add a new domain (repeatable)
1. Create `domains/<domain>/` with the files above.
2. Define validation schemas → `schema.ts`.
3. Define types → `types.ts`.
4. Add data model + migration in `packages/db`.
5. Write `repository.ts` (queries only).
6. Write `service.ts` (use-cases, validation, authorization).
7. Export the public API in `index.ts`.
8. Consume from routes via the domain's `service` (server-side).

---

## 5. API Design Conventions

- Versioned base path (e.g. `/api/v1/...`).
- **Validate every input** with the validation library before calling a service.
- Consistent response envelopes:

  ```
  Success:            { data: T }
  Paginated list:     { data: T[], meta: { page, pageSize, total, pageCount } }
  Failure:            { error: { code, message, details?, issues?, correlation_id } }
  ```

- **Error codes** (generic, reusable set):
  `BAD_REQUEST`, `VALIDATION_FAILED`, `UNAUTHENTICATED`, `FORBIDDEN`,
  `SCOPE_VIOLATION`, `NOT_FOUND`, `CONFLICT`, `INVALID_TRANSITION`,
  `APPEND_ONLY_VIOLATION`, `IDEMPOTENCY_KEY_REQUIRED`, `IDEMPOTENCY_CONFLICT`,
  `IDEMPOTENCY_IN_PROGRESS`, `PAYLOAD_TOO_LARGE`, `UNSUPPORTED_MEDIA_TYPE`,
  `RATE_LIMITED`, `INTERNAL`.
- **Correlation ID:** accept `x-correlation-id`, generate if missing, propagate through
  all async calls and logs.
- **Idempotency:** every mutating endpoint accepts an idempotency key; replays are safe
  and return the original result.
- **Pagination:** always return the `meta` object above; clamp page size to a sane range.

---

## 6. Component Hierarchy (Atomic Design)

```
components/
├── atoms/       # primitives: Button, Input, Badge, Heading
├── molecules/   # small compositions: SearchBar, FormField, Card
├── organisms/   # sections: Header, Sidebar, DataTable, Form
└── templates/   # full page layouts (no data fetching)
```

Rules:
- Presentational components stay **dumb** (props in, UI out).
- Data fetching and mutations live in routes or domain hooks.
- Styling uses **design-system tokens only** — no raw colors/sizes.
- Types come from `packages/shared` or the owning domain.

---

## 7. Infrastructure Adapters (`lib/`)

`src/lib/` is the **only** place that touches external systems.

| Adapter     | Responsibility                 |
|-------------|--------------------------------|
| `db/`       | data client + query helpers    |
| `cache/`    | cache / rate-limit / queue     |
| `storage/`  | file upload / download         |
| `mail/`     | transactional email            |
| `http/`     | outbound HTTP client           |
| `auth/`     | session helpers                |
| `env`       | validated environment vars     |
| `logger/`   | structured logging             |

Every adapter wraps its dependency so the rest of the app never imports SDKs directly.

---

## 8. Authentication & Authorization Pattern

- Server-derived auth state (e.g. `getServerAuthState()`) used in server code.
- Sessions stored in **HttpOnly, Secure cookies**.
- Each request resolves an **actor**: `{ id, roles[], permissions[] }` (roles from §0).
- Route groups: public-auth area vs protected area.
- Middleware does coarse route guards; **services** do fine-grained authorization.
- **Authorize in the service layer**, not only the route (defense in depth).

---

## 9. Data Flow

```
User action
   │
   ▼
Component (client/server)
   │ calls
   ▼
Domain service  ──► validate input ──► authorize actor
   │
   ├─► Domain repository ─► data layer ─► database
   ├─► cache adapter
   ├─► storage adapter
   └─► http adapter (external APIs)
   │
   ▼
Standard response envelope ─► UI
```

---

## 10. Testing & Quality Gates

- Unit tests co-located (`*.test.ts`) for services and schemas.
- End-to-end tests for critical flows.
- Every change must pass: **lint**, **typecheck**, **tests**.
- Migrations are generated, reviewed, and versioned — never edited directly in prod.

---

## 11. Universal Do / Don't

**ALWAYS**
1. Validate all inputs at the boundary.
2. Route data access through `repository.ts`; business rules through `service.ts`.
3. Return the standard error envelope with `code` + `correlation_id`.
4. Support idempotency on mutations.
5. Authorize in the service layer using the actor's roles/permissions.
6. Use design-system tokens for styling.
7. Import through path aliases (`@/domains/...`, `@/lib/...`, `<scope>/shared`).
8. Add a migration for every schema change.
9. Keep domains independent (no circular imports).
10. Keep every source file strictly under 150 lines of code; decompose large components into focused sub-modules.

**NEVER**
1. ❌ Query the database from components or route handlers directly.
2. ❌ Put business logic inside UI components.
3. ❌ Use raw logging / raw SDKs outside `lib/`.
4. ❌ Hardcode URLs, secrets, or magic values.
5. ❌ Skip authorization because "the route is protected".
6. ❌ Assume another project's domains, tables, or stack exist — read §0.
7. ❌ Create or allow single source files exceeding 150 lines.

---

## 12. Data Model Principles (generic)

- Stable primary keys (UUID or equivalent).
- `created_at` / `updated_at` timestamps on all tables.
- Soft-delete where auditability matters.
- Foreign keys + indexes on all relation/lookup columns.
- Migrations are the single source of schema truth.
- Reference/master data is seeded, not hardcoded in code.

> The **actual tables** are declared in §0 and intentionally not listed here.

---

## 13. AI Prompt Checklist (universal)

- [ ] Monorepo + domain-driven structure (§3–4)
- [ ] Strict typed language; validate all inputs at boundaries
- [ ] Business logic in `domains/<domain>/service.ts`; data access in `repository.ts`
- [ ] Standard envelopes: `{ data }`, `{ data, meta }`, `{ error: { code, message, correlation_id } }`
- [ ] Pagination meta: `page`, `pageSize`, `total`, `pageCount`
- [ ] Idempotency on mutations; `x-correlation-id` propagated
- [ ] Authorization checked in the service layer
- [ ] Atomic components; design-system tokens only
- [ ] External systems accessed only through `lib/*`
- [ ] Migration for every schema change
- [ ] Only use the domains, stack, tables, roles, and brand declared in **§0**

**AI safeguard:** apply §1–11 to every project; read §0 only for the current project.
If any §0 value is still a `<placeholder>`, **stop and ask** — never guess or borrow
another project's values.
