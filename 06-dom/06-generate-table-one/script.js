/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Create the table
    const table = document.createElement('table');
    //add 10 rows and add the count inside of them
    for(i=0;i<10;i++){
        table.insertRow().innerHTML = `Row number: ${i+1}`
    }
    //Add the table to the html
    document.getElementById('target').appendChild(table)


})();
