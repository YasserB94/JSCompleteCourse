/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        const passOne = document.getElementById('pass-one');
        const passTwo = document.getElementById('pass-two');
        if(passOne.value != passTwo.value){
            passOne.style.border = '.1rem solid red';
            passTwo.style.border = '.1rem solid red';
        }else{
            passOne.style.border = '.1rem solid silver';
            passTwo.style.border = '.1rem solid silver';
        }
    })
})();
