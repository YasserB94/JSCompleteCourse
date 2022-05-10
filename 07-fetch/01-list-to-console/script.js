/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// let data = await fetch(
//     '../../_shared/api.json'
// )
// let main = await data.json;
(() => {
    // your code here
    getHeroes();
})();
function getHeroes() {
    fetchHeroes().then(
        (response) => {
            if (response === undefined) {
                throw 'NoData'
            }
            console.log(response)
        }
    ).catch((error) => {
        console.log(`There was an error getting heroes:${error}`)
    }).catch((error) => {
        if (error === 'NoData') {
            console.log(`${error}: No data was received from fetchHeroes`)
        } else {
            console.log(`Sorry, this error has not been handled: ${error}`)
        }
    })
}
async function fetchHeroes() {
    const url = '../../_shared/api.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`There was an error fetching heroes api:${error}`)
    }
}