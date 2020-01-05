---
title: Getting Sassy with variables and colors
date: 2015-05-22 05:13 EST
tags: sass, styles, variables, colors
location: Baltimore
---

Back in the days when I was still intimidated by the command line, the lure of variables convinced me to figure out how to start using Sass in my projects. Just like I no longer memorize phone numbers because they're all pre-programmed into my cell phone, I also don't have to memorize the hex values of brand colors or entire web project color palettes due to the awesomeness of Sass.

##Intro to Sass
If you're unfamiliar, Sass is a stylesheet language that is then compiled into standard CSS. As the [project page](http://sass-lang.com/) says, it's CSS with superpowers.

Want to get started using Sass? Check out the [docs](http://sass-lang.com/install). Also, if you're not keen on using the command line, note that there are several apps you can use. Several are included in the docs; I used and had good experiences with [Prepros](https://prepros.io/), which runs on both Windows and Mac OSes.
{: .note}

##So tell me about variables&hellip;
In Sass, you declare identify a variable by starting with a `$`, like so:

~~~scss
$lime: #92bd0a;
~~~

Now, instead of remembering `#92bd0a` throughout my project, I can just use `$lime` and, when the Sass gets compiled into CSS, it will replace the variable with the value I've given it.

So, as an example, if you switch between the Sass and CSS tabs below, you can see what the styles for my site header look like in my stylesheet and what it looks like after being compiled into CSS:

<div class="embedWrapper">
<p class="sassmeister" data-gist-id="e8f80c276738c66ecb2f" data-height="480" data-theme="solarized-dark"><a href="http://sassmeister.com/gist/e8f80c276738c66ecb2f">Play with this gist on SassMeister.</a></p>
</div>

The variables for `$black` and `$lime` don't show up in the final CSS; they're replaced by their respective hex values. Of course, variables can be used for more than just colors; note how the `$monofont` variable in the above example lets me easily duplicate my font stack for the monospace font I use in my site design.

While this was enough to make me jump to include Sass in my web development workflow, it barely scratches the surface of what you can do in Sass with colors, variables and the combination of the two.

<div class="embedWrapper giphy">
  <iframe src="//giphy.com/embed/3o85xEYc436eIWA51K?html5=true" width="480" height="268" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

##Easy color modifications with Sass
With Sass, not only can you forgo memorizing hex values, sometimes you manage to use colors without *ever* having known the hex value. For example, if I style a button with a background color and want to either lighten or darken that color when that element is hovered over, I can sort that out easily in Sass:

~~~scss
$base: #D4E744;
.lightDark {
  li {
    background: $base;
    &:first-of-type {
      background: lighten($base, 20);
    }
    &:last-of-type {
      background: darken($base, 20);
    }
  }
}
~~~

<div class="embedWrapper">
<p data-height="210" data-theme-id="15346" data-slug-hash="BNLrLQ" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/BNLrLQ/'>Color Fun With Sass (2 of 4)</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

You can also use Sass to generate RGB or RGBa values for colors, like so

~~~scss
background: rgba($base,.5);
~~~

compiles to

~~~css
background: rgba(212, 231, 68, 0.5);
~~~

<div class="embedWrapper">
<p data-height="175" data-theme-id="15346" data-slug-hash="bdwvwq" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/bdwvwq/'>Color Fun With Sass (3 of 4)</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

This isn't earth-shattering stuff, but it just simply helps you write more efficiently and with fewer interruptions. Before converting to Sass, if I wanted to use a RGBa color in my stylesheet, I had to either Google for a hex-to-RGB converter or crack open PhotoShop. Sass allows me to stay in my code editor or IDE and just write code. Also, it saves me potential headaches down the road; if I ever need to change the hex value of `$base`, I only have to do so in one place---where I declared the variable. Before Sass, I would have had to run a search and replace on my stylesheet for each instance of `#D4E744` and probably would have missed the RGB version of that same color.

While these are the color functions I use most often in Sass, they're not the only ones out there. You can also modify a color more dramatically, like to generate complementary or triadic color schemes off a base color:

~~~scss
.complementary {
  li {
    background: $base;
    &:nth-child(2) {
      background: adjust_hue($base, 180);
    }
  }
}
.triadic {
  li {
    background: $base;
    &:first-of-type {
      background: adjust_hue($base, 120);
    }
    &:last-of-type {
      background: adjust_hue($base, -120);
    }
  }
}
~~~

<div class="embedWrapper">
<p data-height="360" data-theme-id="15346" data-slug-hash="oXzqXO" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/oXzqXO/'>Color Fun With Sass (1 of 4)</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

You can also use Sass to saturate and desaturate colors, as well as generate greyscale and inverted colors:

<div class="embedWrapper">
<p data-height="210" data-theme-id="15346" data-slug-hash="QbKmKM" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/QbKmKM/'>Color Fun With Sass (4 of 4)</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

##More complex Sass color functions
If you're already using `lighten` and `adjust_hue` in your stylesheets, maybe you're interested in leveling up and trying to write your own color functions using Sass. My example above for generating RGBa values using Sass includes a basic Sass loop:

<div class="embedWrapper">
<p class="sassmeister" data-gist-id="9ec6b6d59e3709808a43" data-height="480" data-theme="solarized-dark"><a href="http://sassmeister.com/gist/9ec6b6d59e3709808a43">Play with this gist on SassMeister.</a></p>
</div>

Basically, this breaks down to:

1. Go through the first nine `li` elements under the `rgba` class.
2. Assign each one a background color based on the `$base` variable.
3. For the opacity level, multiply the item number (ie, which child is it) by 0.1, thus the fourth item has an opacity of 0.4.

Depending on how much programming experience you have before jumping into Sass, this may take you a bit to wrap your head around (and playing around on [Sassmeister](http://sassmeister.com/) can be super helpful to understanding functions like this). Once you start, though, you'll be amazed at what you can do with Sass color functions. For inspiration, check out Elijah Manor's post on [dynamic repeating colors using Sass](http://www.elijahmanor.com/dynamic-repeating-sass-colors/) and Hugo Giraudel on [generating complex color palettes using Sass](http://www.sitepoint.com/using-sass-build-color-palettes/).

My own recent contribution was re-configuring some code I wrote two years ago to be easier to fork and reuse. My original intent was to create a handy guide to what colors looked like after being lightened or darkened using Sass functions, including when light and dark text became illegible on the resulting colors. While my [original attempt](http://codepen.io/angeliquejw/details/BgrIs/) accomplished this, reusing the code was a fiddly affair. To change a single color in that palette, I had to update seven different values; to change the percent of a tint (say, to lighten and darken colors by 15% instead of 10%), I had to change four values *per color* in the HTML and two in the CSS. In comparison, my new version only requires 5 values to be updated when colors are swapped and 2 *total* values when changing or adding a percent value. (Honestly, I think even those numbers can be improved, so there may yet be a version 3!)

<div class="embedWrapper">
<p data-height="710" data-theme-id="15346" data-slug-hash="ZGpORV" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/ZGpORV/'>Palette Viewer and Tint Generator v2.0</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

One of the awesome realizations I had in re-configuring this code was how smarter Sass actually also resulted in cleaner markup. My HTML for one row of colors before:

~~~HTML
<div class="row melon">
  <div class="lightest">
    <h2>10%</h2>
    <h2 class="white">10%</h2>
  </div>
  <div class="lighter">
    <h2>5%</h2>
    <h2 class="white">5%</h2>
  </div>
  <div class="light">
    <h2>3%</h2>
    <h2 class="white">3%</h2>
  </div>
  <div class="main">
    <h1>melon</h1>
    <h1 class="white">melon</h1>
  </div>
  <div class="dark">
    <h2>3%</h2>
    <h2 class="white">3%</h2>
  </div>
  <div class="darker">
    <h2>5%</h2>
    <h2 class="white">5%</h2>
  </div>
  <div class="darkest">
    <h2>10%</h2>
    <h2 class="white">10%</h2>
  </div>
</div>
~~~

HTML now:

~~~HTML
<ul class="palette melon">
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
  <li><span></span><span></span></li>
</ul>
~~~

Not all projects require or benefit from complex color functions like these examples, but it's fun to experiment with what's possible and, when you do need to do something complex, Sass lives up to its promise of making you feel like you have superpowers.

<div class="embedWrapper giphy">
  <iframe src="//giphy.com/embed/TfeXX34FFOoSI?html5=true" width="480" height="209" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

<hr />

As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). I'd love to see what awesome Sass stuff you've created!

*[CSS]: Cascading Stylesheets
*[HTML]: Hypertext Markup Language; a basic building block of web pages
*[IDE]: Integrated Developer Environment; essentially, an all-in-one solution for your code editor, compiler, version control, etc.
<script src="http://cdn.sassmeister.com/js/embed.js" async></script>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
