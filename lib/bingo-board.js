import { renderBoard } from "./components/board.js";
import { renderInfo } from "./components/info.js";
import { generateBoard } from "./helpers/generateBoard.js";
import { localize, waitForLoad } from "./helpers/localization.js";

const searchParams = new URLSearchParams(location.search);

Promise.all([
  generateBoard({
    version: searchParams.get("version") ?? undefined,
    seed: searchParams.get("seed") ?? undefined,
    mode: searchParams.get("mode") ?? undefined,
  }),
  waitForLoad(),
]).then(([{ board, filename, version, seed, mode }]) => {
  searchParams.set("version", version);
  searchParams.set("seed", seed);
  searchParams.set("mode", mode);
  history.replaceState(
    null,
    "",
    window.location.pathname + "?" + searchParams.toString()
  );

  document.title = localize("Ocarina of Time Bingo");
  document.querySelector("#bingo-board").replaceWith(
    renderBoard({
      board,
      filename,
      version,
      seed,
      mode,
    })
  );
  document.querySelector("#info").replaceWith(
    renderInfo({
      version,
    })
  );
});
