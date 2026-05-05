import { Clock, MapPin, Utensils, ChefHat, CreditCard, ShieldCheck } from 'lucide-react';

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 space-y-20">

        {/* SUB-SESSÃO 1: Entrega Rápida */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-4">

          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl transition-colors"></div>

            <img
              src="https://media.istockphoto.com/id/1467358788/pt/foto/car-and-motorcycle-on-a-city-street-at-night.jpg?s=1024x1024&w=is&k=20&c=f0wqaFPlg8V71U58wGeH2O_EkUeTsz8ovIvFFX4RD7g="
              className="rounded-3xl shadow-xl border border-slate-200 relative z-10 w-full h-[320px] object-cover"
              alt="Entrega Rápida GourmetOn"
            />
          </div>

          <div className="w-full md:w-1/2">
            <span className="bg-lime-100 text-lime-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3 inline-block">
              Entrega Rápida
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Sua comida sempre <span className="text-lime-500">quente e rápida.</span>
            </h2>

            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Nossa logística inteligente utiliza algoritmos de geolocalização para garantir que o entregador chegue no momento exato em que o prato é finalizado.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <Clock size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">Média de 25 min por entrega</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">Rastreamento em tempo real</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SESSÃO 2: Variedade */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 py-4">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl transition-colors"></div>

            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1024"
              className="rounded-3xl shadow-xl border border-slate-200 relative z-10 w-full h-[320px] object-cover"
              alt="Variedade GourmetOn"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="bg-lime-100 text-lime-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3 inline-block">
              Variedade Gourmet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Um cardápio para <span className="text-lime-500">todos os gostos.</span>
            </h2>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Explore uma curadoria exclusiva que vai desde a culinária oriental até as opções veganas mais premiadas da cidade.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <Utensils size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">+500 restaurantes parceiros</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <ChefHat size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">Chefes renomados</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SESSÃO 3: Pagamento */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-4">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl transition-colors"></div>
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1024"
              className="rounded-3xl shadow-xl border border-slate-200 relative z-10 w-full h-[320px] object-cover"
              alt="Pagamento Seguro GourmetOn"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="bg-lime-100 text-lime-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3 inline-block">
              Check-out Ágil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Pagamento simples e <span className="text-lime-500">seguro.</span>
            </h2>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Aceitamos todas as bandeiras de cartão, PIX e carteiras digitais. Salve seus métodos e peça com um toque.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <CreditCard size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">Pagamento em 1-clique</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-lime-500 p-1.5 rounded-md text-white">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium">Criptografia total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}