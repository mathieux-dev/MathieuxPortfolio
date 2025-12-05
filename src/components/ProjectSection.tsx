import { projectsData } from '../data/projects';
import { ExternalLinkIcon, ArrowRightIcon } from './Icons';

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projetos selecionados" className="box-border caret-transparent mb-16 scroll-mt-16 md:mb-36 md:scroll-mt-24">
      <div className="sticky backdrop-blur bg-green-950/80 box-border caret-transparent h-auto opacity-100 text-wrap w-screen z-20 overflow-visible mt-0 mb-4 -mx-6 px-6 py-5 top-0 md:relative md:h-px md:opacity-0 md:text-nowrap md:w-full md:overflow-hidden md:mx-auto md:-my-px md:p-0 md:top-auto">
        <h2 className="static text-slate-200 text-sm font-bold box-border caret-transparent h-auto tracking-[1.4px] leading-5 uppercase text-wrap w-auto overflow-visible m-0 md:absolute md:h-px md:text-nowrap md:w-px md:overflow-hidden md:-m-px">Projetos</h2>
      </div>
      <div className="box-border caret-transparent">
        <ul className="box-border caret-transparent list-none pl-0">
          {projectsData.map((project) => (
            <li key={project.id} className="box-border caret-transparent text-left mb-12">
              <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-none gap-y-4 pb-1 md:grid-cols-[repeat(8,minmax(0px,1fr))]">
                <div className="absolute box-border caret-transparent hidden z-0 rounded-md -inset-4 md:block md:-inset-x-6"></div>
                <div className="box-border caret-transparent col-end-auto col-start-auto order-none z-10 md:col-end-[span_6] md:col-start-[span_6] md:order-2">
                  <h3 className="box-border caret-transparent">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.ariaLabel} className="text-slate-200 font-medium items-baseline box-border caret-transparent inline-flex leading-5 hover:text-teal-300">
                      <span className="absolute box-border caret-transparent hidden rounded-bl rounded-br rounded-tl rounded-tr -inset-x-4 -inset-y-2.5 md:block md:-inset-x-6 md:-inset-y-4"></span>
                      <span className="box-border caret-transparent block">
                        {project.title}{' '}
                        <span className="box-border caret-transparent inline-block">
                          {project.titleSuffix}
                          <ExternalLinkIcon className="box-border caret-transparent inline-block shrink-0 h-4 translate-y-px w-4 ml-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="text-sm box-border caret-transparent leading-[21px] mt-2">{project.description}</p>
                  {project.githubStars && (
                    <a href={project.githubStars.url} target="_blank" rel="noopener noreferrer" aria-label={project.githubStars.ariaLabel} className="relative text-slate-300 text-sm font-medium items-center box-border caret-transparent inline-flex leading-5 mt-2 hover:text-teal-300">
                      <img src={project.githubStars.iconSrc} alt="Icon" className="box-border caret-transparent h-3 w-3 mr-1" />
                      <span className="box-border caret-transparent block">{project.githubStars.count}</span>
                    </a>
                  )}
                  {project.marketplaceInfo && (
                    <a href={project.marketplaceInfo.url} target="_blank" rel="noopener noreferrer" aria-label={project.marketplaceInfo.ariaLabel} className="relative text-slate-300 text-sm font-medium items-center box-border caret-transparent inline-flex leading-5 mt-2 hover:text-teal-300">
                      <img src={project.marketplaceInfo.iconSrc} alt="Icon" className="box-border caret-transparent h-4 w-4 mr-1" />
                      <span className="box-border caret-transparent block">{project.marketplaceInfo.text}</span>
                    </a>
                  )}
                  {project.technologies && (
                    <ul aria-label="Technologies used:" className="box-border caret-transparent flex flex-wrap mt-2 pl-0">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="box-border caret-transparent mr-1.5 mt-2">
                          <div className="text-green-300 text-xs font-medium items-center bg-green-400/10 box-border caret-transparent flex leading-5 px-3 py-1 rounded-full">{tech}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <img alt={project.imageAlt} src={project.imageSrc} className="text-transparent aspect-video box-border col-end-auto col-start-auto max-w-full object-cover order-none transform-none w-[200px] border-slate-200/10 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid md:col-end-[span_2] md:col-start-[span_2] md:order-1 md:translate-y-1" />
              </div>
            </li>
          ))}
        </ul>
        <div className="box-border caret-transparent mt-12">
          <a aria-label="Ver Repositórios no GitHub" href="https://github.com/mathieux-dev" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-semibold items-center box-border caret-transparent inline-flex leading-5 hover:text-teal-300">
            <span className="box-border caret-transparent block">
              <span className="box-border caret-transparent pb-px border-b border-solid border-transparent">Ver Mais Projetos</span>
              <span className="box-border caret-transparent text-nowrap">
                <span className="box-border caret-transparent text-nowrap pb-px border-b border-solid border-transparent"> no GitHub</span>
                <ArrowRightIcon className="box-border caret-transparent inline-block shrink-0 h-4 text-nowrap -translate-y-px w-4 ml-1" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
