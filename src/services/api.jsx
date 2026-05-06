const API_KEY = '7312780ac08d4cfdb8e39e535de04e1b'; // Pegue em spoonacular.com/food-api
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

const translateIngredient = async (ingredientPt) => {
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(ingredientPt)}&langpair=pt|en`;
        const res = await fetch(url);
        const data = await res.json();
        
        return data.responseData.translatedText;
    } catch (error) {
        console.error("Erro na MyMemory:", error);
        return ingredientPt;
    }
};

export const getGourmetRecipes = async (ingredient) => {

    try {
        const ingredientEn = await translateIngredient(ingredient)
        const response = await fetch(`${BASE_URL}?ingredients=${ingredientEn}&number=6&apiKey=${API_KEY}`);
        
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