---
title: Recent adventures in parsing HTML and GitHub Actions
summary:
tags: [storygraph, tumblr, api, github, github actions, javascript, json, build tools, learning]
date: 2026-03-11
location: Baltimore
comments: false
footnotes:
  - Brittle because this code, like many web scrapers, relies on class names in the page's HTML and other factors in the page layout.
  - The Slack is invite-only, so reach out to me if you would like to join. It's truly a marvelous place for community and networking.
  - Honestly, I may yet still try to do this via Vercel Functions if only because trying things in different ways is a fun way to go about learning a thing.
---

Back in 2022, I [switched from using Goodreads to Storygraph](/blog/2022/unfriending-fb-instagram/). At the time, Storygraph didn't have an API, so I wrote [a small bit of JavaScript](https://github.com/angeliquejw/dev-blog/blob/7e0aea63fc2ae330af78f5b10e1598c3fe9deda6/src/_data/books.js) to load [my currently reading page in Storygraph](https://app.thestorygraph.com/currently-reading/angeliquejw/) and gather some data from the page:
- Book title
- Author
- Cover photo
- Link to the book's page in Storygraph

I then used that data to display my current reads on my [/now](/now) page. Now, many years later, Storgraph **still** doesn't have an API (sad trombone: _womp womp_), but has started using Cloudflare, which broke my li'l web scraper. I had some time on my hands, so dug into what would restore my current reads list.

It turns out that my previous solution, which relied on `node-fetch`, was failing due to the Cloudflare CAPTCHA.

![Screenshot of Cloudflare CAPTCHA with a checkbox and the prompt "Verify you are human"](/assets/img/blog/2026/cloudflare-verification.png)

Once I sorted that this was the blocker, it became apparent that using Puppeteer was the way to go. I've used Puppeteer in a handful of jobs, but it previously felt like overkill for this task. In addition to Puppeteer, I also had to rely on the [StealthPlugin](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth), but the [underlying scraping Javascript](https://github.com/angeliquejw/dev-blog/blob/5befcc41e3721b5f538abe6897f10b4e8a6737ea/src/assets/scripts/bookList.js#L21), brittle though it may be,<sup id="return-fn1"><a href="#fn1">1</a></sup> is mostly unchanged from the 2022 version.

```js
	const bookData = await page.evaluate(() => {
		const bookPane = document.querySelectorAll(".read-books .book-pane-content");

		return Array.from(bookPane).map((book) => {
			const title = book
				.querySelector(".book-title-author-and-series a[href^='/books/']")
				.textContent.trim();
			const author = book
				.querySelector(".book-title-author-and-series a[href^='/authors/']")
				.textContent.trim();
			const img = book.querySelector(".book-cover img").src;
			const url = book.querySelector(".book-cover a").href;

			return { title, author, img, url };
		});
	});
```
Storygraph uses Tailwind for its frontend code and, as a result, the list of books is repeated on the page to make its layout responsive (my frontend-loving heart *really* hates this 💔). This means each book is returned twice, so I create a new Set object to eliminate those duplicates.

```js
const books = [...new Set(bookData.map(JSON.stringify))].map(JSON.parse);
```

I could also modify the `bookPane` selector based on the Tailwind classes, but that makes some brittle code seem _especially_ brittle, so I opt to handle the dupes instead.

