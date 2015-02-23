# CSS Links

In modern websites, CSS is always written in a separate file and linked to from the `<head>` section of an HTML document. By default the link in the `<head>` section is a *relative* link, meaning that the filepath to the CSS file is relative to the location of the HTML file. So when you say:

    <link rel="stylesheet" href="style.css">

What you're really saying is "*there's a CSS file in the same folder as the HTML file, and the CSS file's name is `style.css`*"

[![A Linked Folder](img/link1.png "A folder with linked HTML and CSS files")](img/link1.png "Image")

Sometimes it's common to put your CSS files in a separate folder, to keep your working directory clean. Here is an example:

[![A Nested Linked Folder](img/link2.png "A folder with linked HTML and CSS files")](img/link2.png "Image")

In this example the `style.css` file is inside a folder called `stylesheets`. To link to the file we simple need to add the folder name to the file path:

    <link rel="stylesheet" href="stylesheets/style.css">

Remember, the file path in your `<link>` tag is simply the *relative* path to the CSS file, i.e. the path to the CSS file starting from the HTML file. If you keep that simple rule in your head it is quite easy to link CSS files to HTML files no matter what the folder structure.

Finally, you might be wondering what that `rel=stylesheet` bit is. It's simple actually; `rel` is short for "*relationship*" - you're just specifying what the relationship is between the HTML file and the file you're linking to. In our case it's a CSS file so the relationship is "*stylesheet*". There are [a bunch of other options](http://www.w3schools.com/tags/att_link_rel.asp) as well if you're curious, although few are widely used.