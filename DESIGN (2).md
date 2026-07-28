# Pritom Mondal - Portfolio Design System

## Mission
Create implementation-ready, token-driven UI guidance for Pritom Mondal's portfolio website that is optimized for consistency, WCAG 2.2 AA accessibility, monochrome minimalist aesthetics, and fast delivery across web surfaces.

## Brand
- **Product/Brand**: Pritom Mondal (Designer & Developer)
- **URL**: `https://pritommondal05.github.io`
- **Audience**: Product leaders, recruiters, clients, design collaborators, and software engineering teams.
- **Product Surface**: Single-page scrolling portfolio & interactive showcase.

## Style Foundations
- **Visual Style**: Clean, high-contrast monochrome (Black & White), grid-based, whitespace-heavy layout with delicate 1px borders, rounded pill containers, and circular directional arrow buttons (`↓`, `↗`, `→`).
- **Font Selection & Loading Rules**:
  - **Strict Font Requirement**: MUST strictly use **`Helvetica Now Display`** loaded from `./Font/stylesheet.css`. No other font families (such as Inter, Arial, or generic browser defaults) are allowed.
  - **Strict Weight Constraint**: Do NOT use standard `Bold` (`font-weight: 700` / `bold`). Use other weights available in the family: `Medium` (500), `Regular` (400), `Light` (300), `Thin` (100), `ExtraBold` (800), or `Black` (900).
- **Main Font Style**: 
  - `font.family.primary='Helvetica Now Display'`
  - `font.family.stack='Helvetica Now Display', sans-serif`
  - `font.size.base=16px`
  - `font.weight.base=400` (Regular)
  - `font.lineHeight.base=1.6`
- **Heading Font Style**: 
  - `font.family.heading='Helvetica Now Display'`
  - `font.weight.heading=500` (Medium - strictly avoid standard 700 bold, or use 800/900 for ultra-heavy display typography)
  - `text.transform.heading=uppercase`
- **Typography Scale**:
  - `font.size.xs=12px` (Labels, metadata, category tags, copyrights)
  - `font.size.sm=14px` (Navigation links, button text, pill labels)
  - `font.size.md=16px` (Body text, card descriptions, accordion headers)
  - `font.size.lg=18px` (Subheadings, lead intro text, role titles)
  - `font.size.xl=24px` (Card titles, experience & education entry headers)
  - `font.size.2xl=36px` (Section headers, service titles)
  - `font.size.3xl=56px` (Primary section title callouts)
  - `font.size.4xl=80px` (Hero massive typography: `EXPLORE MY PORTFOLIO`, `LET'S TALK`)
- **Color Palette (Strictly Monochrome Tokens)**:
  - `color.surface.base=#FFFFFF` (Pure white background)
  - `color.surface.inverse=#000000` (Solid black section background, active tags, footer)
  - `color.surface.raised=#FAFAFA` (Light grey panel background)
  - `color.surface.hover=#1A1A1A` (Hover state dark background)
  - `color.text.primary=#000000` (High-contrast primary black text)
  - `color.text.secondary=#666666` (Muted grey text for dates & subheadings)
  - `color.text.inverse=#FFFFFF` (Pure white text on black background)
  - `color.border.delicate=#E5E5E5` (Thin 1px border line for row separation)
  - `color.border.strong=#000000` (1px solid black border for buttons & containers)
- **Spacing Scale**:
  - `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=24px`, `space.6=32px`, `space.7=48px`, `space.8=64px`, `space.9=96px`
- **Radius, Shadow & Motion Tokens**:
  - `radius.none=0px`
  - `radius.sm=4px`
  - `radius.md=8px`
  - `radius.full=9999px` (Pill containers, filter tags, circular arrow buttons)
  - `shadow.none=none` (Flat line aesthetic)
  - `shadow.subtle=0px 4px 12px rgba(0, 0, 0, 0.05)`
  - `motion.duration.fast=150ms`
  - `motion.duration.normal=250ms`
  - `motion.duration.slow=400ms`
  - `motion.easing=cubic-bezier(0.16, 1, 0.3, 1)`

