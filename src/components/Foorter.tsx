import React from 'react';

export function Footer() {
  return (
    <footer className="text-green-500 text-sm box-border caret-transparent leading-5 max-w-md pb-16 md:pb-0">
      <p className="box-border caret-transparent">
        Desenvolvido com
        <a href="https://react.dev/" aria-label="React (abre em nova aba)" className="text-slate-400 font-medium box-border caret-transparent hover:text-teal-300"> React</a>
        ,
        <a href="https://www.typescriptlang.org/" aria-label="TypeScript (abre em nova aba)" className="text-slate-400 font-medium box-border caret-transparent hover:text-teal-300"> TypeScript</a>
        {' '}e
        <a href="https://tailwindcss.com/" aria-label="Tailwind CSS (abre em nova aba)" className="text-slate-400 font-medium box-border caret-transparent hover:text-teal-300"> Tailwind CSS</a>
        . Portfólio de
        <a href="https://www.linkedin.com/in/mateus-mourao/" aria-label="Mateus Mourão (abre em nova aba)" className="text-slate-400 font-medium box-border caret-transparent hover:text-teal-300"> Mateus Mourão</a>
        .
      </p>
    </footer>
  );
}
