/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Let's run the script when the button get's clicked
const btnRun = document.getElementById('run').addEventListener('click', fridayThe13th)

//Let's add the the logic to see and display the months that have a friday the 13th of the supplied year
function fridayThe13th() {
    //Let's create a new date and set the year to the user's input, the month to 0 for now, and the only day we need is the 13th
    const yearToLookTrough = new Date(document.getElementById('year').value, 0, 13);
    //We are only looking for the 13th so let's set the day to the 13th
    //Let's create an array to store the months that have a friday the 13th
    let monthsThatHaveFridayThe13th = []
    //Let's loop trough all the months 0-11 and see if our day is a friday

    for (month = 0; month <= 11; month++) {
        //let's set the month of our date with the current iteration of the loop
        yearToLookTrough.setMonth(month)
        //The days are stored in an array so friday is the 5th day
        if (yearToLookTrough.getDay() === 5) {
            //if it is a friday, let's save the month in our array
            monthsThatHaveFridayThe13th.push(yearToLookTrough.getMonth())
        }
    }
    //Let's tell our user what months have a friday the 13th
    let messageToUser = "In " + yearToLookTrough.getFullYear() + ": ";
    //let's loop trough the array where we stored the months that have a friday the 13th
    for (i = 0; i < monthsThatHaveFridayThe13th.length; i++) {
        //let's add the month to the message in a readable manner
        //First we need the names of the months, let's use an array just like the Date() object does -- I have not found a way to get the month in a textual manner from the object itself
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //Let's add the month to the message
        messageToUser += months[i] + ", ";
    }
    //Let's complete our message using the proper grammar, if there is only 1 or if there are multiple
    if (monthsThatHaveFridayThe13th.length < 2) {
        messageToUser += "has a friday the 13th"
    } else {
        messageToUser += "have a friday the 13th";
    }
    //Lets show our message to the user in a textfield (I added a target ID to one of the existing textboxes)
    document.getElementById('target').innerHTML = messageToUser;
}



/*-----OBSOLETE-----
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
*/