## Accessibility Requirements
- **Target**: WCAG 2.2 AA
- High-contrast monochrome text-to-background contrast ratio (>= 7:1 for normal text, >= 4.5:1 for UI elements).
- Keyboard-first interaction required across navigation pills, circular directional buttons, accordion list rows, and project filter pills.
- Explicit focus-visible styling: `outline: 2px solid #000000; outline-offset: 2px` (or `outline: 2px solid #FFFFFF` on black surfaces).
- Accessible names (`aria-label`) for circular icon-only arrow buttons (`↓`, `↗`, `→`).

## Writing Tone
Concise, confident, high-contrast, uppercase headings, implementation-focused.

## Rules: Do
- Strictly import and use **`Helvetica Now Display`** from `./Font/stylesheet.css`.
- Use non-bold font weights (`Medium 500`, `Regular 400`, `Light 300`, `Thin 100`, `ExtraBold 800`, `Black 900`). Avoid `Bold 700`.
- Use semantic design tokens (`color.surface.base`, `color.text.primary`, `radius.full`) rather than hardcoded hex values.
- Enforce strict ALL CAPS styling for navigation items, section headers, filter pills, hero text, and service names.
- Every interactive element (pill button, circular arrow button, accordion row) must define states: `default`, `hover` (color inversion), `focus-visible`, `active`, `disabled`.
- Use delicate 1px horizontal borders (`color.border.delicate`) to structure experience rows, education entries, and services accordions.
- Use circular buttons containing directional unicode/SVG arrows (`↓` scroll down, `↗` external link/expand, `→` row hover state).

## Rules: Don't
- **Do not use any font family other than `Helvetica Now Display`**.
- **Do not use standard `Bold` (`font-weight: 700`) font style**. Use Medium, Regular, Light, Thin, ExtraBold, or Black instead.
- Do not introduce colorful accents or non-monochrome gradients.
- Do not allow low-contrast text or hidden focus rings.
- Do not omit hover state color inversions (black-on-white inverted to white-on-black).
- Do not use hard corner boxes where pill-shaped (`radius.full`) containers are specified.

## Component Specifications & Page Structure

### 1. Navigation Bar (Top)
- **Left**: Logo/Brand `PRITOM MONDAL` (or stylized SVG logo `pritom mondal logo.svg`).
- **Center**: Pill-shaped container (`radius.full`, border 1px solid `#E5E5E5`) enclosing navigation links: `HOME | ABOUT ME | EXPERIENCE | EDUCATION | SERVICES | PROJECTS`. Active link indicated by Medium weight (`500`) or subtle solid background.
- **Right**: Small circular social icon buttons for GitHub, LinkedIn, Behance, and a hamburger menu icon (`=`) for mobile viewport.

### 2. Hero Section
- **Headline**: Massive typography (`font.size.4xl`, Medium/ExtraBold weight, uppercase) `EXPLORE MY PORTFOLIO` split across lines, interacting with central portrait cutout.
- **Supporting Text (Left)**: `DESIGNER EST.2020` (referencing PGXR / early design work).
- **Action Button (Left)**: Circular button (`radius.full`, 48x48px) containing downward arrow `↓` ("Scroll down").
- **Central Graphic**: High-contrast black-and-white cutout portrait of Pritom Mondal.
- **Supporting Statement (Right)**: *"I AM PASSIONATE ABOUT CREATING USER-CENTERED, ACCESSIBLE, AND INNOVATIVE SOLUTIONS THAT ENHANCE DIGITAL EXPERIENCES."*
- **Skills Verticals (Far Right)**: Vertically stacked uppercase skill badges: `UI/UX`, `WEB DEVELOPMENT`, `MULTIMEDIA`, `HCI`, `EXPERT FIGMA`.

### 3. About Section
- **Section Header**: `ABOUT` with an adjacent circular arrow button `↗` linking to full resume details.
- **Introductory Text**: *"PRITOM MONDAL IS A PASSIONATE DESIGNER & DEVELOPER, KNOWN FOR HIS CREATIVE VISION AND TECHNICAL EXPERTISE IN BUILDING IMPACTFUL, INCLUSIVE TECHNOLOGIES."*

