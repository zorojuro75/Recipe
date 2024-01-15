"use client";
import React, { useState } from "react";
import ingredientList from "../../../ingredients.json";
import { addRecipe } from "../data/recipe";
const Form = ({ onClose, onAdd }) => {
  const [name, setRecipeName] = useState("");
  const [price, setRecipePrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredients = ingredientList;
  const handleIngredientChange = (e) => {
    const selectedIngredient = e.target.value;

    if (!selectedIngredients.includes(selectedIngredient)) {
      setSelectedIngredients([...selectedIngredients, selectedIngredient]);
    }
  };

  const handleRemoveIngredient = (removedIngredient) => {
    const updatedIngredients = selectedIngredients.filter((ingredient) => ingredient !== removedIngredient);
    setSelectedIngredients(updatedIngredients);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      price,
      selectedIngredients,
      description,
      image,
    };
    try {
      addRecipe(newRecipe);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
    setRecipeName("");
    setRecipePrice("");
    setSelectedIngredients([]);
    setDescription("");
    setImage("");
    onAdd();
    onClose();
  };
  return (
    <div className="bg-white p-5 rounded">
      <div className="text-center text-2xl text-[#426B1F] p-5">Add Recipe</div>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
        <label>Recipe Name</label>
        <input
          className="col-span-2 border rounded"
          type="text"
          value={name}
          required
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <label>Recipe Price</label>
        <input
          className="col-span-2 border rounded"
          type="text"
          value={price}
          required
          onChange={(e) => setRecipePrice(e.target.value)}
        />

        <label>Select Ingredients</label>
        <div className="col-span-2 border rounded">
          <select onChange={handleIngredientChange} className="w-full rounded" required>
            <option value="" disabled>
              Select a ingredient
            </option>
            {ingredients.map((ingredient) => (
              <option key={ingredient.id} value={ingredient.label}>
                {ingredient.label}
              </option>
            ))}
          </select>
          <ul className="px-2 flex flex-col gap-2 text-sm" required>
            {selectedIngredients.map((ingredient) => (
              <li key={ingredient} className="border rounded w-fit px-2 flex gap-2">
                {ingredient}
                <button onClick={() => handleRemoveIngredient(ingredient)}>x</button>
              </li>
            ))}
          </ul>
        </div>
        <label>Description</label>
        <textarea
          className="col-span-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Image URL</label>
        <input
          className="col-span-2 border rounded"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" className="col-span-3">
          Submit
        </button>
      </form>

      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Form;