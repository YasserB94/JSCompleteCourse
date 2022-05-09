/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById('pass-one').minLength = '8';
    document.getElementById('pass-one').addEventListener('input', () => {
        let currentPassword = document.getElementById('pass-one').value;
        if (currentPassword.length < 8) {
            document.getElementById('validity').innerHTML = 'Too Short!';
        }else if(!/(?:.*\d){2}/.test(currentPassword)){
            document.getElementById('validity').innerHTML = 'Too weak!';
        }else{
            document.getElementById('validity').innerHTML = 'Ok';
        }
    })
})();
