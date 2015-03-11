# Running Code

It's all well and good to compute `4 + 6 = 10`, but how do you actually run this kind of code within a webpage? The answer is the `<script>` tag.

    <html>
   
      <head>
   
        <title>My Example Page</title>
   
      </head>
   
      <body>

        <h1>A Mostly Empty Page</h1>

        <script>

          var myNum1 = 4;
          var myNum2 = 6;
          var myNum3 = myNum1 + myNum2;
          console.log(myNum3);

        </script>

      </body>
   
    </html>

The result of this can be seen in the developer tools. Check it out for yourself [here](examples/console.html "Example JavaScript"). See that `10` in the console? That's the result of your `console.log()` statement.

![Console Log Example](img/console.png "Console Log Example")

Notice that the actual contents of the `<script>` tag, e.g. the JavaScript code, not shown in the browser.