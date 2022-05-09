/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //get the image
    const img = document.querySelector('img');
    //Get original src to apply when mouse gets off
    const ogImgSrc = img.src;
    //Change source on mouseover
    img.addEventListener('mouseover',()=>{
        img.src = img.getAttribute('data-hover')
    })
    //Reapply original src when mouse leaves
    img.addEventListener('mouseout',()=>{
        img.src = ogImgSrc;
    })
    
})();
