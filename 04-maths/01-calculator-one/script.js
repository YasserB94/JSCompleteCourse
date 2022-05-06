/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Listening to the addition button for a click,Since we don't want to use this logic anywhere else we can implement the function in the event listener
document.getElementById('addition').addEventListener('click', function () {
    //Let's get the values of our 2 fields
    //User input is a string, so we have to parse them to an int
    //We get the text-field from the dom and ask for it's value.
    //We want to get the value when it's clicked so we declare these within the funciton
    const opOne = parseInt(document.getElementById('op-one').value);
    const opTwo = parseInt(document.getElementById('op-two').value);
    //I added a target id to my html to display the result on the webpage
    //Let's see if the result is a number if it is let's display the result
    if (isNaN(opOne + opTwo)) {
        //isNaN returned true, its NotaNumber!
        document.getElementById('target').innerHTML = "Please enter numbers!"
    } else {
        //isNan returned false, we can show our results
        document.getElementById('target').innerHTML = opOne + " + " + opTwo + " = " + (opOne + opTwo)
    }
});
//Let's repeat this function for the other buttons changing the operator.
document.getElementById('substraction').addEventListener('click', function () {
    const opOne = parseInt(document.getElementById('op-one').value);
    const opTwo = parseInt(document.getElementById('op-two').value);
    if (isNaN(opOne - opTwo)) {
        document.getElementById('target').innerHTML = "Please enter numbers!"
    } else {
        document.getElementById('target').innerHTML = opOne + " - " + opTwo + " = " + (opOne - opTwo)
    }
});
document.getElementById('multiplication').addEventListener('click', function () {
    const opOne = parseInt(document.getElementById('op-one').value);
    const opTwo = parseInt(document.getElementById('op-two').value);
    if (isNaN(opOne * opTwo)) {
        document.getElementById('target').innerHTML = "Please enter numbers!"
    } else {
//Using a + to form our string and performing math in the string can make it a bit harder to read
//We can use template/string literals to make the code easier to reead!
        document.getElementById('target').innerHTML = `${opOne} * ${opTwo} = ${opOne * opTwo}`
    }
});
document.getElementById('division').addEventListener('click', function () {
    const opOne = parseInt(document.getElementById('op-one').value);
    const opTwo = parseInt(document.getElementById('op-two').value);
    if (isNaN(opOne / opTwo)) {
        document.getElementById('target').innerHTML = "Please enter numbers!"
    } else {
        document.getElementById('target').innerHTML = `${opOne} / ${opTwo} = ${opOne / opTwo}`
    }
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*--OBSOLETE
//Get all elements needed
const opOne = document.getElementById('op-one');
const opTwo = document.getElementById('op-two');
const target = document.getElementById('target');
(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue+opTwoValue);
        //Cast result to target
        target.innerHTML = opOneValue + "+"  + opTwoValue + " = " + result;

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue-opTwoValue);
        //Cast result to target
        target.innerHTML = opOneValue + "-"  + opTwoValue + " = " + result;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue*opTwoValue);
        //Cast result to target
        target.innerHTML = opOneValue + "*"  + opTwoValue + " = " + result;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue/opTwoValue);
        //Cast result to target
        target.innerHTML = opOneValue + "/"  + opTwoValue + " = " + result;
    });
})();
--*/
