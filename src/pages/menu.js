import restaurantData from "../data.js";
import defaultImage from "../images/hero-background.webp";
import { createNode, sectionBuilder } from "../utils.js";

const content_root = document.getElementById("content");

function createHeader() {
  const headerSection = sectionBuilder({
    classNames: "menu-header",
    heading: { tag: "h1", textContent: "Our Menu" },
    parent: content_root,
  });

  const subHeading = createNode({
    tag: "p",
    classNames: "sub-heading",
    textContent: "Crafted for every palate",
    parent: headerSection,
  });
}

function createCard({ item, parent }) {
  const card = createNode({ classNames: "card", parent: parent });
  const imageContainer = createNode({
    classNames: "image-container",
    parent: card,
  });
  const image = createNode({
    tag: "img",
    attributes: {
      src: item.image ? `/images/${item.image}` : defaultImage,
      alt: item.name + " image.",
    },
    parent: imageContainer,
  });

  const cardText = createNode({ classNames: "card-text", parent: card });
  const itemName = createNode({
    tag: "h4",
    classNames: "item-name",
    textContent: item.name,
    parent: cardText,
  });
  const description = createNode({
    tag: "p",
    classNames: "item-description",
    textContent: item.description,
    parent: cardText,
  });
  const price = createNode({
    tag: "p",
    classNames: "item-price",
    textContent: `Price: $${item.price.toFixed(2)}`,
    parent: cardText,
  });
}

export function createMenu(options, items) {
  const section = sectionBuilder({ ...options });

  const grid = createNode({
    classNames: "menu-grid",
    parent: section,
  });

  items.forEach((item) => {
    createCard({ item: item, parent: grid });
  });
}

export default function menu() {
  content_root.textContent = "";
  const menuCategories = ["Appetizers", "Mains", "Desserts", "Drinks"];
  createHeader();

  menuCategories.forEach((category) => {
    createMenu(
      {
        classNames: "submenu",
        heading: { textContent: category },
        parent: content_root,
      },
      restaurantData.menu[category],
    );
  });
}
