/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    //Sorry got to copy paste that stuff
    let target = document.getElementById('target');
    //Get System date ? since 1970 apparently ?
    const date = new Date();
    // Does return current hour ???
    let currentHour = date.getHours();
    // Returns current minutes based on timezone
    let currentMinutes = date.getMinutes();
    if(currentHour <= 18 && currentMinutes<=30 ){
        target.innerHTML = "<i>Hello</i> it's: " + currentHour + ":" + currentMinutes;
    }else{
        target.innerHTML = "<i>Good Evening</i> it's: " + currentHour + ":" + currentMinutes;
    }

})();
