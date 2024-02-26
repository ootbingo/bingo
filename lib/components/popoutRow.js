import { fromHtml } from "../helpers/fromHtml.js";
import { renderGoal } from "./goal.js";
import { localize } from "../helpers/localization.js";

const template = ({ title }) => `
  <div class="row-popout table">
    <div class="header">${localize(title)}</div>
    <slot id="children"></slot>
  </div>
`;

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string[]} props.goals
 * @returns
 */
export const renderPopoutRow = ({ title, goals }) => {
  const table = fromHtml(template({ title }));
  const goalEls = goals.map((goalName) => renderGoal({ goalName }));

  table.querySelector("#children").replaceWith(...goalEls);
  return table;
};
