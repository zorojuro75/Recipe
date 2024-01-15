"use client";
import React, { useState } from "react";
import Form from "./Form";

const Button = ({onAdd}) => {
    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(!showForm);
      };
    
      const handleOverlayClick = () => {
        setShowForm(false);
      };
      return (
        <>
          <button
            className="px-[20px] py-[14px] rounded bg-[#426B1F] text-white font-semibold"
            onClick={handleButtonClick}
          >
            Add Recipe
          </button>
    
          {showForm && (
            <div
              className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 backdrop-fixed z-50"
            >
              <Form onClose={handleOverlayClick} onAdd={onAdd} />
            </div>
          )}
        </>
      );
    };
    
    export default Button;