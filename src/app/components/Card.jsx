"use client";
import React, { useState } from "react";
import { deleteRecipe } from "../data/recipe";
import Edit from "./Edit";
const Card = ({
  title,
  price,
  description,
  ingredients,
  image,
  onDelete,
  onUpdate,
}) => {
  const [isDetails, setIsDetails] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  
  const handleDelete = () => {
    deleteRecipe(title);
    onDelete();
  };

  return (
    <>
      <div className="h-[180px] w-[800px] bg-[#FAFAF5] rounded-[16px] flex">
        <img
          src={image}
          alt="No Images found"
          className="h-full w-[180px] rounded-l-[16px]"
        />
        <div className="p-[24px] flex justify-between flex-1">
          <div>
            <div className="text-2xl text-[#426B1F] font-semibold">{title}</div>
            <div className="text-lg text-[#426B1F]">${price}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="px-[20px] py-[8px] rounded bg-[#426B1F] text-white h-min cursor-pointer text-center"
              onClick={() => setIsDetails(!isDetails)}
            >
              Details
            </div>
            <div
              className="px-[20px] py-[8px] rounded bg-[#426B1F] text-white h-min cursor-pointer text-center"
              onClick={() => setIsEdit(!isEdit)}
            >
              Edit
            </div>
            <div
              className="px-[20px] py-[8px] rounded bg-[#426B1F] text-white h-min cursor-pointer text-center"
              onClick={handleDelete}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
      {isDetails && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 backdrop-fixed z-50"
          onClick={() => setIsDetails(!isDetails)}
        >
          <div className="p-[24px] flex justify-between flex-1 max-w-7xl mx-auto bg-[#FAFAF5] rounded-[16px]">
            <div>
              <div className="text-2xl text-[#426B1F] font-semibold">
                <strong>Name: </strong>
                {title}
              </div>
              <div className="text-lg text-[#426B1F]">
                <strong>Price: </strong>${price}
              </div>
              <div className="text-lg text-[#426B1F] flex gap-2">
                <strong>Ingredients: </strong>
                <ul className="flex gap-2">
                  {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="text-lg text-[#426B1F]">
                <strong>Instruction: </strong>
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
      {isEdit && (
        <Edit title={title} description={description} ingredients={ingredients} onUpdate={onUpdate} price={price} setIsEdit={setIsEdit}/>
      )}
    </>
  );
};

export default Card;
