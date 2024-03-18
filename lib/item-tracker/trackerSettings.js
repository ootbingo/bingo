import { trackerDefaults } from "./trackerDefaults.js";

export const modifiedTrackerSettings =
  JSON.parse(localStorage.getItem("tracker")) ?? {};

export const trackerSettings = {
  ...trackerDefaults,
  ...(JSON.parse(localStorage.getItem("tracker")) ?? {}),
};

export const handleTrackerSettingChange = (goal, value) => {
  modifiedTrackerSettings[goal] = value;
  trackerSettings[goal] = value;
};
