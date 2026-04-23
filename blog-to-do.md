# Quick wins
[ ] Remove Twitter links from comments.
[ ] Tags options -- default sort by # but also alpha?

# Also
[] Remarkbox? 
```
<!-- Remarkbox - Your readers want to communicate with you -->
<div id="remarkbox-div">
  <noscript>
    <iframe id=remarkbox-iframe src="https://my.remarkbox.com/embed?nojs=true&mode=light" style="height:600px;width:100%;border:none!important" tabindex=0></iframe>
  </noscript>
</div>
<script src="https://my.remarkbox.com/static/js/iframe-resizer/iframeResizer.min.js"></script>
<script>
  var rb_owner_key = "d91db063-2c73-11f1-bd59-040140774501";
  var thread_uri = window.location.href;
  var thread_title = window.document.title;
  var thread_fragment = window.location.hash;

  // rb owner was here.
  var rb_src = "https://my.remarkbox.com/embed" +
      "?rb_owner_key=" + rb_owner_key +
      "&thread_title=" + encodeURI(thread_title) +
      "&thread_uri=" + encodeURIComponent(thread_uri) +
      "&mode=light" +
      thread_fragment;

  function create_remarkbox_iframe() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("id", "remarkbox-iframe");
    ifrm.setAttribute("scrolling", "no");
    ifrm.setAttribute("src", rb_src);
    ifrm.setAttribute("frameborder", "0");
    ifrm.setAttribute("tabindex", "0");
    ifrm.setAttribute("title", "Remarkbox");
    ifrm.style.width = "100%";
    document.getElementById("remarkbox-div").appendChild(ifrm);
  }
  create_remarkbox_iframe();
  iFrameResize(
    {
      checkOrigin: ["https://my.remarkbox.com"],
      inPageLinks: true,
      initCallback: function(e) {e.iFrameResizer.moveToAnchor(thread_fragment)}
    },
    document.getElementById("remarkbox-iframe")
  );
</script>
```
[] Create GH Action for Storygraph script.
* Deal with some build warnings:
  [] Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks
- SASS:
    [] DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0. More info and automated migrator: https://sass-lang.com/d/import
    [] DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0. Use color.mix instead.
    [] DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0. Use map.get instead.
[] Attempt switching from Sass to CSS?

# ☑️ Done
[x] Reduce font size on code blocks
[x] Change color of inline code text
[x] Fix margins on first line after a blockquote; example here: http://localhost:8080/blog/2021/love-letter-to-lftm/
[x] Styles for two blockquotes from the same source back to back
