/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //Create the table
    const table = document.createElement('table');

    //add 10 rows to the table
    for (i = 0; i < 10; i++) {
        table.insertRow().innerHTML = `${i + 1}`;

    }
    //Putting the 10 rows in an array
    const tableRows = Array.from(table.getElementsByTagName('tr'))
    //adding 10 cells to every row
    tableRows.forEach(row => {
        for (i = 0; i < 10; i++) {
            row.insertCell()
        }
    });
    //Adding content to the tablerows -
    for(rowCount=0;rowCount<tableRows.length;rowCount++){
        const currentRow = tableRows[rowCount];
        const currentRowValue = currentRow.innerText;
        for(cellCount=0;cellCount<currentRow.cells.length;cellCount++){
            const currentCell = currentRow.cells.item(cellCount);
            currentCell.innerHTML = `* ${cellCount+1} = ${currentRowValue*(cellCount+1)}`;
        }
    }
    //Add table to target
    document.getElementById('target').appendChild(table)
})();
