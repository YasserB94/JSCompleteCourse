/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
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
        let result = (opOneValue+opOneValue);
        //Cast result to target
        target.innerHTML = opOneValue + "+"  + opTwoValue + " = " + result;

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue-opOneValue);
        //Cast result to target
        target.innerHTML = opOneValue + "-"  + opTwoValue + " = " + result;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue*opOneValue);
        //Cast result to target
        target.innerHTML = opOneValue + "*"  + opTwoValue + " = " + result;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        //Calculate result
        let result = (opOneValue/opOneValue);
        //Cast result to target
        target.innerHTML = opOneValue + "/"  + opTwoValue + " = " + result;
    });
})();
