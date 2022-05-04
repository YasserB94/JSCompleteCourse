/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target');
    let date = new Date();
    let day = date.getDay()+1;
    let month = date.getDay()+1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    dateToEnglish();

    function dateToEnglish(){
        let daysInEnglish = "Today's Date: ";
        daysInEnglish += days[day];
        daysInEnglish += " ";
        daysInEnglish += months[month];
        daysInEnglish += " ";
        daysInEnglish += year;
        daysInEnglish += ", "
        daysInEnglish += hours;
        daysInEnglish += "h";
        daysInEnglish += minutes;
        target.innerHTML = daysInEnglish;
    }
    

})();
