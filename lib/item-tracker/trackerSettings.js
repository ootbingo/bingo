import { trackerDefaults } from "./trackerDefaults.js";

export const trackerSettings = {
  ...trackerDefaults,
  ...(JSON.parse(localStorage.getItem("tracker")) ?? {}),
};
