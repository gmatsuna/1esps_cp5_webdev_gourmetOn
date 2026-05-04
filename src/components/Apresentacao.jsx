import { Clock, MapPin } from 'lucide-react';

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 space-y-32"> {/* Espaçamento grande entre sessões */}
        
        {/* MINI-SESSÃO 1: IMAGEM ESQUERDA, TEXTO DIREITA */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 py-12">
          
          {/* LADO DA IMAGEM: Com sombra e borda elegante */}
          <div className="w-full md:w-1/2 relative group">
            {/* Elemento decorativo de fundo (opcional, dá um ar moderno) */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-lime-400/20 rounded-full blur-3xl group-hover:bg-lime-400/30 transition-colors"></div>
            
            <img 
              src="../assets/img/entrega-rapida.webp" 
              className="rounded-[2rem] shadow-2xl border border-slate-200 relative z-10 w-full h-[400px] object-cover" 
              alt="Entrega Rápida GourmetOn" 
            />
          </div>

          {/* LADO DO TEXTO: Hierarquia corrigida */}
          <div className="w-full md:w-1/2">
            {/* 1. Badge/Etiqueta Superior (Substitui o seu H1 do final) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-lime-100 text-lime-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Entrega Rápida
              </span>
            </div>

            {/* 2. Título Principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Sua comida sempre <span className="text-lime-500">quente e rápida.</span>
            </h2>

            {/* 3. Descrição */}
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nossa logística inteligente conecta o melhor da gastronomia à sua mesa. 
              Utilizamos algoritmos de geolocalização para garantir que o entregador 
              chegue no momento exato em que o Chef finaliza seu prato.
            </p>

            {/* 4. Lista de Diferenciais (Opcional, mas melhora muito o conteúdo) */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-lime-500 p-2 rounded-lg text-white">
                  <Clock size={20} />
                </div>
                <span className="text-slate-700 font-medium">Média de 25 minutos por entrega</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-lime-500 p-2 rounded-lg text-white">
                  <MapPin size={20} />
                </div>
                <span className="text-slate-700 font-medium">Rastreamento em tempo real</span>
              </div>
            </div>
          </div>
        </div>

        {/* MINI-SESSÃO 2: TEXTO ESQUERDA, IMAGEM DIREITA (Note o 'md:flex-row-reverse') */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <img src="URL_DOS_PRATOS" className="rounded-3xl shadow-2xl" alt="Variedade" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Uma curadoria feita por especialistas.</h2>
            <p className="text-slate-600 text-lg">Selecionamos apenas os restaurantes que passam no nosso teste...</p>
            <h1>Variedade</h1>
          </div>
        </div>

        {/* MINI-SESSÃO 3: IMAGEM ESQUERDA, TEXTO DIREITA */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img src="URL_DA_MOTO" className="rounded-3xl shadow-2xl" alt="Entrega" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Sua comida sempre quente e rápida.</h2>
            <p className="text-slate-600 text-lg mb-4">Nossa logística inteligente conecta o melhor da gastronomia...</p>
            <h1>Pagamento Fácil</h1>
          </div>
        </div>

      </div>
    </section>
  );
}