import { fromHtml } from "./helpers/fromHtml.js";
import { waitForLoad, localize } from "./helpers/localization.js";
import "./helpers/settings.js";

const template = () => `
  <div id="wrap">
    <main>
      <div class="container" id="pageContent">
        <div id="bingoPage">
          <h1>${localize("Ocarina of Time Bingo")}${localize(" - ")}${localize(
  "Credits"
)}</h1>

          <h2>${localize("Generator")}</h2>
          <p>
            ${localize(
              "Originally written and designed by Narcissa. Improved by Giuocob. v9 redesign by Saltor. Frequency Balancing by prettybigjoe."
            )}
          </p>

          <h2>${localize("Goal List")}</h2>
          <h3>${localize("v10")}</h3>
          <p>
            ${localize(
              "Exodus, tob3000, Runnerguy2489, Tasselhoff, juwk, shaggy, triforce3250, 2DollarGargoyle, Link11, EggMeister"
            )}
          </p>

          <h3>${localize("v9")}</h3>
          <p>
            ${localize(
              "Gombill, Runnerguy2489, Zamiel, Exodus, SnipinG117, Moose1137, Runnerguy2489, tob3000, Tasselhoff, juwk"
            )}
          </p>
        </div>
      </div>
    </main>
  </div>
`;

waitForLoad().then(() => {
  document.title = `${localize("Ocarina of Time Bingo")}${localize(
    " - "
  )}${localize("Credits")}`;
  document.body.append(fromHtml(template()));
});
