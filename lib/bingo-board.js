import "./base-board.js";
import { waitForLoad, localize } from "./helpers/localization.js";

waitForLoad().then(() => {
  document.title = localize("Ocarina of Time Bingo");
});
