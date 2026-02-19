import restaurantData from "../data.js";
import { createNode, sectionBuilder } from "../utils.js";

const content_root = document.getElementById("content");

function createHero() {
  const heroSection = createNode({ classNames: "hero", parent: content_root });
  createNode({ classNames: "hero-overlay", parent: heroSection });
  const heroContent = createNode({
    classNames: "hero-content",
    parent: heroSection,
  });

  const heroText = createNode({ tag: "h1", parent: heroContent });
  heroText.textContent = restaurantData.name;

  const heroLead = createNode({ tag: "p", parent: heroContent });
  heroLead.textContent = restaurantData.Tagline;
}

function createAbout() {
  const aboutSection = sectionBuilder({
    id: "about",
    parent: content_root,
    heading: "About",
  });

  restaurantData.aboutLines.forEach((line) => {
    const p = createNode({ tag: "p", parent: aboutSection });
    p.textContent = line;
  });
}

function createHighlights() {
  const highlights = sectionBuilder({
    id: "highlights",
    classNames: "highlights",
    parent: content_root,
  });
  const list = createNode({ tag: "ul", parent: highlights });

  restaurantData.highlights.forEach((item) => {
    console.log(item);
    const listItem = createNode({ tag: "li", parent: list });
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
  const ctaButton = createNode({
    tag: "button",
    classNames: "cta-btn",
    parent: cta,
  });
  ctaButton.textContent = "See Our Menu";
}

export default function generateHomePage() {
  content_root.textContent = "";
  createHero();
  createAbout();
  createHighlights();
}
