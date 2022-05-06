/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//This time we are provided with the eventlisteners
//Every button will launch a function called performOperation
//performOperation accepts the id of the button as input so we can work with a Switch!
Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        performOperation($btn.id);
    });
});
//We need a variable that is a function that accepts an operation
//The ForEach instance that creates an eventlistener to the buttons will use this function as a template
//And we want the button to be able to pass it's ID into the function
var performOperation = function (operation) {
    //The user has clicked! let's get our two operants
    console.log(operation)
    const opOne = parseInt(document.getElementById('op-one').value);
    const opTwo = parseInt(document.getElementById('op-two').value);
    //Let's create a switch and give it our operation as well
    console.log(operation)
    switch (operation) {
        //does our operation variable get the value of addition ?
        case "addition":
            //Let's do an addition
            //Let's use a check to warn the user if they didn't enter numbers
            //And let's use Template/string literals once more to keep our code easy to read
            //I added the target id to the html so we can display the result on the site
            if (isNaN(opOne + opTwo)) {
                document.getElementById('target').innerHTML = "Please enter numbers!"
            } else {
                document.getElementById('target').innerHTML = `${opOne} + ${opTwo} = ${opOne + opTwo}`
            }
            //Got to tell the switch to stop or you'll be late checking in while checking what's going wrong.....
            break;
        //Let's complete our switch for other values operation might get (we can go have a look in our html to find these)
        case 'substraction':
            if (isNaN(opOne - opTwo)) {
                document.getElementById('target').innerHTML = "Please enter numbers!"
            } else {
                document.getElementById('target').innerHTML = `${opOne} - ${opTwo} = ${opOne - opTwo}`
            }
            break;
        case 'multiplication':
            if (isNaN(opOne * opTwo)) {
                document.getElementById('target').innerHTML = "Please enter numbers!"
            } else {
                document.getElementById('target').innerHTML = `${opOne} * ${opTwo} = ${opOne * opTwo}`
            }
            break;
        case 'division':
            if (isNaN(opOne - opTwo)) {
                document.getElementById('target').innerHTML = "Please enter numbers!"
            } else {
                document.getElementById('target').innerHTML = `${opOne} / ${opTwo} = ${opOne / opTwo}`
            }
            break;
    }
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*--OBSOLETE
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
*/