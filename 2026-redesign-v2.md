# Personal site redesign — working brief

## Current site
Repo is local at \\wsl.localhost\Ubuntu\home\angel\sites\dev-blog
Notes about redesign and assets are on the 2026-redesign branch

## Goals

1. Move positioning from coder/designer to **tech leader**.
2. Homepage should support a current **job search**.

## Audience

This site is primarily for me. Prospective employers will arrive via a link from my résumé or an intro, not from search. The site should NOT read as a slick corporate portfolio — it stays an indieweb venture.

---

## Aesthetic direction
This is a responsive, mobile-first design.

**Make bold choices.** This is a personal site, not a product page, not corporate. It's OK to be playful and a bit chaotic.

### Things to embrace
- Strong typography as a primary design element.
- Patterns: grid paper, dashes, broken lines, scan lines, halftone dots, signal noise, a minor amount of grunge. SHOULD NOT FEEL LIKE A SCRAPBOOK; MORE LIKE A 1990s ZINE.
- Hard edges over rounded corners.
- Borders and whitespace to delineate sections.
- Dark "ticker tape" or highlighter backgrounds behind text, even in light mode.
- Slight skew or rotation, only when readability survives.

### Things to avoid
- Gradients, glows, drop shadows.
- Rounded-corner card with left-border accent (a known AI-design trope).
- Inventing imagery in SVG; placeholders are better.
- Pure black (`#000`) or pure white (`#fff`).
- Overused web fonts: Inter, Roboto, Arial, Fraunces, system stacks.
- Motion beyond the in-place `<+>` reveal and very subtle hover states.

### Texture intensity
Around 30/100 — present but never the loudest thing on the page.

---

## Typography
- Typography should be a strong design element on the page.
- Maxiumum of three typefaces:
    - Sans serif for body text; some possibilities:
        - https://www.cdnfonts.com/consola-mono.font
        - https://www.cdnfonts.com/schibsted-grotesk.font
        - https://www.cdnfonts.com/literal.font
        - https://www.cdnfonts.com/polt.font
        - https://fontesk.com/md-io-typeface/
        - https://fontesk.com/ovelion-font/
        - https://fontesk.com/informe-font/
        - https://github.com/rainbowunicornstudio/healtheweb-typeface (version A)
    - Pixel or mono font for metadata and subheadings; some possibilities:
        - https://www.cdnfonts.com/narpassword00000.font
        - https://www.cdnfonts.com/xg-pixo.font
        - https://www.cdnfonts.com/homespun-brk.font
        - https://fontlibrary.org/en/font/pixel-operator
    - A font for headings (blog post tiles, page headings); no current suggestions here, but should blend with the fontstack based on the lists above

### Name treatment (learned in iteration)
- Name should be **large, but not dominant** and taking over the whole viewport. Likely 60-80px.
- **No trailing period** after the name.
- **No special color** on the é — let the diacritic stand on its own.
- **Use the name once** per page. Avoid repeating it as a watermark, in headers, in the footer signature, etc.

---

## Color palette
If the provided palette does not include a black or white, off-black and off-white should be added/included. Pure black (#000) and pure white (#fff) should not be used. Deep, dark variations of a color already in the palette (blue, green) can be used in place of off-black.

Color contrast should always meet WCAG AA standards.

https://coolors.co/palette/9699af-54457f-4c243b-b84a62-00fddc

Start by designing for light mode; will add a dark mode later.

Even in light mode, the background color should not be pure white; if offwhite is used, it should have a clear tint of another color in it.

WCAG AA contrast minimum, always.

Light mode first; dark mode to be designed later.

---

## Spacing

8px base system (carried forward from the existing `_spacing.scss`).

---

## Layout & content patterns

### Homepage section order
1. **Intro** — name + small/secondary avatar + four identity tags
2. **Hire-me CTA** — "My next opportunity"
3. **Recent blog posts**
4. **Footer / colophon**

### Identity tags
- Four tags: Technologist · Leader · Partner · Enthusiast.
- Each tag has bold-word treatment, a short lede, and a `<+>` button that expands more text **inline within the paragraph** (no drawer, no modal).
- `<+>` button is inspired by https://digtext.github.io/.

### Hire-me CTA emphasis
Medium prominence (~45/100). It's a real section but doesn't dominate above the fold.

### Blog posts
- Title + date. Excerpt optional. Read-more link optional (title can be the link).
- Link to all posts.
- **NEVER show categories or tags** on the homepage list.
- Several layout options explored — current favorites are dense index/list styles over card grids.

### Footer
**Dense colophon** content: nav links, version, copyright, repo link, fonts, "powered by", RSS link, "Made with ♥ by a human in Baltimore", back-to-top.

### Other homepage elements
- Links to GitHub, LinkedIn, email.
- Light/dark mode toggle.

---

## Editorial principles (learned in iteration)

- **Don't repeat content.** The name appears once. The identity-tag titles appear once. The Coolors palette specs and the typeface specs are footer-level metadata, not to be included in the nav or hero copy.
- **Version number is footer-only.** Don't lead with "v4.0.0" or any framing around "this is version N of the site." It's not interesting to a reader; it's a colophon detail.
- **No filler.** Type specimen sidebars listing the four identities right next to the four identities themselves are redundant. Cut.
- **Stats and "data slop" need a real reason.** Resist adding metric counters or numeric badges to fill space.

---

## Slashpages (for later)

- `/about`
- `/now`
- `/uses`
- `/resume`
- `/hire-me`
- `/projects` (web-dev curriculum, isitsharkweek.com, etc.)
- `/the-sky`
- `/colophon`

