import restaurantData from "./data.js";
import "./styles.css";

const content_root = document.getElementById("content");

function createNode(tagName, classNames = "", parentNode) {
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

function createHero() {
  const heroSection = createNode("div", "hero", content_root);
  createNode("div", "hero-overlay", heroSection);
  const heroContent = createNode("div", "hero-content", heroSection);

  const heroText = createNode("h1", "", heroContent);
  heroText.textContent = restaurantData.name;

  const heroLead = createNode("p", "", heroContent);
  heroLead.textContent = restaurantData.Tagline;
}

createHero();
