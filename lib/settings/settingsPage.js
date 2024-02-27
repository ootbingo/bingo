import { settingDefs } from "../helpers/settingDefs.js";
import { reloadLocales, waitForLoad } from "../helpers/localization.js";
import { modifiedSettings } from "../helpers/settings.js";
import { trackerDefaults } from "../item-tracker/trackerDefaults.js";
import { renderSetting } from "./components/setting.js";
import { renderTrackerSetting } from "./components/trackerSetting.js";
import { renderBoard } from "../components/board.js";
import { renderPopoutRow } from "../components/popoutRow.js";
import { renderSettingGroup } from "./components/settingGroup.js";
import { addSettingListener } from "./helpers/handleSettingChange.js";
import { adjustGoalSizes } from "../helpers/adjustGoalSizes.js";
import { generateBoard } from "../helpers/generateBoard.js";

const renderPage = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  for (const def of settingDefs) {
    container.appendChild(renderSetting(def, 0));
  }

  const trackerWrapper = renderSettingGroup({ title: "Tracker" });
  const trackerSettingsWrapper = document.createElement("div");
  trackerSettingsWrapper.classList.add("tracker-settings");
  for (const goal of Object.keys(trackerDefaults)) {
    trackerSettingsWrapper.append(...renderTrackerSetting(goal));
  }
  trackerWrapper.querySelector("#settings").replaceWith(trackerSettingsWrapper);
  container.appendChild(trackerWrapper);
  generateBoard({ version: "10.4", seed: 1, mode: "normal" }).then(
    ({ board }) => {
      const table = renderBoard({
        board,
        version: "10.4",
        seed: 1,
        mode: "normal",
      });
      table.classList.add("sticky");
      document.querySelector(".bingo-board").replaceWith(table);
    }
  );
  const row = renderPopoutRow({
    title: "ROW1",
    goals: [
      "Green Gauntlets",
      "All 8 Zora's Domain area Skulltulas",
      "All 3 Elemental Arrows",
      "Boomerang",
      "Bullet Bag (50)",
    ],
  });
  row.classList.add("sticky");
  document.querySelector(".row-popout").replaceWith(row);
};

addSettingListener("language", async () => {
  const footer = document.querySelector(".save-footer");
  document.body.replaceChildren(footer);
  await reloadLocales();
  renderPage();
});

const settingsThatCauseResize = settingDefs
  .filter((group) => group.name === "Row Popout" || group.name === "Board")
  .flatMap((group) =>
    group.settings.filter(
      (def) => def.name === "Cell" || def.name === "Tracker"
    )
  )
  .flatMap((group) =>
    group.settings.filter(
      (def) =>
        def.type === "number" || def.type === "font" || def.type === "boolean"
    )
  );
let timeout = null;
settingsThatCauseResize.forEach((def) => {
  addSettingListener(def.id, () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      document.querySelectorAll(".goal").forEach((el) => adjustGoalSizes(el));
    }, 200);
  });
});

waitForLoad().then(renderPage);

const showToast = (content) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = content;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

const saveButton = document.querySelector("#save-settings");
saveButton.addEventListener("click", () => {
  localStorage.setItem("settings", JSON.stringify(modifiedSettings));
  showToast("Settings saved");
});

const resetButton = document.querySelector("#reset-settings");
resetButton.addEventListener("click", () => {
  localStorage.clear("settings");
  window.location.reload();
});

const exportButton = document.querySelector("#export-settings");
exportButton.addEventListener("click", () => {
  const fileContents = JSON.stringify(modifiedSettings, 2);
  const url = URL.createObjectURL(
    new Blob([fileContents], { type: "application/json" })
  );
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "bingo-settings.json";
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
});

const importInput = document.querySelector("#import-settings");
importInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    localStorage.setItem("settings", e.target.result);
    window.location.reload();
  };
  reader.readAsText(file);
});
