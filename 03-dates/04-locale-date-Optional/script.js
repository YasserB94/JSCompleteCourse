/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Let's get the current date
const currentDate = new Date();
//Let's show it in a textual format on the targt field
document.getElementById('target').innerHTML = currentDate.toString();
/*
const date = new Date(2019, 0, 23, 17, 23, 42)
toString gives you Wed Jan 23 2019 17:23:42 GMT+0800 (Singapore Standard Time)
toDateString gives you Wed Jan 23 2019
toLocaleString gives you 23/01/2019, 17:23:42
toLocaleDateString gives you 23/01/2019
toGMTString gives you Wed, 23 Jan 2019 09:23:42 GMT
toUTCString gives you Wed, 23 Jan 2019 09:23:42 GMT
toISOString gives you 2019-01-23T09:23:42.079Z
*/









/*----OBSOLETE---*/
/*
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
*/