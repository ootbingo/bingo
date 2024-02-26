import { fromHtml } from "../../helpers/fromHtml.js";

const tokenTemplate = ({ filename, selected }) => `
  <label class="token-label" style="background-image: url('./lib/item-tracker/icons/${filename}.ico')">
    <input type="checkbox" ${selected ? "checked" : ""}>
  </div>
`;

/**
 * @param {object} props
 * @param {string[][]} props.rows
 * @returns
 */
export const renderTokens = ({ rows }) => {
  const rowEls = rows.map((icons) => {
    const rowEl = document.createElement("div");
    rowEl.classList.add("tokens");
    icons.forEach((icon) => {
      const { filename, selected } =
        typeof icon === "object" ? icon : { filename: icon, selected: false };
      const checkbox = fromHtml(
        tokenTemplate({
          filename,
          selected,
        })
      );
      checkbox.addEventListener("click", (e) => e.stopPropagation());
      checkbox.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        checkbox.classList.add("hidden");
      });
      rowEl.appendChild(checkbox);
    });
    return rowEl;
  });

  document.addEventListener("contextmenu", (e) => {
    if (e.target.classList.contains("goal") && e.target.contains(rowEls[0])) {
      e.preventDefault();
      e.target
        .querySelectorAll("label")
        .forEach((token) => token.classList.remove("hidden"));
    }
  });

  return rowEls;
};
