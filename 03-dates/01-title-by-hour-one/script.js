/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//Let's get the time - First we need a new date
const currentDate = new Date();
//Let's see if its before or after 18h and change the text accordingly
if(currentDate.getHours()<9){
    //if the hour is smaller than 18
    document.getElementById('target').innerHTML = "<i>Hello</i>"
}else{
    document.getElementById('target').innerHTML = "<i>Good Evening</i>"
}
/*
(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target');
    //Get System date ? since 1970 apparently ?
    const date = new Date();
    // Does return current hour ???
    let currentHour = date.getHours();
    // Returns current minutes based on timezone
    let currentMinutes = date.getMinutes();
    if(currentHour<18){
        target.innerHTML = "<i>Hello</i> it's: " + currentHour + ":" + currentMinutes;
    }else{
        target.innerHTML = "<i>Good Evening</i> it's: " + currentHour + ":" + currentMinutes;
    }


    

})();
*/