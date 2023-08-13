import React, { useState } from 'react';
import './App.css'; // Import your main CSS file
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    { id: 1, title: 'Pasta Carbonara', ingredients: ['pasta', 'eggs', 'bacon'] },
    { id: 2, title: "Pasta", ingredients: ["pasta", "mushrooms", "garlic"],
    },
    // ... more recipes
  ];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        <RecipeDetail recipe={selectedRecipe} />
      </div>
    </div>
  );
};

export default App;
