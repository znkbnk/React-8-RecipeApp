import React from "react";

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className='recipe-detail'>Select a recipe to view details.</div>
    );
  }

  return (
    <div className='recipe-detail'>
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
