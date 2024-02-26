import { settings, getSettingField } from "../../helpers/settings.js";
import { renderSelect } from "./select.js";
import { handleSettingChange } from "../helpers/handleSettingChange.js";
import { localize } from "../../helpers/localization.js";

const fonts = [
  "Roboto",
  "Ocarina of Time (in-game)",
  "Ocarina of Time (in-game bosses)",
  "Ocarina of Time (title)",
  "The Legend of Zelda (title)",
  "The Legend of Zelda (in-game)",
  "A Link to the Past (in-game)",
  "Link's Awakening (in-game)",
  "Oracles (in-game)",
  "Twilight Princess (in-game)",
  "The Wind Waker (in-game)",
  "The Wind Waker (in-game headers)",
  "Breath of the Wild (title)",
  "Breath of the Wild (title damaged)",
];

export const renderFontSetting = (setting) =>
  renderSelect({
    value: settings[getSettingField(setting)],
    label: localize(setting.label),
    options: fonts.map((font) => ({
      label: font,
      value: `"${font}"`,
      font: `"${font}"`,
    })),
    onChange: (value) => {
      handleSettingChange(setting, value);
    },
  });
