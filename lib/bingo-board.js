import "./base-board.js";
import { waitForLoad } from "./helpers/localization.js";

waitForLoad().then(() => {
  document.title = localize("Ocarina of Time Bingo");
});
