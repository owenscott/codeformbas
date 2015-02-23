# Intro to CSS

CSS stands for Cascading Style Sheets, but you don't really need to know that. What you need to know is that CSS is what we use to control what a webpage *looks like*, or it's "*style*".

Last week we looked at HTML. HTML is used to specify a webpages content and basic layout. Recall a webpage like this:

    <html>
      <head>
        <title>Core Web Technologies</title>
      </head>
      <body>
      	<h1>Core Technologies For Modern Websites</h1>
      	<ul>
      		<li><a href="http://en.wikipedia.org/wiki/HTML">Hypertext Markup Language (HTML)</a></li>
      		<li><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets">Cascading Style Sheets</a></li>
      		<li><a href="http://en.wikipedia.org/wiki/JavaScript">JavaScript</a></li>
      	</ul>
      </body>
    </html>

Compared to the websites that you're used to visiting, you'll probably find the layout quite plan. You can see it in a browser [here](examples/css-intro.html "Simple Website"), or in the image below:

[![A simple website](img/css-intro.png "Simple Website")](examples/css-intro.html)

It works but it's pretty ugly. Using a new language called CSS we can add some nice styles. The first thing we do is create a new CSS file, which I'll call `style.css`, and link to it in our HTML document's `<head>` section.

    <html>
      <head>
        <title>Core Web Technologies</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Core Technologies For Modern Websites</h1>
        <ul>
          <li><a href="http://en.wikipedia.org/wiki/HTML">Hypertext Markup Language (HTML)</a></li>
          <li><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets">Cascading Style Sheets</a></li>
          <li><a href="http://en.wikipedia.org/wiki/JavaScript">JavaScript</a></li>
        </ul>
      </body>
    </html>

Now in our style.css let's add a couple style rules.

    h1 {
      font-family: Cambria;
      color: darkblue;
    }

Those two lines of CSS code should change the font color and style of the `<h1>` header. How's [our webpage](examples/css-intro2.html) look now?

[![A simple website](img/css-intro2.png "Simple Website With Some CSS")](examples/css-intro2.html)

While we're at it let's change a few more things:

    body {
      background-color: lightgrey;
    }

    a {
      font-family: Helvetica;
    }

    li {
      padding: 5px;
    }

Before scrolling down just take a minute and think about what the webpage will look like. How do you expect it to have changed based on the above CSS rules? Ok, [check it out](examples/css-intro3.html). 

[![A simple website](img/css-intro3.png "Simple Website With Some CSS")](examples/css-intro3.html)

With a few simple changes (changing the heading font/color, changing the background color to light grey, changing the font of the links, and adding some padding around each link) the webpage is starting to look a lot better. That's the beauty of CSS.
