import { settings, getSettingField } from "../../helpers/settings.js";
import { getAvailableLocales } from "../../helpers/localization.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { renderSelect } from "./select.js";
import { localize } from "../../helpers/localization.js";

export const renderLanguageSetting = (setting) =>
  renderSelect({
    value: settings[getSettingField(setting)],
    label: localize(setting.label),
    options: getAvailableLocales().map((locale) => ({
      value: locale.code,
      label: locale.name,
    })),
    onChange: (value) => {
      handleSettingChange(setting, value);
    },
  });
