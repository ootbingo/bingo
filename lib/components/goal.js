import { localize } from "../helpers/localization.js";
import { fromHtml } from "../helpers/fromHtml.js";
import { cx } from "../helpers/cx.js";
import { renderTracker } from "../item-tracker/itemTracker.js";
import { adjustGoalSizes } from "../helpers/adjustGoalSizes.js";

const template = ({ goalName, rowNumber, colNumber }) => `
  <div class="${cx(
    "goal",
    rowNumber && `row${rowNumber}`,
    colNumber && `col${colNumber}`,
    rowNumber && colNumber && rowNumber === colNumber && "tlbr",
    rowNumber && colNumber && rowNumber === 6 - colNumber && "bltr"
  )}">
    ${goalName}
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
  const el = fromHtml(
    template({ goalName: localize(goalName), rowNumber, colNumber })
  );
  const tracker = renderTracker({ goal: goalName });
  if (tracker) {
    el.append(...tracker);
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

  return el;
};
