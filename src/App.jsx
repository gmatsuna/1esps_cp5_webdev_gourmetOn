import { useState, useEffect } from 'react';
import { getGourmetRecipes } from './services/api';
import Header from './components/Header';
import Hero from './components/Hero';
import Apresentacao from './components/Apresentacao';
import Funcionalidades from './components/Funcionalidades';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getGourmetRecipes(busca);
        setComidas(response);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      } finally {
        setLoading(false);
      }
    };

    if (busca.trim().length > 0) {
      fetchData();
    }
  }, [busca]);

  return (
    <>
      <div className="min-h-screen bg-white">

        <header>
          <Header />
        </header>

        <main className="container mx-auto px-4 py-12">
          <Hero />
          <Apresentacao />
          <Funcionalidades />
          <Depoimentos />
          <Contato />
          <section className="api">
            <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
              Nossas Recomendações
            </h2>

            <div className="flex flex-col items-center justify-center mb-20 py-3 px-4 space-y-3">
              <label htmlFor="ingrediente" className="text-lg font-semibold text-gray-800">
                Digite um ingrediente:
              </label>
              <input 
                type="text" 
                name="ingrediente" 
                id="ingrediente" 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                placeholder="Buscar por ingrediente (ex: apple, banana, tomato)" 
              />
            </div>


            {loading ? (
              <p className="text-center animate-pulse">Carregando cardápio...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comidas && comidas.length > 0 ? (
                  comidas.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100">
                      <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-slate-800 truncate">{item.title}</h3>
                        <a href='#' className="text-orange-600 text-sm font-semibold mt-2">Adicionar ao carrinho →</a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center">Nenhuma receita encontrada.</p>
                )}
              </div>
            )}
          </section>
        </main>

        <footer >
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
