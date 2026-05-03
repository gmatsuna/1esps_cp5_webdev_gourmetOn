import { useState, useEffect } from 'react';
import { getGourmetRecipes } from './services/api';

function App() {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGourmetRecipes("apples");
      setComidas(response);
      setLoading(false);
      // const data = await response.json();
      // setComidas(data.recipes);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Aqui entrarão os componentes que faremos depois */}
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold text-orange-600">GourmetOn - Cardápio Real</h1>
          
          {loading ? (
            <p className="mt-4 animate-pulse">Carregando iguarias...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {comidas.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">
                  <img src={item.image} alt={item.title} className="rounded-lg w-full h-48 object-cover" />
                  <h3 className="font-bold mt-2 text-slate-800 truncate">{item.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
