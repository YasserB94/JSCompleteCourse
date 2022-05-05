/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const opOne = document.getElementById('op-one');
const opTwo = document.getElementById('op-two');
const target = document.getElementById('target');
(function () {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function (operation) {
        // perform the operation
        // Get values and turn them into integers
        const opOneValue = parseInt(opOne.value);
        const opTwoValue = parseInt(opTwo.value);
        let result = 0;
        //Create Switch and give it operation
        switch (operation) {
            case "addition":
                //Calculate result
                result = (opOneValue + opTwoValue);
                //Cast result to target
                target.innerHTML = opOneValue + "+" + opTwoValue + " = " + result;
                break;
            case "substraction":
                result = (opOneValue - opTwoValue);
                //Cast result to target
                target.innerHTML = opOneValue + "-" + opTwoValue + " = " + result;
                break;
            case "multiplication":
                result = (opOneValue * opTwoValue);
                //Cast result to target
                target.innerHTML = opOneValue + "*" + opTwoValue + " = " + result;
                break;
            case "division":
            result = (opOneValue / opTwoValue);
            //Cast result to target
            target.innerHTML = opOneValue + "/" + opTwoValue + " = " + result;
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();
