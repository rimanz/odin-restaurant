/**
 * Create and return a HTMLElement.
 * @param {object} options - Options to configure the element.
 * @param {string} [options.tag='div'] - HTML Element's name(tag). Defaults to a 'div' tag.
 * @param {string} options.id - Element's id attribute.
 * @param {string} options.classNames - Element's space separated class names.
 * @param {string} options.textContent - Texts inside the element.
 * @param {HTMLElement} [options.parent=document.body] - Element's direct parent node. Defaults to the HTMLBodyElement.
 * @returns {object} The HTMLElement.
 */
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

/**
 * Create a HTMLElement with a wrapper inside it and return wrapper Element.
 * @param {object} options - Options to configure the element.
 * @param {string} [options.tag='section'] - HTML Element's name(tag). Defaults to a 'section' tag.
 * @param {string} options.id - Element's id attribute.
 * @param {string} options.classNames - Element's space separated class names.
 * @param {string} options.heading - Section's heading text.
 * @param {string} options.headingTag - Section's heading element. Defaults to h2. Applicable only if options.heading is present.
 * @param {string} options.textContent - Texts inside the element.
 * @param {HTMLElement} [options.parent=document.body] - Element's direct parent node. Defaults to the HTMLBodyElement.
 * @returns {object} The HTMLElement.
 */
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

  // Returns the container inside the section, not the section itself!
  // It makes it easier to refer container to put things inside it.
  return container;
}
