import restaurantData from "../data.js";
import { showPage } from "../index.js";
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
    classNames: "about",
    parent: content_root,
    heading: { textContent: "About" },
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
    textContent: "See Our Menu",
    parent: cta,
  });
  ctaButton.addEventListener("click", () => showPage("menu"));
}

export default function home() {
  content_root.textContent = "";
  createHero();
  createAbout();
  createHighlights();
}
