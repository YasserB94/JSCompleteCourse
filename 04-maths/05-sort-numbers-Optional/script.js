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
        //Split the string after every ,  
        //.map() will build the array so every element from .split will be processed by .map to give it it's own spot in the array
        //.map(Number) is a parameter of the .map function
        //Number tells .map to try and turn whatever .map receives into a number
        //in this case it will receive strings that contain numbers
        //And actually convert it into numbers
        const numberArray = input.split(', ').map(Number);
        console.log('Array of numbers:' + numberArray);
        //Sort the array since its numbers we have to specify how to sort it
        //.Sort will specify alphabetical, with a function we can tell it to sort
        //numbers in an ascending order
        numberArray.sort(function(a,b){
            return a-b;
        });
        //show the sorted array in the console
        console.log('Array of numbers sorted:' + numberArray)
    });
})();
