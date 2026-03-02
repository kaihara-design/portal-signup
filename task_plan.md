# Specialist Portal — Task Plan

## Project Overview
**Goal:** Build a specialist onboarding signup flow for Centaur.ai's Specialist Portal
**Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, shadcn/ui
**Deployed:** https://specialist-portal.vercel.app
**GitHub:** https://github.com/kaihara-design/portal-signup
**Figma:** https://www.figma.com/design/Kh6wLrgfrPnC11BJx5GRAM/Specialist-Onboarding

---

## Phases

### Phase 1 — Core Signup Flow ✅ complete
- [x] Landing page (role picker): "Which best describes you?"
- [x] Step 1: Account creation (email, password, Google OAuth)
- [x] Step 2: Profile (clinical role, training specialty, YOE, country)
- [x] Step 3: Details (resume upload, referral source, prior Centaur experience)
- [x] Welcome screen (full-page, gradient headings, numbered next steps)

### Phase 2 — Login + Customer Contact ✅ complete
- [x] Login page redesigned to match Figma (node 757:3733)
- [x] Customer role routes to `/contact` instead of external URL
- [x] Contact page: "Talk to our team" with mailto CTA and sign-in nudge

### Phase 3 — Content/Data Alignment ✅ complete
- [x] Training specialties updated to match intake form G2 field (25 items)
- [x] Clinical roles updated to match intake form (8 items)
- [x] Landing page copy updated to match Figma (node 744:2564)

### Phase 4 — Pending / In Discussion
- [ ] Professional title field — confirm alignment with intake form options (stakeholder question sent)
- [ ] Self-reporting question ("Have you used Centaur before?") — decision to keep for sourcing signal
- [ ] Any additional Figma screens yet to be implemented

---

## Decisions Log

| Decision | Outcome | Reason |
|----------|---------|--------|
| Customer role routing | `/contact` internal page | Customers need to contact team, not self-serve |
| "Have you used Centaur before?" | Keep | Used to flag specialists with prior Centaur task history for sourcing priority |
| Training specialty list | Match intake form G2 exactly | Consistent vocabulary, fewer free-text entries |
| Clinical roles list | Match intake form | Same rationale |
| Professional title alignment | Awaiting stakeholder response | Need to confirm against intake form |

---

## Errors Encountered

| Error | Attempt | Resolution |
|-------|---------|------------|
| Turbopack fatal panic in local preview | Used preview MCP tool | Started dev server via Bash instead, user opens localhost:3000 directly |
| GitHub push auth failure (HTTPS) | 1 | Used personal access token in URL |
| GitHub push auth failure (SSH) | 2 | No SSH keys configured on machine |
