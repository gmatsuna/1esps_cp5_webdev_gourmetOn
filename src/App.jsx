import React, { useState, useEffect } from 'react';

function App() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=355c6adf649d4dcba9966a2d41b72d5b");
      const data = await response.json();
      setComidas(data.recipes);
    };
    fetchData();
  })

  return (
    <>
      <div className="bg-white text-slate-900">
        <h1 className="text-3xl font-bold">GourmetOn Iniciado</h1>
      </div>
    </>
  )
}

export default App
