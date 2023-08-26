// make popouts work locally
const DEV_MODE = false
const prefix = DEV_MODE ? '..' : '/bingo'


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

if (!searchParams.get("seed") || !searchParams.get("mode")) {
  searchParams.set("seed", bingoOpts.seed);
  searchParams.set("mode", bingoOpts.mode);
  window.location.search = searchParams;
}

const bingoPage = document.getElementById('bingoPage');
if (settings.boardTheme === "modern") {
  bingoPage.classList.add("modern");
}

document.querySelectorAll('#bingo tr td:not(.popout):not(#board-popout):not(#bingo-info), #selected td').forEach(el => el.addEventListener('click', () => {
  if (el.classList.contains('greensquare')) {
    el.classList.add('redsquare');
    el.classList.remove('greensquare');
  } else if (el.classList.contains('redsquare')) {
    el.classList.remove('redsquare');
  } else {
    el.classList.add('greensquare');
  }
}));

const addLineHoverListener = line => {
  document.querySelector(`#${line}`).addEventListener('mouseover', () => {
    document.querySelectorAll(`.${line}`).forEach(el => el.classList.add('hover'));
  });
  document.querySelector(`#${line}`).addEventListener('mouseout', () => {
    document.querySelectorAll(`.${line}`).forEach(el => el.classList.remove('hover'));
  });
};

[
  ...[1, 2, 3, 4, 5].map(n => `row${n}`),
  ...[1, 2, 3, 4, 5].map(n => `col${n}`),
  'tlbr',
  'bltr'
].forEach(line => addLineHoverListener(line));

allSquares = []
for (let i = 1; i <= 25; i++) {
  allSquares.push(document.querySelector(`#slot${i}`))
}

const boardPopoutButton = document.querySelector('#board-popout')
if (boardPopoutButton) {
  boardPopoutButton.addEventListener('mouseover', () => {
    allSquares.forEach(el => el.classList.add('hover'))
  })
  boardPopoutButton.addEventListener('mouseout', () => {
    allSquares.forEach(el => el.classList.remove('hover'));
  });
}

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

const langParamBoard = bingoOpts.lang === 'jp' ? '&lang=jp' : ''
document.querySelectorAll('#board-popout').forEach(el => el.addEventListener('click', () => {
  let width = parseInt(settings.boardPopoutWidth);
  let height = parseInt(settings.boardPopoutHeight);
  if (bingoOpts.mode === 'blackout' && settings.boardBlackoutTracker === 'enabled') {
    width = Math.max(width, 970);
    height = Math.max(height, 800);
  }
  window.open(`${prefix}/board-popout.html?seed=${bingoOpts.seed}&mode=${bingoOpts.mode}&version=${bingoOpts.version}${langParamBoard}`, '_blank', `width=${width}, height=${height}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`);
}));

const langParamRow = bingoOpts.lang === 'jp' ? '?lang=jp' : ''
document.querySelectorAll('.popout').forEach(el => el.addEventListener('click', () => {
  const line = el.id;
  const name = el.textContent;
  const cells = document.querySelectorAll(`#bingo .${line}`);
  const items = Array.from(cells).map(cell => cell.textContent);
  window.open(`${prefix}/bingo-popout.html${langParamRow}#${encodeURIComponent(`${name}=${items.join(';;;')}`)}`, '_blank', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${settings.rowPopoutWidth}, height=${settings.rowPopoutHeight}`);
}));

const newCards = document.querySelector('#newcards');
const versionParam = `version=${searchParams.get("version")}`;
const seedParam = `seed=${Math.ceil(999999 * Math.random()).toString()}`;
if (newCards) {
  newCards.innerHTML = `
<a class="newcard" href="?${versionParam}&mode=normal&${seedParam}">Normal Card</a>
<a class="newcard" href="?${versionParam}&mode=short&${seedParam}">Short Card</a>
<a class="newcard" href="?${versionParam}&mode=blackout&${seedParam}">Blackout Card</a>
`;
}

// BingoLibrary contains the generator function of newer generators
const bingoFunc = typeof BingoLibrary !== 'undefined' ? BingoLibrary.ootBingoGenerator : ootBingoGenerator;

const bingoBoard = bingoFunc(bingoList, bingoOpts);

let getGoalName;

if (bingoOpts.lang === 'jp' && bingoBoard[1].jp) {
  getGoalName = square => square.jp;
} else {
  getGoalName = square => square.name;
}

for (let i = 1; i <= 25; i++) {
  document.querySelector(`#slot${i}`).innerHTML = getGoalName(bingoBoard[i]);
}

const getRandomLetter = () => String.fromCharCode(Math.floor(((Math.random() * 100) % 26) + 65));
const fileName = getRandomLetter() + getRandomLetter();
if (settings.fileName) {
  boardInfo.innerHTML += `&emsp;FileName: <strong>${fileName}</strong>`;
}