### 4. Experience Section
- **Section Header**: `EXPERIENCE`
- **Layout**: Clean timeline/list format separated by thin 1px horizontal borders (`color.border.delicate`).
- **Entry Structure**:
  - **Left Column**: Date range (e.g. `DEC 2025 - PRESENT`).
  - **Right Column**: Role & Company (e.g. `UI/UX DESIGNER @ GRAPHLAND`), brief 1-2 sentence impact description, and circular action button (`↗` or `↓`).
- **Content Entries**:
  1. Graphland — UI/UX Designer (Dec 2025 - Present)
  2. Octobrain — Robotics & Programming Instructor (May 2025 - Sep 2025)
  3. PGXR — Founder (Nov 2020 - Present)
  4. Store To You — Creative Lead (Nov 2020 - May 2022)

### 5. Education Section
- **Section Header**: `EDUCATION`
- **Layout**: Bordered grid or list entries.
- **Content Entries**:
  1. BRAC University — B.Sc. in Computer Science and Engineering (2022 - Present | CGPA: 3.41 / 4.00)
  2. National Ideal College — Higher Secondary Certificate (HSC) (2019 - 2021 | GPA: 5.00 / 5.00)
  3. Motijheel Government Boys' High School — Secondary School Certificate (SSC) (2009 - 2019 | GPA: 5.00 / 5.00)

### 6. Featured Project Section
- **Section Header**: `FEATURED PROJECT`
- **Filter Tags**: Pill containers (`radius.full`):
  - `WEB DESIGN` (Solid black background, white text - Active)
  - `UI/UX` (White background, black border)
  - `DEVELOPMENT` (White background, black border)
  - Circular action button `↗` on far right.
- **Project Cards**:
  1. **FundBridge** (Category: `WEB APP`, Tools: React, Node.js, Express, MongoDB, Tailwind CSS, Figma | Feb 2026): Crowdfunding & donation platform connecting social causes with backers.
  2. **Bangladesh 3D Voting Simulator** (Category: `UI/UX & INTERACTION`, Tools: UI/UX, Interaction Design | Jan 2026): Interactive 3D simulation making electoral processes accessible.
  3. **AlamNet** (Category: `MERN & FIREBASE` | Dec 2025): Personal networking & portfolio platform.
  4. **ConnectCare** (Category: `HEALTHCARE UX` | Aug 2025): Doctor-patient management system.
  5. **BRACU Eventverse** (Category: `EVENT MANAGEMENT` | Apr 2025): Online event booking and management platform.

### 7. Services Section
- **Section Header**: `THE SERVICES WE PROVIDE`
- **Description**: *"CREATING VISUALLY APPEALING AND FUNCTIONAL DIGITAL EXPERIENCES TAILORED TO USER NEEDS, PROVIDING A CONSISTENT JOURNEY ACROSS PLATFORMS."*
- **Services List**: Bordered accordion rows displaying row number, service title, and downward arrow `↓`.
- **Hover Behavior**: Row inverts background to black (`color.surface.inverse`), text to white (`color.text.inverse`), and arrow transforms to right arrow `→`.
  1. 01. UI/UX RESEARCH (↓)
  2. 02. SERVICE DESIGN (↓)
  3. 03. DESIGN THINKING (→ - Inverted Hover State)
  4. 04. BRAND STRATEGY (↓)
  5. 05. WEB DEVELOPMENT (↓)
  6. 06. DIGITAL MARKETING (↓)
  7. 07. VIDEO PRODUCTION (↓)

### 8. Footer Section
- **Background**: Solid black (`color.surface.inverse`) section spanning full width.
- **Text Color**: White (`color.text.inverse`).
- **Top Links**: Scattered small uppercase links: `GITHUB`, `LINKEDIN`, `BEHANCE`, `EMAIL`.
- **Main Headline**: Massive typography `LET'S TALK`.
- **Action Links**: Pill-shaped action buttons along bottom: `GITHUB`, `LINKEDIN`, `BEHANCE`, `CONTACT ME` (`mailto:pritommondal05@gmail.com`).
- **Copyright**: `© 2026 PRITOM MONDAL` (Bottom right).

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every font implementation must strictly load and use `Helvetica Now Display` without using standard `Bold (700)`.
- System consistency and strict monochrome fidelity must be preserved across all viewports.
