import restaurantData from "./data.js";
import { createNode, sectionBuilder } from "./utils.js";

const content_root = document.getElementById("content");

function createHero() {
  const heroSection = createNode("div", "hero", content_root);
  createNode("div", "hero-overlay", heroSection);
  const heroContent = createNode("div", "hero-content", heroSection);

  const heroText = createNode("h1", "", heroContent);
  heroText.textContent = restaurantData.name;

  const heroLead = createNode("p", "", heroContent);
  heroLead.textContent = restaurantData.Tagline;
}

function createAbout() {
  const aboutSection = sectionBuilder({
    id: "about",
    parent: content_root,
    heading: "About",
  });

  restaurantData.aboutLines.forEach((line) => {
    const p = createNode("p", "", aboutSection);
    p.textContent = line;
  });
}

function createHighlights() {
  const highlights = sectionBuilder({
    id: "highlights",
    classNames: "highlights",
    parent: content_root,
  });
  const list = createNode("ul", "", highlights);

  restaurantData.highlights.forEach((item) => {
    console.log(item);
    const listItem = createNode("li", "", list);
    listItem.textContent = item;
  });

  createCTASection(highlights);
}

function createCTASection(parent) {
  const cta = sectionBuilder({
    id: "cta",
    classNames: "cta",
    parent: parent,
  });
  const ctaButton = createNode("button", "cta-btn", cta);
  ctaButton.textContent = "See Our Menu";
}

export default function generateHomePage() {
  content_root.textContent = "";
  createHero();
  createAbout();
  createHighlights();
}
