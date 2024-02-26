import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ label }) => `
  <label class="checkbox">
    <input type="checkbox" />
    <div></div>
    ${label}
  </label>
`;

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {string} props.label
 * @param {(newValue: boolean) => void} props.onChange
 * @returns {HTMLLabelElement}
 */
export const renderCheckbox = ({ checked, label, onChange }) => {
  const el = fromHtml(template({ label }));
  const input = el.querySelector("input");
  input.checked = checked;
  input.addEventListener("change", () => onChange(input.checked));
  return el;
};
