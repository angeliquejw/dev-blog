---
title: "/now"
custom_title: What I'm doing now
summary: "Current status. Inspired by <a href='https://nownownow.com/about'>https://nownownow.com/about</a>."
tags: [bits]
date: Last Modified
pageClass: pg-now
layout: layouts/page.njk
---

<h1>What I'm Doing Now</h1>

<section>

## Currently

I'm living in Baltimore and taking a pause from work, enjoying a short personal reset.

{% include "latest-sky.njk" %}

</section>

<section>

### I am enjoying

- 🐶 Teaching my pupper new tricks
- 🪡 Designing and stitching cross-stitch patterns
- 🧘🏻‍♀️ Building back up my meditation and journaling practice

</section>

<section>

### I am reading

{% include "reads.njk" %}

</section>

<section>

### I can be reached

- via [email](mailto:hello@angeliqueweger.com)
- or [LinkedIn DMs](https://www.linkedin.com/in/angeliqueweger)

</section>

<footer>
  <p>This 'now' page is part of the bigger project <a href="https://nownownow.com/about">Nownownow</a> by Derek Sivers and was last updated on <time datetime="{{ page.date | htmlDateString }}" itemprop="datePublished">{{ page.date | readableDate }}</time>.</p>
</footer>
