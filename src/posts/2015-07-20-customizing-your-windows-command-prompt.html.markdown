---
title: Customizing Your Windows Command Prompt
date: 2015-07-20
location: Baltimore
tags: windows, command line, command prompt, terminal, cmder, solarized
---

I wrote previously about how to [set up your Windows command prompt to work better](/journal/2015/07/improving-your-windows-command-prompt/) and wanted to add to that ways I've customized my interface of choice ([Cmder](http://gooseberrycreative.com/cmder/) FTW) to make my command line more efficient and enjoyable for me to use.

##Changing the appearance
First, as with all things&mdash;including this blog!&mdash;I get things displaying using [Solarized Dark](http://observer.com/2015/02/meet-the-man-behind-solarized-the-most-important-color-scheme-in-computer-history/). Solarized is color theme for text editors and it's my theme of choice.

![Solarized for Cmder](/journal/2015-07-20-customizing-your-windows-command-prompt/solarized.png)

##Adding relevant aliases
Aliases are just bits of shorthand for code I use frequently. By creating aliases, I can make my coding faster. You can find and edit your Cmder alias file in the `config` directory inside your `cmder` directory (for me, this is `C:\cmdr\config`). One of the aliases I've added is

~~~
subl=C:/PROGRA~1/SUBLIM~1/sublime_text.exe $1
~~~

This works for me because the path to the Sublime Text program is `C:\Program Files\Sublime Text 2`; if your program is in a different directory/location you may need to update this accordingly.

{: .note}
You'll see the alias above uses shortened names of the directories "Program Files" and "Sublime Text." This is a default Windows behavior for directories that are more than seven characters or have a space in their name. Need to figure out what the shortened name of a directory is? Open up Cmder and type
`dir /x "C:/" `
This will list all the files in that directory by their shorthand names! To find the shorthand for the Sublime Text directory, you would then type 
`dir /x "C:/Program Files/" `
{: .noteCntd}

Now, when I type `subl newentry.md` in Cmder, Sublime Text opens up with a Markdown file titled "newentry." If `newentry.md` doesn't already exist, this command creates the file (but it's not saved until I save within Sublime Text). Essentially, I can easily open files to edit them *and* combine creating and opening a file into one action.

I also like to make navigating backwards out of directories easier with aliases.

~~~
..=cd ..
...=cd ../../../
....=cd ../../../../
.....=cd ../../../../
.4=cd ../../../../
.5=cd ../../../../..
~~~

Now, typing `.5` will back me up by 5 directories and `..` gets me into the parent directory.

If you use Git a lot, I also recommend checking out Phil Haack's list of [Git Aliases](http://haacked.com/archive/2014/07/28/github-flow-aliases/).

##Sort out the default environment
You can also use Cmder to run PowerShell (which might be awesome), but it's not the default behavior I want, and I've seen this particular thing confound people when commands that work in the Cmder command prompt replacement don't work in the Cmder PowerShell environment (e.g., `git` or `touch`).

![Cmder is confounding](/journal/2015-07-20-customizing-your-windows-command-prompt/cmder-confounded.png)

You can avoid this behavior by opening up your settings (right click on the window title or type `Win+Alt+P` and specifying a named task under "Startup."

![Cmder settings](/journal/2015-07-20-customizing-your-windows-command-prompt/cmder-cmd.png)

<hr />

As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). I'd love to know what your favorite tips are for improving your command prompt or what aliases you've added!