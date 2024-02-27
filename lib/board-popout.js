import "./bingo-board.js";
import { waitForLoad } from "./helpers/localization.js";

waitForLoad().then(() => {
  document.title = localize("Bingo Popout");
});
