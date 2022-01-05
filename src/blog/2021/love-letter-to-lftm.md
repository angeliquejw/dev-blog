---
title: A love letter to LFTM
summary: Details of the note-taking and productivity system I've been using for the last 3 years, including tweaks I've made along the way.
tags: [lftm, productivity, resources, ruby]
date: 2021-09-17
location: Baltimore
comments: I love hearing about the systems that help folx be productive and would be interested in any feedback about my changes to LFTM or my scripts.
footnotes:
  - For me. It works for me. YMMV.
  - There's some detail included in this file, but Meaghan's Mondaze sessions are free, and I really encourage you to check them out and <a href="https://www.meaghanwagner.com/work-with-me/">learn from her directly</a>!
  - These scripts work for me, but they probably could be refined or improved. Open to suggestions about this and happy to receive comments or PRs via <a href="https://github.com/angeliquejw/lftm-template">GitHub</a>.
  - I believe I snagged this idea from <a href="https://www.michellemartir.com/">Michelle</a> when we were iterating on our digital standups at Fractured Atlas.
  - Learn more about <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates">GitHub repository templates</a>.
---

Exactly three years ago, I made my own private copy of [Coraline](https://twitter.com/coralineada/)'s [lftm](https://github.com/CoralineAda/lftm) and pushed my first commit. Unbelievably, I have kept it up, almost every workday, since then.

LFTM stands for low-friction task management system, and I've [mentioned it before here](/blog/2021/remote-lessons/).

## LFTM introduction

The README in Coraline's repo really spells out the simplicity of this system:

> The system consists of a number of folders, each containing a specific kind of text file. {: .no-cite }

It's a repo with folders and files. There's some structure provided by the folders, but that's it.

**And, hot damn, if it doesn't just work.**<sup id="return-fn1"><a href="#fn1">1</a></sup> Coraline outlines the benefits she's experienced like so:

> - Answers the question of 'what do I do next?', which is the ultimate productivity killer.
> - Keeps my working memory uncluttered.
> - Keeps me from um'ing during my daily standups. I always know what I worked on yesterday.
> - Is a handy record of accomplishments that I can reference when it's time for my review, I want to ask for a raise, or I'm updating my resume.
> - Provides a reminder that I do, in fact, get things done and that I don't, in fact, suck at my job.
>
>   {: .no-cite }

Also, because it's _text_, it's so very searchable. Because it's _local_ text, searching is also fast and customizable --- I can search using the tools in my text editor or the command line.

## My mods

I've made some changes to the LFTM system over my years of use. Right away, I converted the text files to Markdown because I appreciated the _just enough_ formatting it provides, including some syntax highlighting in my editor for things like headings and checkboxes.

![Screenshot of Markdown journal entry in VS Code editor](/assets/img/blog/2021/lftm-md.png)

I also updated things like the 1:1 and meeting notes to be in reverse chronological order; this way, whenever I open a file, the most recent information is at the top.

I created my own reusable templates for the [weekly journal](https://github.com/angeliquejw/lftm-template/blob/release/journal/00000000.md) and [projects](https://github.com/angeliquejw/lftm-template/tree/release/projects/_template). The project template is specifically inspired by the questions and prompts in [Sarah Doody](https://twitter.com/sarahdoody)'s post on [documenting UX work](https://www.invisionapp.com/inside-design/document-your-ux-work/).

Coraline's system includes [prompts for a weekly retrospective](https://github.com/CoralineAda/lftm/blob/release/journals/work/retrospectives.txt) which I found helpful, but was inconsistent in using. This summer, I attended a handful of [Meaghan Warner](https://www.meaghanwagner.com/about/)'s [Mondaze Motivation calls](https://www.meaghanwagner.com/work-with-me/) and discovered I was _far more_ successful and doing some Monday morning reflection and planning than I was at accomplishing the same things on a Friday afternoon. As a result, I've incorporated Meaghan's prompts into my own [weekly kickoff template](https://github.com/angeliquejw/lftm-template/blob/release/journal/week-kickoff.md).<sup id="return-fn2"><a href="#fn2">2</a></sup>

Finally, I added a wee bit of automation to the process, including a [Ruby script to create a weekly template](https://github.com/angeliquejw/lftm-template/blob/release/today-script/new-week.rb) with the current date and [another that uses the Google Calendar API](https://github.com/angeliquejw/lftm-template/blob/release/today-script/today.rb) to list yesterday's and today's calendar events.<sup id="return-fn3"><a href="#fn3">3</a></sup>

## How I LFTM

Every Monday, I start my week by running the [`new-week` script](https://github.com/angeliquejw/lftm-template/blob/release/today-script/new-week.rb) and spend 20-30 minutes reflecting on the previous week and planning for the current one. (I haven't really been saving individual copies of the [kickoff file](https://github.com/angeliquejw/lftm-template/blob/release/journal/week-kickoff.md), though its iterations exist in git history. I may change how I'm doing this in the future. 🤷🏻‍♀️)

Each work day morning, I run the [`today` script](https://github.com/angeliquejw/lftm-template/blob/release/today-script/today.rb). I copy the calendar events from the generated `today.md` file over to the current day, which gives me an opportunity to review what's ahead of me.

I keep the weekly file open in my text editor throughout the day, marking off meetings and tasks as I move through them. I use a system inspired by [bullet journaling](https://bulletjournal.com/pages/learn), where meetings are identified by parentheses and tasks use square brackets:<sup id="return-fn4"><a href="#fn4">4</a></sup>

```md
- (x) Past event
- ( ) Upcoming event
- [ ] Incomplete task
- [x] Completed task
```

Meeting notes get added to their respective files, with action items regularly copied over to the weekly journal. While I have shared 1:1 documents with each of my direct reports, the notes in my LFTM folder allow me to keep private notes, too, including things like favorite treats or pets' names.

Since I have a pretty [clicky keyboard](/uses/), I often take meeting notes by hand and then, in the space between meetings, figure out what's helpful to move into an LFTM doc. While this seems like an unnecessary duplication of effort, I find it's helpful to separate my note-taking activity from organizing those notes or establishing what I'll want to remember later.

## Benefits

While I've adequately explained how I add to and track things in LFTM, where the system really shines is when I almost very nearly remember something...and then search and _voilà!_ have the information I'm looking for immediately at hand. Similarly, I also use my LFTM notes to review things --- before 1:1s, before reviews, before meetings. In general, the system makes me feel like I always have the proper context for something and rarely am the person in a meeting who can't remember our goals or action items.

Combined with the Monday kickoff, the system allows me to organize tasks, take notes _and_ to reflect on things. Together, it lets me be a person who has her shit together and gets shit done.

## Real talk

I've always been an avid note taker, so I shouldn't be surprised that this system works for me. Mostly it harnesses something I do automatically and make it more meaningful and long lasting.

Also, it allows me to take notes and create tasks where I already am --- in a text editor. There's no app version of this system, so if I'm not immediately in front of my laptop, I absolutely have to rely on a secondary system (like a notebook) until such time as I'm back at my computer. I know for many folx this would be a dealbreaker, but as someone who works from home _and_ uses this system mainly for work tasks, it's actually perfect.

While there isn't an app, by saving my notes to a private repo, I do have a cloud backup of my notes and am able to use them on multiple machines. Again, for me, this is enough.

Finally, as I've said before, I mostly use this system for work tasks--both my day job and teaching. I haven't been as successful using it for personal tasks, which end up mostly living on my calendar, or personal reflection, which I still do mostly by hand. Sometimes I even give into the lure of fancier bullet journaling.

![Grid paper notebook with handwritten calendar for the week of January 15-21](/assets/img/blog/2021/bujo-2018.jpeg)

While I've started up a pen-and-paper (and markers! and washi tape! and stamps!) bullet journal on several occasions, I've never kept it going longer than three months and _certainly_ not three years. I hope the longevity of me maintaining and getting benefit out of LFTM inspires you to check it out to, if organization is something you struggle with.

I've made a fork of Coraline's template, which you can use to [further explore my changes](https://github.com/angeliquejw/lftm-template) or can click "Use This Template" to create a version for your own use.<sup id="return-fn5"><a href="#fn5">5</a></sup>
