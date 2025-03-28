import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES: Category[] = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const MEALS: Meal[] = [
  new Meal(
    "m1", // id (string)
    ["c1", "c2"], // categoryIds (string[])
    "Spaghetti with Tomato Sauce", // title (string)
    "affordable", // affordability (string)
    "simple", // complexity (string)
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg", // imageUrl (string)
    20, // duration (number)
    [
      // ingredients (string[])
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      // steps (string[])
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false, // isGlutenFree (boolean)
    true, // isVegan (boolean)
    true, // isVegetarian (boolean)
    true // isLactoseFree (boolean)
  ),
  // Diğer Meal nesnelerini de aynı şekilde kontrol edin
];
