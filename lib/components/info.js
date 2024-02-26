import { fromHtml } from "../helpers/fromHtml.js";
import { localize } from "../helpers/localization.js";

/**
 *
 * @param {object} props
 * @param {number} props.newSeed
 * @param {string} [props.version]
 * @param {string} [props.lang]
 * @returns
 */
const template = ({ newSeed, version, lang }) => `
  <div class="info">
    <h1>${localize("Ocarina of Time Bingo")}</h1>
    <div class="links">
    <a class="link-button" href="/bingo/bingo.html?mode=normal&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Normal card")}</a>
    <a class="link-button" href="/bingo/bingo.html?mode=short&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Short card")}</a>
    <a class="link-button" href="/bingo/bingo.html?mode=blackout&seed=${newSeed}${
  version ? `&version=${version}` : ""
}${lang ? `&lang=${lang}` : ""}">${localize("Blackout card")}</a>
    <a class="link-button" href="/bingo/settings.html">${localize(
      "Settings"
    )}</a>
    <a class="link-button" href="/bingo/">${localize("Other versions")}</a>
    </div>
    <h2>${localize("About")}</h2>

    <p>${localize("This is a <i>Bingo</i> board for Ocarina of Time races")}</p>
    <p>
    ${localize(
      "To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally"
    )}
    </p>
    <p>
    ${localize(
      "The goals are balanced around playing on the Japanese version of Ocarina of Time"
    )}
    </p>
    <p>
    ${localize(
      "Unlike in most speedrunning categories, the intro cutscene should not be skipped. This gives players a few minutes to plan"
    )}
    </p>
    <p>
    ${localize(
      "You can click on the squares to turn them green and red. This may help you organize your route planning"
    )}
    </p>
    <h2>${localize("Rules")}</h2>
    <h3>${localize("Goal Clarifications")}</h3>
    <ul>
      <li>
        <i>${localize(
          "At Least 1 Skulltula from each Adult Dungeon"
        )}</i>${localize(": Only dungeons with blue warps are required")}
      </li>
      <li><i>${localize("6 Songs").replace(
        /[6６]/,
        localize("X")
      )}</i>${localize(": Scarecrow's Song does not count")}</li>
      <li><i>${localize("Frog's HP")}</i>${localize(
  ": Only one of the frog's HPs is required"
)}</li>
      <li><i>${localize("5 Zora Area HPs")}</i>${localize(
  ": Ice Cavern and Jabu-Jabu do not count"
)}</li>
      <li>
        <i>${localize("30 Deku Sticks")
          .replace(/[3３]/, localize("X"))
          .replace(/[0０]/, "")}${localize(" / ")}${localize("30 Deku Nuts")
  .replace(/[3３]/, localize("X"))
  .replace(/[0０]/, "")}${localize(" / ")}${localize("6 Magic Beans").replace(
  /[6６]/,
  localize("X")
)}</i>${localize(": Item must display visually in inventory to count")}
      </li>
      <li>
        <i>${localize("3 Boss Keys").replace(
          /[3３]/,
          localize("X")
        )}</i>${localize(
  ": Boss keys for child dungeons obtained through RBA count"
)}
      </li>
      <li>
        <i>${localize("7 Hearts (no duping)").replace(
          /[7７]/,
          localize("X")
        )}</i>${localize(
  ": Using RBA to write Heart Pieces into the inventory does not count as duping and is allowed"
)}
      </li>
      <li>
        <i>${localize("Plant 6 Magic Beans").replace(
          /[6６]/,
          localize("X")
        )}</i>${localize(
  ": Planting multiple beans in the same location (e.g. by duping soft soil patches) is not allowed"
)}
      </li>
    </ul>
    <h3>${localize("Other Rules")}</h3>
    <ul>
      <li>
      ${localize(
        "Numbers are minimums. Collecting more than enough is allowed unless otherwise stated"
      )}
      </li>
      <li>
      ${localize(
        "All required items must be present in the inventory in order to finish. For example, for the goal <i>Blue Potion</i>, you must not drink it"
      )}
      </li>
      <li>
        ${localize("When an item may be marked as completed:")}<br />
        ${localize(
          'Song: When the dialog box that says "You have learned the…" completes'
        )}<br />
        ${localize("Item: When you are holding it above your head")}<br />
        ${localize(
          "Beat Dungeon: When you step in the blue warp and lose control or skip the cutscene"
        )}<br />
        ${localize("Beat a Boss/Enemy: When you strike the last blow")}<br />
        ${localize(
          "If Wrong Warping, any items or goals associated with the wrong warp are obtained upon completion of the Wrong Warp"
        )}
      </li>
    </ul>
    <h3>${localize("Banned Tricks")}</h3>
    <ul>
      <li>${localize("Using Deku Stick as adult")}</li>
      <li>${localize("Using Bombchus out of bounds")}</li>
      <li>
        ${localize(
          "Obtaining the Eyeball Frog without presenting the Prescription (Hold R)"
        )}
      </li>
      <li>${localize("Jumpslash Quick Putaway (QPA)")}</li>
      <li>${localize("Get Item Manipulation (GIM)")}</li>
      <li>${localize("Stale Reference Manipulation (SRM)")}</li>
      <li>${localize("Arbitrary Code Execution (ACE)")}</li>
    </ul>
    <a href="credits.html">${localize("Credits")}</a>
  </div>
`;

/**
 * @param {object} props
 * @param {string} [props.version]
 * @returns
 */
export const renderInfo = ({ version }) => {
  const search = new URLSearchParams(location.search);
  const newSeed = Math.ceil(999999 * Math.random());
  return fromHtml(template({ newSeed, lang: search.get("lang"), version }));
};
