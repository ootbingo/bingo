import { renderCheckbox } from "./checkbox.js";
import { settings, getSettingField } from "../../helpers/settings.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { localize } from "../../helpers/localization.js";

export const renderBooleanSetting = (setting) =>
  renderCheckbox({
    checked: settings[getSettingField(setting)],
    label: localize(setting.label),
    onChange: (value) => {
      handleSettingChange(setting, value);
    },
  });
