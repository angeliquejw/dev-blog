# Migrating posts from Middleman -> Eleventy
- Copy content over
- Change file extension for blog posts from `.html.markdown` to `.md`
- Change `~~~` to ` ``` ` for identify code blocks
- Add `[]` around taglists
- Remove time from date front matter
  - Could have kept it if formatted for YAML if I used it, but I didn't, so easier to delete it
- Replace stray `<hr>`s with markdown `---`
- Make sure markdown headings have a space
- I was evidently using a plugin for markdown abbreviations, so added that into my elevent.js
- Add layout to the front matter
- `published: false` front matter ignored, so created a drafts folder (make sure to clean and restart your server so you know this is working)

# Setting up Eleventy
- https://github.com/11ty/eleventy-base-blog
- https://cloudsh.com/eleventy/eleventy_and_parceljs_working_together.html
- https://github.com/stickhandle/candy-11ty/blob/5108e76422b360389829a4af3571e3c90caa1553/filters/tagcounter.js
