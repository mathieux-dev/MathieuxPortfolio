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
        className="font-medium items-center bg-green-500/20 hover:bg-green-500/30 backdrop-blur-sm caret-transparent inline-flex text-center p-3 rounded-full cursor-pointer transition-all hover:scale-110 hover:rotate-180 shadow-lg"
        aria-label="Voltar ao topo"
        title="Rolar um D20 para voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-300">
          <path d="M256 0l-208 78.4 208 78.4 208-78.4L256 0zm0 192L48 113.6v156.8L256 348l208-77.6V113.6L256 192zm0 192L48 305.6v156.8L256 540l208-77.6V305.6L256 384z"/>
          <text x="256" y="300" fontSize="200" fontWeight="bold" textAnchor="middle" fill="currentColor">20</text>
        </svg>
      </button>
    </div>
  );
}
