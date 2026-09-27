---
name: Rafael Gomes Portfolio
description: Senior front-end portfolio in two columns, a fixed identity column beside a readable content column, on deep slate with one calm teal accent.
colors:
  slate-ground: "#0f172a"
  slate-raised: "rgba(30, 41, 59, 0.5)"
  slate-overlay: "rgba(15, 23, 42, 0.97)"
  slate-body: "#94a3b8"
  slate-heading: "#e2e8f0"
  ink-invert: "#0f172a"
  calm-teal: "#5eead4"
  teal-wash: "rgba(45, 212, 191, 0.1)"
  hairline: "rgba(148, 163, 184, 0.15)"
  hairline-strong: "rgba(148, 163, 184, 0.35)"
  soft-error: "#fca5a5"
  logo-cyan: "#00ffeb"
typography:
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  row-title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  nav-label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  pill:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1.25rem"
rounded:
  thumb: "4px"
  control: "8px"
  pill: "9999px"
  avatar: "50%"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.slate-heading}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-outline-hover:
    textColor: "{colors.calm-teal}"
  tech-pill:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.calm-teal}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.slate-body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  filter-chip-active:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.calm-teal}"
  content-row:
    backgroundColor: "transparent"
    rounded: "{rounded.control}"
    padding: "16px"
  content-row-hover:
    backgroundColor: "{colors.slate-raised}"
  nav-link:
    textColor: "{colors.slate-body}"
    typography: "{typography.nav-label}"
    padding: "12px 0"
  nav-link-active:
    textColor: "{colors.slate-heading}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.slate-heading}"
    rounded: "{rounded.control}"
    size: "44px"
---

# Design System: Rafael Gomes Portfolio

## Overview

**Creative North Star: "The Quiet Résumé"**

A senior developer's portfolio in the category-standard form, executed with restraint: a sticky identity column on the left (avatar, signature logo, role, one-line pitch, vertical nav, social icons pinned to the bottom) beside a readable content column on the right. Everything sits on one deep slate ground. Hierarchy comes from two text tones (slate body, near-white headings) and a single calm teal that marks what is live: links on hover, the active nav rule, tech pills.

Content is a list of rows, not a grid of cards. Projects, featured work, experience and certificates are all the same shape: an 8rem left slot (thumbnail or period) and a text body, with no border at rest, lighting up with a faint raised slate fill when hovered. Motion is small and authored: one settle-in per route change, the nav rule stretching, row arrows nudging up-right. The page stays flat; depth is tonal, never shadowed.

The world refuses hero slogans, icon-card grids, gradient text, glass panels, neon and glow. The logo's own saturated cyan is an identity asset, not a UI color.

**Key Characteristics:**
- Two columns on desktop (identity 44%, content 52%), stacked on tablet and phone.
- One ground, two text tones, one accent.
- Rows that light up on hover instead of bordered cards.
- Short uppercase tracked labels that head each section.
- Inter throughout, weights 400 to 700.
- Flat surfaces; depth only through translucent slate fills.

## Colors

Deep slate ground with slate text in two strengths and one calm teal accent; everything else is a translucent slate derived from the same family.

### Primary
- **Calm Teal** (calm-teal): links on hover and focus, the active nav rule, the back link, rich-text links, text selection background, the global focus ring, the spinner, and About skill checkmarks. It is the only hue in the interface.
- **Teal Wash** (teal-wash): the 10% teal fill behind tech pills and the active Laboratory filter chip. Always paired with Calm Teal text.

### Neutral
- **Deep Slate Ground** (slate-ground): the page background and scrollbar track. The only opaque surface.
- **Raised Slate** (slate-raised): the hover fill of content rows and the placeholder behind thumbnails. Half-transparent so it reads as a lift of the ground, not a new surface.
- **Slate Overlay** (slate-overlay): the near-opaque full-screen backdrop of the Laboratory project viewer.
- **Slate Body** (slate-body): running text, pitch, descriptions, inactive nav labels, social icons, card tags.
- **Slate Heading** (slate-heading): h1 to h3, section labels, row titles, emphasized `strong` text, active nav, button and icon-button text.
- **Ink Invert** (ink-invert): text on teal selection.
- **Hairline** (hairline): 2px thumbnail borders at rest, the viewer header divider, iframe border.
- **Hairline Strong** (hairline-strong): outline-button and icon-button borders, avatar ring, thumbnail border on row hover, scrollbar thumb.
- **Soft Error** (soft-error): the iframe load error message only.

