/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// your code here
//Let's see if the visitor clicks a button
const btnRed = document.getElementById('red').addEventListener('click',changeBgToRed);
const btnGreen = document.getElementById('green').addEventListener('click',changeBgToGreen);
const btnYellow = document.getElementById('yellow').addEventListener('click',changeBgToYellow);
const btnBlue = document.getElementById('blue').addEventListener('click',changeBgToBlue);
//Let's add the functions that get executed by the buttons
function changeBgToRed(){
    //Change the body's background color
    document.body.style.backgroundColor = "red"
}
function changeBgToGreen(){
        //Change the body's background color
    document.body.style.backgroundColor = "green"
}
function changeBgToYellow(){
        //Change the body's background color
    document.body.style.backgroundColor = "yellow"
}
function changeBgToBlue(){
        //Change the body's background color
    document.body.style.backgroundColor = "blue"
}
