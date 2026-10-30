# Agent Memory & Project Context (`memory.md`)

## 1. Project Overview & Context
- **Project Name**: `saylani-job-bank`
- **Scope**: Pure Frontend Implementation for the 6 Figma Public Screens (Node `50:5418`).
- **Architecture Contract**: `architecture.md` (Universal ERP Platform Architecture Blueprint).
- **Design Specification**: `design.md` (Verified design tokens, typography, and section specifications).
- **Core Rules**:
  - `AGENTS.md` (Strict contract: zero unrequested actions, anti-hallucination, scope lock).
  - **Strict Max 150 Lines Per File Rule**: Every source file (TSX, TS, CSS, JSX) must be at most 150 lines.

---

## 2. Key Decisions & State Tracking

| Decision ID | Title | Status | Rationale |
|:---|:---|:---|:---|
| **ADR-001** | Pure Frontend Scope | **ACCEPTED** | Removed all premature backend functionality (Python microservices, Docker compose, database schemas, backend API routes, internal ERP dashboard panels, and server session adapters). |
| **ADR-002** | 150-Line Code Modularization | **ACCEPTED** | Decomposed all UI components and pages into focused, modular sub-components strictly ≤ 150 lines. |
| **ADR-003** | Zero Dangling Imports | **ACCEPTED** | Verified that all components consume only clean local utilities (`cn.ts`), tokens, and standard UI libraries. |

---

## 3. Current Clean Project Tree

```
saylanijobbank/
├── apps/
│   └── web/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   │   ├── _landing/
│       │   │   │   ├── components/
│       │   │   │   │   ├── HeroGraphicCard.tsx      (49 lines)
│       │   │   │   │   ├── HeroSection.tsx          (49 lines)
│       │   │   │   │   ├── LatestOpeningsSection.tsx (148 lines)
│       │   │   │   │   ├── ProcessSection.tsx       (58 lines)
│       │   │   │   │   ├── StoriesSection.tsx       (64 lines)
│       │   │   │   │   └── ValuePropBanner.tsx      (15 lines)
│       │   │   │   └── LandingPage.tsx              (49 lines)
│       │   │   ├── layout.tsx                       (40 lines)
│       │   │   └── page.tsx                         (18 lines)
│       │   ├── components/
│       │   │   ├── atoms/                           (All ≤ 150 lines)
│       │   │   ├── brand/
│       │   │   ├── molecules/
│       │   │   │   ├── HeroSearch/                  (80 lines)
│       │   │   │   ├── JobCard/                     (107 lines)
│       │   │   │   └── ...                          (All ≤ 150 lines)
│       │   │   ├── organisms/
│       │   │   │   ├── CTABanner/                   (54 lines)
│       │   │   │   ├── FAQSection/                  (111 lines)
│       │   │   │   ├── Footer/                      (135 lines)
│       │   │   │   └── Navbar/                      (143 lines)
│       │   │   └── templates/
│       │   │       └── PublicLayout/                (24 lines)
│       │   ├── design-system/                       (theme.css, tokens.ts, global.css)
│       │   └── lib/utils/cn.ts                      (7 lines)
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── config/
│   └── shared/
├── AGENTS.md
├── architecture.md
├── design.md
├── memory.md
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```