### Identity asset
- **Logo Cyan** (logo-cyan): lives in `brand.png`. Recorded so nobody samples it from the logo into the UI.

### Named Rules
**The One Accent Rule.** Calm Teal is the only hue. It marks interaction and state (hover, focus, active, pills); it never fills a large surface, and no second accent is introduced.

**The Logo Is Not A Palette Rule.** Logo Cyan stays inside the signature logo. UI teal is always Calm Teal.

## Typography

**Display Font:** none; the system has no display face.
**Body Font:** Inter (with system-ui, -apple-system, sans-serif), loaded from Google Fonts at 400, 500, 600, 700.

**Character:** One neutral grotesque carrying everything. Hierarchy comes from weight, tone and tracked uppercase labels, not from size jumps or a second family.

### Hierarchy
- **Headline** (700, 2.25rem, 1.2, -0.025em): the h1 of inner pages (page header, project details). Drops to 1.875rem on phones.
- **Title** (500, 1.25rem, -0.025em): the "Front-end Developer" role line in the sidebar; 1.125rem on phones. Viewer titles use the same size at 600.
- **Row Title** (600, 1rem, 1.375): project, certificate and experience row headings.
- **Body** (400, 1rem, 1.625): intros, story paragraphs, pitch (pitch capped at 20rem, page-header lead at 36rem, rich text at 68ch).
- **Body Small** (400, 0.875rem, 1.625): row descriptions, links under featured projects, buttons, filter chips.
- **Label** (700, 0.875rem, 0.1em tracking, uppercase, Slate Heading): section headings ("Sobre", "Projetos em destaque"), each the h2 of its section.
- **Nav Label** (700, 0.75rem, 0.1em tracking, uppercase): sidebar nav items.
- **Period** (600, 0.75rem, 0.05em tracking, uppercase, tabular numerals): experience date ranges.
- **Pill** (500, 0.75rem, 1.25rem line-height): tech pills.

### Named Rules
**The Heading Owns Its Section Rule.** Uppercase tracked text is used only as the actual heading of a section or as nav. It never floats above a headline as a decorative kicker.

**The Two Tones Rule.** Emphasis inside prose is Slate Heading at 500, not teal, not italic.

## Layout

A centered frame (max 1280px) with 96px side padding, split into a sticky identity column (44%, full viewport height, 96px top and bottom padding, content spread top to bottom) and a content column (52%, 96px vertical padding). Sections in the content column are separated by 96px (64px under 960px).

Spacing is a 4px-based scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96). Rows use 16px padding with an equal negative margin so their hover fill bleeds past the text edge while the text stays aligned with the column; row internals use a 20px gap between the 8rem slot and the body.

Responsive behavior, all max-width, from `src/styles/tokens/_breakpoints.scss`:
- **≤1280px (media-xl):** side padding drops to 48px.
- **≤960px (media-lg):** columns stack; the sidebar becomes a relative header with a 44px menu toggle and a collapsible nav (grid-rows 0fr to 1fr); side padding 24px; row hover fill and bleed are removed; section headings become sticky bars with a translucent slate scrim.
- **≤640px (media-sm):** side padding 16px; rows collapse to one column with thumbnails capped at 12.5rem; the logo shrinks to 168px.

### Named Rules
**The Mixin-Only Breakpoint Rule.** Media queries are written only through the mixins in `src/styles/tokens/_breakpoints.scss` (`media-sm`, `media-md`, `media-lg`, `media-xl`, their `-up` variants, `media-lg-tablet`, `media-short-vertical`), and always inside the element's own block, never in a separate responsive section or with a raw `@media (max-width…)`. Feature queries such as `prefers-reduced-motion` are the only raw `@media` allowed.

## Elevation & Depth

The system is flat. No element carries a box-shadow; depth is conveyed by translucency of the slate family: Raised Slate for a hovered row, Slate Overlay for the full-screen viewer, and a blurred 85% slate scrim behind sticky section headings on narrow screens so content passes under them legibly. Shadow tokens exist in `_shadows.scss` but are unused by the built world and are not part of this system.

### Named Rules
**The Tonal Lift Rule.** Surfaces are flat at rest. A hover raises a row by filling it with Raised Slate; nothing casts a shadow.

## Shapes

Small, consistent radii. Thumbnails and the brand-link focus shape use 4px; rows, buttons, icon buttons, the project cover and the iframe use 8px; pills and filter chips are fully rounded; the avatar is a circle with a hairline-strong ring. Borders are 1px for controls and 2px Hairline for image frames. The one linear device is the nav rule: a 1px line, 4rem long, drawn at half length at rest.

