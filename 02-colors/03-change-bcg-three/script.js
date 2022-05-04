/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btnRun = document.getElementById('run');
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let preFix = '#';
    const hexLength = 6;
    const randomIndexGenerator = Math.floor(Math.random());

    btnRun.addEventListener('click',randomiseBackground)


    function randomiseBackground(){
        let newColor = preFix;
    for(i = 0; i < hexLength; i++){
        newColor += hex[Math.floor(Math.random()*hex.length)]
    }
    //This color gets turned into RGB o.O
    document.body.style.backgroundColor = newColor;
}
})();
