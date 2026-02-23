const restaurantData = {
  name: "Demo Diner",
  Tagline: "Seasonal flavors. Honest cooking. Gather around.",
  aboutLines: [
    "At Demo Diner, we believe great food starts with fresh ingredients and simple preparation. Our menu changes with the seasons to highlight the best local produce, responsibly sourced meats, and house-made specialties.",
    "Whether you're here for a quiet lunch, a family dinner, or a weekend celebration, we aim to create a warm and welcoming experience from the first bite to the last.",
  ],
  highlights: [
    "Locally sourced ingredients",
    "Handcrafted dishes",
    "Cozy, modern atmosphere,",
  ],

  menu: {
    Appetizers: [
      {
        name: "Roasted Tomato Basil Soup",
        image: "roasted-tomato-basil-soup.webp",
        description:
          "Slow-roasted tomatoes blended with fresh basil and finished with a touch of cream. Served with toasted sourdough.",
        price: 6.5,
      },
      {
        name: "Crispy Calamari",
        image: "crispy-calamari.webp",
        description:
          "Lightly battered calamari fried until golden and served with lemon aioli and house marinara.",
        price: 9.0,
      },
      {
        name: "Stuffed Mushrooms",
        image: "stuffed-mushrooms.webp",
        description:
          "Button mushrooms filled with herbed cream cheese, garlic, and parmesan, baked until tender.",
        price: 8.0,
      },
      {
        name: "Bruschetta Trio",
        image: "bruschetta-trio.webp",
        description:
          "Grilled bread topped with tomato basil, roasted peppers, and olive tapenade.",
        price: 7.5,
      },
    ],

    Mains: [
      {
        name: "Grilled Herb Chicken",
        image: "grilled-herb-chicken.webp",
        description:
          "Marinated chicken breast served with garlic mashed potatoes and seasonal vegetables.",
        price: 16.0,
      },
      {
        name: "Pan-Seared Salmon",
        image: "pan-seared-salmon.webp",
        description:
          "Fresh salmon fillet with lemon butter sauce and wild rice.",
        price: 18.5,
      },
      {
        name: "Classic Beef Burger",
        image: "classic-beef-burger.webp",
        description:
          "Angus beef patty with aged cheddar, lettuce, tomato, and house sauce on a brioche bun.",
        price: 14.0,
      },
      {
        name: "Vegetable Pasta Primavera",
        image: "vegetable-pasta-primavera.webp",
        description:
          "Seasonal vegetables tossed with penne pasta in a light garlic olive oil sauce.",
        price: 15.0,
      },
    ],

    Desserts: [
      {
        name: "Chocolate Lava Cake",
        image: "chocolate-lava-cake.webp",
        description:
          "Warm chocolate cake with a molten center, served with vanilla ice cream.",
        price: 8.0,
      },
      {
        name: "New York Cheesecake",
        image: "new-york-cheesecake.webp",
        description:
          "Classic cheesecake with a buttery graham crust and berry compote.",
        price: 7.5,
      },
      {
        name: "Tiramisu",
        image: "tiramisu.webp",
        description:
          "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
        price: 7.0,
      },
      {
        name: "Seasonal Fruit Tart",
        image: "seasonal-fruit-tart.webp",
        description:
          "Buttery pastry crust filled with custard and topped with fresh seasonal fruits.",
        price: 6.5,
      },
    ],

    Drinks: [
      {
        name: "Fresh Lemonade",
        image: "fresh-lemonade.webp",
        description:
          "Freshly squeezed lemons with a touch of cane sugar and mint.",
        price: 4.0,
      },
      {
        name: "Iced Tea",
        image: "iced-tea.webp",
        description:
          "Chilled black tea served with lemon and optional sweetener.",
        price: 3.5,
      },
      {
        name: "House Coffee",
        image: "house-coffee.webp",
        description: "Freshly brewed medium-roast coffee.",
        price: 3.0,
      },
      {
        name: "Sparkling Water",
        image: "sparkling-water.webp",
        description: "Chilled sparkling mineral water.",
        price: 3.0,
      },
    ],
  },

  contact: {
    name: name,
    address: {
      street: "12 Ocean Breeze Road",
      area: "Pahartali Heights",
      city: "Chattogram",
      postalCode: "4202",
      country: "Bangladesh",
    },
    phone: "+1-123-456-7890",
    email: "hello@demodiner.com",
    hours: [
      {
        days: "Mon — Thu",
        open: "11:00 AM",
        close: "09:00 PM",
      },
      {
        days: "Fri — Sat",
        open: "11:00 AM",
        close: "10:30 PM",
      },
    ],
  },
};

export default restaurantData;
