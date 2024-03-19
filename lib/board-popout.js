import "./base-board.js";
import { waitForLoad, localize } from "./helpers/localization.js";

waitForLoad().then(() => {
  document.title = localize("Board Popout");
});
