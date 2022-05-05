/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //Fetch Year Input

    //Have a target field to display months
    let target = document.getElementById('target');
    const btnRun = document.getElementById('run');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let userInputYear = document.getElementById('year');
    let monthsThatHaveFridayThe13th = [];
    btnRun.addEventListener('click',updateTarget)
    //Logic to see if it's friday the 13th
    let date = new Date();


    function updateTarget(){
        //Set the year from users input as the year date will look trough
        date.setFullYear(userInputYear);
        //Loop trough everymonth
        
        for(i = 0;i < months.length;i++){
            
            console.log(date.getDay())    
        }
    }





})();
