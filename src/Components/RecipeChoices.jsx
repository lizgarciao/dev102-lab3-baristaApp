import React, { Component, useEffect, useState } from "react";

// this component is responsible for the layout of the radio buttons
const RecipeChoices = ({handleChange, label, choices, checked }) => {
    return (
      <div className="radio-buttons">
        {choices &&
            choices.map((choice) => (
                <li key={choice}>
                    <input
                        id={choice}
                        value={choice}
                        name= {label} // groups input buttons so that the app recognizes they are answers to the same question (e.g., answer for "temperature")
                        type="radio"
                        onChange={handleChange}
                        checked={checked === choice} // tracks whether the radio button is selected or deselected
                    />
                    {choice}
                </li>
            ))
        }
        
      </div>
    );
};

export default RecipeChoices;