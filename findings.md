# Findings — Design Decisions & Discoveries

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#4f46e5` | Buttons, links, accents |
| Primary hover | `#4338ca` | Button hover state |
| Background | `#f0f4f8` | Page background |
| Card bg | `rgba(255,255,255,0.8)` | card-glass |
| Foreground | `#0a0a0a` | Headings, labels |
| Muted | `#737373` | Secondary text |
| Muted alt | `#62748e` | Back links, helper text |
| Required asterisk | `#ff6467` | Required field markers |
| Globe opacity | `0.18` | Background globe illustration |

### Typography
- Headings: `font-bold text-[#0a0a0a]`
- Labels: `text-sm font-medium text-[#0a0a0a]`
- Muted text: `text-sm text-[#737373]`
- Step indicator: `text-xs font-semibold tracking-widest text-[#737373] uppercase`

### Components
- **Card**: `card-glass rounded-[24px] p-8 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.4)]`
- **Primary button**: `rounded-[12px] bg-[#4f46e5] text-white text-sm font-semibold hover:bg-[#4338ca] btn-shadow transition-colors`
- **Back link**: `flex items-center gap-1.5 text-sm font-medium text-[#62748e] hover:text-[#1e293b] transition-colors`
- **Input**: `rounded-[12px] border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-[#4f46e5]`
- **OAuth button**: `rounded-[12px] border border-slate-200 bg-white`
- **Logo**: `<img src="/centaur-logo.svg" alt="Centaur" className="h-8 w-auto" />`

### Border Radius Rules (Design Guideline)
| Element | Value |
|---------|-------|
| Fields, inputs, dropdowns | `rounded-[12px]` |
| Primary & secondary buttons | `rounded-[12px]` |
| Cards | `rounded-[24px]` |
| Dropdown menus | `rounded-2xl` |
| Badges, pills, progress bars | `rounded-full` |

### Gradients
- "Specialist Network" heading: `linear-gradient(to right, #392fae, #403c6e)`
- Numbered step badges: `linear-gradient(to right, #5a52be, #403c6e)`

---

## Page Architecture

### Signup Flow State Machine
```
/ (landing)
  → customer → /contact
  → specialist → /signup?step=account
    → account → profile
    → profile → details
    → details → welcome (full-page, outside card)
    → welcome → /dashboard
```

### Step Header Pattern (Steps 1–3)
```tsx
<div className="flex items-center justify-between">
  <button onClick={onBack}>← Back</button>
  <span className="text-xs uppercase tracking-widest">STEP N OF 3</span>
</div>
```

### Welcome Screen Architecture
- Renders **outside** the card wrapper (full-page layout)
- Conditional in `app/signup/page.tsx`: `step === "welcome"` bypasses card
- Responsive: `flex-col` mobile → `md:flex-row` desktop
- Headings use `whitespace-nowrap` + small base sizes to prevent wrapping at small viewports
  - h1: `text-base sm:text-xl md:text-3xl lg:text-4xl`
  - h2: `text-lg sm:text-2xl md:text-4xl lg:text-6xl`

---

## Data / Constants (`lib/constants.ts`)

### CLINICAL_ROLES (8 items)
Physician, Medical Student, Fellow, Nurse, Pharmacist, Resident, Coder (RCM, ICD, CPT), Other

### TRAINING_SPECIALTIES (25 items)
Matches intake form G2 field exactly. Added: Anesthesiology, Certified Medical/Insurance Coder (RCM, ICD, CPT), Family Medicine, Internal Medicine, Ob/Gyn, Otolaryngology, Vascular Surgery, Veterinary. Removed: Endocrinology, Hematology, Infectious Disease, Nephrology, Rheumatology.

### YEARS_OF_EXPERIENCE
Less than 2 years / 3–5 years / 6–10 years / 10+ years

### PORTAL_EXPERIENCE_OPTIONS
No (first time) / Yes (completed tasks before) / Referred by Centaur team member

### REFERRAL_SOURCES
LinkedIn, Indeed, Friend or colleague, Job board, Google, Other

---

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Landing page — role picker |
| `app/signup/page.tsx` | Signup flow wrapper + state machine |
| `app/login/page.tsx` | Login page |
| `app/contact/page.tsx` | Customer contact page |
| `app/dashboard/page.tsx` | Placeholder dashboard |
| `components/signup/account-step.tsx` | Step 1: Create account |
| `components/signup/profile-step.tsx` | Step 2: Tell us about yourself |
| `components/signup/details-step.tsx` | Step 3: Almost there! |
| `components/signup/welcome-step.tsx` | Full-page welcome screen |
| `components/signup/google-oauth-button.tsx` | Reusable Google button |
| `components/signup/figma-link-badge.tsx` | Dev-mode Figma link badge |
| `lib/constants.ts` | All dropdown option data |
| `lib/types.ts` | Shared TypeScript types |
| `public/centaur-logo.svg` | Logo used across all pages |
| `public/globe-bg.png` | Background globe illustration |

---

## Infrastructure

- **Local dev**: `node /path/to/next dev` via launch.json (Turbopack enabled by default in Next.js 16)
- **Turbopack issue**: Fatal panic when accessed via preview MCP tool (cross-origin). Workaround: use Bash to start server, user opens localhost:3000 directly.
- **Deployment**: Vercel (auto-aliased to `specialist-portal.vercel.app`)
- **GitHub auth**: No SSH keys on machine. Use PAT via HTTPS URL (revoke after use).
- **Node**: fnm at `/Users/kaihara/.local/share/fnm/node-versions/v24.14.0/installation/bin/node`
- **Vercel CLI**: Available via `npx vercel --prod` with above node in PATH
