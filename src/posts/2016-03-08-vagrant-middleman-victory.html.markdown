---
title: Vagrant + Middleman = Victory
date: 2016-03-08 15:00 PST
location: San Francisco
tags: middleman, vagrant, react, ruby, windows
---

I finally conquered a technical challenge that had been stumping me for awhile. This blog runs on Middleman, which requires Ruby and a slew of other things that aren't necessary in my work dev environment (i.e., the laptop I usually take with me when I travel). This is clearly something I didn't think through when starting up this blog—clearly evidenced by the "location" metadata I set up and have filled in with "Baltimore" on all but one blog post. However, if you're reading this post and seeing "San Francisco" as my current location I can now take this show on the road, woo!

I'm currently attending [Fluent](conferences.oreilly.com/fluent/javascript-html-us/) (thanks, O'Reilly and Craigslist for your awesome scholarship!). The first half of the conference is hands-on workshops, while the second half is standard keynotes and presentations. Most of the workshops weren't relevant to the stack we use at work, but I was still interested to learn something new, so I spent this morning spinning up my first React project. Because I didn't want to muck up my work environment or frustrate myself by developing in Windows when the presenter anticipated an audience of Mac users, I got Vagrant up and running on my work machine (admittedly, with some of its own headaches).

While I have no idea if or when I'll use the React knowledge I gained this morning, I put my newfound experience with Vagrant to immediate use by creating a new Vagrant box for myself that allows me to work on and build my Middleman blog when I'm traveling with my work laptop. This is ridiculously exciting to me.

Rough steps of how I've accomplished this:

1.  Install VirtualBox and Vagrant per the pretty good ["Getting Started" guide](https://www.vagrantup.com/docs/getting-started/) provided by Vagrant.
2.  Install Git. (Because my team uses TFS for version control, I actually have never needed this on my work machine.)
3.  Clone my existing GitHub repo of this site.
4.  In my `devj` directory, `vagrant init hashicorp/precise64` to create the necessary Vagrant files.
5.  `vagrant init` creates a `Vagrantfile` but I replaced that with one created for Middleman projects and [shared by Ricardo Rivas](https://github.com/richistron/vagrant-middleman). NOTE: I updated line 15 to reference `hashicorp/precise64`.
6.  `vagrant up` to load up my Vagrant box and `vagrant ssh` to dive into it.
7.  Once I was on the Vagrant machine, I switched over to my synced folder by typing `cd /vagrant`. Then I had to `bundle install` to get everything from my project's `Gemfile` up and running on the Vagrant box. After that ran, I typed `middleman s` and was in business!

LiveReload still isn't working as expected, but, overall, I'm thrilled to finally have the capacity to update my blog with Vagrant and grateful to my experiences at Fluent for motivating me to finally tackle this.

* * *

Got Vagrant tips or woes? As always, I encourage you to continue this conversation [via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels).