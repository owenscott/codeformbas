# CSS Selectors

## Element Selectors

One of the trickiest things in CSS are "selectors". CSS consists of two components: selectors and rules. For instance, in the following code:

    p {
      color: red;
    }

`p` is the selector, and `color: red;` is the rule. What this rule is saying is "for all paragraphs (`p`) in the HTML document, make the font color red (`color: red;`)." This kind of simple selector is known as an **element selector**.

## Class Selectors

What is we had a webpage where we had multiple paragraphs, but we only wanted to color one of them red?

    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>My Awesome Page</title>
      </head>
      <body>
        <h1>Example Page</h1>
        <p>The first paragraph is pretty normal.</p>
        <p>Warning! The second paragraph is not normal.</p>
        <p>The third paragraph is normal.</p>
      </body>
    </html>

If we apply the CSS rule of `color: red;` using the CSS selector `p` we will color all paragraphs red - not what we want. Instead we need to use what's known as an HTML *class*.

    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>My Awesome Page</title>
      </head>
      <body>
        <h1>Example Page</h1>
        <p>The first paragraph is pretty normal.</p>
        <p class="warning">Warning! The second paragraph is not normal.</p>
        <p>The third paragraph is normal.</p>
      </body>
    </html>

Notice that the second paragraph now has `class="warning"` added inside its HTML tag. To apply the red color only to this paragraph, we simply need to use a **class selector**.

    .warning {
    	color: red;
    }

Notice that class selectors always start with a dot (`.warning`). The beauty of class selectors is that we can re-use them throughout our HTML document.


    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>My Awesome Page</title>
      </head>
      <body>
        <h1>Example Page</h1>
        <p>All is well with the world.</p>
        <p class="warning">Warning! Maybe it's not.</p>
        <p>No, I think it actually is.</p>
        <p class="warning">Wait, no, WARNING. It's totally not.</p>
        <p>Let's end on a good note... all is well.</p>
      </body>
    </html>

Notice in this instance that we can re-use the same CSS rule twice by simply applying "`class="warning"`" to every paragraph which we want to display in red.

Alright, I admit it: I didn't finish this section yet. While you're at it do a quick online search for "ID selectors" and "nested selectors". Or, better yet, try the [CSS Selector Game](http://flukeout.github.io/ "CSS Selector Game"). We'll talk more about selectors next week!