## Components

### Buttons
Quiet outlines that take the accent on hover.
- **Shape:** gently rounded (8px).
- **Outline (default):** transparent fill, 1px Hairline Strong border, Slate Heading text, 0.875rem at 500, 8px 16px padding, 8px icon gap.
- **Hover:** border and text turn Calm Teal (0.15s ease). Disabled drops to 50% opacity.
- **Icon button:** same treatment at 44px square (menu toggle) or 40px (viewer close).
- **Text links:** the default call to action. Slate Heading at 500 to 600, turning Calm Teal on hover and focus; an attached arrow nudges 4px right ("ver todos"), 4px left (back link) or 2px up-right (external links), all on `cubic-bezier(0.16, 1, 0.3, 1)` over 0.2s.

### Chips
- **Tech pill:** Teal Wash fill, Calm Teal text, 0.75rem at 500, fully rounded, 4px 12px padding. Non-interactive; used for stacks on rows and project details.
- **Filter chip (Laboratory):** transparent with a 1px Hairline Strong border and Slate Body text; hover lifts text to Slate Heading and border to Slate Body; active is Teal Wash fill, Calm Teal text, no border.

### Cards / Containers (content rows)
- **Corner Style:** 8px.
- **Background:** transparent at rest; Raised Slate on hover (desktop only).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none on the row; the 16:10 thumbnail carries a 2px Hairline border that strengthens to Hairline Strong on hover.
- **Internal Padding:** 16px, bled out with a -16px margin; 8rem left slot, 20px gap.
- **Hover / Focus:** title turns Calm Teal, the trailing arrow moves 2px up-right. Under 960px the fill is dropped and rows sit flush.

### Navigation
- **Style:** vertical list of uppercase Nav Labels, each preceded by a 1px rule 4rem long.
- **Default:** Slate Body text; the rule at half length (scaleX 0.5) and the label pulled 2rem left to sit beside it.
- **Hover / Focus:** text and rule turn Slate Heading; the rule stretches to full length and the label slides right with it (0.25s, `cubic-bezier(0.16, 1, 0.3, 1)`), transform only.
- **Active:** as hover, with the rule in Calm Teal.
- **Mobile (≤960px):** hidden behind a 44px outline menu toggle; opens by animating grid rows from 0fr to 1fr over 0.35s.

### Section heading
Label typography, 32px below. Under 960px it becomes a sticky bar spanning the gutter with 16px padding over the translucent scrim.

### Project viewer (Laboratory)
Full-screen Slate Overlay with a header row (title, GitHub link, 40px close button) above a Hairline divider; the embedded iframe sits in an 8px-rounded Hairline frame on white, since external projects bring their own background.

### Motion
One authored route transition: the content column settles in from opacity 0.35 and 12px down to rest over 0.5s on `cubic-bezier(0.16, 1, 0.3, 1)`, honoring reduced-motion preferences. The loading spinner is two pulsing Calm Teal discs, reduced to a static dot under reduced motion. Everything else is a 0.15 to 0.35s color or transform transition.

## Do's and Don'ts

### Do:
- **Do** use Calm Teal only for interaction and state: hover, focus, active nav rule, pills, links in rich text.
- **Do** build new lists as content rows: 8rem slot plus text body, no border at rest, Raised Slate fill on hover, title to teal, arrow nudge.
- **Do** head each section with the uppercase tracked Label (0.875rem, 700, 0.1em) as its real heading.
- **Do** keep text in two tones: Slate Body for reading, Slate Heading for headings and emphasis.
- **Do** write media queries only via the `_breakpoints.scss` mixins, inside the element's own block.
- **Do** take every color, size and space from the SCSS tokens; ease state changes with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** keep the signature logo, the illustrated avatar and the LinkedIn, GitHub and Pinterest links in the identity column.

### Don't:
- **Don't** add box-shadows, glass panels, glow, neon or gradient text.
- **Don't** introduce bordered card grids or icon-card grids; content is rows.
- **Don't** use Logo Cyan (or any second hue) in the UI.
- **Don't** put a hero slogan or a decorative uppercase kicker above a headline.
- **Don't** write raw `@media (max-width…)` / `(min-width…)` queries or collect them in a separate responsive block.
- **Don't** add route or scroll animation beyond the single settle-in per route change.
