import { settings } from "./settings.js";

let allStrings;
let availableLocales;

export const getAvailableLocales = () => availableLocales;

const loadLocales = async () => {
  const locales = [
    ...new Set(
      [
        new URLSearchParams(window.location.search).get("lang"),
        settings.language,
        ...navigator.languages,
        "en",
      ]
        .filter((l) => !!l)
        .flatMap((lang) => {
          try {
            const locale = new Intl.Locale(lang);
            if (locale.language !== locale.baseName) {
              return [locale.baseName, locale.language];
            }
            return [locale.language];
          } catch (e) {
            console.log(`Invalid locale: ${lang}`);
            return [];
          }
        })
    ),
  ];
  availableLocales = (await import("/bingo/localization/available-locales.js"))
    .default;

  const availableLocalesSet = new Set(availableLocales.map((l) => l.code));
  const goodLocales = locales.filter((l) => availableLocalesSet.has(l));
  allStrings = (
    await Promise.all(
      goodLocales.map((l) =>
        import(`/bingo/localization/${l}.js`).then((mod) => mod.default)
      )
    )
  ).map((s) => s.strings);
};
const loadPromise = loadLocales();

export const waitForLoad = () => loadPromise;

export const reloadLocales = loadLocales;

const localized = new Set();

export const localize = (string) => {
  localized.add(string);
  return allStrings.find((s) => s[string])?.[string] ?? string;
};

window.getLocalizedStrings = () => {
  const strings = [...localized];
  strings.sort();
  return Object.fromEntries(strings.map((s) => [s, s]));
};
