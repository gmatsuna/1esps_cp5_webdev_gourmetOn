export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative h-[33vh] mt-4 flex items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Comida de Chef,
              <br />
              <span className="text-lime-400">na sua Mesa.</span>
            </h1>
            <p className="text-base text-gray-300 max-w-lg mb-5 leading-relaxed">
              Os melhores pratos dos restaurantes exclusivos da cidade com
              entrega ultra-rápida.
            </p>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-bold text-base hover:scale-105 transition cursor-pointer shadow-lg shadow-lime-400/20">
              Download App
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
