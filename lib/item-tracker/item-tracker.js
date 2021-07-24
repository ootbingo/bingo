const counterComponent = ({ denominator, icon }, matches) => {
  if (denominator === undefined) {
    denominator = +matches[1];
  }
  const container = document.createElement('div');
  container.classList.add('counter');
  let state = 0;
  const total = window.trackerOptions.total ? `/${denominator}` : "";

  const button = document.createElement('button');
  button.innerHTML = `<img class=counter-icon src="./lib/item-tracker/icons/${icon}.ico">`;

  const textEl = document.createTextNode(state + total);

  button.addEventListener('click', e => {
    e.stopPropagation();
    if (state < denominator) {
      state++;
    } else {
      state = 0;
    }
    textEl.textContent = state + total;
  });

  button.addEventListener('contextmenu', e => {
    e.stopPropagation();
    e.preventDefault();
    if (state > 0) {
      state--;
    } else {
      state = 0;
    }
    textEl.textContent = state + total;
  });

  container.appendChild(button);
  container.appendChild(textEl);
  return container;
};

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
      const filename = typeof icon === "string" ? icon : icon.filename;
      checkbox.innerHTML = `<input type="checkbox"><img class="token-icon" src="./lib/item-tracker/icons/${filename}.ico">`;
      checkbox.className = 'token-label';
      checkbox.querySelector("input").checked = typeof icon === "object" && icon.selected === true;
      checkbox.addEventListener('click', e => e.stopPropagation());
      checkbox.addEventListener('contextmenu', e => {
        e.preventDefault();
        e.stopPropagation();
        checkbox.hidden = true;
      });
      rowEl.appendChild(checkbox);
    });
    container.appendChild(rowEl);
  });
  return container;
};

const retrieveCaseInsensitive = (obj, target) => {
  for (key in obj) {
    if (key.toLowerCase() === target.toLowerCase()) {
      return obj[key]
    }
  }
}

document.querySelectorAll('td').forEach(el => {
  const goal = el.textContent;
  const mode = retrieveCaseInsensitive(window.trackerOptions.settings, goal) || retrieveCaseInsensitive(window.trackerDefaults, goal) || 'none';
  let matchingData = null;
  let matches = [];
  for (let i = 0; i < window.trackerData.length; i++) {
    matchingData = window.trackerData[i];
    matches = matchingData.regex.exec(goal);
    if (matches) {
      break;
    }
    if ('regexJP' in matchingData) {
      matches = matchingData.regexJP.exec(goal);
      if (matches) {
        break;
      }
    }
  }

  if (!matches || matchingData === null) {
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
      el.addEventListener('contextmenu', e => {
        e.preventDefault();
        el.querySelectorAll('label').forEach(token => token.hidden = false);
      });
      break;
    case 'counter':
      el.appendChild(counterComponent(matchingData.options.counter, matches));
      break;
  }
});
