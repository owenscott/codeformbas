# Events

JavaScript is an *event-driven* language, meaning that usually we want to run a particular snipped of code in response to a user's interaction with the page (an "event"). To do this we need to block our code into what are known as *functions*. A *function* is simply a named set of code statements that we run together. In JavaScript we introduce a function with the `function` keyword (surprising, I know) and enclose its code statements with curly braces ('`{}`'). Pay careful attention to the syntax below:

    function sayHello() {

    	console.log('Hello World! Here is a random number ' + Math.random() );

    }

This is a very simple function which will log 'Hello World' along with a random number into the console every time it is run. (The random number is just for fun...). We can attach this to a button on our webpage using the `onclick` property. Again, pay careful attention to the syntax below.

    <html>
      
      <head>
      
        <title>Our First Event!</title>
      
      </head>
      
      <body>

      	<h1>Do you want to say hello?</h1>
      	<button onclick="sayHello()">Hello</button>
      	
      	<script>

      	  function sayHello() {
      		  console.log('Hello World! Here is a random number ' + Math.random() );
      	  }

      	</script>


      </body>

    </html>


Check out the result in your browser [here](examples/button.html "Hello World With a Button"). Remember to keep your console open!