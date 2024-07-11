const pizza_items = [
  {
    id: 1,
    title: "Margherita Pizza",
    imgurl:
      "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and basil leaves.",
    price: 9.99,
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil Leaves"],
    isVegetarian: true,
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    imgurl:
      "https://www.thespruceeats.com/thmb/yy3vu0m1bZKkCIqtcnkc9bwqYBs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pepperonipizzahoriz-3d53b00a7cce429eae3bfb629df356ec.jpg",
    description:
      "Pizza topped with pepperoni slices, tomato sauce, and mozzarella cheese.",
    price: 11.99,
    ingredients: ["Pepperoni Slices", "Tomato Sauce", "Mozzarella Cheese"],
    isVegetarian: false,
  },
  {
    id: 3,
    title: "Vegetarian Pizza",
    imgurl:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
    description:
      "Pizza topped with assorted vegetables such as bell peppers, onions, olives, and mushrooms.",
    price: 10.99,
    ingredients: [
      "Bell Peppers",
      "Onions",
      "Olives",
      "Mushrooms",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: true,
  },
  {
    id: 4,
    title: "BBQ Chicken Pizza",
    imgurl:
      "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
    description:
      "Pizza topped with barbecue sauce, grilled chicken, red onions, and mozzarella cheese.",
    price: 12.99,
    ingredients: [
      "Barbecue Sauce",
      "Grilled Chicken",
      "Red Onions",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 5,
    title: "Four Cheese Pizza",
    imgurl:
      "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800",
    description:
      "Pizza topped with a blend of four cheeses: mozzarella, parmesan, provolone, and gorgonzola.",
    price: 13.99,
    ingredients: [
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Provolone Cheese",
      "Gorgonzola Cheese",
    ],
    isVegetarian: true,
  },
  {
    id: 6,
    title: "Hawaiian Pizza",
    imgurl:
      "https://recipes.net/wp-content/uploads/2020/03/dominos-copycat-hawaiian-pizza-recipe-1024x576.jpg",
    description:
      "Pizza topped with ham, pineapple chunks, tomato sauce, and mozzarella cheese.",
    price: 11.49,
    ingredients: [
      "Ham",
      "Pineapple Chunks",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 7,
    title: "Meat Lover's Pizza",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSGqzQ-DjWDiiB7PU4qpmoUM9EXwXSiHavg&s",
    description:
      "Pizza loaded with pepperoni, sausage, bacon, tomato sauce, and mozzarella cheese.",
    price: 12.99,
    ingredients: [
      "Pepperoni",
      "Sausage",
      "Bacon",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 8,
    title: "Mushroom Pizza",
    imgurl:
      "https://www.allrecipes.com/thmb/3qkooqf4vsQ3DjzjIZy0s6ZSwC0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/36107allies-mushroom-pizzafabeveryday4x3-005f809371b147378094d60f28daf212.jpg",
    description:
      "Pizza topped with sautéed mushrooms, garlic, tomato sauce, and mozzarella cheese.",
    price: 10.99,
    ingredients: [
      "Sautéed Mushrooms",
      "Garlic",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: true,
  },
  {
    id: 9,
    title: "Buffalo Chicken Pizza",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT_muYQNzvvOGmusGbRyi7g57eazNy5wBXA&s",
    description:
      "Pizza topped with buffalo sauce, grilled chicken, red onions, blue cheese, and mozzarella cheese.",
    price: 12.49,
    ingredients: [
      "Buffalo Sauce",
      "Grilled Chicken",
      "Red Onions",
      "Blue Cheese",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 10,
    title: "Spinach and Feta Pizza",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5eaWCxPjvtJ4h3oed9CaWaz44hNHy1U_Aw&s",
    description:
      "Pizza topped with spinach, feta cheese, garlic, tomato sauce, and mozzarella cheese.",
    price: 11.49,
    ingredients: [
      "Spinach",
      "Feta Cheese",
      "Garlic",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: true,
  },
  {
    id: 11,
    title: "BBQ Beef Pizza",
    imgurl:
      "https://img.taste.com.au/nm36Z471/taste/2019/07/pulled-beef-pizza-taste-152018-2.jpg",
    description:
      "Pizza topped with barbecue sauce, ground beef, red onions, bell peppers, and mozzarella cheese.",
    price: 13.49,
    ingredients: [
      "Barbecue Sauce",
      "Ground Beef",
      "Red Onions",
      "Bell Peppers",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 12,
    title: "Capricciosa Pizza",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Noxb2jhFcFoJz5bb8vxcKEJa_fJ3MD7p3A&s",
    description:
      "Pizza topped with ham, artichoke hearts, mushrooms, black olives, tomato sauce, and mozzarella cheese.",
    price: 12.99,
    ingredients: [
      "Ham",
      "Artichoke Hearts",
      "Mushrooms",
      "Black Olives",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
  {
    id: 13,
    title: "Pesto Chicken Pizza",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gwX21jT54qgDEwF4VUhk6AiyKSwcxXMd5g&s",
    description:
      "Pizza topped with pesto sauce, grilled chicken, sun-dried tomatoes, spinach, and mozzarella cheese.",
    price: 13.99,
    ingredients: [
      "Pesto Sauce",
      "Grilled Chicken",
      "Sun-dried Tomatoes",
      "Spinach",
      "Mozzarella Cheese",
    ],
    isVegetarian: true,
  },
  {
    id: 14,
    title: "Seafood Pizza",
    imgurl:
      "https://www.uncommonlydelicious.com/wp-content/uploads/2020/09/Abdellah-Tayebi-August-14-2020-11-19-25.jpg",
    description:
      "Pizza topped with shrimp, calamari, mussels, garlic, tomato sauce, and mozzarella cheese.",
    price: 15.99,
    ingredients: [
      "Shrimp",
      "Calamari",
      "Mussels",
      "Garlic",
      "Tomato Sauce",
      "Mozzarella Cheese",
    ],
    isVegetarian: false,
  },
];

module.exports = pizza_items;
