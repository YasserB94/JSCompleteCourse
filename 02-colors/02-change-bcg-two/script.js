/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Let's see if the user clicks the button
const btnRun = document.getElementById('run').addEventListener('click',changeBgColor);

function changeBgColor(){
  //let's see what the user has put in the inputfield
  const color = document.getElementById('color').value;
  //let's change the background to this value
  document.body.style.backgroundColor = color;
}