The result of all this scraping is saved to a [JSON file](https://github.com/angeliquejw/dev-blog/blob/main/src/_data/reading.json), which I use as as an [11ty global data file](https://www.11ty.dev/docs/data-global/) in [this Nunjucks template](https://github.com/angeliquejw/dev-blog/blob/main/src/_includes/reads.njk).

The script for grabbing my most recent reads isn't automated, so I mainly just run it whenever I push new content or make other blog tweaks -- which has been fine, but running the script on a schedule would be a clear improvement.

Which leads me to my next adventure: In December, I had started taking pictures of the sky to promote a sense of being present. I eventually decided I wanted to publish them somewhere and opted for Tumblr as a straightforward solution. I had [a fairly ignored Tumblr account](https://messypixels.tumblr.com/), which I cleared out, assigned a new theme to, and started uploading photos, including backdating the ones from December. {: .drop-cap}

Tumblr solved for getting the photos off my phone and published, but having recently done the web scraping dance with Storygraph, I also saw this as an opportunity to interact with **a service that does have an [API](https://www.tumblr.com/docs/en/api/v2)** and bringing that data onto this site.

Little did I know, I was about to repeat some elements of my adventures in HTML parsing, even with an API in place. 🤯

Like my Storygraph script, I planned on tackling this through a Javascript file and, helpfully, Tumblr has a [JS client library for its API](https://tumblr.github.io/tumblr.js/). Getting that set up and authenticating were no fuss. The response from the API has, as you might expect, a lotta data, but I eventually decided I only cared about a few pieces of info:
- my image
- published date

While those were the pieces of data I wanted to *display*, I also wanted a few more things to help with identifying posts and general troubleshooting:
- the link to the published post
- the post ID (for a unique identifier)
- the post status (for later troubleshooting, should I start to create draft posts)

The surprise twist in all this is that all of those pieces of data were easily accessible -- **_except_ for the image which was my primary goal**. The image URL is not available directly from the API; it's embedded in a response item called `body`, which includes a chunk of HTML, including the image (see [example](https://github.com/angeliquejw/dev-blog/blob/5befcc41e3721b5f538abe6897f10b4e8a6737ea/skies/temp-sky.json#L8)).

As a result, I had to construct a tiny regular expression to find the `img` element and extract the URL.

```js
 const regex = /img\ssrc="(.*?)"/;
```

As with the Storygraph data, I grabbed the bits I cared about and stored them as [JSON](https://github.com/angeliquejw/dev-blog/blob/main/src/_data/sky.json) to use as global data in a [Nunjucks template](https://github.com/angeliquejw/dev-blog/blob/main/src/bits/the-sky.njk). However, since I was updating these photos fairly regularly -- definitely faster than I read a book -- relying on a manual upload process felt less suitable.

While I've worn many hats in my career, DevOps really hasn't been core to my contributions, so I only had a general sense of how to proceed and not a lot of confidence. I outlined what I had currently done and where I wanted to go and shared my summary in the [Women in Technology Slack group](https://witchat.github.io/)<sup id="return-fn2"><a href="#fn2">2</a></sup>, where folx were able to quickly validate that [GitHub Actions](https://docs.github.com/en/actions) was a good choice for what I was trying to do. (Since this site builds via [Vercel](https://vercel.com/), I also considered using [Vercel Functions](https://vercel.com/docs/functions), but found that GitHub Actions had more relevant documentation and also seemed more beneficial career-wise).<sup id="return-fn3"><a href="#fn3">3</a></sup>

My goals with the GitHub Actions [workflow](https://docs.github.com/en/actions/how-tos/write-workflows) were:
1. Using my script, check Tumblr for new photos and, if new photos are found, update the existing JSON file.
2. If the JSON was updated, create a commit with those new changes.

From there, the [standard Vercel 11ty build and deploy process](https://vercel.com/kb/guide/deploying-eleventy-with-vercel) would take over. ✨

In order to run my script independent of my overall 11ty site, I first needed to disentagle its packages. My script uses a few packages (like the previously mentioned Tumblr JS API library and `dotenv` to get my Tumblr API credentials), and I was originally referencing those in the main site `package.json`. I updated things so the script was in its [own directory](https://github.com/angeliquejw/dev-blog/tree/main/skies) and has its own [`package.json`](https://github.com/angeliquejw/dev-blog/blob/main/skies/package.json).

With that in place, I could set in motion a few steps in my GitHub Action to complete part one of my plan:

```yml
{% raw %}
name: Scheduled check for new sky photo
on:
  # Run the workflow manually from the Actions tab
  workflow_dispatch:
jobs:
  update-sky-photos:
      runs-on: ubuntu-latest
      steps:
        - name: Check out repo
          uses: actions/checkout@v6
        - name: Install deps
          uses: bahmutov/npm-install@v1
          with:
            working-directory: skies
            useLockFile: false
        - name: Run script
          id: run-script
          working-directory: skies
          env:
              TUMBLR_BLOG: <point to GH secrets>
              TUMBLR_CONSUMER_KEY: <point to GH secrets>
              TUMBLR_SECRET_KEY: <point to GH secrets>
              TUMBLR_OATH_TOKEN: <point to GH secrets>
              TUMBLR_OATH_TOKEN_SECRET: <point to GH secrets>
          run: node skies.js
        - name: Check output
          run: echo "Missing photos -> ${{ steps.run-script.outputs.missing-photos }}"
{% endraw %}
```

The last `echo` provides an output capturing the result of running the script that's helpful for debugging _and_ will be used in the next step: figuring out whether there are changes to commit and, if there are, making a commit. For that last bit, I'm relying on an existing GitHub Action [`stefanzweifel/git-auto-commit-action`](https://github.com/stefanzweifel/git-auto-commit-action). And, as noted, the following steps also depend on if the `missing-photos` output is not zero.

```yml
        - name: Copy JSON file
          if: steps.run-script.outputs.missing-photos > 0
          run: cp skies/temp-sky.json src/_data/sky.json
        - name: Commit changes
          uses: stefanzweifel/git-auto-commit-action@v4
          if: steps.run-script.outputs.missing-photos > 0
          with:
            commit_message: "Automagically add latest sky photos"
            commit_user_name: "Update Skies GH Action"
```
Combined, this took several goes of running my workflow manually and debugging bits as I wrapped my head around the YML expectations of a workflow file. I had my first successful [run](https://github.com/angeliquejw/dev-blog/actions) and [commit](https://github.com/angeliquejw/dev-blog/commits/main/) after about an hour of reading docs and mucking about. I had caused some of my own headaches because I had conceived of the workflow as having two jobs (check for new data, commit new data) and spent most of my early attempts trying to get things to work that way. The current version is a single job and has worked just fine, even if it doesn't map to my original mental model of things.

Overall, this was a fun diversion, and I'm likely to take the next steps to automate the Storygraph script, too (albeit on a different schedule). You can see the result from both of these things on my [`/now` page](/now/), which includes my current reads and my most recent sky photo, plus [this new page](/bits/the-sky) which has a dated list of all of the photos.
