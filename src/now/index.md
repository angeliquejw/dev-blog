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

I'm living in Baltimore and working as an engineering manager.

</section>

<section class="now-section">

### I am enjoying{: .now-heading}

- ✒️ a set of brand new, fresh notebooks for Q4
- 🆕 new squad organization at work
- 👾🚀 playing Starfield

</section>

<section class="now-section">

### I am reading{: .now-heading}

{% include "reads.njk" %}

</section>

<section class="now-section">

### I am looking forward to{: .now-heading}

- 🛬 some upcoming travel
- 🎃 pumpkin beer eason

</section>

<section class="now-section">

### I can be reached{: .now-heading}

- via [email](mailto:hello@angeliqueweger.com)

</section>

<footer class="now-footer">
  <p>This 'now' page is part of the bigger project <a href="https://nownownow.com/about">Nownownow</a> by Derek Sivers and was last updated on <time datetime="{{ page.date | htmlDateString }}" itemprop="datePublished">{{ page.date | readableDate }}</time>.</p>
</footer>
