# HTML Basics

HTML stands for [Hypertext Markup Language](http://en.wikipedia.org/wiki/Hypertext "Wikipedia Article on Hypertext), but you don't really need to know that. What you do need to know is that HTML contains all of a webpage's *content* (text, images, links, etc.), as well as some of its *layout* and *structure*.

HTML uses *tags*, which look like this: `<article>`. Every tag must open and close. A closing tag looks like this: `</article>`. Some basic tags which you should know about are:

* `<p>` Used for paragraphs.
* `<h1>` Used for headers.
* `<div>` Used to block off a section (division) of a webpage.
* `<a>` Used for links.

Content goes between tags like this:

`<h1>Section 1</h1>`

Tags can be wrapped inside other tags. A webpage is always wrapped inside an `<html>` tag, which is further divided into two sections: `<head>` and `<body>`. The `<head>` section contains metadata about the webpage. The `<body>` section contains the actual content which is displayed to the user. Here is an example of a complete HTML webpage:

    <html>

      <head>
      	<title>Example Webpage</title>
      </head>

      <body>
      	<h1>The Best Webpage Ever</h1>
      	<p>This is the first paragraph of the best webpage ever. It is amazing.</p>
      	<p>This is the second paragraph of the best webpage ever. It is even more amazing.</p>
      </body>

    </html>

Notice the use of **line breaks** and **tab spaces** to keep the HTML clean and readable. [In a web browser](examples/best.html "Link to the Best Webpage Ever") this webpage would look like:

[![A picture of the browser with the simple HTML webpage.](img/firefox.png "The best webpage ever")](img/firefox.png)

Looking at the webpage we can already notice a few things. First, the text contained in the `<h1>` tag is given a different style than the text contained in the `<p>` tags. This is because the `<h1>` tag represents a header while the `<p>` tags represent paragraphs. Second, as you might expect, the browser has automatically inserted spaces between the header and the paragraphs.

Later in the course we will look at how you can change the style of the HTML displayed in the browser to make it more visually appealing. For this first week though we are going to deal with simple HTML pages like the one above.