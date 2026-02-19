import home from "./pages/home.js";
import menu from "./pages/menu.js";
import "./styles.css";

const navItems = document.querySelectorAll("nav button");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    showPage(e.target.dataset.id);
  });
});

function showPage(pageId) {
  switch (pageId) {
    case "home":
      home();
      break;
    case "about":
      menu();
      break;
    case "contact":
      console.log("There's no contact page yet!");
      break;
    default:
      console.error("There's no pages to show!");
  }
}

showPage("home");
