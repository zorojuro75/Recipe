"use client";
import React, { useState } from "react";
import ingredientList from "../../../ingredients.json";
import { addRecipe } from "../data/recipe";
import { RxCross1 } from "react-icons/rx";
const Form = ({ onClose, onAdd }) => {
  const [name, setRecipeName] = useState("");
  const [price, setRecipePrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState(true);
  const ingredients = ingredientList;
  const handleIngredientChange = (e) => {
    const selectedIngredient = e.target.value;

    if (!selectedIngredients.includes(selectedIngredient)) {
      setSelectedIngredients([...selectedIngredients, selectedIngredient]);
    }
  };

  const handleRemoveIngredient = (removedIngredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient !== removedIngredient
    );
    setSelectedIngredients(updatedIngredients);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedIngredients.length === 0) {
      setIngredientSelected(false);
      return;
    }
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
    <div className="bg-white p-5 rounded relative">
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
          <select
            onChange={handleIngredientChange}
            className="w-full rounded"
            required
          >
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
            {!ingredientSelected && (
              <li className="text-red-500">
                Please select at least one ingredient
              </li>
            )}
            {selectedIngredients.map((ingredient) => (
              <li
                key={ingredient}
                className="border rounded w-fit px-2 flex gap-2 items-center"
              >
                {ingredient}
                <RxCross1 onClick={() => handleRemoveIngredient(ingredient)} />
              </li>
            ))}
          </ul>
        </div>
        <label>Instruction</label>
        <textarea
          className="col-span-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Image URL</label>
        <input
          className="col-span-2 border rounded"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="col-span-3 border rounded bg-[#426B1F] hover:bg-[#315016] text-white p-2"
        >
          Submit
        </button>
      </form>

      <button
        onClick={handleClose}
        className="m-2 px-2 border rounded absolute top-0 right-0 hover:bg-[#426B1F] hover:text-white"
      >
        Close
      </button>
    </div>
  );
};

export default Form;
