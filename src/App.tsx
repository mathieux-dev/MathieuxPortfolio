import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectSection';
import { Footer } from './components/Foorter';
import { FloatingButton } from './components/FloatingButton';

function App() {
  return (
    <div className="text-slate-400 text-base not-italic normal-nums font-normal accent-auto bg-slate-900 box-border caret-transparent block tracking-[normal] leading-[26px] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent">
          <div className="fixed bg-[radial-gradient(600px_at_0px_0px,rgba(34,197,94,0.15),rgba(0,0,0,0)_80%)] box-border caret-transparent z-0 inset-0 md:absolute pointer-events-none"></div>
          <div className="box-border caret-transparent max-w-screen-xl min-h-[1000px] mx-auto px-6 py-12 font-inter_20b187 md:px-12 md:py-0">
            <a href="#about" className="absolute text-white text-sm font-bold bg-[linear-gradient(to_right_bottom,rgb(45,212,191),rgb(59,130,246),rgb(147,51,234))] box-border caret-transparent block tracking-[1.4px] leading-5 uppercase translate-x-[-100.0%] px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr left-0 top-0">Pular para Conteúdo</a>
            <div className="box-border caret-transparent gap-x-[normal] block justify-normal gap-y-[normal] md:gap-x-4 md:flex md:justify-between md:gap-y-4">
              <Header />
              <main className="box-border caret-transparent min-h-0 min-w-0 w-auto pt-24 pb-0 md:min-h-[auto] md:min-w-[auto] md:w-[52%] md:pb-24">
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <Footer />
              </main>
              <FloatingButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
