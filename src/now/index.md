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

I'm living in Baltimore and taking a pause from work, enjoying a short personal reset.

{% include "latest-sky.njk" %}

</div>

</section>

<section class="now-section">

### I am enjoying{: .now-heading}

- 🐶 Teaching my pupper new tricks
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
