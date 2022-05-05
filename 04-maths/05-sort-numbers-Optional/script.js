/* becode/javascript
 *
 * /02-maths/04-sort-numbersStringFormat/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*Get the formfield - Only need value when function is called so declaring within function
const formInputField = document.getElementById('numbers');*/
(function () {

    //Lets listen if the button gets clicked and run some code if it does
    document.getElementById("run").addEventListener("click", function () {
        //Get The content of the input field
        const input = document.getElementById('numbers').value;
        console.log("input:" + input);
        //Split the string and add them to an array
        const numberArray = input.split(', ').map(Number);
        console.log('Array of numbers:' + numberArray);
        //Sort the array since its numbers we have to specify how to sort it
        numberArray.sort(function(a,b){
            return a-b;
        });
        console.log('Array of numbers sorted:' + numberArray)
    });
})();
