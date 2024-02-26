import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ denominator, icon }) => `
  <div class="counter" data-state="0">
    <button>
      <img class="counter-icon" src="./lib/item-tracker/icons/${icon}.ico">
    </button>
    <slot id="children"></slot>
    <span class="denominator">&nbsp;/ ${denominator}</span>
  </div>
`;

const numberTemplate = ({ number, show }) => `
  <div class="number" style="transform: rotateX(${
    number * 36
  }deg) translateZ(75px)">
    ${show ? number : ""}
  </div>`;

/**
 *
 * @param {object} props
 * @param {number} props.denominator
 * @param {string} props.icon
 * @returns
 */
export const renderCounter = ({ denominator, icon }) => {
  if (denominator === undefined) {
    denominator = matchingNumber;
  }
  const el = fromHtml(template({ denominator, icon }));
  const numbers = [...new Array(Math.floor(Math.log10(denominator)) + 1)].map(
    (_, i) => {
      const outerWrapper = document.createElement("div");
      outerWrapper.classList.add("number-wrapper");
      const innerWrapper = document.createElement("div");
      innerWrapper.classList.add("rotate-wrapper");
      outerWrapper.appendChild(innerWrapper);
      const children = [...new Array(10)].map((_, j) =>
        fromHtml(numberTemplate({ number: j, show: i === 0 || j > 0 }))
      );
      innerWrapper.append(...children);
      return [i, outerWrapper];
    }
  );
  numbers.reverse();
  el.querySelector("#children").replaceWith(...numbers.map(([, el]) => el));
  const button = el.querySelector("button");
  el.dataset.state = 0;

  const updateDigits = () =>
    numbers.forEach(([i, numberEl]) => {
      const digit = Math.floor(el.dataset.state / 10 ** i);
      numberEl.childNodes[0].style.transform = `rotateX(${digit * -36}deg)`;
    });

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const state = +el.dataset.state;
    if (state < denominator) {
      el.dataset.state = state + 1;
    } else {
      el.dataset.state = 0;
    }
    updateDigits();
  });

  button.addEventListener("contextmenu", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const state = +el.dataset.state;
    if (state > 0) {
      el.dataset.state = state - 1;
    } else {
      el.dataset.state;
    }
    updateDigits();
  });
  return el;
};
