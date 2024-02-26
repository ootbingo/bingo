export const adjustGoalSizes = (el) => {
  el.style.fontSize = null;
  const startFontSize = parseInt(getComputedStyle(el).fontSize);
  let newSize = startFontSize;
  while (el.scrollHeight > el.offsetHeight) {
    newSize = parseInt(getComputedStyle(el).fontSize) - 1;
    if (newSize <= 0) {
      break;
    }
    el.style.fontSize = `${parseInt(getComputedStyle(el).fontSize) - 1}px`;
  }
  const ratio = newSize / startFontSize;
  const tokens = el.querySelector(".tokens");
  if (tokens && getComputedStyle(tokens).display !== "none") {
    const tokenSize = parseInt(
      getComputedStyle(el).getPropertyValue("--tracker-token-size")
    );
    const shrinkRatio = tokens.offsetHeight / tokenSize;
    if (shrinkRatio < ratio) {
      el.style.fontSize = `${(startFontSize * (ratio + shrinkRatio)) / 2}px`;
    }
  }
};
