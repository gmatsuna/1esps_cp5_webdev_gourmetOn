import { Send, Mail, Phone } from "lucide-react";

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Fique por dentro das{" "}
                <span className="text-lime-400">nossas novidades.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Assine nossa newsletter e receba cupons de desconto exclusivos,
                al�m de ser o primeiro a saber sobre novos restaurantes na sua
                regi�o.
              </p>

              <div className="hidden md:flex flex-col gap-4 text-slate-300">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Phone size={18} className="text-lime-400" />
                  <span>(11) 99999-8888</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Mail size={18} className="text-lime-400" />
                  <span>contato@gourmeton.com.br</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <form className="bg-white/15 p-2 rounded-2xl md:rounded-full border border-white/30 flex flex-col md:flex-row gap-2 backdrop-blur-md">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 text-white placeholder:text-slate-300 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-extrabold px-8 py-4 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  Cadastrar
                  <Send size={18} />
                </button>
              </form>

              {/* Texto de rodap� com cor mais clara (slate-400) para melhor leitura */}
              <p className="text-center text-slate-400 text-sm mt-4">
                Prometemos n�o enviar spam. Voc�; pode cancelar a qualquer
                momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
