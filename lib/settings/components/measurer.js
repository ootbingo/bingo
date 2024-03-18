import { cx } from "../../helpers/cx.js";
import { fromHtml } from "../../helpers/fromHtml.js";

const template = () => `
  <div class="measurer">
    <slot id="children"></slot>
    <slot id="v-ruler"></slot>
    <slot id="h-ruler"></slot>
  </div>
`;

const rulerTemplate = ({ direction }) => `
  <div class="${cx("ruler", direction)}">
    <div class="ruler-section">
      <div></div>
      <div></div>
    </div>
    <div class="ruler-label"></div>
    <div class="ruler-section">
      <div></div>
      <div></div>
    </div>
  </div>
`;

const renderRuler = ({ direction }) => {
  const el = fromHtml(rulerTemplate({ direction }));
  const label = el.querySelector(".ruler-label");
  const observer = new ResizeObserver(() => {
    label.textContent = `${
      direction === "horizontal" ? el.clientWidth : el.clientHeight
    }px`;
  });
  observer.observe(el);
  el.querySelector(".ruler-label");
  return el;
};

export const renderMeasurer = () => {
  const el = fromHtml(template());
  el.querySelector("#v-ruler").replaceWith(
    renderRuler({ direction: "vertical" })
  );
  el.querySelector("#h-ruler").replaceWith(
    renderRuler({ direction: "horizontal" })
  );
  return el;
};
