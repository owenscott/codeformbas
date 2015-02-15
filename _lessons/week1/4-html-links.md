# Links and Lists

We have already looked at simple HTML documents using simple elements, such as the header (`<h1>`) and the paragraph (`<p>`). Now we are going to look at a more complicated element, the link.

## The Link

Links are done in HTML using the `<a>` tag. An example of a simple link is:

`<a href="http://www.google.com/">Google Homepage</a>`

Notice that now there is content between the opening `<a` and closing `>` of the opening tag. This content, `href="http://www.google.com/"`, provides the actual URL (or *Hypertext Reference*, i.e. HREF) for the link. [In a browser](examples/link.html) this HTML tag would appear as follows:

[![A link tag in the browser](img/link.png "Link Tag")](img/link.png)

## The List

Another useful HTML element is the list. Lists use two elements: `<ul>` (*unordered list*) to represent the list itself, and `<li>` to represent each item on the list. A simple example of a list is as follows:

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

Again note the use of indenting for code clarity. [In a browser](examples/list.html) this list would appear as follows:

[![A list tag in the browser](img/list.png "List Tag")](img/list.png)

## All Together Now

Let's now combine lists and links, as well as the `<html>`, `<head>`, and `<body>` tags, to make a complete webpage.

    <html>

      <head>
        <title>MBA Programs in Europe</title>
      </head>

      <body>
        <h1>A Selection of European MBA Programs</h1>
        <ul>
          <li><a href="http://www.sbs.ox.ac.uk/">Said Business School</a></li>
          <li><a href="http://www.insead.edu/home/">Insead</a></li>
          <li><a href="http://www.hec.edu/">HEC Paris</a></li>
          <li><a href="http://www.esade.edu/web/eng">ESADE</a></li>
        </ul>
      </body>

    </html>

[In the browser](examples/bschools.html), this webpage will look as follows:

[![Business Schools in Europe](img/bschools.png "Business Schools in Europe")](img/bschools.png)