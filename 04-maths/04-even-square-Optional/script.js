/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const target = document.getElementById('target');
(function() {
    
    document.getElementById("run").addEventListener("click", function() {

        // your code here
        //For loop to go trough numbers 1 to 21
        for(i = 1;i<=21;i++){
            let result = i*i;
            console.log(result)
            target.innerHTML = "The square of: " + i + " = " + result;
        }
    });

})();
