import generateHomePage from "./pages/home.js";
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
      generateHomePage();
      break;
    case "about":
      console.log("There's no about page yet!");
      break;
    case "contact":
      console.log("There's no contact page yet!");
      break;
    default:
      generateHomePage();
  }
}

showPage();
