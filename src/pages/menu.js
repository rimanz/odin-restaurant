import { createNode, sectionBuilder } from "../utils.js";

const content_root = document.getElementById("content");
console.log(content_root);

function createHeader() {
  const headerSection = sectionBuilder({
    classNames: "menu-header",
    heading: "Our Menu",
    headingTag: "h1",
    parent: content_root,
  });

  const subHeading = createNode({
    tag: "p",
    classNames: "sub-heading",
    textContent: "Crafted for every palate",
    parent: headerSection,
  });
}

export default function menu() {
  content_root.textContent = "";
  createHeader();
}
