import { Globe, Link2, Share2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="rodape"
      className="bg-slate-900 text-slate-400 py-12 border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-2xl font-bold mb-4">
              Gourmet<span className="text-lime-500">On</span>
            </h3>
            <p className="text-sm leading-relaxed">
              A melhor experi&ecirc;ncia gastron&ocirc;mica na palma da sua
              m&atilde;o. Conectando voc&ecirc; aos melhores sabores da cidade.
            </p>
          </div>

          {/* Coluna 2: Links R�pidos (Termos) */}
          <div>
            <h4 className="text-white font-bold mb-6 italic tracking-wider">
              INSTITUCIONAL
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Pol&iacute;tica de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Seja um Parceiro
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-bold mb-6 italic tracking-wider">
              CONTATO
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-lime-500" />
                <span>(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-lime-500" />
                <span>suporte@gourmeton.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-lime-500" />
                <span>S&atilde;o Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="text-white font-bold mb-6 italic tracking-wider">
              SIGA-NOS
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-lime-500 hover:text-slate-900 transition-all"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-lime-500 hover:text-slate-900 transition-all"
              >
                <Link2 size={20} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-lime-500 hover:text-slate-900 transition-all"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-lime-500 hover:text-slate-900 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-white/5 text-center text-xs tracking-widest text-slate-500">
          <p>&copy; {currentYear} GOURMETON. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="mt-2 uppercase">
            Desenvolvido com foco em performance e design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
