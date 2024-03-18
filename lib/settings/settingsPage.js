import { settingDefs } from "../helpers/settingDefs.js";
import { reloadLocales, waitForLoad } from "../helpers/localization.js";
import { trackerDefaults } from "../item-tracker/trackerDefaults.js";
import { renderSetting } from "./components/setting.js";
import { renderTrackerSetting } from "./components/trackerSetting.js";
import { renderBoard } from "../components/board.js";
import { renderPopoutRow } from "../components/popoutRow.js";
import { renderSettingGroup } from "./components/settingGroup.js";
import { addSettingListener } from "./helpers/handleSettingChange.js";
import { adjustGoalSizes } from "../helpers/adjustGoalSizes.js";
import { generateBoard } from "../helpers/generateBoard.js";
import { renderMeasurer } from "./components/measurer.js";
import { renderFooter } from "./components/footer.js";

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
      const tableMeasurer = renderMeasurer();
      const table = renderBoard({
        board,
        version: "10.4",
        seed: 1,
        mode: "normal",
      });
      tableMeasurer.classList.add("sticky");
      tableMeasurer.querySelector("#children").replaceWith(table);
      document.querySelector(".bingo-board").replaceWith(tableMeasurer);
    }
  );
  const rowMeasurer = renderMeasurer();
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
  rowMeasurer.classList.add("sticky");
  rowMeasurer.querySelector("#children").replaceWith(row);
  document.querySelector(".row-popout").replaceWith(rowMeasurer);
  document.body.appendChild(renderFooter());
};

addSettingListener("language", async () => {
  document.body.replaceChildren([]);
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
