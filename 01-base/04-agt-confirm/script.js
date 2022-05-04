/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let answersConfirmed = false
    let age;
    let gender;
    let town;


    askQuestions()


    function askQuestions(){
    if(!answersConfirmed){
        age = prompt('How young are you:');
        gender = prompt('Please specify your gender:');
        town = prompt('What is the name of your home town ?')

        if(confirm('Is the following data correct ?\r\n Your age is:' + age + '\r\n Your gender is:' + gender + '\r\n Your home town is called:' + town)){
            answersConfirmed = true;
        }else{
            askQuestions();
        }

        
    }}


})();
