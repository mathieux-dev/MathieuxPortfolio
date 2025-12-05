import { experienceData } from '../data/experience';
import { ExternalLinkIcon, LinkIcon } from './Icons';

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experiência profissional" className="box-border caret-transparent mb-16 scroll-mt-16 md:mb-36 md:scroll-mt-24">
      <div className="sticky backdrop-blur bg-green-950/80 box-border caret-transparent h-auto opacity-100 text-wrap w-screen z-20 overflow-visible mt-0 mb-4 -mx-6 px-6 py-5 top-0 md:relative md:h-px md:opacity-0 md:text-nowrap md:w-full md:overflow-hidden md:mx-auto md:-my-px md:p-0 md:top-auto">
        <h2 className="static text-slate-200 text-sm font-bold box-border caret-transparent h-auto tracking-[1.4px] leading-5 uppercase text-wrap w-auto overflow-visible m-0 md:absolute md:h-px md:text-nowrap md:w-px md:overflow-hidden md:-m-px">Experiência</h2>
      </div>
      <div className="box-border caret-transparent">
        <ol className="box-border caret-transparent list-none pl-0">
          {experienceData.map((job) => (
            <li key={job.id} className="box-border caret-transparent text-left mb-12">
              <div className="relative box-border caret-transparent gap-x-[normal] grid grid-cols-none gap-y-[normal] pb-1 md:gap-x-4 md:grid-cols-[repeat(8,minmax(0px,1fr))] md:gap-y-4">
                <div className="absolute box-border caret-transparent hidden z-0 rounded-md -inset-4 md:block md:-inset-x-6"></div>
                <header aria-label={job.period} className="text-green-500 text-xs font-semibold box-border caret-transparent col-end-auto col-start-auto tracking-[0.3px] leading-4 uppercase z-10 mt-1 mb-2 md:col-end-[span_2] md:col-start-[span_2]">{job.period}</header>
                <div className="box-border caret-transparent col-end-auto col-start-auto z-10 md:col-end-[span_6] md:col-start-[span_6]">
                  <h3 className="text-green-200 font-medium box-border caret-transparent leading-[22px]">
                    <div className="box-border caret-transparent">
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" aria-label={job.ariaLabel} className="items-baseline box-border caret-transparent inline-flex leading-5 hover:text-teal-300">
                        <span className="absolute box-border caret-transparent hidden rounded-bl rounded-br rounded-tl rounded-tr -inset-x-4 -inset-y-2.5 md:block md:-inset-x-6 md:-inset-y-4"></span>
                        <span className="box-border caret-transparent block">
                          {job.title} ·
                          <span className="box-border caret-transparent inline-block">
                            {job.company}
                            <ExternalLinkIcon className="box-border caret-transparent inline-block shrink-0 h-4 translate-y-px w-4 ml-1" />
                          </span>
                        </span>
                      </a>
                    </div>
                    {job.additionalTitles && job.additionalTitles.map((title, index) => (
                      <div key={index} className="box-border caret-transparent">
                        <div className="text-slate-500 box-border caret-transparent">{title}</div>
                      </div>
                    ))}
                  </h3>
                  <p className="text-sm box-border caret-transparent leading-[21px] mt-2">{job.description}</p>
                  {job.relatedLinks && (
                    <ul aria-label="Related links" className="box-border caret-transparent flex flex-wrap mt-2 pl-0">
                      {job.relatedLinks.map((link) => (
                        <li key={link.id} className="box-border caret-transparent mr-4">
                          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className="relative text-slate-300 text-sm font-medium items-center box-border caret-transparent inline-flex leading-5 mt-2 hover:text-teal-300">
                            <LinkIcon className="box-border caret-transparent h-3 w-3 mr-1" />
                            <span className="box-border caret-transparent block">{link.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul aria-label="Technologies used" className="box-border caret-transparent flex flex-wrap mt-2 pl-0">
                    {job.technologies.map((tech) => (
                      <li key={tech} className="box-border caret-transparent mr-1.5 mt-2">
                        <div className="text-green-300 text-xs font-medium items-center bg-green-400/10 box-border caret-transparent flex leading-5 px-3 py-1 rounded-full">{tech}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="box-border caret-transparent mt-12">
          <a href="https://www.linkedin.com/in/mateus-mourao/" target="_blank" rel="noopener noreferrer" aria-label="Ver Perfil Completo no LinkedIn (abre em nova aba)" className="text-slate-200 font-semibold items-baseline box-border caret-transparent inline-flex leading-5 hover:text-teal-300">
            <span className="box-border caret-transparent block">
              Ver Perfil
              <span className="box-border caret-transparent inline-block">
                Completo
                <ExternalLinkIcon className="box-border caret-transparent inline-block shrink-0 h-4 translate-y-px w-4 ml-1" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
