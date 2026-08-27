# ZenCare Front-End Implementation Plan

Implementation plan for the improvements brainstormed for the ZenCare chiropractic marketing site. Use the checklists below to track progress.

---

## Phase 1: Branding & Meta

| # | Task | Status |
|---|------|--------|
| 1.1 | Update document `<title>` to ZenCare (e.g. "ZenCare Chiropractic \| San Diego") | [ ] |
| 1.2 | Update `<meta name="description">` with real site description | [ ] |
| 1.3 | Update `<meta name="author">` if desired | [ ] |
| 1.4 | Set `og:title`, `og:description`, `og:image` for Open Graph | [ ] |
| 1.5 | Set Twitter card meta (`twitter:card`, `twitter:title`, `twitter:image`, etc.) | [ ] |
| 1.6 | Add favicon (ZenCare) and optional `theme-color` meta | [ ] |

---

## Phase 2: Trust & Identity

| # | Task | Status |
|---|------|--------|
| 2.1 | Replace About section placeholder (User icon) with real Dr. Carter photo (or asset path ready for it) | [ ] |
| 2.2 | Add one testimonial or social proof snippet (e.g. review quote, "As seen in") | [ ] |
| 2.3 | Add local trust signal in header or hero (e.g. "San Diego" badge or line) | [ ] |

---

## Phase 3: Navigation & Structure

| # | Task | Status |
|---|------|--------|
| 3.1 | Set header logo `href` to `/` or `#` with smooth scroll to top | [ ] |
| 3.2 | Add open/close animation to mobile menu (e.g. slide or fade) | [ ] |
| 3.3 | Implement scroll-spy or active state for nav links based on visible section | [ ] |
| 3.4 | Add "Skip to main content" link at top of page (visible on focus) | [ ] |

---

## Phase 4: Accessibility

| # | Task | Status |
|---|------|--------|
| 4.1 | Replace footer social `aria-label="Social link"` with specific labels (Facebook, Instagram, LinkedIn) | [ ] |
| 4.2 | Audit and ensure visible focus states on all interactive elements (buttons, links, inputs) | [ ] |
| 4.3 | Check color contrast (muted-foreground on background) for WCAG AA | [ ] |
| 4.4 | Verify booking modal focus trap and focus return on close (Radix behavior) | [ ] |

---

## Phase 5: Hero & Visual Hierarchy

| # | Task | Status |
|---|------|--------|
| 5.1 | Add hero visual (illustration, photo, or pattern) to break text block | [ ] |
| 5.2 | Vary CTA copy where repeated (e.g. "Get started" / "Schedule a call" vs "Book Your Free Consultation") or style one as secondary | [ ] |

---

## Phase 6: Booking Modal UX

| # | Task | Status |
|---|------|--------|
| 6.1 | Add in-modal success state (e.g. "Thank you — we'll be in touch") before closing, or brief delay | [ ] |
| 6.2 | Add visible validation/error messages for form fields (beyond HTML5 required) | [ ] |
| 6.3 | (Later) Add optional "Preferred date" or "Best time to call" when backend supports it | [ ] |

---

## Phase 7: Content & Engagement

| # | Task | Status |
|---|------|--------|
| 7.1 | Add 1–2 more FAQ items (e.g. cancellation policy, first visit, telehealth) | [ ] |
| 7.2 | Add click-to-call or visible phone in header (or sticky bar on mobile) | [ ] |
| 7.3 | Differentiate Final CTA headline or supporting line from Consultation section | [ ] |

---

## Phase 8: Design Polish

| # | Task | Status |
|---|------|--------|
| 8.1 | Add theme toggle (light/dark) and wire to existing `.dark` CSS variables | [x] |
| 8.2 | Optionally strengthen aurora glow on hero for more impact (or leave as-is) | [x] |
| 8.3 | On mobile About section: consider showing doctor image above text | [x] |

---

## Phase 9: Technical & Consistency

| # | Task | Status |
|---|------|--------|
| 9.1 | Optimize fonts (self-host Inter or ensure `font-display: swap` on Google Fonts load) | [ ] |
| 9.2 | Define `--sidebar-*` CSS variables in `index.css` if using sidebar components later | [ ] |

---

## Phase 10: 404 Page

| # | Task | Status |
|---|------|--------|
| 10.1 | Add ZenCare logo or tagline to 404 page for brand consistency | [ ] |

---

## Quick Reference: Priority Tiers

- **Quick wins:** Phase 1 (1.1–1.6), Phase 3 (3.1), Phase 4 (4.1), Phase 6 (6.1)
- **High impact:** Phase 2 (2.1, 2.2), Phase 3 (3.2, 3.3), Phase 7 (7.2)
- **Nice-to-have:** Phase 5, Phase 8, Phase 10

---

*Last updated: Add date when you edit. Mark items with [x] as you complete them.*
