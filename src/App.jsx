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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGourmetRecipes("apples");
      setComidas(response);
      setLoading(false);
    };
    fetchData();
  }, []);

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
                        <p className="text-orange-600 text-sm font-semibold mt-2">Ver Receita →</p>
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
