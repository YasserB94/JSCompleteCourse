/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    const target = document.getElementById('target');
    const actionBtns = document.querySelectorAll('button');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const minValue = btn.getAttribute('data-min');
            const maxValue = btn.getAttribute('data-max');
            const currValue = parseInt(btn.innerText);
            if (currValue < maxValue) {
                const newValue = currValue + 1;
                btn.innerText = '';
                if (newValue < 10) {
                    btn.innerText = `0${newValue}`;
                } else {
                    btn.innerText = newValue;
                }
            } else {
                btn.innerText = minValue;
            }
            updateTarget();

        })
    });
    function updateTarget() {
        let newValue = '';
        actionBtns.forEach(btn => {
            newValue += btn.innerText
        });
        target.innerText = newValue;
    }
})();
