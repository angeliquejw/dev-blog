# Goals
1. Move role from coder/design to tech leader
2. Homepage positioned for job search
3. Change it up :)

# Kanban plan
## Todo
[ ] Sketch/plan for site content:
    [ ] Homepage
    [ ] Resume
    [ ] /now
    [ ] Where/how to list all the things that are not blog posts (currently BITS)
    [ ] Blog posts (list)
        - Title
        - Date
        - Link
    [ ] Blog tags
    [ ] Blog post (single)
        - Title
        - Date
        - Reading time
        - Tags
        - Headings
        - Code styles
        - Link styles
        - Pullquotes
        - Footnotes
        - Older/newer links
        - Embeds
            - Giphy: https://angeliqueweger.com/blog/2021/better-remote-teams/
        - Images
        - Lists
        - Callout class: https://angeliqueweger.com/blog/2021/skill-building-for-developers/ 
        ! DroP
            - Lose the "written in" as I'm not traveling as much
            - Lose the responses from 2021 and earlier
    [] Later fixes: Update the NJK template links in this post to be to NOT main branch: src/blog/2026/adventures-in-parsing-html-learning-github-actions.md
    [] Later fixes: Did the tag list need to be reversed? src/tag.vto:23





    [ ] Blog drafts
    [ ] /uses
    [ ] Looking up
    [ ] Business as usual? Or keep on old version of site
[ ] Identify color palette
    - https://coolors.co/user/collections/69e7162f6306fe000f7f7869 
[ ] Decide on fonts (am I really going to leave IBM Plex behind?)
[ ] Strategy for archiving the current version of the site, including a banner identifying that it's an archived version
    - REGEX for finding links to add `/v2/` to: `(href="\/(?!.*(v2).*$)([^\n]*)")`


## In progress
[ ] Use modern CSS instead of Sass


## Done
[x] Trade Nunjucks for Vento:
    - https://vento.js.org
    - https://chriskirknielsen.com/blog/from-nunjucks-to-vento-in-eleventy-migration-guide/
    1. W/ Nunjucks, had been getting away with calling page.title instead of page.data.title 🤷🏻‍♀️
    2. The previous way I had been listing and calling tags did not play nice, so I refactored it.
    3. Also ended up being an opportunity to just do some tidying up; my eleventy.js file was almost 150 lines long and now I've broken up things into individual files which I then import.
    