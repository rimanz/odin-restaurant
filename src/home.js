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

export default function generateHomePage() {
  createHero();
}
