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



let btnRed = document.getElementById('red');
let btnGreen = document.getElementById('green');
let btnYellow = document.getElementById('yellow');
let btnBlue = document.getElementById('blue');
btnRed.addEventListener('click',changeBgToRed);
btnGreen.addEventListener('click',changeBgToGreen);
btnYellow.addEventListener('click',changeBgToYellow);
btnBlue.addEventListener('click',changeBgToBlue);
function changeBgToRed(){
    document.body.style.backgroundColor = "red"
}
function changeBgToGreen(){
    document.body.style.backgroundColor = "green"
}
function changeBgToYellow(){
    document.body.style.backgroundColor = "yellow"
}
function changeBgToBlue(){
    document.body.style.backgroundColor = "blue"
}
// let buttons = []
// buttons.concat(document.getElementsByTagName('button'))
// for(i in buttons){
//     // console.log(buttons[i].getAttribute('id'))
//     // buttons[i].addEventListener('click',test())
//     console.log(buttons[i])
// }
//     let buttons = [document.getElementsByTagName('button')]
//     console.log(buttons)
//     buttons.forEach(btn => {
//         console.log(btn)
//         console.log('NEXT')
//         btn.innerHTML = 'no'

// //     });
// function test(){
//     console.log('lalal')
// }
// function changeBackgroundColor($clr) {
//     console.log($clr)
//     switch ($clr) {
//         case red:
//             document.body.style.backgroundColor = "red";
//         case green:
//             document.body.style.backgroundColor = "green";
//         case yellow:
//             document.body.style.backgroundColor = "yellow";
//         case blue:
//             document.body.style.backgroundColor = "blue";

//     }
// }