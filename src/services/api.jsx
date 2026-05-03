const API_KEY = '355c6adf649d4dcba9966a2d41b72d5b'; // Pegue em spoonacular.com/food-api
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

export const getGourmetRecipes = async (ingredient) => {
//   try {
//     const response = await fetch(`${BASE_URL}?ingredients=${ingredient}&apiKey=${API_KEY}`);
    
//     if (!response.ok) {
//       throw new Error('Erro ao buscar dados da API');
//     }

//     const data = await response.json();
//     console.log("Dados recebidos da API:", data);
//     return data;
//   } catch (error) {
//     console.error("Erro na requisição Fetch:", error);
//     return [];
//   }

    try {
    const response = await fetch(`${BASE_URL}?ingredients=${ingredient}&number=6&apiKey=${API_KEY}`);
    
    if (!response.ok) {
       // Se der erro 402 ou qualquer outro, ele cai aqui e pula para o 'catch'
       throw new Error('Limite da API atingido');
    }

    const data = await response.json();
    return data; 
    
  } catch (error) {
    console.warn("Usando dados de teste (Mock) devido ao erro na API.", error);
    // RETORNA DADOS DE TESTE PARA O SITE NÃO FICAR VAZIO
    return [
      { id: 1, title: "Hambúrguer de Maçã Gourmet", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
      { id: 2, title: "Torta de Maçã Especial", image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=500" },
      { id: 3, title: "Salada de Maçã e Nozes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500" }
    ];
  }
};