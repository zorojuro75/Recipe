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
addRecipe({ name: "Pasta", price: "10", selectedIngredients: ["Tomato", "Pasta"], description: "Delicious Pasta", image: "/pasta.jpg" });
addRecipe({ name: "Soup", price: "5", selectedIngredients: ["Carrot", "Onion", "Broccoli"], description: "Warm Soup", image: "/soup.jpg" });
addRecipe({ name: "Pizza", price: "12", selectedIngredients: ["Dough", "Cheese", "Tomato Sauce"], description: "Classic Pizza", image: "/pizza.jpg" });
