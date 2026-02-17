export function createNode(tagName, classNames = "", parentNode) {
  const node = document.createElement(tagName);
  if (classNames.length > 0) {
    classNames.split(" ").forEach((className) => {
      node.classList.add(className);
    });
  }

  if (parentNode) {
    parentNode.appendChild(node);
  }

  return node;
}

export function sectionBuilder(headingText = "", id, classNames, parent) {
  const section = createNode("section", classNames, parent);
  const sectionContainer = createNode("div", "container", section);

  if (id) section.setAttribute("id", id);

  if (headingText) {
    const heading = createNode("h2", "section-heading", sectionContainer);
    heading.textContent = headingText;
  }

  return sectionContainer;
}
