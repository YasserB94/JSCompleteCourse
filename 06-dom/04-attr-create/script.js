/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Create new image element
    const newImageElement = document.createElement('img')
    //Add source from source
    newImageElement.src = document.getElementById('source').getAttribute('data-image')
    //No alt tag, no love!
    newImageElement.alt = 'Random kitten generator';
    //Add the image to the target
    document.getElementById('target').append(newImageElement)
    //Remove original element
    document.getElementById('source').remove()
})();
