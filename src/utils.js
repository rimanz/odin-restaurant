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

export function sectionBuilder(options) {
  const section = createNode(
    options.tag || "section",
    options.classNames || "",
    options.parent || document.body,
  );
  const sectionContainer = createNode("div", "container", section);

  if (options.id) section.setAttribute("id", options.id);

  if (options.heading) {
    const headingNode = createNode(
      options.headingLevel || "h2",
      "section-heading",
      sectionContainer,
    );
    headingNode.textContent = options.heading;
  }

  return sectionContainer;
}
