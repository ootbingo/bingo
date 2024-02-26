import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ label, value }) => `
  <label class="color-input">
    <input type="color" value="${value}" />
    <div></div>
    ${label}
  </label>
`;

/**
 * @param {object} props
 * @param {string} props.value
 * @param {string} props.label
 * @param {(newValue: string) => void} props.onChange
 * @returns {HTMLLabelElement}
 */
export const renderColorInput = ({ value, label, onChange }) => {
  const el = fromHtml(template({ label, value }));
  const input = el.querySelector("input");
  const inputDiv = el.querySelector("div");
  inputDiv.style.backgroundColor = value;
  input.addEventListener("input", (e) => {
    onChange(e.target.value);
    inputDiv.style.backgroundColor = e.target.value;
  });

  return el;
};
