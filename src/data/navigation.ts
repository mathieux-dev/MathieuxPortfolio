export interface NavigationLink {
  readonly id: string;
  readonly href: string;
  readonly label: string;
  readonly lineClass: string;
}

export interface SocialLink {
  readonly id: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly title: string;
  readonly iconSrc: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 'about',
    href: '#about',
    label: 'Sobre',
    lineClass: "bg-slate-200 box-border caret-transparent block h-px min-h-0 min-w-0 w-16 mr-4 md:min-h-[auto] md:min-w-[auto]"
  },
  {
    id: 'experience',
    href: '#experience',
    label: 'Experiência',
    lineClass: "bg-slate-600 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"
  },
  {
    id: 'projects',
    href: '#projects',
    label: 'Projetos',
    lineClass: "bg-slate-600 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"
  }
] as const;

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    href: "https://github.com/mathieux-dev",
    ariaLabel: 'GitHub (abre em nova aba)',
    title: 'GitHub',
    iconSrc: ""
  },
  {
    id: 'linkedin',
    href: "https://www.linkedin.com/in/mateus-mourao/",
    ariaLabel: 'LinkedIn (abre em nova aba)',
    title: 'LinkedIn',
    iconSrc: ""
  },
  {
    id: 'instagram',
    href: "https://instagram.com/eimathieu",
    ariaLabel: 'Instagram (abre em nova aba)',
    title: 'Instagram',
    iconSrc: ""
  },
  {
    id: 'email',
    href: "mailto:mateusvmourao@gmail.com",
    ariaLabel: 'Email (abre em nova aba)',
    title: 'Email',
    iconSrc: ""
  }
] as const;
