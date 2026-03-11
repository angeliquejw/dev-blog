Quick wins:
* Reduce font size on code blocks
* Change color of inline code text
* Fix margins on first line after a blockquote; example here: http://localhost:8080/blog/2021/love-letter-to-lftm/

Also:
* Create GH Action for Storygraph script.
* Deal with some build warnings:
- Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks
- SASS:
    - DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0. More info and automated migrator: https://sass-lang.com/d/import
    - DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0. Use color.mix instead.
    - DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0. Use map.get instead.
* Attempt switching from Sass to CSS?
