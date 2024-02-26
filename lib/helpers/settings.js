import { settingDefs } from "./settingDefs.js";

export const modifiedSettings =
  JSON.parse(localStorage.getItem("settings")) ?? {};

export const getSettingField = (setting) =>
  setting.id.replace(/-./g, (s) => s.substring(1).toUpperCase());

const flattenSettings = (settings) => {
  return settings.flatMap((entry) => {
    if (entry.settings) {
      return flattenSettings(entry.settings);
    }
    return entry;
  });
};

const flatSettings = flattenSettings(settingDefs);

export const settings = {
  ...Object.fromEntries(
    flatSettings.map((def) => [getSettingField(def), def.defaultValue])
  ),
  ...modifiedSettings,
};

const injectCss = () => {
  for (const def of flatSettings) {
    if (def.injectCss) {
      document.documentElement.style.setProperty(
        `--${def.id}`,
        `${settings[getSettingField(def)]}${def.unit ?? ""}`
      );
    }
  }
};
const injectClass = () => {
  for (const def of flatSettings) {
    if (def.injectClass && settings[getSettingField(def)]) {
      document.body.classList.add(def.id);
    }
  }
};
injectCss();
injectClass();
