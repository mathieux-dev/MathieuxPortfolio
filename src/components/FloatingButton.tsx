import React from 'react';

export function FloatingButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="absolute box-border caret-transparent right-4 bottom-4">
      <button 
        type="button" 
        onClick={scrollToTop}
        className="font-medium items-center bg-green-500/20 hover:bg-green-500/30 backdrop-blur-sm caret-transparent inline-flex text-center p-3 rounded-full cursor-pointer transition-all hover:scale-110 shadow-lg"
        aria-label="Voltar ao topo"
        title="Rolar um D20 para voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-300">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      </button>
    </div>
  );
}
