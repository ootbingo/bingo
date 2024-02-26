/**
 * @param {string} htmlString
 */
export const fromHtml = (htmlString) => {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content.children.length === 1
    ? template.content.children[0]
    : template.content.children;
};
