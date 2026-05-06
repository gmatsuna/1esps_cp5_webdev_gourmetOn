import { Search, Filter, Bell, Heart, Star, Smartphone } from "lucide-react";

const Funcionalidades = () => {
  const features = [
    {
      icon: <Search className="text-lime-600" size={24} />,
      title: "Busca Inteligente",
      description:
        "Encontre exatamente o que deseja buscando por prato, ingrediente ou restaurante.",
    },
    {
      icon: <Filter className="text-lime-600" size={24} />,
      title: "Filtros Avançados",
      description:
        "Refine sua escolha por preço, tempo de entrega, avaliação ou restrições alimentares.",
    },
    {
      icon: <Bell className="text-lime-600" size={24} />,
      title: "Status em Tempo Real",
      description:
        "Receba notificações desde o preparo na cozinha até a chegada na sua porta.",
    },
    {
      icon: <Heart className="text-lime-600" size={24} />,
      title: "Favoritos",
      description:
        "Salve seus pratos e restaurantes preferidos para pedir novamente em segundos.",
    },
    {
      icon: <Star className="text-lime-600" size={24} />,
      title: "Avaliações Reais",
      description:
        "Confira fotos e opiniões de outros clientes para garantir a melhor experiência.",
    },
    {
      icon: <Smartphone className="text-lime-600" size={24} />,
      title: "Experiência Mobile",
      description:
        "Interface otimizada para você pedir de qualquer lugar com total fluidez.",
    },
  ];
  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo o que você precisa em{" "}
            <span className="text-lime-500">um só app.</span>
          </h2>
          <p className="text-slate-600">
            Desenvolvemos tecnologias exclusivas para tornar sua jornada
            gastronômica mais simples, rápida e personalizada.
          </p>
        </div>

        {/* Grid de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-lime-200 transition-all duration-300 group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;
