import React from 'react';

export function FloatingButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="absolute box-border caret-transparent right-0 bottom-0">
      <button 
        type="button" 
        onClick={scrollToTop}
        className="font-medium items-center bg-transparent caret-transparent inline-flex text-center px-2 py-4 cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Voltar ao topo"
      >
        <img alt="Spinning Tardis from Doctor Who" src="https://c.animaapp.com/mfeedx8tJMhHh4/assets/14.gif" className="text-transparent aspect-[auto_100_/_86] box-border max-w-full w-[100px]" />
      </button>
    </div>
  );
}
