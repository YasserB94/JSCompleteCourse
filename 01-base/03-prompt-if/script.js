/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  //Yes or no questionm confirm returns true or false - Store it in a constant
  const wantsCake = confirm("Would you like some cake ?")
  //See if the user answered true or false and show the appropriate response
  if(wantsCake){
    alert('Congratulations!')
  }else{
    alert('More Cake for me then :p !')
  }
})();