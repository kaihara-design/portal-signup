# Progress Log

## Session: Initial Build (Previous)
- Built full signup flow (Steps 1–3 + Welcome)
- Globe background, card-glass design system
- Vercel deployment set up

## Session: Figma Alignment + Redesigns

### Completed
- Landing page copy updated (node 744:2564): heading, customer/specialist descriptions
- Step 1–3 redesigned (nodes 744:2797, 744:3024, 744:3139):
  - New `← Back | STEP N OF 3` header pattern
  - Removed StepIndicator component
  - Updated headings, label colors, button radius
- Welcome screen full-page redesign (node 757:3943):
  - Gradient headings, numbered steps, "Go to dashboard →" CTA
  - Moved outside card wrapper in signup/page.tsx
- Responsive fix: `whitespace-nowrap` + small base sizes on welcome headings
- Welcome heading scale-down: ~17% reduction at md/lg breakpoints
- Left column widened to `flex-1`, gap reduced to `md:gap-6` (24px)

## Session: Login + Contact + Content Updates

### Completed
- Login page redesigned (node 757:3733):
  - centaur-logo.svg (matches landing page)
  - "Sign in to Centaur Portal" heading
  - "Don't have an account?" above form
  - Indigo Sign In button (`#4f46e5`)
  - "or connect with" divider + SAML SSO button
- Contact page created (`/contact`):
  - Same card-glass style
  - Back button at top
  - "Talk to our team" + mailto CTA
  - "Already have an account? Sign in" at bottom
- Customer routing: `app/page.tsx` → `router.push("/contact")` (was external URL)
- Training specialties updated to match intake form G2 (25 items)
- Clinical roles updated to match intake form (8 items)

### Deployments
| Commit | Description | Vercel URL |
|--------|-------------|------------|
| 33cdd23 | Initial full signup flow | specialist-portal.vercel.app |
| 92e1a97 | Login + contact page polish | specialist-portal.vercel.app |
| 112fc02 | Clinical roles + training specialties update | specialist-portal.vercel.app |

---

## Pending / Next Up
- [ ] Confirm professional title field alignment with intake form (stakeholder question sent)
- [ ] Any additional Figma screens to implement
- [ ] Set up SSH keys for GitHub (avoid PAT sharing in chat)
