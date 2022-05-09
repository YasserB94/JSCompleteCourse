/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', ()=> {
        //Remove the first item from the array
        fruits.shift();
        //Remove the last item from the array
        fruits.pop();
        //Add banana at start of array
        fruits.unshift('banana');
        //Add kiwi at the end of the array
        fruits.push('kiwi');
        //Log the array in console to see if the result is as expected
        console.log(fruits)
    })
})();
