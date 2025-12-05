import React, { useState, useEffect } from 'react';
import { navigationLinks, socialLinks } from '../data/navigation';
import { GitHubIcon, LinkedInIcon, InstagramIcon, EmailIcon } from './Icons';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  email: EmailIcon,
};

export function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="static box-border caret-transparent block flex-row justify-normal max-h-none min-h-0 min-w-0 w-auto py-0 top-auto z-10 md:sticky md:flex md:flex-col md:justify-between md:max-h-[1000px] md:min-h-[auto] md:min-w-[auto] md:w-[48%] md:py-24 md:top-0">
      <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <h1 className="text-slate-200 text-4xl font-bold box-border caret-transparent tracking-[-0.9px] leading-10 md:text-5xl md:tracking-[-1.2px] md:leading-[48px]">
          <a href="/" className="text-4xl box-border caret-transparent tracking-[-0.9px] leading-10 md:text-5xl md:tracking-[-1.2px] md:leading-[48px]">Mateus Mourão</a>
        </h1>
        <h2 className="text-slate-200 text-lg font-medium box-border caret-transparent tracking-[-0.45px] leading-7 mt-3 md:text-xl md:tracking-[-0.5px]">Desenvolvedor Full Stack</h2>
        <p className="box-border caret-transparent leading-6 max-w-xs mt-4">Especializado em C#, .NET e arquitetura limpa e escalável.</p>
        <nav aria-label="In-page jump links" className="box-border caret-transparent hidden md:block">
          <ul className="box-border caret-transparent list-none w-max mt-16 pl-0">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="box-border caret-transparent text-left">
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setActiveSection(link.id);
                      }
                    }}
                    className="items-center box-border caret-transparent flex py-3 group cursor-pointer relative z-10"
                  >
                    <span className={`bg-green-600 box-border caret-transparent block h-px min-h-0 min-w-0 mr-4 transition-all duration-200 md:min-h-[auto] md:min-w-[auto] ${
                      isActive 
                        ? 'w-16 bg-green-200' 
                        : 'w-8 group-hover:w-16 group-hover:bg-green-200'
                    }`}></span>
                    <span className={`text-xs font-bold box-border caret-transparent block tracking-[1.2px] leading-4 min-h-0 min-w-0 uppercase transition-colors duration-200 md:min-h-[auto] md:min-w-[auto] ${
                      isActive 
                        ? 'text-green-200' 
                        : 'text-green-500 group-hover:text-green-200'
                    }`}>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul aria-label="Social media" className="items-center box-border caret-transparent flex list-none min-h-0 min-w-0 ml-1 mt-8 pl-0 md:min-h-[auto] md:min-w-[auto]">
        {socialLinks.map((social) => {
          const IconComponent = iconMap[social.id];
          const isEmail = social.id === 'email';
          return (
            <li key={social.id} className="text-xs box-border caret-transparent shrink-0 leading-4 text-left mr-5">
              <a 
                href={social.href} 
                aria-label={social.ariaLabel} 
                title={social.title}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="box-border caret-transparent block hover:text-slate-200 relative z-10 cursor-pointer transition-colors"
              >
                {IconComponent && <IconComponent className="h-6 w-6" />}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
