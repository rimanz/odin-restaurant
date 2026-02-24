import contact from "./pages/contact.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import "./styles.css";

const navItems = document.querySelectorAll("nav button");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    navItems.forEach((btn) => btn.classList.remove("active"));
    navItem.classList.add("active");
    showPage(e.target.dataset.id);
  });
});

export function showPage(pageId) {
  switch (pageId) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "contact":
      contact();
      break;
    default:
      console.error("There's no pages to show!");
  }
}

showPage("home");
