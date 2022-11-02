// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCounter = 0;
let middleCounter = 0;
let bottomCounter = 0;
// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    headCounter++;
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    displayStats();
});

middleDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    middleCounter++;
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    displayStats();
});

bottomDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    bottomCounter++;
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    // push the new catchphrase to the catchphrase array in state
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
    reportEl.textContent = `You have changed heads ${headCounter} times, middles ${middleCounter} times, and pants ${bottomCounter} times`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
