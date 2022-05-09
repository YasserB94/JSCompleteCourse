/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        //New array to hold 10 numbers
        const arrayOf10 = []
        //Add 10 random numbers between 1 and 100
        for(i=0;i<10;i++){
            arrayOf10.push(Math.floor(Math.random()*100))
        }
        //Getting table cells added new html id to tr called tableRow
        const tableCells = document.getElementById('tableRow').children;
        //Adding the array elements to the table cells
        for(i=0;i<arrayOf10.length;i++){
            tableCells[i].innerHTML = arrayOf10 [i];
        }
        //Get the smallest number
        document.getElementById('min').innerHTML = arrayOf10.reduce((prev,current) => Math.min(prev,current));
        //Get the biggest number
        document.getElementById('max').innerHTML = arrayOf10.reduce((prev,current)=>Math.max(prev,current));
        //Get the sum of all numbers
        document.getElementById('sum').innerHTML = arrayOf10.reduce((prev,current)=>(prev+current));
        //get the avg = sum/length
        document.getElementById('average').innerHTML = arrayOf10.reduce((prev,current)=>(prev+current))/arrayOf10.length;
    })
})();
