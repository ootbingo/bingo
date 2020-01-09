const counterComponent = ({ denominator, icon }, matches) => {
  if (denominator === undefined) {
    denominator = +matches[1];
  }
  const container = document.createElement('div');
  container.classList.add('counter');
  let state = 0;

  const button = document.createElement('button');
  button.innerHTML = `<img src="./lib/item-tracker/icons/${icon}.ico">`;

  const textEl = document.createTextNode(state);

  button.addEventListener('click', e => {
    e.stopPropagation();
    if (state < denominator) {
      state++;
    } else {
      state = 0;
    }
    textEl.textContent = state;
  });

  container.appendChild(button);
  container.appendChild(textEl);
  return container;
}

const tokensComponent = ({ rows, icon }, matches) => {
  if (!rows) {
    rows = [[...new Array(+matches[1])].map(() => icon)];
  }
  const container = document.createElement('div');
  container.classList.add('tokens');
  rows.forEach(icons => {
    const rowEl = document.createElement('div');
    icons.forEach(icon => {
      const checkbox = document.createElement('label');
      checkbox.innerHTML = `<input type="checkbox"><img src="./lib/item-tracker/icons/${icon}.ico">`;
      checkbox.addEventListener('click', e => e.stopPropagation());
      rowEl.appendChild(checkbox);
    });
    container.appendChild(rowEl);
  });
  return container;
}

document.querySelectorAll('td').forEach(el => {
  const goal = el.textContent;

  const mode = window.trackerOptions.settings[goal] || window.trackerDefaults[goal] || 'none';
  if (mode === 'none') {
    return;
  }

  let matchingData = null;
  let matches = [];
  for (let i = 0; i < window.trackerData.length; i++) {
    matchingData = window.trackerData[i];
    matches = matchingData.regex.exec(goal);
    if (matches) {
      break;
    }
  }

  if (!matches) {
    return;
  }

  switch (mode) {
    case 'tokens':
      if (matchingData.options.tokens.removeText) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }
      el.appendChild(tokensComponent(matchingData.options.tokens, matches));
      break;
    case 'counter':
      el.appendChild(counterComponent(matchingData.options.counter, matches));
      break;
  }
})
