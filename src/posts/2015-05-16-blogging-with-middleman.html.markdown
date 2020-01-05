---
title: Blogging with Middleman
date: 2015-05-16 21:40 EST
tags: ruby, rails, middleman
location: Baltimore
---

True story: I wrote my first lines of Ruby in February and used that wee bit of knowledge that to motivate myself to start this blog using a Ruby-on-Rails-based static site generator ([Middleman](https://middlemanapp.com/) FTW!) and used **that** experience to give a talk to the [Bmore on Rails](http://bmoreonrails.org/) meetup...46 days after I wrote those first few lines of Ruby.

Which is a long-winded way of saying, getting things running on Middleman---even in a Windows environment!---innit that hard. You can do this!

## First things first: WHY exactly would you do this
Static site generators are:

* Simple
* Fast
* Fun

###Simple
One of the nicest things you can say about a bit of tech is that it's "easy to use;" to me, this means both

1. Folks don't need special knowledge to use the thing
2. The thing doesn't get in the way of what you want to do

While I wouldn't go so far to say the static site generators I've experimented with meet criteria #1, the best of them---including Middleman---excel at #2.

I find a lot of tech things---including CMSes---lose sight of keeping things clean and simple while in pursuit of being easy to use and answering everyone's needs. So, in this instance, I've given up some bells and whistles to have simplicity...and, so far, I've no regrets.

###Fast
Middleman, out of the box, takes ERb or Haml and converts those templates and pages into static HTML to display online. This is different from dynamic and/or database-powered sites, like those powered by WordPress, which make database requests and generate layouts every time they load a page.

For example, when you loaded this page, there were server requests to grab the HTML, CSS, JavaScript and any images. The same page in a WordPress blog would do all of that, and the PHP would *also* issue several other requests for the template header, footer and sidebar and also hit up the database for LOTS of info like the blog name, URL, the post name, content and info. Depending on your Internet connection and the server I'm hosting my content on, this can be a slow process. Static HTML files, in comparison, are zippy. They're also less taxing for your web host and can be used in more basic hosting environments (including quite a few free ones).

###Fun
<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/yODVOeMxWBwBO?html5=true" width="480" height="241" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

This, of course, is a highly personal judgement call, but I've enjoyed both the complexity of digging into Middleman and a coding language I'm still learning, as well as the simplicity of writing up my posts in Markdown in either a text editor or, when I don't want to leave the browser, [Draft](http://draftin.com). Also, I've had the opportunity to focus on designing the site (my first personal project in a good long while) and writing the content; not finding, testing and updating widgets and plugins.

###Some Caveats
None of this, I should note, is meant to be a slam on PHP or WordPress. I'm using WordPress as my example simply because I know it so well---I started down the path to learning PHP by tearing apart and rebuilding default WordPress template files and I've created many WordPress sites for friends, clients and myself. Also, since WordPress is *the* most popular blogging system, I expect it's an example most folks would be familiar with.

Also, to be entirely fair, WordPress offers some things out of the box that I don't get with Middleman or its equivalents (Oh, yeah, [there are *lots* of static site generators out there](https://staticsitegenerators.net/).) There's no comments here (*yet*), no search (*yet*); most importantly, there's no GUI. One of the reasons I've promoted WordPress to so many clients is the ease of use for folks with little to no technical know how. The WordPress posting interface is similar enough to Microsoft Word that folks can handle creating posts and pages with little to no guidance.

A Middleman-based blog is better suited for someone with some dev know how (eg, you know how to get to the command line) or someone willing to jump in and learn some extra stuff along the way.

##So, you want to install Middleman
I'm assuming you already have Ruby on your system. I think this is generally true for folks using modern Macs, but for us Windows folks, there's a separate installation process to go through before you can run Middleman. Check out [RubyInstaller for Windows](http://rubyinstaller.org/) and its docs to get yourself sorted.
{: .note}

Don't know if you have Ruby installed? Type `ruby -v` at the command line. If Ruby is installed in your system, you should get a little message about which version of Ruby you're running.
{: .noteCntd}

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/PuWNMebKGIKNG?html5=true" width="480" height="270" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

Middleman is a Ruby gem, so to install it on your system, open the command line or terminal and type:

~~~bash
$ gem install middleman
~~~

This will go out and grab the files necessary to run Middleman. Once that's done, you can start your first Middleman project:

~~~bash
$ middleman init woot
~~~

Except instead of `woot`, type the name of your project (and, as a result, the directory the project will be stored in). You can check out what Middleman has created by typing

~~~bash
$ cd woot
~~~

To verify your Middleman install is functional, type

~~~bash
$ middleman s
~~~

Here, `s` is shorthand for server. This will start up a local server and give you a local URL to enter into your browser. If everything is golden, you should see this:

![Successful Middleman Install](/journal/2015-05-16-blogging-with-middleman/mm-running2.jpg)

Most of the files you want to muck about with are in the `source` directory; these are the files that will eventually be compiled into your static site. When you're looking at the site in dev using the localhost address, the files are being compiled on the fly (and, if you activate [live reload](https://middlemanapp.com/basics/development_cycle/#livereload), being updated and refreshed as you work on the files). To get to the static site files, first you have to build your project:

~~~bash
$ middleman build
~~~

Just like `middleman init` created your project files and the `source` directory you've been working in, the `build` command compiles those files and creates a `build` directory for your shiny static HTML files.

##Blogging
The default Middleman config is for creating sites of static HTML pages. If you want to keep a blog, you'd be well served to add in the `middleman-blog` gem. If you've already got Middleman up and running, this will be pretty familiar stuff.

Get the gem:

~~~bash
$ gem install middleman-blog
~~~

Start a blog project---note that you can do this inside an already existing Middleman project!

~~~bash
$ middleman init woot --template=blog
~~~

This will generate some default layouts and a sample article.

Fellow Windows users: You may see an error message here about missing time zone data. In order to create articles, Middleman needs to be able to add the date and time of their creation and, evidently, our systems don't have the file it relies upon to do this. The fix is super easy, though. Open up your project Gemfile and add the following:
{: .note}

~~~rb
# Fix for missing Windows timezone data
gem 'tzinfo-data', platforms: [:x64_mingw,:mingw, :mswin]
~~~

Then, back at the command line, run `bundle install` to add that gem to the project; boot up `middleman s` again and you should be in business. (If you want to know more about this time zone error, you can read [this GitHub thread about resolving the issue in Middleman Core](https://github.com/middleman/middleman/issues/1097).)
{: .noteCntd}

##That's It!

You now have a Middleman blog you can tweak to your heart's content, build locally and then drop the contents of your build folder onto a web host and admire.

A few other things worth pointing out:

* Sass and Middleman work together out of the box; you don't even have to type `sass --watch` in a Middleman project!
* Just because the output of Middleman is flat files doesn't mean your templates have to be full of repetitive code; check out the docs on partials for how to use and add partial views to your templates.
* A Middleman blog supports titles, dates and tags out of the box, but adding additional meta info is super easy. You may have noticed the location section on each of my articles. Getting this working was as simple as adding a "Location" to my article front matter, like so

~~~md
---
title: Blogging with Middleman
date: 2015-05-16 11:40 EST
tags: ruby, rails, middleman
location: Baltimore
---
~~~

To display that data in my article templates is also super easy:

~~~erb
<%= current_article.data.location %>
~~~

I'll document more about customizing Middleman as I develop this blog and use it on other projects, but hopefully this is enough to get some folks interested and rolling.

<hr />

As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). Unless you're just going to hassle me for being a Windows user.

<div class="embedWrapper giphy">
    <iframe src="//giphy.com/embed/DxGNe8DKWpHz2?html5=true" width="480" height="205" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

*[CMS]: Content Management System, like blogging software
*[CSS]: Cascading Stylesheets
*[ERb]: Ruby templating language
*[GUI]: graphical user interface
*[Haml]: HTML Abstraction Markup Language; it's a way to write more efficient HTML
*[HTML]: Hypertext Markup Language; a basic building block of web pages
*[Markdown]: A simple and lovely markup language
*[Ruby gem]: A Ruby library or plugin
*[Ruby on Rails]: popular Ruby framework
*[Ruby-on-Rails]: popular Ruby framework
*[Sass]: Syntastically Awesome Stylesheets, or, as the project site says, CSS with superpowers!
*[URL]: Uniform Resource Locator