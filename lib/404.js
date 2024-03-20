import {localize, waitForLoad} from "./helpers/localization.js";
import {fromHtml} from "./helpers/fromHtml.js";

const legacyBingoUrlRegex = /^\/bingo\/(?<version>(beta|v)(\d\.?)+(-j)?)?\/bingo\.html$/;

const attemptRedirect = () => {

  let version = legacyBingoUrlRegex.exec(window.location.pathname).groups.version;

  if (version) {
    if (version.startsWith("v")) {
      version = version.slice(1);
    }

    if (!version.startsWith("beta") && version.endsWith(".0")) {
      version == version.slice(0, -2);
    }

    const originalQuery = window.location.search;
    const query = (originalQuery && originalQuery.startsWith("?")) ? originalQuery : "?";

    window.location.href = `/bingo/bingo.html${query}&version=${version}`;
  }
};

const renderError = () => {
  const template = () => `
  <div id="wrap">
    <main class="error-404-container">
      <p>${localize("The page you are looking for does not exist")}</p>
      <p><a href="index.html">${localize("Show All Versions")}</a></p>
    </main>
  </div>
  `;

  waitForLoad().then(() => document.body.append(fromHtml(template())));
};

try {
  attemptRedirect();
} catch (e) {
  renderError();
}
