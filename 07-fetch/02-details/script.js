/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
async function getHeroes() {
    const url = '../../_shared/api.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Something went wrong fetching the API`)
        console.log(`async function getHeroes()`)
        console.log(`url: ${url}`)
        console.log(`res: ${response}`)
    }
}
async function displayHero(heroID) {
    try {
        const heroesAPIdata = await getHeroes();
        const heroes = await heroesAPIdata.heroes;
        const hero = heroes[heroID - 1]
        if (hero === undefined) {
            throw 'noHero'
        }else{
            document.getElementById('error').innerHTML = 'details';
        }
        const heroName = hero.name;
        const heroAE = hero.alterEgo;
        const heroPowers = hero.abilities.join(', ');
        addHeroToHTML(heroName, heroAE, heroPowers)
    } catch (error) {
        if (error = 'noHero'){
            const errormsg = `No hero was found with this ID`;
            document.getElementById('error').innerHTML = errormsg;
        }else{
            console.log(error)
        }
    }
}
function addHeroToHTML(name, alterego, powers) {
    const target = document.getElementById('target');
    const template = document.getElementById('tpl-hero');
    let clone = template.content.cloneNode(true);
    clone.querySelector('.name').innerHTML = name;
    clone.querySelector('.alter-ego').innerHTML = alterego;
    clone.querySelector('.powers').innerHTML = powers;
    target.appendChild(clone)
}
(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        const heroID = document.getElementById('hero-id').value;
        displayHero(heroID);
    })
})();
