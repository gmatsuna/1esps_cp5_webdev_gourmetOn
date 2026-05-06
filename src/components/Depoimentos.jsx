import { Star, Quote } from "lucide-react";

const Depoimentos = () => {
  const reviews = [
    {
      name: "Ana Silva",
      role: "Designer de Interiores",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      content:
        "O GourmetOn mudou minha rotina. A comida chega sempre impecável e os entregadores são extremamente educados. Não uso outro app!",
    },
    {
      name: "Carlos Eduardo",
      role: "Desenvolvedor de Software",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content:
        "A variedade de restaurantes é incrível. Consigo pedir desde o meu PF favorito até pratos gourmet mais sofisticados sem erro.",
    },
    {
      name: "Mariana Costa",
      role: "Nutricionista",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content:
        "Adoro os filtros de restrição alimentar. É o único aplicativo onde encontro opções saudáveis e detalhadas com tanta facilidade.",
    },
  ];
  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que nossos <span className="text-lime-500">clientes dizem</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Milhares de pessoas já transformaram suas refeições com a
            praticidade e qualidade do GourmetOn.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-8 text-lime-500/20 group-hover:text-lime-500/40 transition-colors">
                <Quote size={40} />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Perfil do Cliente */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-lime-500/20"
                />
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
