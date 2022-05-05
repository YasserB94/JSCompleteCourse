/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        //Get the user input
        const number = document.getElementById('number').value;
        console.log("User input:" + number)
        //Check if input is a number
        if(isNaN(number)){
            console.log('Please provide a number!')
        }else{
            console.log(number + ' Is a number')
            //Calculate factorial
            let factorial = 1;
            for(i=1;i<=number;i++){
                factorial = factorial*i;
            }
            // log the factorial
            console.log("The factorial for: " + number + " is: " + factorial)
        }

    });

})();
