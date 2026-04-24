---
title: "/now"
custom_title: What I'm doing now
summary: "Current status. Inspired by <a href='https://nownownow.com/about'>https://nownownow.com/about</a>."
tags: [bits]
date: Last Modified
pageClass: pg-now
layout: layouts/page.njk
---

<h1 class="page-heading page-heading--alt">What I'm Doing <em class="u-block">Now</em></h1>

<section class="now-section">

## Currently{: .now-heading}

<div class="now-currently">

👀 I'm currently looking for my next opportunity; see more about my expeience on my [resume](/resume/) or read about what I'm looking for in [this LinkedIn post](https://www.linkedin.com/posts/angeliqueweger_hello-linkedin-scroller-you-may-know-share-7453119655298322432-bX5k).

I'm also in the process of updating this site, including switching the templating language from [Nunjucks](https://mozilla.github.io/nunjucks/) to [Vento](https://vento.js.org/), as well as some other modernization/upgrades since I started this version of the site and moved over to [Eleventy](https://www.11ty.dev/) in 2020. You can follow along with the redesign efforts on [this branch](https://github.com/angeliquejw/dev-blog/commits/2026-redesign).

{% include "latest-sky.njk" %}

</div>

</section>

<section class="now-section">

### I am enjoying{: .now-heading}

- ⚔️ Playing and building in [Hytale](https://hytale.com/)
- 🪡 Designing and stitching cross-stitch patterns
- 🧘🏻‍♀️ Building back up my meditation and journaling practice

</section>

<section class="now-section">

### I am reading{: .now-heading}

{% include "reads.njk" %}

</section>

<section class="now-section">

### I can be reached{: .now-heading}

- via [email](mailto:hello@angeliqueweger.com)
- or [LinkedIn DMs](https://www.linkedin.com/in/angeliqueweger)

</section>

<footer class="now-footer">
  <p>This 'now' page is part of the bigger project <a href="https://nownownow.com/about">Nownownow</a> by Derek Sivers and was last updated on <time datetime="{{ page.date | htmlDateString }}" itemprop="datePublished">{{ page.date | readableDate }}</time>.</p>
</footer>
