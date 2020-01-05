---
title: Improving Your Windows Command Prompt
date: 2015-07-16
location: Baltimore
tags: windows, command line, command prompt, terminal, cmder, cygwin, powershell
---

When I started using Git and later learning Ruby, the command line became a place I hung out regularly. Being a Windows user, there were some early frustrations because many of the commands referred to in tutorials and walkthroughs weren't available to me, e.g. `pwd`, `touch`, `sudo`. Since OSX, the Apple OS has been built on top of Unix, Mac users are able to open up Terminal and use the same commands as Unix users, but the same is not true of a basic Windows install.

![Denied](/journal/2015-07-16-improving-your-windows-command-prompt/no-dice.png)

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/hQY7rPlW3Vc3K?html5=true" width="480" height="281" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

I overcame those frustrations in a variety of ways, which I'll outline below.

I'm using and writing about Windows 7, and specifics of this post may or may not be relevant to earlier and later versions of the Windows OS.
{: .note}

##Google that shit
My first instinct was to ask the Google bot this very obvious question:

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/FRRK3vMJ4no52?html5=true" width="480" height="269" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

This will give you [some](http://www.covingtoninnovations.com/mc/winforunix.html) [glossaries](http://www.lemoda.net/windows/windows2unix/windows2unix.html) of Windows equivalents to Unix commands. Which works fairly well, especially if you're not on the command line a lot or relying on tutorials and docs that assume a *nix-based system.

##Switch to PowerShell
Starting with Windows 7, there's a more powerful option to the default command prompt: PowerShell. PowerShell exposes some Windows admin stuff that you can't get to via the command prompt and also includes some of the *nix shell commands, like `pwd` and `ls`.

![PWD works in PowerShell](/journal/2015-07-16-improving-your-windows-command-prompt/ps-pwd-yay.png)

Of course, I did say *some*&hellip;

![Touch doesn't work in PowerShell](/journal/2015-07-16-improving-your-windows-command-prompt/ps-touch-boo.png)

I actually discovered PowerShell after I already dove into some other solutions, so I haven't spent a lot of time using it. If you think PowerShell may be for you or just want to learn more, How to Geek has a good post outlining [how PowerShell differs from the command prompt](http://www.howtogeek.com/163127/how-powershell-differs-from-the-windows-command-prompt/) and a [GeekSchool series devoted to PowerShell](http://www.howtogeek.com/137803/geek-school-learn-how-to-automate-windows-with-powershell/).

##Install an alternative command line
Give up on the Windows default and go rogue with an app like [Cygwin](https://www.cygwin.com/) or [Cmder](http://gooseberrycreative.com/cmder/).

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/Aq6GD5Sa6uuuk?html5=true" width="480" height="297" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

###Cygwin
Cygwin is free and open source software that provides a command-line shell that is compatible with *nix commands. I used this solution first as it was both recommended and described very well on Lifehacker:

* [How can I make the Windows command prompt better?](http://lifehacker.com/5834755/how-can-i-make-the-windows-command-prompt-better)
* [Introduction to Cygwin](http://lifehacker.com/179514/geek-to-live--introduction-to-cygwin-part-i)

As noted by those articles, it's also worthwhile to install an alternate terminal as Cygwin replaces commands but doesn't actually improve the interface of the windows command prompt. [Mintty](https://code.google.com/p/mintty/) and [Console](http://sourceforge.net/projects/console/) are two popular options and Lifehacker also has articles about them, too.

If you're using Cygwin, you can actually install Mintty as a package. Cygwin has [a lot of packages](https://cygwin.com/packages/package_list.html), which extend Cygwin in a variety of ways. This is awesome but, to start, it's also a bit overwhelming. Also, the way to install new packages is a bit wonky (you open the Cygwin install software, connect to servers and select packages).

Definitely definitely *definitely* read all the way through a guide to installing Cygwin before jumping in. Things that seem innocuous (like choosing an [install directory](https://cygwin.com/faq.html#faq.setup.c)) actually have import, so you want to know that in advance.

###Cmder
After abandoning the command line for awhile, I had reason to jump back in when I went to [Bmore on Rails](http://bmoreonrails.org) workshop for women. I realized my Cygwin install was out of date at that time and it felt like a pain to get everything up and running properly again, so I decided to look for a command prompt replacement that didn't have the overhead and wonkiness of Cygwin.

It's worth noting here that I'm sure Cygwin does things Cmder does not; in fact, it's this sense that Cygwin is a bit overpowered and complicated for my needs that, to me, is a downside.
{: .note}

Cmder is built on top of [ConEmu](http://conemu.github.io/) and is a quick and painless install (I recommend the full vs the mini install, as it gets you Git, too). Compared to Cygwin, it is much easier to get up and running, with fewer complications and choices. The full version of Cmder gives you all Unix commands, including `pwd` and `touch`.

![Cmder is rad](/journal/2015-07-16-improving-your-windows-command-prompt/cmder-yay.png)

After all these changes, you should have a fairly awesome Windows command line that won't frustrate you, won't let you down and will, in fact, empower you to code better.

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/137EaR4vAOCn1S?html5=true" width="480" height="270" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

I'll be back on Monday with even more ways to improve your Windows command prompt experience!

<hr />

As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). I'd love to know if you use an alternative program for the Windows command prompt and what your favorite tips are for improving your command prompt!