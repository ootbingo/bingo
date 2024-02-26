import { fromHtml } from "../../helpers/fromHtml.js";

const template = ({ title }) => `
  <div class="setting-group">
    <h2>${title}</h2>
    <div class="group-row">
      <div class="setting-column">
        <slot id="settings"></slot>
      </div>
      <slot id="example"></slot>
    </div>
  </div>
`;

export const renderSettingGroup = ({ title }) => fromHtml(template({ title }));
