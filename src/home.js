import restaurantData from "./data.js";
import { createNode } from "./utils.js";

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

function sectionBuilder(headingText = "", classNames, parent) {
  const section = createNode("section", classNames, parent);
  const sectionContainer = createNode("div", "container", section);

  if (headingText) {
    const heading = createNode("h2", "section-heading", sectionContainer);
    heading.textContent = headingText;
  }

  return sectionContainer;
}

function createAbout() {
  const aboutSection = sectionBuilder("About", "", content_root);

  restaurantData.aboutLines.forEach((line) => {
    const p = createNode("p", "", aboutSection);
    p.textContent = line;
  });
}

function createHighlights() {
  const highlights = sectionBuilder("", "highlights", content_root);
  const list = createNode("ul", "", highlights);

  restaurantData.highlights.forEach((item) => {
    console.log(item);
    const listItem = createNode("li", "", list);
    listItem.textContent = item;
  });

  createCTASection(highlights);
}

function createCTASection(parent) {
  const cta = sectionBuilder("", "cta", parent);
  const ctaButton = createNode("button", "cta-btn", cta);
  ctaButton.textContent = "See Our Menu";
}

export default function generateHomePage() {
  createHero();
  createAbout();
  createHighlights();
}
