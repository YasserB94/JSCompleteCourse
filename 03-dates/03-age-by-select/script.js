/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Let's see if the button get's clicked
const btnRun = document.getElementById('run').addEventListener('click',calculateAge);

//Let's write the function to be ran when the button is clicked
function calculateAge(){
    //Let's get the values the user selected
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;
    //Let's get the current date
    const currentDate = new Date();
    //Let's create a date that holds the user's date of birth
    const dobDate = new Date(dobYear,dobMonth,dobDay);
    //Let's use the dates to calculate the user's age
    const ageYears = currentDate.getFullYear() - dobDate.getFullYear();
    //The days are in an array from 0-6 and months in an array from 0-11
    //So we add one to get a correct value for us mortals
    const ageMonths = currentDate.getMonth() - dobDate.getMonth() +1;
    const ageDays = currentDate.getDay() - dobDate.getMonth() +1;
    //Let's tell the user how old he is, to show it on the page I added a 'target' ID to the field that says Calculate the age
    document.getElementById('target').innerHTML = "You are: " + ageYears + " years, " + ageMonths + " months,and " + ageDays + " days young, still looking good :)";
}


/*-----OBSOLITE-----
//New Try 
//Let's write the function to be ran when the button is clicked
function calculateAge(){
    //Let's get the values the user selected
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;
    //Let's get the current date
    const currentDate = new Date();
    //Let's create a date that holds the user's date of birth
    const dobDate = new Date(dobYear,dobMonth,dobDay);
    //Let's create a date that holds the user's age
    const ageDate = new Date(currentDate.getFullYear()-dobDate.getFullYear(),currentDate.getMonth()-currentDate.getMonth(),currentDate.getDay()-dobDate.getDay())

    //Let's get the user's age data
    console.log(ageDate.toDateString())

}


//First Try
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
*/