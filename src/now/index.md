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

I'm living in Baltimore and leading the team designing and building Maryland's paid family and medical leave digital services, ensuring that workers across the state can thrive even during life's most vulnerable moments.

</section>

<section class="now-section">

### I am enjoying{: .now-heading}

- 🏛️ Learning all about civic tech
- 🪡 Cross-stitching so many projects
- 🧶 Remembering how to knit socks

</section>

<section class="now-section">

### I am reading{: .now-heading}

{% include "reads.njk" %}

</section>

<section class="now-section">

### I can be reached{: .now-heading}

- via [email](mailto:hello@angeliqueweger.com)

</section>

<footer class="now-footer">
  <p>This 'now' page is part of the bigger project <a href="https://nownownow.com/about">Nownownow</a> by Derek Sivers and was last updated on <time datetime="{{ page.date | htmlDateString }}" itemprop="datePublished">{{ page.date | readableDate }}</time>.</p>
</footer>
