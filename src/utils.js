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
