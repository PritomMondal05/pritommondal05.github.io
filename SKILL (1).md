---
name: design-system-pritom-portfolio
description: Creates implementation-ready design system guidance, token specifications, and component behavior rules for Pritom Mondal's minimalist monochrome portfolio website using exclusively Helvetica Now Display font (excluding standard bold). Use when creating or updating UI rules, component specifications, or portfolio documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Pritom Mondal Portfolio Design System

## Mission
Deliver implementation-ready design-system guidance for Pritom Mondal that can be applied consistently across his portfolio website and digital product surfaces using strictly the `Helvetica Now Display` font family without standard bold weights.

## Brand
- **Product/Brand**: Pritom Mondal (UI/UX Designer & Web Developer)
- **URL**: `https://pritommondal05.github.io`
- **Audience**: Product managers, recruiters, clients, design collaborators, and tech teams.
- **Product Surface**: Personal portfolio website & interactive product showcase.

## Style Foundations
- **Visual Style**: Clean, high-contrast monochrome (Black & White), grid-based, whitespace-heavy layout with 1px delicate borders, rounded pill containers, and circular directional arrow buttons (`↓`, `↗`, `→`).
- **Font Selection & Loading Rules**:
  - **Strict Font Requirement**: Must strictly use **`Helvetica Now Display`** loaded from `./Font/stylesheet.css`. No other font families (Inter, Arial, etc.) are allowed.
  - **Strict Weight Constraint**: Do NOT use standard `Bold` (`font-weight: 700` / `bold`). Use other weights: `Medium` (500), `Regular` (400), `Light` (300), `Thin` (100), `ExtraBold` (800), or `Black` (900).
- **Main Font Style**: `font.family.primary='Helvetica Now Display'`, `font.family.stack='Helvetica Now Display', sans-serif`, `font.size.base=16px`, `font.weight.base=400`
- **Heading Font Style**: `font.family.heading='Helvetica Now Display'`, `font.weight.heading=500` (Medium - avoid standard 700 bold), `text.transform.heading=uppercase`
- **Typography Scale**: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=24px`, `font.size.2xl=36px`, `font.size.3xl=56px`, `font.size.4xl=80px`
- **Color Palette**: `color.surface.base=#FFFFFF`, `color.surface.inverse=#000000`, `color.surface.raised=#FAFAFA`, `color.surface.hover=#1A1A1A`, `color.text.primary=#000000`, `color.text.secondary=#666666`, `color.text.inverse=#FFFFFF`, `color.border.delicate=#E5E5E5`, `color.border.strong=#000000`
- **Spacing Scale**: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=24px`, `space.6=32px`, `space.7=48px`, `space.8=64px`, `space.9=96px`
- **Radius, Shadow & Motion Tokens**: `radius.none=0px`, `radius.sm=4px`, `radius.md=8px`, `radius.full=9999px` | `shadow.none=none`, `shadow.subtle=0px 4px 12px rgba(0, 0, 0, 0.05)` | `motion.duration.fast=150ms`, `motion.duration.normal=250ms`, `motion.duration.slow=400ms`, `motion.easing=cubic-bezier(0.16, 1, 0.3, 1)`

## Accessibility
- Target: WCAG 2.2 AA.
- Keyboard-first interaction model required.
- Explicit high-contrast focus rings (`outline: 2px solid #000000; outline-offset: 2px`).
- Contrast ratio >= 7:1 for normal text, >= 4.5:1 for UI elements.
- ARIA labels required for icon-only directional buttons.

## Writing Tone
Concise, confident, uppercase headings, implementation-focused.

## Rules: Do
- Strictly import and use **`Helvetica Now Display`** from `./Font/stylesheet.css`.
- Use non-bold font weights (`Medium 500`, `Regular 400`, `Light 300`, `Thin 100`, `ExtraBold 800`, `Black 900`). Avoid `Bold 700`.
- Use semantic tokens, not raw hex values, in component guidance.
- Enforce strict ALL CAPS styling for navigation items, section headers, filter pills, hero headline, and service titles.
- Every component must define required states: default, hover (color inversion), focus-visible, active, disabled.
- Use 1px delicate horizontal borders (`color.border.delicate`) for structured section items.
- Standardize circular directional action buttons (`↓` scroll down, `↗` link/expand, `→` hover active).

## Rules: Don't
- **Do not use any font family other than `Helvetica Now Display`**.
- **Do not use standard `Bold` (`font-weight: 700`) font style**.
- Do not introduce non-monochrome color accents or colored gradients.
- Do not allow low-contrast text or hidden focus indicators.
- Do not omit hover state color inversions (black-on-white inverted to white-on-black).
- Do not use hard rectangle corners where pill-shaped (`radius.full`) containers are specified.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Page structure & section specifications (Nav, Hero, About, Experience, Education, Projects, Services, Footer)
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every typography rule must strictly enforce `Helvetica Now Display` without standard bold.
- Prefer system consistency and monochrome visual fidelity over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
