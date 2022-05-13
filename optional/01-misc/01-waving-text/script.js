/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const target = document.getElementById('target');
var charIndex = 0;
wavyString(target,10)
function wavyString(parent,waveSize){
    const wrapper = 'span';
    replaceTextWithWrapped(parent,wrapper);
    let charIndex = 0;
    let sizeIndex = 5;
    setInterval(()=>{
        const fontSizes = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        const chars = target.querySelectorAll(wrapper)
        //Change Font size of current char
        changeFontSize(chars[charIndex],fontSizes[sizeIndex])
        //change fontsizes of X chars before,after current char
        for(i=0;i<waveSize;i++){
            if(charIndex>=i){
                changeFontSize(chars[charIndex-i],fontSizes[sizeIndex-i])
            }
            if(charIndex<chars.length-i){
                changeFontSize(chars[charIndex+i],fontSizes[sizeIndex-i])
            }
        }
        //increment or reset indexes when reached end of string
        if(charIndex<chars.length-1){
            charIndex++
        }else if(charIndex===chars.length-1){
            charIndex = 0;
            //Reset all chars to base font
            chars.forEach(char => {
                changeFontSize(char,fontSizes[0])
            });
            
        }
          
    },100)

}
function changeFontSize(string,size){
    string.style.fontSize = `${size}rem`
}

function replaceTextWithWrapped(textParent,wrapper){
    //Takes the parent of the string and replaces the string with every char wrapped in wrapper
    const wrappedContent = wrapAllCharsOfString(textParent.innerText,wrapper);
    textParent.innerHTML = wrappedContent.join('');

}
function wrapAllCharsOfString(string,wrapper){
//Returns an array of characters wrapped in a tag
    chars = string.split("");
    wrappedChars = [];
    chars.forEach(char => {
        const wrapped = wrapInTag(char,wrapper);
        wrappedChars.push(wrapped);
    });
    return wrappedChars;
}
function wrapInTag(toWrap,wrapper){
    //Takes var to wrap and wraps it in html tag defined by wrapper
    let wrapped = `<${wrapper}>${toWrap}</${wrapper}>`
    return wrapped;
}