export const openPopout = (urlString, width, height) => {
  const url = new URL(urlString, window.location);
  const currentSearchParams = new URLSearchParams(window.location.search);
  if (currentSearchParams.get("lang")) {
    url.searchParams.set("lang", currentSearchParams.get("lang"));
  }
  window.open(
    url.toString(),
    "_blank",
    `width=${width}, height=${height}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`
  );
};
