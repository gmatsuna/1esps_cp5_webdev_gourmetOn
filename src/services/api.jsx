const API_KEY = '355c6adf649d4dcba9966a2d41b72d5b'; // Pegue em spoonacular.com/food-api
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

export const getGourmetRecipes = async (ingredient) => {
  try {
    const response = await fetch(`${BASE_URL}?ingredients=${ingredient}&apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição Fetch:", error);
    return [];
  }
};