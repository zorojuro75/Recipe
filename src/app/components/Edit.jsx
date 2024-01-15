"use client";
import React, { useEffect, useState } from "react";
import { updateRecipe } from "../data/recipe";
import ingredientList from "../../../ingredients.json";
const Edit = ({
  title,
  price,
  description,
  ingredients,
  onUpdate,
  setIsEdit,
}) => {
  // State for form input values
  const [editTitle, setEditTitle] = useState(title);
  const [editPrice, setEditPrice] = useState(price);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [editDescription, setEditDescription] = useState(description);
  const availAbleingredients = ingredientList;
  const handleEdit = () => {
    setIsEdit(true);
  };
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
  const handleSave = () => {
    updateRecipe(title, {
      name: editTitle,
      price: editPrice,
      description: editDescription,
      selectedIngredients: selectedIngredients,
    });
    onUpdate();
    setIsEdit(false);
  };
  useEffect(() => {
    setEditTitle(title);
    setEditPrice(price);
    setSelectedIngredients(ingredients);
    setEditDescription(description);
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 backdrop-fixed z-50">
      <div className="p-[24px] bg-[#FAFAF5] rounded-[16px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="grid grid-cols-3 gap-2"
        >
          <label>Title</label>
          <input
            className="col-span-2 border rounded"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <label>Price</label>
          <input
            className="col-span-2 border rounded"
            type="text"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <label>Select Ingredients</label>
          <div className="col-span-2 border rounded">
            <select
              onChange={handleIngredientChange}
              className="w-full rounded"
              required
            >
              <option value="" disabled>
                Select an ingredient
              </option>
              {availAbleingredients.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.label}>
                  {ingredient.label}
                </option>
              ))}
            </select>
            <ul className="px-2 flex flex-col gap-2 text-sm">
              {selectedIngredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="border rounded w-fit px-2 flex gap-2"
                >
                  {ingredient}
                  <button onClick={() => handleRemoveIngredient(ingredient)}>
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <label>Instruction</label>
          <textarea
            className="col-span-2 border rounded"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />

          <button
            type="button"
            onClick={handleEdit}
            className="col-span-3 border rounded"
          >
            Cancel
          </button>
          <button type="submit" className="col-span-3 border rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
