/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for(i = 0;i<=100;i++){
        //check if number is a multiple of 3 and 5
        if(i%3==0 && i%5==0){
            logFizzBuzz()
        }
        //check if number is a multiple of 3
        else if(i%3==0){
            logFizz()
        }
        //check if number is a multiple of 5
        else if(i%5==0){
            logBuzz()
        }
        //Log the number
        else{
            console.log(i);
        }
    }

})();
function logFizz(){
    console.log("fizz")
}
function logBuzz(){
    console.log("buzz")
}
function logFizzBuzz(){
    console.log("fizzbuzz")
}