import { renderInput } from "./input.js";
import { settings, getSettingField } from "../../helpers/settings.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { localize } from "../../helpers/localization.js";
export const renderNumberSetting = (setting) =>
  renderInput({
    value: settings[getSettingField(setting)],
    type: "number",
    label: localize(setting.label),
    suffix: setting.unit,
    onChange: (value) => handleSettingChange(setting, parseFloat(value)),
  });
