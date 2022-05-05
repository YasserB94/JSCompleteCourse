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
    const dayToLookFor = 13;
    let userInputField = document.getElementById('year');
    btnRun.addEventListener('click', updateTarget)
    //Logic to see if it's friday the 13th
    let date = new Date();
    function updateTarget() {
        //Get the year that has been added and store it
        let userInputYear = userInputField.value;
        //Array to save months that have friday the 13th
        let monthsThatHaveFridayThe13th = [];
        //Assign the year to the date
        date.setFullYear(userInputYear);
        //Set The day to the 13th
        date.setDate(dayToLookFor);
        for (month = 0; month < months.length; month++) {
            //Assign the month to the date
            date.setMonth(month)
            // console.log("Year: " + date.getFullYear() + "Month:" + date.getMonth() + "Day:" + date.getDay())
            //Day 5 is friday, check if day = 5 checks if its a friday
            if (date.getDay() === 5) {
                // console.log("Month:" + months[month] + "Has a friday 13");
                //Add the current month to the array that contains all months that have friday the 13th(Using the months array to get a textual value)
                monthsThatHaveFridayThe13th.push(months[month])
            }
        }
        //Ended checking for friday 13 in every month
        //Create a message for the user
        let responseToUser = "In: " + userInputYear + " ";
        //Read all the months that have been added and show them
        for (i = 0; i < monthsThatHaveFridayThe13th.length; i++) {
            // console.log(monthsThatHaveFridayThe13th[i] + " Has a Friday the 13th")
            responseToUser += monthsThatHaveFridayThe13th[i] + ",";
        }
        if (monthsThatHaveFridayThe13th.length > 1) {
            responseToUser += " have a friday the 13th";
        }else{
            responseToUser += " has a friday the 13th";
        }
        target.innerHTML = responseToUser;
    }
})();
