# Technical Debt

## An Example

Let's take an extremely simple example to illustrate the concept of technical debt. Imagine that you are making a blog website for a client. You have the following layout:

    <html>

      <head>
        <title>Blog!</title>
        <link rel="stylesheet" href="css/style.css">
      </head>

      <body>
        
        <header>
          <h1>Web Developer Weekly</h1>
        </header>

        <article>
          <h2>Hastle Free HTML</h2>
          <p>by Joan</p>
          <p>Article text...</p>
        </article>

        <article>
          <h2>Seamless Stylesheets</h2>
          <p>by Huan</p>
          <p>Article text...</p>
        </article>

        <footer>
        	<p><em>(c) Anne's Awesome Blogs, 2015</em></p>
        </footer>

      </body>

    </html>

Ok, looks great so far. Now imagine you get a desparate call from the client: "We **need** the by-line to be italicized". You could simply add `p {font-style: italic;}` to your CSS file, but then the article text would become italicized as well. You need to do something a little more clever, but the client is phoning you every 5 minutes and you don't have time to think. Luckily you remember that the default style for `<em>` (emphasis) tags is italic font so you realize you can simply quickly edit the HTML and add some `<em>` tags:

    <html>

      <head>
        <title>Blog!</title>
        <link rel="stylesheet" href="css/style.css">
      </head>

      <body>
        
        <header>
          <h1>Web Developer Weekly</h1>
        </header>

        <article>
          <h2>Hastle Free HTML</h2>
          <p><em>by Joan</em></p> <!-- em tag added -->
          <p>Article text...</p>
        </article>

        <article>
          <h2>Seamless Stylesheets</h2>
          <p><em>by Huan</em></p> <!-- em tag added -->
          <p>Article text...</p>
        </article>

        <footer>
        	<p><em>(c) Anne's Awesome Blogs, 2015</em></p>
        </footer>

      </body>

    </html>

Phew, great. Done. Now the client comes to you, however, and says that the by-line also needs to be written in blue text. This is a trickier problem, because if you add `em {color: blue}` to your stylesheet that will also affect the `<em>` tag in the footer. Luckily two weeks ago you became a master of CSS selectors, so you add this beauty to your CSS file:

    body article p em {
    	color: blue;
    }

It works but it's getting ugly. Your CSS file is getting bloated and your HTML file has a few more `<em>` tags in it than it did when you were first sipping your coffee this morning. If you replicate this process every time the client requests a change, soon enough you'll have a bloated, messy, tangled codebase that even you, with your weeks and weeks of web development training, can't really understand. Not good.

A simple solution at this point is to "refactor" (edit a code's implementation without changing its behaviour) and add a class to the by-line paragraph. The resulting HTML is this:

    <html>

      <head>
        <title>Blog!</title>
        <link rel="stylesheet" href="css/style.css">
      </head>

      <body>
        
        <header>
          <h1>Web Developer Weekly</h1>
        </header>

        <article>
          <h2>Hastle Free HTML</h2>
          <p class="by-line">by Joan</p>
          <p>Article text...</p>
        </article>

        <article>
          <h2>Seamless Stylesheets</h2>
          <p class="by-line">by Huan</p>
          <p>Article text...</p>
        </article>

        <footer>
        	<p><em>(c) Anne's Awesome Blogs, 2015</em></p>
        </footer>

      </body>

    </html>

Right away our HTML is cleaner. We've gotten rid of two sets of `<em>` tags and provided a meaningful class name to our by-line paragraph. Our CSS can now be simplified to this:

    .by-line {
      font-style: italic;
      color: blue;
    }

This is also beneficial because all future changes to the by-line can be made in one place.

## The "Technical Debt" Analogy

The concept above is simple. When the client asked for the changes to the appearance of the by-line, we needed to move quickly. First we cluttered up our HTML with a few `<em>` tags, and then we added a really complicated CSS selector (`body article p em`) to specifically target our by-lines. This was justified in the moment, because it helped deliver needed changes to a client, but ultimately it made our codebase harder to manage. The act of intentionally implementing bad code in order to meet some pressing external need is usually referred to as "incurring technical debt".

By removing the `<em>` tags and the `body article p em` selector, and replacing them with the `.by-line` class we were able to pay back some technical debt. We improved the internal implementation of our project, without affecting the external appearance of the website. This kind of work is extremely important, but its significance is often missed by non-technical managers.

The moral of the story? Don't let your project drown in technical debt, no matter how painful it is to invest time in fixing code without changing the appearance of functionality if your app. If you don't pay back debt from time to time, it will bankrupt you, just like financial debt.


