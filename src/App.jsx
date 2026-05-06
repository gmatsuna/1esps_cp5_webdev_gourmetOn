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
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    if (busca.trim().length === 0) {
      setComidas([]);
      setLoading(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      if (busca.trim().length >= 3) {
        setLoading(true);
        try {
          const response = await getGourmetRecipes(busca);
          setComidas(response);
        } catch (error) {
          console.error("Erro ao buscar receitas:", error);
        } finally {
          setLoading(false);
        }
      }
    }, 600);

    return () => clearTimeout(delayDebounceFn);
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

          <section className="api max-w-7xl mx-auto px-4 py-16">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Nossas <span className="text-lime-500">Recomendações</span>
              </h2>
              <div className="h-1.5 w-20 bg-lime-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center justify-center mb-20 py-3 px-4 space-y-3">
              <label htmlFor="ingrediente" className="block mb-2 text-sm font-bold uppercase tracking-wider text-slate-500 ml-1">
                O que vamos cozinhar hoje?
              </label>
              <input 
                type="text" 
                name="ingrediente" 
                id="ingrediente" 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                placeholder="Buscar por ingrediente (ex: maça, banana, frango)" 
              />
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500 mb-4"></div>
                <p className="text-center text-slate-600 animate-pulse">Buscando as melhores receitas...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comidas && comidas.length > 0 ? (
                  comidas.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100">
                      <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-slate-800 truncate">{item.title}</h3>
                        <a href='#' className="text-orange-600 text-sm font-semibold mt-2 inline-block">Adicionar ao carrinho →</a>
                      </div>
                    </div>
                  ))
                ) : (
                  busca.length >= 3 && (
                    <p className="col-span-full text-center text-slate-500">
                      Nenhuma receita encontrada para "{busca}".
                    </p>
                  )
                )}
              </div>
            )}
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;