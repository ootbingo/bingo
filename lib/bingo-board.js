import { renderBoard } from "./components/board.js";
import { renderInfo } from "./components/info.js";
import { localize } from "./helpers/localization.js";

const searchParams = new URLSearchParams(location.search);

const version = searchParams.get("version");
const seed = searchParams.get("seed") ?? Math.floor(Math.random() * 999999);
const mode = searchParams.get("mode") ?? "normal";

renderBoard({
  version,
  seed,
  mode,
}).then((table) => {
  document.title = localize("Ocarina of Time Bingo");
  document.querySelector("#bingo-board").replaceWith(table);
  document.querySelector("#info").replaceWith(
    renderInfo({
      version,
    })
  );
});
