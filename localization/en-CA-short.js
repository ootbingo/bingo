import enCA from "./en-CA.js";
import enShort from "./en-short";

export default {
  locale: "en-CA-short",
  strings: {
    ...enShort.strings,
    ...enCA.strings,
  },
};
