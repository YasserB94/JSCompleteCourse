/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Let's see if the user clicked the button
const btnRun = document.getElementById('run').addEventListener('click',changeBgColor)


//Let's write the function to be executed when the button gets clicked
function changeBgColor(){
//Let's find a way to create a random color
//a Hex color always exists of a combination of 6 characters prefixed with #
//Let's put all the possible characters in an array
const  hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//Let's store our color and have the prefix ready
//This value will change so I use let
let color = "#";
//let's add 6 random values out of the hexValues array to our color using the math function
for(i = 0;i<6;i++){
    //add a random character from the array to color
    //Math.random gives a random number between 0 and 1
    //we multiply the number with the array length to choose a random item from the array
    //We use math.floor to round off any doubles so we get an integer between 1 and 16
    color += hexValues[Math.floor(Math.random()*hexValues.length)]
}
    //let's tell the document to use our color as the background color
    document.body.style.backgroundColor = color;
}

