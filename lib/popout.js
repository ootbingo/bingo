import { renderPopoutRow } from "./components/popoutRow.js";
import { waitForLoad, localize } from "./helpers/localization.js";

const searchParams = new URLSearchParams(location.search);

waitForLoad().then(() => {
  window.title = localize("Bingo Popout");
  const table = renderPopoutRow({
    title: searchParams.get("title"),
    goals: searchParams.getAll("goal"),
  });
  document.body.appendChild(table);
});
