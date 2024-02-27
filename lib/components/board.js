import { fromHtml } from "../helpers/fromHtml.js";
import { generateBoard } from "../helpers/generateBoard.js";
import { localize, waitForLoad } from "../helpers/localization.js";
import { openPopout } from "../helpers/openPopout.js";
import { settings } from "../helpers/settings.js";
import { renderGoal } from "./goal.js";

/**
 * @param {string} title
 * @param {string[]} goals
 */
const openRowPopout = (title, goals) => {
  const searchParams = new URLSearchParams([
    ["title", title],
    ...goals.map((goal) => ["goal", goal]),
  ]);
  openPopout(
    `/bingo/bingo-popout.html?${searchParams.toString()}`,
    settings.rowPopoutCellWidth,
    settings.rowPopoutHeaderHeight +
      settings.rowPopoutCellBorderWidth +
      settings.rowPopoutCellHeight * goals.length
  );
};

/**
 * @param {object} props
 * @param {string} version
 * @param {number} seed
 * @param {"normal" | "short" | "blackout"} mode
 */
const openBoardPopout = ({ version, seed, mode }) => {
  const searchParams = new URLSearchParams([
    ["version", version],
    ["seed", seed],
    ["mode", mode],
  ]);
  openPopout(
    `/bingo/board-popout.html?${searchParams.toString()}`,
    settings.boardCellWidth * 5 + settings.boardHeaderWidth,
    settings.boardCellHeight * 5 + settings.boardHeaderHeight * 3
  );
};

/**
 * @param {object} props
 * @param {string} version
 * @param {number} seed
 * @param {"normal" | "short" | "blackout"} mode
 * @param {string} filename
 */
const template = ({ version, seed, mode, filename }) => `
  <div class="bingo bingo-board table ${mode}">
    <div id="tlbr" class="header">${localize("TL-BR")}</div>
    <div id="col1" class="header">${localize("COL1")}</div>
    <div id="col2" class="header">${localize("COL2")}</div>
    <div id="col3" class="header">${localize("COL3")}</div>
    <div id="col4" class="header">${localize("COL4")}</div>
    <div id="col5" class="header">${localize("COL5")}</div>
    <slot id="children"></slot>
    <div id="bltr" class="header">${localize("BL-TR")}</div>
    <div id="board-popout" class="header">${localize("BOARD")}</div>
    <div id="bingo-info">
      <div>
        ${localize("Version:")}
        <strong>${version}</strong>
      </div>
      <div>
        ${localize("Seed:")}
        <strong>${seed}</strong>
      </div>
      <div>
        ${localize("Mode:")}
        <strong>${mode}</strong>
      </div>
      <div class="filename">
        ${localize("Filename:")}
        <strong>${filename}</strong>
      </div>
    </div>
  </div>
`;

const rowHeaderTemplate = ({ rowNumber }) => `
  <div id="row${rowNumber}" class="header">${localize(`ROW${rowNumber}`)}</div>
`;

/**
 * @param {object} props
 * @param {string[][]} props.board
 * @param {number} props.seed
 * @param {string} props.filename
 * @param {string} props.version
 * @param {"normal" | "short" | "blackout"} props.mode
 * @returns {Promise<HTMLTableElement>}
 */
export const renderBoard = ({ board, seed, mode, filename, version }) => {
  const children = board.flatMap((row, i) => [
    fromHtml(rowHeaderTemplate({ rowNumber: i + 1 })),
    ...row.map((goalName, j) =>
      renderGoal({
        goalName,
        rowNumber: i + 1,
        colNumber: j + 1,
      })
    ),
  ]);
  const el = fromHtml(template({ version, seed, mode, filename }));
  el.querySelector("#children").replaceWith(...children);
  for (let i = 0; i < 5; i++) {
    const rowHeader = el.querySelector(`#row${i + 1}`);
    rowHeader.addEventListener("click", () => {
      openRowPopout(`ROW${i + 1}`, board[i]);
    });
    const colHeader = el.querySelector(`#col${i + 1}`);
    colHeader.addEventListener("click", () => {
      openRowPopout(
        `COL${i + 1}`,
        board.map((row) => row[i])
      );
    });
  }
  const tlbrHeader = el.querySelector(`#tlbr`);
  tlbrHeader.addEventListener("click", () => {
    openRowPopout(
      "TL-BR",
      board.map((row, j) => row[j])
    );
  });
  const bltrHeader = el.querySelector(`#bltr`);
  bltrHeader.addEventListener("click", () => {
    openRowPopout(
      "BL-TR",
      board.map((row, j) => row[4 - j])
    );
  });

  const boardHeader = el.querySelector(`#board-popout`);
  boardHeader.addEventListener("click", () =>
    openBoardPopout({
      version,
      seed,
      mode,
    })
  );

  return el;
};
