import { writingData } from '../data/writing';

export function WritingSection() {
  return (
    <section aria-label="Blog posts" className="box-border caret-transparent mb-16 scroll-mt-16 md:mb-36 md:scroll-mt-24">
      <div className="sticky backdrop-blur bg-slate-900/80 box-border caret-transparent h-auto opacity-100 text-wrap w-screen z-20 overflow-visible mt-0 mb-4 -mx-6 px-6 py-5 top-0 md:relative md:h-px md:opacity-0 md:text-nowrap md:w-full md:overflow-hidden md:mx-auto md:-my-px md:p-0 md:top-auto">
        <h2 className="static text-slate-200 text-sm font-bold box-border caret-transparent h-auto tracking-[1.4px] leading-5 uppercase text-wrap w-auto overflow-visible m-0 md:absolute md:h-px md:text-nowrap md:w-px md:overflow-hidden md:-m-px">Writing</h2>
      </div>
      <div className="box-border caret-transparent">
        <ul className="box-border caret-transparent list-none pl-0">
          {writingData.map((post) => (
            <li key={post.id} className="box-border caret-transparent text-left mb-12">
              <div className="relative [align-items:normal] box-border caret-transparent gap-x-4 grid grid-cols-[repeat(8,minmax(0px,1fr))] gap-y-4 md:items-center">
                <div className="absolute box-border caret-transparent hidden z-0 rounded-md -inset-4 md:block md:-inset-x-6"></div>
                <img alt={post.imageAlt} src={post.imageSrc} className="text-transparent aspect-video box-border col-end-[span_2] col-start-[span_2] max-w-full object-cover w-[200px] z-10 border-slate-200/10 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid" />
                <div className="box-border caret-transparent col-end-[span_6] col-start-[span_6] z-10">
                  <p className="text-sm font-semibold box-border caret-transparent leading-6 -mt-1">{post.year}</p>
                  <h3 className="box-border caret-transparent -mt-1">
                    <a href={post.url} aria-label={post.ariaLabel} className="text-slate-200 font-medium items-baseline box-border caret-transparent inline-flex leading-5 hover:text-teal-300">
                      <span className="absolute box-border caret-transparent hidden rounded-bl rounded-br rounded-tl rounded-tr -inset-x-4 -inset-y-2.5 md:block md:-inset-x-6 md:-inset-y-4"></span>
                      <span className="box-border caret-transparent block">
                        {post.title}
                        <span className="box-border caret-transparent inline-block">
                          {post.titleSuffix}
                          <img src="https://c.animaapp.com/mfeedx8tJMhHh4/assets/icon-6.svg" alt="Icon" className="box-border caret-transparent inline-block shrink-0 h-4 translate-y-px w-4 ml-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
