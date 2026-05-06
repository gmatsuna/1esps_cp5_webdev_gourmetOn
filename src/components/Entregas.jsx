import { Zap } from "lucide-react";

const Entregas = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-3xl border border-white/5 text-center transition-all hover:scale-105 hover:border-lime-400 group cursor-pointer">
      <div className="bg-lime-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-lime-400/20 group-hover:rotate-12 transition-transform">
        <Zap className="text-black w-8 h-8" />
      </div>
      <h3 className="text-white text-2xl font-bold mb-4">Entrega Rápida</h3>
      <p className="text-slate-400 leading-relaxed">
        Nossa logística inteligente garante que seu prato chegue quente e fresco
        em menos de 30 minutos.
      </p>
    </div>
  );
};

export default Entregas;
