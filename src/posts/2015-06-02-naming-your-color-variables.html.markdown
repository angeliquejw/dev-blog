---
title: Naming Your Color Variables
date: 2015-06-02 13:43 EST
location: Detroit
tags: sass, variables, colors
---
Using variables for colors is awesome; naming those variables can be&hellip;complicated. I've worked through a few different methodologies and wanted to share a bit about what I've learned along the way.

<div class="embedWrapper giphy">
<iframe src="//giphy.com/embed/LmXk21sZShSa4?html5=true" width="480" height="259" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

Need an into to *WHY* colors and Sass are awesome? I wrote about this and gave some examples in [a previous post](http://angeliqueweger.com/journal/2015/05/getting-sassy-with-variables-and-colors/).
{: .note}

##Why Name Colors
Regardless of what system you use, the goal is usually the same: To make it easier to remember and manipulate the main colors in your site's palette. When I was just using straight CSS, that usually meant doing something like this at the top of my stylesheet:

~~~css
/*
=COLOR PALETTE
- dark grey #333
- grey #666
- blue #00c9ff
*/
~~~

Without a master colors list like this, your color variations can easily get out of hand. This goes extra for if you're just working directly from a mockup and don't have a brand or project file to refer to. I once received a mockup that had 14 different variations on blue and grey; by taking the time to identify and list the colors, I was able to actually cut our palette down to a more reasonable 8 colors. This both makes us more intentional about how we're using color and simplifies our code, which makes me happy.

<div class="embedWrapper">
<p data-height="400" data-theme-id="15346" data-slug-hash="wagBMq" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/wagBMq/'>wagBMq</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

Once you have your palette, whether it has 8, 14 or more colors, you have to figure out how you're going to refer to them.

###The CSS Way
Here, in general, you don't have a lot of choices. Mainly, you have to decide what kind of color notation you'll use:
* Hexadecimal <code>#c0c0c0</code>
* HSL <code>hsl(0, 0%, 75%)</code>
* RGB <code>rgb(192,192,192)</code>
* keywords <code>silver</code>

The rest of my examples will use hexadecimal notation, but HSL and RGB are also valid choices; while using keywords feels easy, the implementation of those colors can vary by browsers and, therefore, isn't recommended beyond "black" or "white."

~~~css
.myClass {
    background-color:#00c9ff;
}
.myClass a {
    color:#666;
}
.myClass a:hover {
    color:#333;
}
~~~

This is familiar and, no doubt, works. However, I found I often had to refer back to my color palette to keep straight which were the light and dark variations.

###The Sass way
Sass allows us to use variables to make these color codes easier to remember and use. There are several common ways of naming these variables.

####Color Names
Using your own creativity or leaning on [Name That Color](http://chir.ag/projects/name-that-color/#00ACF1), you can assign recognizable names to the color variables, like so:

~~~scss
//COLOR PALETTE
$color-greydk: #333;
$color-grey: #666;
$color-blue: #00c9ff;

.myClass {
    background-color:$color-blue;
    a {
        color:$color-grey;
        &:hover {
            color:$color-greydk;
        }
    }
}
~~~

This method can be frustrating when a color needs to be replaced entirely (e.g., the color you've named `$color-bluedk` now needs to be `#ff69b4` and you're stuck with either replacing the hex and having a variable name that now makes no sense (hint: don't do this) or replacing all instances of `$color-bluedk` with a new variable like `$color-hotpink`).

As in the example above, I opt to prefix my color names with `color-` because this makes all my color variables show up in my text editor's autocomplete feature.
{: .note }

####Functional Names
One way of avoiding this switcheroo is to instead name things based on the function of the color, like so:

~~~scss
//COLOR PALETTE
$color-background: #00c9ff;
$color-link-hover: #333;
$color-link: #666;

.myClass {
    background-color:$color-background;
    a {
        color:$color-link;
        &:hover {
            color:$color-link-hover;
        }
    }
}
~~~

While wordy, this feels like a very clear way to organize things and easy for others to pick up on. And, if you have to change any of the colors, the function stays the same&hellip;so, problem solved? Unfortunately, no. The moment you find yourself wanting to use one of these colors in a different situation, you'll see how this system also has its faults:

~~~scss
.myClass {
    background-color:$color-background;
    border-color:$color-link; // WUT IS HAPPENING
    a {
        color:$color-text;
        &:hover {
            color:$color-link-hover;
        }
    }
}
~~~

This clear system no longer makes sense. There's gotta be a better way, right?

####The Hybrid Naming System
By combining the color and functional naming systems, you can avoid the problems of both:

~~~scss
//COLOR PALETTE
$greydk: #333;
$grey: #666;
$blue: #00c9ff;

//FUNCTIONAL COLORS
$color-background: $blue;
$color-border: $grey;
$color-link-hover: $greydk;
$color-link: $grey;

.myClass {
    background-color:$color-background;
    border-color:$color-border; // SWEET!
    a {
        color:$color-link;
        &:hover {
            color:$color-link-hover;
        }
    }
}
~~~

Now, if your blue gets swapped for pink, you only have to create a new variable and update the functional color variables that rely on it. And, when you need to use a color in a new way, you just create a new variable. So&hellip;problem solved?

Eh, for some, I'd say. While this seems like the holy grail, in practice, I actually don't use this system for a few reasons:

1. When I work on simple sites, like this one, there really aren't that many color variables to keep track of and I find that color name variables work just fine for me.
2. When I work on large, complex sites, I find color names to still be more memorable than multiple versions of those functional names (e.g., `$color-light-border` to go on my `$color-dark-background` versus `$color-dark-border` for `$color-light-background`).
3. When working in teams, folks are guaranteed to always use color name variables correctly; not so with functional variables.

Overall, I just don't feel the benefits of functional naming are there for me. And the one downside to color name variables (having to replace a variable across all my files) is both uncommon in my projects and just not that much of a hassle with find-and-replace functions.

Also, a huge caveat here: Our brains just work differently, people. I know some folks struggle with keeping their `$color-midnight-blue` separate from their `$color-navy-blue`. If this sounds like you, the functional or hybrid systems may, in fact, be more efficient for your workflow.

### There's always an exception
Despite my feeling that variables based on function are an overcomplicated system, there's one time when I rely on them and absolutely appreciate them:  theming. If you're creating a set of styles and templates that you'll want to adapt in different color palettes (e.g., seasonal or holiday themes for your blog or a white-label app that you'll want to add brand colors to), functional labels will likely save you several project hours.

## Other tips for dealing with color variables

### Black & White in Variables

[Some folks](http://createstopbecreative.com/2015/05/06/sass-stop-defining-useless-color-variables/) get bent out of shape about defining black and white as variables in Sass:

> 1. It’s quicker to type #FFF or #000 instead of $White or $Black.
> 2. There is never a time where you will update the variables $White or $Black to be anything other then #FFF or #000. If you do update these to be anything else, then you clearly are not writing semantic code.
> 
> With these two truths being the case, then I see absolutely no reason to define them.
> <cite>[Jono Herrington](http://createstopbecreative.com/2015/05/06/sass-stop-defining-useless-color-variables/)</cite>

Personally, I still do this because the second "truth" innit even remarkably true for me. I often use shades of black and white in place of the true colors (because they're both a bit unnatural and harsh; [learn more](http://ianstormtaylor.com/design-tip-never-use-black/)). However, I am a bit moved by the semantic argument and have opted to name my variables `$color-offblack` and `$color-offwhite` in the hopes this will make my code and logic clearer to other people working on projects with me (i.e., they won't assume `$color-offblack` means `#000`).

<div class="embedWrapper">
<p data-height="266" data-theme-id="15346" data-slug-hash="zGNEYv" data-default-tab="result" data-user="angeliquejw" class='codepen'>See the Pen <a href='http://codepen.io/angeliquejw/pen/zGNEYv/'>Palette Viewer & Tint Generator v2.0</a> by Angelique (<a href='http://codepen.io/angeliquejw'>@angeliquejw</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>

### When to create a variable
How do you decide when to hard code a color and when to create a variable? Dan Denney asked this question via Twitter and [posted the responses](http://dandenney.com/posts/front-end-dev/sass-color-variable-pop-quiz), which makes for interesting reading and also provides more info about how different folks name their variables. For me, the answer used to be that I'd create a variable around the second or third use of a color. Today, it's more likely that I'll create a variable on the first use and, if the color happens to only be used in one spot, use that as an excuse to evaluate how necessary that color is. Using variables consistently throughout my project forces me to rely on my palette (or variations thereof) and not make up new colors on the spot, which I also feel is a good practice.

###Plan for sloppiness
I work on a lot of projects that involve many, many shades of grey (see earlier example), and I remain wildly inconsistent about whether I type gray or grey in any given instance. While this is something I always try to clean up before a major push goes to production, in the regular writing of code, I don't really want to be slowed down because my compiler threw an error because `$color-grey` doesn't exist but `$color-gray` does. Simple solution? Decide on one implementation of the spelling of grey and make variables to cover up my sloppiness:

~~~scss
$color-grey:#bbb;
$color-greyli:#ddd;
$color-greydk:#333;
$color-gray: $color-grey;
$color-grayli: $color-greyli;
$color-graydk: $color-greydk;
~~~

Your personal hang up might be forgetting if you named a color purple or violet. Whatever it is, you can build in a variable to CYA (and, of course, do some clean up before going to production with your styles).

<hr />

I hope this has provided some food for thought about how to name your color variables. As always, feel free to [send comments to me via Twitter](https://twitter.com/intent/tweet?screen_name=messypixels). Got a better solution? I'd love to hear all about it!

*[CSS]: Cascading Stylesheets
*[CYA]: Cover Yr Arse
*[Sass]: Syntastically Awesome Stylesheets, or, as the project site says, CSS with superpowers!

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
