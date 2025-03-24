import { localize } from "../helpers/localization.js";
import { fromHtml } from "../helpers/fromHtml.js";
import { cx } from "../helpers/cx.js";
import { renderTracker } from "../item-tracker/itemTracker.js";
import { adjustGoalSizes } from "../helpers/adjustGoalSizes.js";

const template = ({ goalName, rowNumber, colNumber, hideText }) => `
  <div class="${cx(
    "goal",
    rowNumber && `row${rowNumber}`,
    colNumber && `col${colNumber}`,
    rowNumber && colNumber && rowNumber === colNumber && "tlbr",
    rowNumber && colNumber && rowNumber === 6 - colNumber && "bltr",
    hideText && "hide-text"
  )}" data-goal="${goalName}">
    <svg class="star" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"
      />
    </svg>
    <span>${goalName}</span>
  </div>
`;

/**
 * @param {object} props
 * @param {string} props.goalName
 * @param {number} [props.rowNumber]
 * @param {number} [props.colNumber]
 * @returns {HTMLTableCellElement}
 */
export const renderGoal = ({ goalName, rowNumber, colNumber }) => {
  const trackerData = renderTracker({ goal: goalName });
  const el = fromHtml(
    template({
      goalName: localize(goalName),
      rowNumber,
      colNumber,
      hideText: trackerData?.hideText ?? false,
    })
  );
  if (trackerData) {
    el.append(...trackerData.elements);
  }
  setTimeout(() => adjustGoalSizes(el), 0);
  el.addEventListener("click", () => {
    switch (el.dataset.state) {
      case "green":
        el.dataset.state = "red";
        break;
      case "red":
        el.dataset.state = "none";
        break;
      default:
        el.dataset.state = "green";
    }
  });
  el.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (el.dataset.starred === "starred") {
      delete el.dataset.starred;
    } else {
      el.dataset.starred = "starred";
    }
  });
  window.addEventListener("resize", () => adjustGoalSizes(el));

  return el;
};
