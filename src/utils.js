export function createNode(options) {
  const node = document.createElement(options.tag || "div");
  if (options.id) node.setAttribute("id", options.id);
  if (options.textContent) node.textContent = options.textContent;

  if (options.classNames && options.classNames.length > 0) {
    options.classNames.split(" ").forEach((className) => {
      node.classList.add(className);
    });
  }

  if (options.parent) {
    options.parent.appendChild(node);
  } else {
    document.body.appendChild(node);
  }

  return node;
}

export function sectionBuilder(options) {
  const section = createNode({ ...options, tag: options.tag || "section" });
  const container = createNode({ classNames: "container", parent: section });

  if (options.heading) {
    const headingNode = createNode({
      tag: options.headingLevel || "h2",
      classNames: "section-heading",
      textContent: options.heading,
      parent: container,
    });
  }

  return container;
}
