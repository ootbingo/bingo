import {
  settings,
  getSettingField,
  modifiedSettings,
} from "../../helpers/settings.js";

const listeners = new Map();

export const addSettingListener = (setting, listener) => {
  let lists = listeners.get(setting);
  if (!lists) {
    lists = new Set();
    listeners.set(setting, lists);
  }
  lists.add(listener);
};

export const handleSettingChange = (setting, value) => {
  modifiedSettings[getSettingField(setting)] = value;
  settings[getSettingField(setting)] = value;
  if (setting.injectCss) {
    document.documentElement.style.setProperty(
      `--${setting.id}`,
      `${value}${setting.unit ?? ""}`
    );
  }
  if (setting.injectClass) {
    if (value) {
      document.body.classList.add(setting.id);
    } else {
      document.body.classList.remove(setting.id);
    }
  }
  listeners.get(setting.id)?.forEach((listener) => listener());
};
