# Media Queries

The design paradigm we are going to teach is called *responsive design*. Responsive design is all about making a site look beautiful on any device. Before we can look at responsive design though, we need to look at *Media Queries*.

Media Queries allow us to specify CSS rules that only take effect at certain screen widths. For instance:

    @media (max-width: 600px) {
      body {
        background-color: yellow;
        color: darkgreen;
      }
    }

What this rule is saying is that when the browser's width is less than 600px, the background color and text color should be different. Check it out [here](examples/media.html "Media Query Example") or in the image below:

![Media Query](img/media-query-lores.gif)

To get the most out of media queries you should also make sure you include the following line in your site's `<head>` section:

    <meta name="viewport" content="width=device-width, initial-scale=1">

The above is just a fancy way of saying that the width used in calculating whether a media query is applicable should be the device screen's width.

For today we will only use `max-width` media queries, but there are [many more rules](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries "MDN Media Queries Guide") you can learn about as well. For a particularly amazing example of media queries in action, try horizontally resizing [this website](http://www.stuffandnonsense.co.uk "Stuff and Nonsense").