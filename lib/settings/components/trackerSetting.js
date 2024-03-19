import { fromHtml } from "../../helpers/fromHtml.js";
import { getGoalTrackerData } from "../../item-tracker/getGoalTrackerData.js";
import { trackerSettings } from "../../item-tracker/trackerSettings.js";
import { renderGoal } from "../../components/goal.js";
import { localize } from "../../helpers/localization.js";
import { handleTrackerSettingChange } from "../../item-tracker/trackerSettings.js";
import { renderCheckbox } from "./checkbox.js";

const template = ({ name }) => `
  <div class="tracker-setting">
    <div>${localize(name)}</div>
    <slot id="hideText"></slot>
    <div class="mode">
      <slot id="radio"></slot>
    </div>
  </div>
`;

const radioTemplate = ({ name, value, checked }) => `
  <label class="radio">
    <input type="radio" name="${name}" value="${value}" ${
  checked ? "checked" : ""
} >
    <div class="mode-option">${localize(value)}</div>
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

  const trackerData =
    typeof trackerSettings[goal] === "object"
      ? trackerSettings[goal]
      : {
          mode: trackerSettings[goal] ?? "none",
          hideText: false,
        };

  const rerenderGoals = () => {
    const newGoal = renderGoal({ goalName: goal });
    goalEl.replaceWith(newGoal);
    goalEl = newGoal;
    const newGoal2 = renderGoal({ goalName: goal });
    goalEl2.replaceWith(newGoal2);
    goalEl2 = newGoal2;
  };

  const hideTextCheckbox = renderCheckbox({
    checked: trackerData.hideText,
    label: localize("Hide text"),
    onChange: (val) => {
      handleTrackerSettingChange(
        goal,
        typeof trackerSettings[goal] === "object"
          ? {
              ...trackerSettings[goal],
              hideText: val,
            }
          : {
              mode: trackerSettings[goal],
              hideText: val,
            }
      );
      rerenderGoals();
    },
  });

  const children = [...Object.keys(data.data.options), "none"].map((mode) => {
    const radio = fromHtml(
      radioTemplate({
        name: goal,
        value: mode,
        checked: mode === trackerData.mode,
      })
    );
    radio.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        handleTrackerSettingChange(
          goal,
          typeof trackerSettings[goal] === "object"
            ? {
                ...trackerSettings[goal],
                mode,
              }
            : mode
        );
        rerenderGoals();
      }
    });
    return radio;
  });
  el.querySelector("#hideText").replaceWith(hideTextCheckbox);
  el.querySelector("#radio").replaceWith(...children);

  return [el, goalWrapper, boardWrapper];
};
