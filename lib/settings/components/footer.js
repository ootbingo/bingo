import { localize } from "../../helpers/localization.js";
import { fromHtml } from "../../helpers/fromHtml.js";
import { modifiedSettings } from "../../helpers/settings.js";
import { modifiedTrackerSettings } from "../../item-tracker/trackerSettings.js";

const template = () => `<div class="save-footer">
  <div>
    <label class="file-import">
      ${localize("Import (general)")}
      <input type="file" id="import-settings" accept=".json" />
    </label>
    <button id="export-settings">${localize("Export (general)")}</button>
    <label class="file-import">
      ${localize("Import (tracker)")}
      <input type="file" id="import-tracker-settings" accept=".json" />
    </label>
    <button id="export-tracker-settings">${localize(
      "Export (tracker)"
    )}</button>
    <button id="reset-settings">${localize("Reset")}</button>
    <button id="save-settings">${localize("Save")}</button>
  </div>
</div>`;

const download = (filename, content) => {
  const fileContents = content;
  const url = URL.createObjectURL(
    new Blob([fileContents], { type: "application/json" })
  );
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
};

const readFile = (file) =>
  new Promise((res) => {
    const reader = new FileReader();
    reader.onload = (e) => res(e.target.result);
    reader.readAsText(file);
  });

const showToast = (content) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = content;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

export const renderFooter = () => {
  const el = fromHtml(template());

  const saveButton = el.querySelector("#save-settings");
  saveButton.addEventListener("click", () => {
    localStorage.setItem("settings", JSON.stringify(modifiedSettings));
    localStorage.setItem("tracker", JSON.stringify(modifiedTrackerSettings));
    showToast("Settings saved");
  });

  const resetButton = el.querySelector("#reset-settings");
  resetButton.addEventListener("click", () => {
    localStorage.clear("settings");
    window.location.reload();
  });

  const exportButton = el.querySelector("#export-settings");
  exportButton.addEventListener("click", () => {
    download("bingo-settings.json", JSON.stringify(modifiedSettings, 2));
  });

  const exportTrackerButton = el.querySelector("#export-tracker-settings");
  exportTrackerButton.addEventListener("click", () => {
    download(
      "bingo-tracker-settings.json",
      JSON.stringify(modifiedTrackerSettings, 2)
    );
  });

  const importInput = el.querySelector("#import-settings");
  importInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const fileContent = await readFile(file);
    localStorage.setItem("settings", fileContent);
    window.location.reload();
  });

  const importTrackerInput = el.querySelector("#import-tracker-settings");
  importTrackerInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const fileContent = await readFile(file);
    localStorage.setItem("tracker", fileContent);
    window.location.reload();
  });

  return el;
};
