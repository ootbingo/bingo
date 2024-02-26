import { renderColorInput } from "./colorInput.js";
import { settings, getSettingField } from "../../helpers/settings.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { localize } from "../../helpers/localization.js";

export const renderColorSetting = (setting) =>
  renderColorInput({
    value: settings[getSettingField(setting)],
    label: localize(setting.label),
    onChange: (value) => {
      handleSettingChange(setting, value);
    },
  });
