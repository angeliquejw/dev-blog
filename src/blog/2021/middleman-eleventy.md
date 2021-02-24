---
title: Migrating from Middleman to Eleventy
summary: Notes about moving my blog from Middleman to Eleventy.
tags: [middleman, eleventy, static site generators, parcel, vercel, build tools]
date: 2021-02-24
location: Baltimore
comments: I'd love to hear about your experiences with static site generators, build tools or your questions about Eleventy.
footnotes:
  - My site was using Middleman 3.3 vs. the current (as of this post) version of 4.3.
  - "I landed on Eleventy for two reasons: It's JavaScript based and requires minimal configuration. The JS part is important because I wanted a static site generator that would work reliably on a variety of student laptops and operating systems. While the Windows Subsystem for Linux has definitely improved the Windows developer experience, getting that setup up requires a whole lot of extra effort on the part of my Windows-using students."
  - This was entirely the fault of using my web server and was in no way a reflection or limitation of Middleman.
---

Before sharing some of the details and process I used to migrate this site from Middleman to Eleventy, I think it's helpful to provide some context behind my choice.

First and foremost, there's not a damn thing wrong with Middleman. 🤷🏻‍♀️ Honestly, working on Middleman had only gotten easier for me since I had been developing on Windows back when I started the site in 2015 and had since [moved to a Macbook](/blog/2017/first-week-on-macos/). While I was running on an out-of-date version of Middleman<sup id="return-fn1"><a href="#fn1">1</a></sup>, I didn't foresee problems updating the Middleman gem or the site.

Three things led me to redo things in Eleventy:

1. I had elected to use Eleventy in the advanced web development course I teach at MICA<sup id="return-fn2"><a href="#fn2">2</a></sup> and running my site on the same generator would give me more experience using and configuring Eleventy.
2. Eleventy is so _awesomely_ flexible. While I was initially sold on the minimal configuration, with Eleventy that only means you don't have to customize things, but you certainly can. The ability to use multiple templating languages, to use JavaScript for all sorts of logic, to work with data in a variety of formats--Eleventy is simple to set up, adaptable and powerful. It's a great choice for what I'm doing now with the site and really anything I want to do in the future.
3. Community -- I find the creator ([@ZachLeat](https://twitter.com/zachleat)) to be a stand-up dude (see, for example, [his enthusiasm when I tweeted about teaching with Eleventy](https://twitter.com/zachleat/status/1082429657683767296)) and the community around Eleventy to be friendly and encouraging.

## Setting up Eleventy
Because I thought I might want to archive the previous version of the site (this migration also included a redesign), I opted to create a new GitHub repo for the blog. I'm not precious about my git history, so this was an easy choice for me to make.

After creating a new repo, I copied the [Eleventy base blog template](https://github.com/11ty/eleventy-base-blog) for the basic structure.

At this point, I copied over the content from my existing blog and started troubleshooting what was broken or wonky.

## Content tweaks

- I updated all my filenames to use a `.md` extension instead of `.html.markdown` and removed the date from the filename; this was an expectation of Middleman's blogging, but always struck me as ugly and wonky.
- I updated my front matter to remove the time because it wasn't in a format that Eleventy was parsing (I got the time for free when creating new blog posts via the Middleman CLI, but didn't use it in my UI) and to add square brackets around my tags.
- My actual Markdown content required two updates. First, Middleman used `~~~` to identify code blocks and I needed to change this to ` ``` `. Also, Middleman let me get away with not having a space in my markdown headings (e.g., `##A second-level heading`), but Eleventy had issues with this, so I added the space everywhere.

Once I identified issues, these updates were easy to make in bulk via the command line (for filenames) or the search and replace UI in VS Code.

Additionally, I had missed that I was using some Markdown plugins and sorted out how to [add and configure those in Eleventy](https://github.com/angeliquejw/dev-blog/blob/14f73c1df856cae471b3b97098abc301d72415bd/.eleventy.js#L76).

Finally, Middleman allowed me to write draft posts and identify them by adding `published: false` to the post's front matter. This doesn't work the same way in Eleventy, so I moved this content instead to a `_drafts` folder and added that to my [`.eleventyignore` file](https://github.com/angeliquejw/dev-blog/blob/main/.eleventyignore). At this point, it was also important to clean my build folder and restart my server to make sure draft content wasn't showing up on the site.

## Build changes

One of the things Eleventy gives me more control over is my asset and build pipeline. While Sass compiled ✨automagically✨ with Middleman, this is not the case with Eleventy. Configuring this is not my favorite part of web development, so I mostly wanted a build process that was as straightforward as possible. So, uh, no webpack. I opted to use Parcel (since I was already succesfully using it on a work project), but expect there's lots of cleanup and/or optimization I can do here. I may also try out Snowpack at some point in the future since I've heard good things.

Finally, actually deploying/publishing my Middleman blog had been a fairly wonky, almost embarrassing process<sup id="return-fn3"><a href="#fn3">3</a></sup> where I built the site locally and then used the command line to push the static output to my web server. Just wholesale copying over the whole directory. I did it infrequently enough that it always felt fraught and required several "notes to self." I knew there were other options, like hosting on S3 and having a pipeline based on merging into my git repo, but hadn't gotten beyond the research stage about how to do that (well, and [tweeting about it](https://twitter.com/messypixels/status/1065561900996616200) and soliciting help from my great pals).

As my redesign was nearly complete, I explored deploying the site using [Vercel](https://vercel.com/docs#deploy-an-existing-project) and damn if it isn't simple and great. Other than adding my domain name (and sorting out my mail servers), I've had to do zero customization there -- it just works. After I merge changes into my main branch on GitHub, the site is live in about a minute. Legit, I used to spend more time than that verifying my old command line process. 🙀

## Wrapping up 

There was a lot more involved in redesigning the site, tweaking Eleventy and using Nunjucks templating, but at this point in my process I had successfully migrated my content from Middleman to Eleventy. 🙌🏻 For the redesign, it's worth mentioning that I relied heavily on
[Nunjucks documentation](https://mozilla.github.io/nunjucks/), [11ty Recipes](https://11ty.recipes/) and Andy Bell's [Learn Eleventy From Scratch course](https://piccalil.li/course/learn-eleventy-from-scratch).
