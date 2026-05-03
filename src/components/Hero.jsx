export default function Hero() {
  return (
    <>
      <section id="hero" className="relative h-screen flex items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold text-white mb-4">Comida de Chef,<br/><span className="text-lime-400">na sua Mesa.</span></h1>
          <p className="text-xl text-gray-300 max-w-lg mb-8">Peça os melhores pratos dos restaurantes mais exclusivos da cidade com entrega ultra-rápida.</p>
          <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition">Download App</button>
        </div>
    </section>
    </>
  );
}
