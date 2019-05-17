

/**
 * 1. What’s the difference between the following three “car” approaches?
 * function Car(){}  This is declaring a function.
 * var car = Car();  This is invoking a function.
 * var car = new Car(); This creates a new function object.
 * 
 * 2. Explain what AJAX is and it’s advantages/disadvantages.
 * Disadvantage: 
 *  Can't call another server unless you use JSONP.
 * Advantage: 
 *  It's compatible with mulitple languages.
 *  Supports Asynchronous Processing
 * 
 * 3. Describe how event bubbling works in the context of clicking on the “Hello World” text:
 *   <body>
 *      <div id=”container”>
 *          <span id=”textContainer”>Hello World</span>
 *      </div>
 *   </body>
 * 
 *  *** A click will first run on "Hello World", then it will run again on all the parents above it.***
 */

/** 
 * 4. Create a loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
 */

function multipleOfFive(tofu) { return (tofu % 5) == 0 && tofu !== 0 };
function multipleOfThree(tofu) { return (tofu % 3) == 0 && tofu !== 0 };
function multipleOfBoth(tofu) { return (tofu % 3) == 0 && (tofu % 5) == 0 && tofu !== 0 };

for ( var i = 0; i <= 100; i++ ) {
    if ( multipleOfBoth(i) ){
        console.log(i,'fizzbuzz');
    } else if ( multipleOfThree(i) ){
        console.log(i,'fizz');
    } else if ( multipleOfFive(i) ){
        console.log(i,'buzz');
    } else {
        console.log(i);
    }
}

/** 
 * 5. Please fix the following erroneous JavaScript code.
 * 
* Returns the header element.
*
* @return {(object|null)} The JQuery header element or null if the element does not exist 
*/

function getHeaderElement() {
    // Get header element by its id. header = $(“myHeader”);

    var header = $("#myHeader");
    if (header !== null && typeof header !== "undefined") {
        console.log('header element exists!');
        return header;
    } else { 
        console.log('header element does not exist!');
        return null;
    }
}
    
    




