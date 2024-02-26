import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ label, value, options }) => `
  <label class="select">
    ${label}
    <button class="toggle">
      ${options.find((o) => o.value === value)?.label ?? "Select..."}
    </button>
    <div class="dropdown">
      ${options
        .map(
          ({ value, label }) => `
        <button class="option" data-value="${value.replace(/"/g, "&quot;")}">
          ${label}
        </button>`
        )
        .join("\n")}
    </div>
  </label>
`;

export const renderSelect = ({ value, label, options, onChange }) => {
  const el = fromHtml(template({ label, value, options }));
  const toggle = el.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    toggle.dataset.open = toggle.dataset.open === "true" ? "false" : "true";
  });
  el.querySelectorAll(".option").forEach((optionEl) => {
    const option = options.find((o) => o.value === optionEl.dataset.value);
    if (option.font) {
      optionEl.style.fontFamily = option.font;
    }
    optionEl.addEventListener("click", () => {
      toggle.dataset.open = "false";
      onChange(option.value);
      toggle.textContent = option.label;
    });
  });
  document.addEventListener("click", (e) => {
    if (!el.contains(e.target)) {
      toggle.dataset.open = "false";
    }
  });
  return el;
};
