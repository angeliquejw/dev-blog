---
title: Migrating from Middleman to Eleventy
summary: Notes about moving my blog from Middleman to Eleventy
tags: [middleman, eleventy, static site generators]
date: 2021-02-24
location: Baltimore
comments: (false turns closing off; string adds to default closing)
footnotes:
  - My site was using Middleman 3.3 vs. the current (as of this post) version of 4.3.
  - "I landed on Eleventy for two reasons: It's JavaScript based and requires minimal configuration. The JS part is important because I wanted a static site generator that would work reliably on a variety of student laptops and operating systems. While the Windows Subsystem for Linux has definitely improved the Windows developer experience, getting that setup up requires a whole lot of extra effort on the part of my Windows-using students."
---

Before sharing some of the details and process I used to migrate this site from Middleman to Eleventy, I think it's helpful to provide some context behind my choice.

First and foremost, there's not a damn thing wrong with Middleman. 🤷🏻‍♀️ Honestly, working on Middleman had only gotten easier for me since I had been developing on Windows back when I started the site in 2015 and had since [moved to a Macbook](/blog/2017/first-week-on-macos/). While I was running on an out-of-date version of Middleman<sup id="return-fn1"><a href="#fn1">1</a></sup>, I didn't foresee problems updating the Middleman gem or the site.

Three things led me to redo things in Eleventy:

1. I had elected to use Eleventy in the advanced web development course I teach at MICA<sup id="return-fn2"><a href="#fn2">2</a></sup> and running my site on the same generator would give me more experience using and configuring Eleventy.
2. Eleventy is so _awesomely_ flexible. While I was initially sold on the minimal configuration, with Eleventy that only means you don't have to customize things, but you certainly can. The ability to use multiple templating languages, to use JavaScript for all sorts of logic, to work with data in a variety of formats--Eleventy is simple to set up, adaptable and powerful. It's a great choice for what I'm doing now with the site and really anything I want to do in the future.
3. Community -- I find the creator ([@ZachLeat](https://twitter.com/zachleat)) to be a stand-up dude (see, for example, [his enthusiasm when I tweeted about teaching with Eleventy](https://twitter.com/zachleat/status/1082429657683767296)) and the community around Eleventy to be friendly and encouraging.

## Setting up Eleventy
Because I thought I might want to archive the previous version of the site (this migration also included a redesign), I opted to create a new GitHub repo for the blog. I'm not precious about my git history, so this was an easy choice for me to make.

After creating a new repo, I copied the [Eleventy base blog template](https://github.com/11ty/eleventy-base-blog)
