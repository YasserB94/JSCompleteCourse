/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*NOTE ABOUT MODULUS OPERATOR-*/
/*---For this exercise I want to use the modulus operator
The modulus operator returns the rest value after a division
--*/
//Let's loop trough numbers 1 to 100
for (i = 1; i <= 100; i++) {
    //if there is no rest value(remainder) then its dividable
    if (i % 3 === 0 && i % 5 === 0) {
        //Let's check if its dividable by 3 and 5
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        //If fizzbuzz wasn't logged lets see if its dividable by just 3
        console.log('fizz')
    } else if (i % 5 === 0) {
        //if fizz wasn't logged it might be dividable by 5
        console.log('buzz')
    } else {
        //if none of the above were logged they asked us to log the number
        console.log(i);
    }
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*--OBSOLETE
/*-
(function() {
/*%	Modulus operator. Returns remainder of two operands.
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
}-*/