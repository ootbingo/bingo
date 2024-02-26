import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ label, suffix, type, value }) => `
  <label class="input">
    ${label}
    <div>
      <input type="${type}" value="${value}" />
      ${suffix ?? ""}
    </div>
  </label>
`;

/**
 * @param {object} props
 * @param {string} props.value
 * @param {string} props.value
 * @param {string} props.label
 * @param {string} props.suffix
 * @param {(newValue: string) => void} props.onChange
 * @returns {HTMLLabelElement}
 */
export const renderInput = ({ value, type, label, suffix, onChange }) => {
  const el = fromHtml(template({ label, suffix, type, value }));
  const input = el.querySelector("input");
  input.addEventListener("input", (e) => {
    onChange(e.target.value);
  });

  return el;
};
