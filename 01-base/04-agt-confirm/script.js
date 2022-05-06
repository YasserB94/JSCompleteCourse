/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
askQuestions();
function askQuestions() {
    //Ask the user for their data
    const age = prompt('How young are you:');
    const gender = prompt('Please specify your gender:');
    const homeTown = prompt('What is the name of your home town ?');
    //Ask the user to confirm the data = \r\n creates a new line
    if (confirm('Is the following data correct ?\r\n Your age is:' + age + '\r\n Your gender is:' + gender + '\r\n Your home town is called:' + homeTown)){
        //if they confirm the data do nothing
        return;
    }else {
        //if they do not confirm the data we call the function again
        askQuestions();
    }
}