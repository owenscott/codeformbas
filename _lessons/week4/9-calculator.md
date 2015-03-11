# Calculator

By now I suspect you're getting the hang of things, so we're going to introduce/combine a whole bunch of stuff at once. The following is a truly interactive webpage.


    <html>

      <head>
        <title>A Calculator!</title>
      </head>

      <body>

        <h1>The Amazing Adding Machine</h1>

        <label>Number 1: </label><input type="number" id="firstNumber">
        <label>Number 2: </label><input type="number" id="secondNumber">

        <button onclick="calculate()">Calculate</button>

        <p>The result... <span id="result"></span></p>

        <script>

          function calculate() {

            var firstNumber = parseInt( document.getElementById('firstNumber').value );

            var secondNumber = parseInt( document.getElementById('secondNumber').value );

            var result = firstNumber + secondNumber;

            document.getElementById('result').innerHTML = result;

          }

        </script>

      </body>

    </html>


You can, of course, see this wondrous program in action [here](examples/calculator.html "A Calculator"). There are really only two things that are new here. First, we are using `.value` instead of `.innerHTML` to get the value of the numbers input into the two `<input>` elements by the user. You shouldn't worry about this too much right now - suffice it to say that we usually want to use `value` for `<input>` elements.

The second thing is the `parseInt( ... )` statement which is wrapping our code for getting the value from the `<input>`s. For now all you need to know is that this is necessary - you'll see why in the final exercise.