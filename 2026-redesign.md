Some collected notes and plans for redesigning my personal site.

# Goals
1. Move role from coder/design to tech leader
2. Homepage positioned for job search
3. Change it up :)
    - https://gomakethings.com/dont-modernize-your-code-just-for-the-heck-of-it/
    ^ While this is true -- I think I wasn't going to love the process of migrating from Sass to CSS, a redesign where I'm writing from scratch feels like a good opp to modernize
    Honestly, should have gone the same route with Vento and may yet do so -- tear everythign down and build from scratch vs trying to make the old thing work and wondering a bit what it's doing in the first place.

# Audience
This site is _usually_ and primarily for me. However, since I'm in the middle of a job search, I am adding some more content up front to help people find that info. I do not expect prospective employers to find this site on their own; they are likely clicking on a link after receiving my resume or being introduced to me.

Despite being in job-hunting mode, the site should NOT be a slick portfolio; it is still very much an indieweb venture and primarily is for me to share things with others.

# Design
This is a responsive, mobile-first design.

- Make bold choices. This is a personal site, not a product page, not corporate. It's OK to be playful and a bit chaotic.
- Strong typography
- Textured, layered. Options include using patterns like: grid paper, dashes, glitches, broken lines, scan lines, signal noise, a minor amount of grunge. SHOULD NOT FEEL LIKE A SCRAPBOOK; MORE LIKE A 1990s ZINE.
- It's OK for things to be skewed or rotated, but not in a way that inhibits readability.
- It's OK to use borders and whitespace to delineate sections or content types
- It's OK to but a dark background (ticker tape, highligher effect) behind text, even in light mode.
- Preference for hard edges over curves or border-radius.
- Minimal amount of motion/animation.
- NO use of gradients, glows, shadows.

## Typography
- Typography should be a strong design element on the page.
- Maxiumum of four typefaces:
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
    - OPTIONAL: A distinct display font for my name; currently consdiering https://www.cdnfonts.com/magical-childhood.font
    - With the exception of the optional display font for my name, avoid typography with dramatic swooshes or that feels retro/vintage (pre-1980).

## Color palette
If the provided palette does not include a black or white, off-black and off-white should be added/included. Pure black (#000) and pure white (#fff) should not be used. Deep, dark variations of a color already in the palette (blue, green) can be used in place of off-black.

Color contrast should always meet WCAG AA standards.

https://coolors.co/palette/ef476f-ffc43d-8baaad-484a47-273e47

Start by designing for light mode; will add a dark mode later.

Even in light mode, the background color should not be white or off white.

## Spacing
Generally uses an 8px system; see the existing [_spacing.scss](https://github.com/angeliquejw/dev-blog/blob/main/src/assets/styles/01_settings/_spacing.scss) for an example.

# Content
See 2026-redesign-content.md for homepage text.

In addition to my blog, the site will also include the following slashpages:
    - /about
    - /now
    - /uses
    - /resume
    - /hire-me (open to rebranding/retitling on this)
    - /projects (which will include links to my web development curriculum, isitsharkweek.com, and anything else I create)
    - /the-sky
    - /colophon

While the site will include some photography, it is NOT photography forward. Most blog posts will be text only.