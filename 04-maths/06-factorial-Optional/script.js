/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*factorial, in mathematics,
the product of all positive integers less than or equal to a given positive integer 
and denoted by that integer and an exclamation point*/
(function () {

    // to get the value of an input: document.getElementById("element-id").value
    //See if the user has clicked the button
    document.getElementById("run").addEventListener("click", function () {
        //Function to execute on click here

        //Get the value of the input field
        const number = document.getElementById('number').value;
        //Check if input is a number
        if (isNaN(number)) {
            console.log('Please provide a number!')
        } else {
            console.log(number + ' Is a number')
            //Calculate factorial
            //Start with one and multiply it with every number we meet
            //while count up to the number
            let factorial = 1;
            for (i = 1; i <= number; i++) {
                //the new factorial is the current factorial times current count
                factorial = factorial * i;
            }
            // log the number and it's factorial
            console.log("The factorial for: " + number + " is: " + factorial)
        }

    });

})();
