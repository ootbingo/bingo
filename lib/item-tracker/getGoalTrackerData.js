import { trackerSettings } from "./trackerSettings.js";
import { trackerData } from "./trackerData.js";

export const getGoalTrackerData = (goal) => {
  const mode = trackerSettings[goal];
  if (!mode) {
    return;
  }
  for (const data of trackerData) {
    const matches = data.regex.exec(goal);
    if (matches) {
      return { mode, data, matches };
    }
  }
  return null;
};
