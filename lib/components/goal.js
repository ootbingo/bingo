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
  window.addEventListener("resize", () => adjustGoalSizes(el));

  return el;
};
