export function AboutSection() {
  return (
    <section id="about" aria-label="Sobre mim" className="box-border caret-transparent mb-16 scroll-mt-16 md:mb-36 md:scroll-mt-24">
      <div className="sticky backdrop-blur bg-green-950/80 box-border caret-transparent h-auto opacity-100 text-wrap w-screen z-20 overflow-visible mt-0 mb-4 -mx-6 px-6 py-5 top-0 md:relative md:h-px md:opacity-0 md:text-nowrap md:w-full md:overflow-hidden md:mx-auto md:-my-px md:p-0 md:top-auto">
        <h2 className="static text-slate-200 text-sm font-bold box-border caret-transparent h-auto tracking-[1.4px] leading-5 uppercase text-wrap w-auto overflow-visible m-0 md:absolute md:h-px md:text-nowrap md:w-px md:overflow-hidden md:-m-px">Sobre</h2>
      </div>
      <div className="box-border caret-transparent">
        <p className="box-border caret-transparent mb-4">
          Sou desenvolvedor Full Stack com <span className="text-slate-200 font-medium">4+ anos de experiência</span> especializado em <span className="text-slate-200 font-medium">C#, .NET e arquitetura de microsserviços</span>. Atualmente trabalhando com soluções backend para o setor imobiliário e atuando na transformação digital de sistemas corporativos, utilizando .NET, NestJS, Oracle e modernizando sistemas legados.
        </p>
        <p className="box-border caret-transparent mb-4">
          Tenho experiência sólida em <span className="text-slate-200 font-medium">sistemas financeiros</span> (Open Banking, PIX), <span className="text-slate-200 font-medium">seguros</span> e <span className="text-slate-200 font-medium">transformação digital</span>, sempre aplicando Clean Code, Design Patterns e práticas de CI/CD. Minha trajetória inclui desde a construção de MVPs até a evolução e reestruturação de sistemas legados de alta complexidade, incluindo migração de Delphi para arquiteturas modernas.
        </p>
        <p className="box-border caret-transparent mb-4">
          Trabalho com tecnologias como C#, .NET, Node.js, NestJS, React, Angular, Flutter, PostgreSQL, SQL Server, MongoDB, Oracle, ElasticSearch, além de ferramentas de cloud como Azure e AWS. Tenho experiência com mensageria (RabbitMQ, Kafka) e práticas de DevOps com Azure DevOps.
        </p>
        <p className="box-border caret-transparent">
          Localizado em <span className="text-slate-200 font-medium">Crateús, Ceará</span>, sou <span className="text-slate-200 font-medium">Tecnólogo em Análise e Desenvolvimento de Sistemas</span> pela FAM (2025). Busco sempre me destacar pela comunicação clara, proatividade e adaptabilidade em ambientes dinâmicos.
        </p>
      </div>
    </section>
  );
}
