import { fromHtml } from "./helpers/fromHtml.js";
import { waitForLoad, localize } from "./helpers/localization.js";

const versionTemplate = ({ version, newSeed, lang }) => {
  if (version.split(".")[0] === "1") {
    return `
    <a class="link-button" href="/bingo/versions/v1/v${version}/bingo.html${
      lang ? `&lang=${lang}` : ""
    }">${version}</a>
    `;
  }
  return `
<a class="link-button" href="/bingo/bingo.html?mode=normal&version=${version}&seed=${newSeed}${
    lang ? `&lang=${lang}` : ""
  }">${version}</a>
`;
};

const template = ({ newSeed, lang, latestVersion, versionGroups }) => `
<div class="versions">
  <h1>${localize("Bingo Versions")}</h1>
  <h2>${localize("Latest version")}</h2>
  ${versionTemplate({ version: latestVersion, newSeed, lang })}
  <h2>${localize("All versions")}</h2>
  <div class="version-groups">
  ${versionGroups
    .map(
      (versions) => `
    <div class="version-group">
      ${versions
        .map((version) => versionTemplate({ version, newSeed, lang }))
        .join("")}
    </div>`
    )
    .join("")}
  </div>
</div>
`;

const groupBy = (arr, geyKey) => {
  const map = new Map();
  arr.forEach((item) => {
    const key = geyKey(item);
    if (map.has(key)) {
      map.get(key).push(item);
    } else {
      map.set(key, [item]);
    }
  });
  return map;
};

const getVersionValue = (version) => {
  const splitVersion = version.split(".").map(Number);
  return splitVersion
    .map((v, i) => v * 10 ** (2 - i))
    .reduce((a, b) => a + b, 0);
};

Promise.all([
  fetch("/bingo/api/v1/available_versions.json").then((res) => res.json()),
  waitForLoad(),
]).then(([{ default_version: latestVersion, versions }]) => {
  window.title = `${localize("Ocarina of Time Bingo")}${localize(
    " - "
  )}${localize("Versions")}`;

  const versionGroups = [
    ...groupBy(Object.keys(versions), (v) => v.split(".")[0]),
  ];
  versionGroups.sort(([a], [b]) => +a - +b);
  versionGroups.forEach(([_, versions]) => {
    versions.sort((a, b) => getVersionValue(a) - getVersionValue(b));
  });

  const search = new URLSearchParams(location.search);
  document.body.append(
    fromHtml(
      template({
        newSeed: Math.ceil(Math.random() * 999999),
        lang: search.get("lang"),
        latestVersion,
        versionGroups: versionGroups.map((g) => g[1]),
      })
    )
  );
});
