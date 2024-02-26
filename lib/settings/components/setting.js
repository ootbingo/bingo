import { renderBooleanSetting } from "./booleanSetting.js";
import { renderNumberSetting } from "./numberSetting.js";
import { renderColorSetting } from "./colorSetting.js";
import { renderFontSetting } from "./fontSetting.js";
import { renderLanguageSetting } from "./languageSetting.js";
import { renderSettingGroup } from "./settingGroup.js";

export const renderSetting = (def, depth) => {
  if (def.settings) {
    const settingGroup = renderSettingGroup({ title: def.name });

    const settingEls = def.settings.map((s) => renderSetting(s, depth + 1));
    settingGroup.querySelector("#settings").replaceWith(...settingEls);
    if (def.display === "board") {
      const placeholder = document.createElement("div");
      placeholder.classList.add("bingo-board");
      settingGroup.querySelector("#example").replaceWith(placeholder);
    } else if (def.display === "row-popout") {
      const placeholder = document.createElement("div");
      placeholder.classList.add("row-popout");
      settingGroup.querySelector("#example").replaceWith(placeholder);
    } else {
      settingGroup.querySelector("#example").remove();
    }
    return settingGroup;
  } else {
    switch (def.type) {
      case "boolean":
        return renderBooleanSetting(def);
      case "number":
        return renderNumberSetting(def);
      case "color":
        return renderColorSetting(def);
      case "language":
        return renderLanguageSetting(def);
      case "font":
        return renderFontSetting(def);
    }
  }
};
