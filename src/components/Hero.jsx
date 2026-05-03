// src/components/Hero.jsx
// import React from 'react';

export default function Hero() {
  return (
    <>
        <section className="relative w-full bg-orange-50 py-16 md:py-24 overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Lado Esquerdo: Conteúdo Textual */}
            <div className="text-center md:text-left z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                Sua comida <span className="text-orange-600">favorita</span>, em um toque.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                O GourmetOn conecta você aos melhores restaurantes da cidade. 
                Peça agora e receba pratos incríveis com a rapidez que você merece.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full text-lg shadow-lg shadow-orange-200 hover:bg-orange-700 hover:scale-105 transition-all cursor-pointer">
                Baixar GourmetOn
                </button>
                <button className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 font-bold rounded-full text-lg hover:bg-orange-50 transition-all cursor-pointer">
                Ver Cardápio
                </button>
            </div>
            </div>

            {/* Lado Direito: Imagem Impactante */}
            <div className="relative flex justify-center items-center">
            {/* Moldura criativa para a imagem */}
            <div className="relative w-full max-w-lg aspect-square">
                <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" 
                alt="Hambúrguer Gourmet Delicioso" 
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                />
            </div>
            </div>

        </div>
        </section>
    </>
  );
}