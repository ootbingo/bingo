// make popouts work locally
const DEV_MODE = false
const prefix = DEV_MODE ? '..' : '/bingo'


const maybeSettings = localStorage.getItem('bingo-settings');
let settings = maybeSettings ? JSON.parse(maybeSettings) : {}
settings = { ...defaultSettings, ...settings }

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
  settings.popoutWidth
  window.open(`${prefix}/board-popout.html?seed=${bingoOpts.seed}&mode=${bingoOpts.mode}&version=${bingoOpts.version}${langParamBoard}`, '_blank', `width=${settings.boardPopoutWidth}, height=${settings.boardPopoutHeight}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`);
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
if (newCards) {
  newCards.innerHTML = `
<a class="newcard" href="?mode=normal&seed=${Math.ceil(999999 * Math.random()).toString()}">Normal Card</a>
<a class="newcard" href="?mode=short&seed=${Math.ceil(999999 * Math.random()).toString()}">Short Card</a>
<a class="newcard" href="?mode=blackout&seed=${Math.ceil(999999 * Math.random()).toString()}">Blackout Card</a>
`;
}

const bingoFunc = ootBingoGenerator;

const bingoBoard = bingoFunc(bingoList, bingoOpts);

for (let i = 1; i <= 25; i++) {
  document.querySelector(`#slot${i}`).innerHTML = bingoBoard[i].name;
}
