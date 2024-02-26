import { fromHtml } from "../../helpers/fromHtml.js";
import { getGoalTrackerData } from "../../item-tracker/getGoalTrackerData.js";
import { trackerSettings } from "../../item-tracker/trackerSettings.js";
import { renderGoal } from "../../components/goal.js";
import { localize } from "../../helpers/localization.js";
const template = ({ name }) => `
  <div class="tracker-setting">
    <div>${localize(name)}</div>
    <div class="mode">
      <slot id="radio"></slot>
    </div>
  </div>
`;

const radioTemplate = ({ name, value, checked }) => `
  <label>
    <input type="radio" name="${name}" value="${value}" ${
  checked ? "checked" : ""
} >
    <div class="mode-option">${value}</div>
  </label>
`;

export const renderTrackerSetting = (goal) => {
  const data = getGoalTrackerData(goal);
  if (!data) {
    return null;
  }
  const goalWrapper = document.createElement("div");
  goalWrapper.classList.add("row-popout");
  let goalEl = renderGoal({ goalName: goal });
  goalWrapper.appendChild(goalEl);
  const boardWrapper = document.createElement("div");
  boardWrapper.classList.add("bingo-board");
  boardWrapper.classList.add("blackout");
  let goalEl2 = renderGoal({ goalName: goal });
  boardWrapper.appendChild(goalEl2);

  const el = fromHtml(template({ name: goal }));

  const children = [...Object.keys(data.data.options), "none"].map((mode) => {
    const radio = fromHtml(
      radioTemplate({
        name: goal,
        value: mode,
        checked: mode === trackerSettings[goal],
      })
    );
    radio.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        trackerSettings[goal] = mode;
        const newGoal = renderGoal({ goalName: goal });
        goalEl.replaceWith(newGoal);
        goalEl = newGoal;
      }
    });
    return radio;
  });
  el.querySelector("#radio").replaceWith(...children);

  return [el, goalWrapper, boardWrapper];
};
