let recipesList = [];

export function getRecipesList() {
  return recipesList;
}

export function addRecipe(recipe) {
  recipesList.push(recipe);
}

export function updateRecipe(recipeName, updatedRecipe) {
  const recipeIndex = recipesList.findIndex((recipe) => recipe.name === recipeName);

  if (recipeIndex !== -1) {
    recipesList[recipeIndex] = {
      ...recipesList[recipeIndex],
      ...updatedRecipe,
    };
  }
}

export function deleteRecipe(recipeName) {
  const recipeIndex = recipesList.findIndex((recipe) => recipe.name === recipeName);

  if (recipeIndex !== -1) {
    recipesList.splice(recipeIndex, 1);
  }
}

// Sample recipes
addRecipe({ name: "Pasta", price: "10", selectedIngredients: ["Tomato", "Pasta"], description: "To prepare a scrumptious pasta dish, boil your favorite pasta until al dente. In a separate pan, sauté garlic in olive oil, add tomato sauce, and season with herbs. Toss the cooked pasta into the sauce, ensuring it's well-coated. Garnish with Parmesan and fresh basil for a delightful pasta experience.", image: "/pasta.jpg" });
addRecipe({ name: "Soup", price: "5", selectedIngredients: ["Carrot", "Onion", "Broccoli"], description: "Create a flavorful soup by simmering a medley of vegetables, broth, and your preferred protein. Begin by sautéing onions and garlic, then add diced vegetables and protein. Pour in broth, bring to a gentle boil, and let it simmer. Season with herbs, salt, and pepper. Serve piping hot for a comforting bowl of soup.", image: "/soup.jpg" });
addRecipe({ name: "Pizza", price: "12", selectedIngredients: ["Dough", "Cheese", "Tomato Sauce"], description: "To make a delicious pizza, start by preparing a pizza dough. Roll it out and spread a layer of tomato sauce. Add your favorite toppings like cheese, pepperoni, and veggies. Bake in a preheated oven until the crust is golden and the cheese is melted. Enjoy your homemade pizza!", image: "/pizza.jpg" });
