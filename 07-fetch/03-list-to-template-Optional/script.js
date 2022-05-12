/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        document.getElementById('run').addEventListener('click', () => {
            displayHeros();
        })

})();
async function displayHeros() {
    const data = await getHeroesFromAPI();
    const heroes = data.heroes
    for (i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        const name = hero.name;
        const alterego = hero.alterEgo;
        const heroPowers = hero.abilities.join(', ');
        document.getElementById('target').appendChild(createHeroHtml(name, alterego, heroPowers));
    }
}
async function getHeroesFromAPI() {
    const url = '../../_shared/api.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error getting the Heroes data');
        console.log(`API url:${url}`);
        console.log(`API fetch response: ${response}`);
        console.log(`response.json:${data}`)
        console.log(`Error: ${error}`)
    }
}

function getHeroHTMLTemplate() {
    try {
        const template = document.getElementById('tpl-hero');
        const clone = template.content.cloneNode(true);
        return clone;
    } catch (error) {
        console.log('There was an error getting the template to display the heroes');
        console.log(`Received template: ${template}`)
        console.log(`cloneNode: ${clone}`)
        console.log(`Error: ${error}`)
    }
}
function createHeroHtml(name, alterego, powers) {
    try {
        const template = getHeroHTMLTemplate();
        template.querySelector(`.name`).innerHTML = name;
        template.querySelector(`.alter-ego`).innerHTML = alterego;
        template.querySelector(`.powers`).innerHTML = powers;
        return template;
    } catch (error) {
        console.log('There was an error filling in the template');
        console.log(`Hero characteristics received:${name},${alterego},${powers}`)
        console.log(`Template used:${template}`)
        console.log(`Error:${error}`)
    }
}




//dustinbred .com
//INPUT SANITATION
