/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Get User Input
    let dobDayInput = document.getElementById('dob-day');
    let dobMonthInput = document.getElementById('dob-month');
    let dobYearInput = document.getElementById('dob-year');
    const btnRun = document.getElementById('run');
    const target = document.getElementById('target');

    //Get Current Date
    const date = new Date();
    // Days and months must be in an array! Sneaky....
    let currentDay = date.getDay() +1;
    let currentMonth = date.getMonth() +1;
    let currentYear = date.getFullYear();





    btnRun.addEventListener('click',calculateAge)
    
    function calculateAge(){
        //Cast User input to usable variables
        let dobDay = dobDayInput.value;
        let dobMonth = dobMonthInput.value;
        let dobYear = dobYearInput.value;
        //Calculate current Age
        let visitorAgeYears = currentYear - dobYear;
        let visitorAgeMonths = currentMonth - dobMonth;
        let visitorAgeDays = currentDay - dobDay;
        //Cast it to target
        let message = "You are: " + visitorAgeDays + " Days," + visitorAgeMonths + " Months," + visitorAgeYears + "years young! Still looking good :D";
        target.innerHTML = message;
        //At least I got the year right :D
    }
})();
