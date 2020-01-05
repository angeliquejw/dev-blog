---
title: Sass Resources for Web Designers and Front-end Developers
date: 2015-06-16 23:27 EST
location: Baltimore
tags: sass, links, resources
---

If you've decided Sass is snazzy and want to learn more, I've gathered up some links I've found useful and hope you do, too.

##Reading &amp; learning about Sass
While you might not start out reading the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html), sooner or later you'll end up there in order to learn more about a feature of Sass or its limitations. For example, after [just saying](http://angeliqueweger.com/journal/2015/06/naming-your-color-variables/) earlier this month that I don't do much theming, I found myself needing to create some themes for a web form and spent some time reading up on the [!default](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) flag.

Thankfully, there's more interesting things to read out there other than the docs. Two blogs I follow and recommend include [Hugo Giraudel's blog](http://hugogiraudel.com/blog/) and [The Sass Way](http://thesassway.com/). You'll note some links from the former to the latter, as Hugo is a contributor to The Sass Way. I also keep up with via [Sassnews](http://sassnews.us7.list-manage.com/subscribe?u=b4a4054cce715a3b0ae5e7d35&id=f7c505323d), a weekly email newsletter.

If you like learning and connecting in person, there's [Camp Sass](http://campsass.com/) in the spring and [SassConf](http://sassconf.com/) in the fall. Some cities (like [DC](https://twitter.com/DCSassMeetup)) have Sass-focused meetups, and you can also look on [Meetup](http://meetup.com) for general web dev/design groups that might feature Sass talks.

[![CampSass](/journal/2015-06-16-sass-resources-for-web-designers-and-front-end-developers/campsass.png)](http://campsass.com/)
{: .halfWidth}
[![SassConf](/journal/2015-06-16-sass-resources-for-web-designers-and-front-end-developers/sassconf.png)](http://sassconf.com/)
{: .halfWidth}

##Libraries, grids &amp; more
There's a wealth of resources out there for making your already awesome and efficient Sass even better. I use [Bourbon](http://bourbon.io/), a mixin library, in almost all my projects, as it's lightweight, allows me to avoid handcoding vendor prefixes (`@include display(flex)` and `@include placeholder` FTW) and just allows for simpler, cleaner code (like `@include clearfix` and `#{$all-text-inputs}`).

I also really like David Clark's library of Sass utilities, [Scut](https://davidtheclark.github.io/scut/). Even when I don't import his whole library, I reliably include his [REM with fallback](https://davidtheclark.github.io/scut/rem-fallback.html) mixin and, when a design calls for it, [Side-Lined](https://davidtheclark.github.io/scut/side-lined.html) mixin.

[The same folks who made Bourbon](https://thoughtbot.com/open-source) also make a semantic grid framework ([Neat](http://neat.bourbon.io/)), style scaffolding ([Bitters](http://bitters.bourbon.io/)) and a pattern library ([Refills](http://refills.bourbon.io/)). As much as I like Bourbon, I don't use these elements a whole lot (I could and should probably do a post just about the troubles I've encountered with grid frameworks), though I've had a few occasions to use the [unstyled Refills components](http://refills.bourbon.io/unstyled/).

Because of my allegiance to and pleasure using Bourbon, I've not returned to using the granddaddy of Sass libraries, [Compass](http://compass-style.org/). Though I used Compass first, I felt it was bloated and slow. Hugo does [a good run down of the differences between Compass and Bourbon](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/), though keep in mind that piece is now over a year old.

Similarly, I'm aware of the media query library [Breakpoint](http://breakpoint-sass.com/) and saw a mind-bendingly awesome presentation about the grid framework [Susy](http://susy.oddbird.net/)...but haven't really used either in projects. That's not a slam against their usefulness, though. I know they're both popular and expect that's for a reason.

Of course, if none of the above float your boat or meet your specific needs, you can also check out mixins via [Sache](http://www.sache.in/) or by searching [Github](https://github.com/search?q=sass+library&type=Repositories&utf8=%E2%9C%93) or [Gists](https://gist.github.com/search?l=scss&q=mixin).

So many options!

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/wG3jhHKvoCCVG?html5=true" width="480" height="367" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

##Trying out Sass
Once you have a neat idea or some code, it's helpful to have a place to play with it. Luckily, you have two great options in [Sassmeister](http://sassmeister.com/) and [CodePen](http://codepen.io/), both of which support Sass (and, importantly, for my purposes, Bourbon). I use CodePen almost exclusively, but Sassmeister gives you more Sass-specific options (for good reason) and helps you understand the CSS output better (especially useful if you're just starting out in using Sass).

[![Sassmeister](/journal/2015-06-16-sass-resources-for-web-designers-and-front-end-developers/sassmeister.png)](http://sassmeister.com/)
[![CodePen](/journal/2015-06-16-sass-resources-for-web-designers-and-front-end-developers/codepen.png)](http://codepen.io/)

<hr />

As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). What Sass resources are most useful to you?