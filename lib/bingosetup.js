const maybeSettings = localStorage.getItem('layout-settings');
const settings = maybeSettings ? JSON.parse(maybeSettings) : defaultLayoutSettings

document.querySelectorAll('.popout').forEach(el => el.addEventListener('click', () => {
  const line = el.id;
  const name = el.textContent;
  const cells = document.querySelectorAll(`#bingo .${line}`);
  const items = Array.from(cells).map(cell => cell.textContent);
  window.open(`../bingo-popout.html#${encodeURIComponent(`${name}=${items.join(';;;')}`)}`, '_blank', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${settings.popoutWidth}, height=${settings.popoutHeight}`);
}));


//theme
if (settings.modern) {
  bingoPage.classList.add("modern");
} else {
  bingoPage.classList.remove("modern");
}


document.querySelectorAll('#bingo tr td:not(.popout), #selected td').forEach(el => el.addEventListener('click', () => {
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
  'bltr',
].forEach(line => addLineHoverListener(line));

const searchParams = new URLSearchParams(window.location.search);

const bingoOpts = {
  seed: searchParams.get('seed') || Math.ceil(999999 * Math.random()).toString(),
  mode: searchParams.get('mode') || 'normal',
  lang: searchParams.get('lang') || 'name'
};

const prettyMode = {
  'normal': 'Normal',
  'short': 'Short',
  'long': 'Long',
  'blackout': 'Blackout'
};

const cardType = prettyMode[bingoOpts.mode];
const results = document.querySelector('#results');
const infoEl = document.createElement('p');
infoEl.innerHTML = `
OoT Bingo <strong>${bingoList["info"].version}</strong>&emsp;
Seed: <strong>${bingoOpts.seed}</strong>&emsp;
Card type: <strong>${cardType}</strong>
`;
results.append(infoEl);

const englishLink = document.createElement('a');
const japaneseLink = document.createElement('a');
results.append(englishLink, japaneseLink);

englishLink.outerHTML = `<a class="flag" href="?mode=${bingoOpts.mode}&seed=${bingoOpts.seed}"><img src="../img/flags/United_States_of_America.png" alt="English"></a>`;
japaneseLink.outerHTML = `<a class="flag" href="?mode=${bingoOpts.mode}&seed=${bingoOpts.seed}&lang=jp"><img src="../img/flags/Japan.png" alt="Japanese"></a>`;

const newCards = document.querySelector('#newcards');
newCards.innerHTML = `
<a class="newcard" href="?mode=normal&seed=${Math.ceil(999999 * Math.random()).toString()}">Normal card</a>
<a class="newcard" href="?mode=short&seed=${Math.ceil(999999 * Math.random()).toString()}">Short card</a>
<a class="newcard" href="?mode=blackout&seed=${Math.ceil(999999 * Math.random()).toString()}">Blackout card</a>
`;

const bingoFunc = ootBingoGenerator;

const bingoBoard = bingoFunc(bingoList, bingoOpts);

for (let i = 1; i <= 25; i++) {
  document.querySelector(`#slot${i}`).innerHTML = bingoBoard[i].name;
}
