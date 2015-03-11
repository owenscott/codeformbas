# JS and HTML

Ok, so we've logged some things into the console and made an alert box or two, but how do we actually make a webpage interactive? Well, for today we'll look at the simplest way: by referencing the `id` properties of HTML elements. An example is the easiest way to look at this:

    <html>
      
      <head>
      
        <title>Yet Another Example</title>
      
      </head>
      
      <body>
        
        <h1>This one's going to be cool.</h1>
        <p id="target-paragraph">An innocent paragraph, minding it's own business.</p>
        <button onclick="updateParagraph()">Do Something Cool</button>

        <script>

          function updateParagraph() {
          	document.getElementById('target-paragraph').innerHTML = 'Bam!'
          }

        </script>

      </body>

    </html>

Check it out in action [here](examples/bam.html "Example of a Dynamic Page"). Again note the `onclick` attribute in the `<button>` tag, the use of a corresponding `function` in the `<script>` tag, and a new tool, `document.getElementById` which allows us to find an element on the page and update its `innerHTML` (e.g. the stuff between it's opening and closing tag).