# Responsive Design

The responsive design paradigm is all about using media queries (and other tricks which are discussed more in the homework) in order to make pages intelligently resize to fit different devices. The idea is that rather than building a specific version of a site for mobile, tablet, and desktop, you build a site that would look good on a device of **any** width. This involves some strategic design shifts at different screen widths (known as "breakpoints"), and is more of an art than a science.

This [example](examples/responsive.html "Responsive Design Example") showcases the idea nicely (if also a bit simplistically). Try visiting it and resizing your browser.

The page starts as a simple side-by-side blog style page, with an article and a navigation section. When the page is narrowed below 900px though, a few things happen.

* The text alignment switches from `justify` to `left` (justified text can look weird when you only have 3-4 words per line on a narrower screen)
* the nav menu moves to the top of the page
* the margins adjust a little bit
* the text in the nav menu links gets bigger (for touch-screen interaction)

When the page is further narrowed to 650px the nav menu collapses entirely into a so-called "hamburger menu". (Note that in the example site this hamburger menu has yet to be activated.)

When you're ready, check out the site [here](examples/responsive.html "Responsive Design Example") and take a look at the CSS in the source code. For another canonical responsive design example, check out [Robot or Not](http://responsivewebdesign.com/robot/ "Robot or Not"), the site that launched the concept.