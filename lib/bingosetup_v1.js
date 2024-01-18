const maybeSettings = localStorage.getItem('bingo-settings');
let settings = maybeSettings ? JSON.parse(maybeSettings) : {}
settings = {...defaultSettings, ...settings}

const maybeTrackerOptions = window.localStorage.getItem('tracker');

const searchParams = new URLSearchParams(window.location.search);
const bingoOpts = {
  seed: searchParams.get('seed') || Math.ceil(999999 * Math.random()).toString(),
  mode: searchParams.get('mode') || 'normal',
  lang: searchParams.get('lang') || settings.language || 'name',
  version: bingoList["info"].version
};

const prettyMode = {
  'normal': 'Normal',
  'short': 'Short',
  'long': 'Long',
  'blackout': 'Blackout'
};

const cardType = prettyMode[bingoOpts.mode];
const boardInfo = document.querySelector('#bingo-info');
boardInfo.innerHTML = `
OoT Bingo <strong>${bingoOpts.version}</strong>&emsp;
Seed: <strong>${bingoOpts.seed}</strong>&emsp;
Card type: <strong>${cardType}</strong>
`;

const newCards = document.querySelector('#newcards');
const seedParam = `seed=${Math.ceil(999999 * Math.random()).toString()}`;
if (newCards) {
  newCards.innerHTML = `
<a class="newcard" href="?${seedParam}">New Goal</a>
`;
}

// BingoLibrary contains the generator function of newer generators
const bingoFunc = typeof BingoLibrary !== 'undefined' ? BingoLibrary.ootBingoGenerator : ootBingoGenerator;

const chosenGoal = bingoFunc(bingoList, bingoOpts);

document.getElementById("givenitem").innerHTML = `<strong>${chosenGoal}</strong>`;
