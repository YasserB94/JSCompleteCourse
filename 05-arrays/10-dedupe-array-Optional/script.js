/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        //Sets can only contain 1 of a kind elements
        //So create an array from a set made from fruits ?
        const fruitsNoDupesSet = Array.from(new Set(fruits)); 
        console.log(fruitsNoDupesSet);
        //using forEach
        const fruitsNoDupesFE = [];
        fruits.forEach(fruit => {
            //If it doesn't have the fruit add it, if it does go to the next fruit
            if(!fruitsNoDupesFE.includes(fruit)){
                fruitsNoDupesFE.push(fruit);
            }
        });
        console.log(fruitsNoDupesFE);
    })
})();
