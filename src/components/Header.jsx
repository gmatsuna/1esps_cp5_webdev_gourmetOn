import { useState, useEffect } from 'react';

export default function Header() {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setRolou(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        rolou 
        ? 'bg-white/90 backdrop-blur-md border-gray-200 py-2 shadow-md' 
        : 'bg-black/40 backdrop-blur-sm border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className={`text-2xl font-bold transition-colors ${rolou ? 'text-gray-900' : 'text-white'}`}>
          Gourmet<span className="text-lime-400">On</span>
        </h1>

          <div className="space-x-8 text-gray-300">
            <a href="#hero" className="hover:text-lime-400">Home</a>
            <a href="#apresentacao" className="hover:text-lime-400">App</a>
            <a href="#funcionalidades" className="hover:text-lime-400">Funções</a>
            <a href="#depoimentos" className="hover:text-lime-400">Depoimentos</a>
            <a href="#contato" className="hover:text-lime-400">Contato</a>
            <a href="#rodape" className="hover:text-lime-400">Rodapé</a>
          </div>

      </div>
    </header>
    
  );
}
