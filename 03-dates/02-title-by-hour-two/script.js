/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Let's get the time - First we need a new Date
const currentDate = new Date();
if(currentDate.getHours() <= 18 && currentDate.getMinutes() < 30){
    //If its before 18h and before 30 minutes
    document.getElementById('target').innerHTML = "<i>Hello</i>"
}else{
    // if its not
    document.getElementById('target').innerHTML = "<i>Good Evening</i>"
}
