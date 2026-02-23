import restaurantData from "../data.js";
import { createNode, sectionBuilder } from "../utils.js";

const content_root = document.getElementById("content");

function createHeader() {
  const headerSection = sectionBuilder({
    classNames: "page-header",
    heading: { tag: "h1", textContent: "Contact Us" },
    parent: content_root,
  });

  const subHeading = createNode({
    tag: "p",
    classNames: "sub-heading",
    textContent: "We’d love to hear from you.",
    parent: headerSection,
  });
}

function createAddressSection() {
  const contactInfo = restaurantData.contact;

  const section = sectionBuilder({
    classNames: "address",
    heading: {
      tag: "h3",
      textContent: "Address",
    },
    parent: content_root,
  });

  const address = createNode({
    tag: "address",
    parent: section,
  });

  const name = createNode({
    tag: "p",
    textContent: restaurantData.name,
    parent: address,
  });

  const street = createNode({
    tag: "p",
    textContent: contactInfo.address.street,
    parent: address,
  });

  const city = createNode({
    tag: "p",
    textContent: `${contactInfo.address.city}, ${contactInfo.address.postalCode}`,
    parent: address,
  });

  const phone = createNode({
    tag: "p",
    textContent: `Phone: ${contactInfo.phone}`,
    parent: address,
  });

  const email = createNode({
    tag: "p",
    textContent: `Email: ${contactInfo.email}`,
    parent: address,
  });
}

function createHoursSection() {
  const openingHours = restaurantData.contact.hours;

  const section = sectionBuilder({
    classNames: "hours",
    heading: {
      tag: "h3",
      textContent: "Opening Hours",
    },
    parent: content_root,
  });

  const hours = createNode({
    tag: "div",
    classNames: "timing",
    parent: section,
  });

  openingHours.forEach((timing) => {
    createNode({
      tag: "p",
      textContent: `${timing.days}: ${timing.open} — ${timing.close}`,
      parent: hours,
    });
  });
}

export default function contact() {
  content_root.textContent = "";

  createHeader();
  createAddressSection();
  createHoursSection();
}
