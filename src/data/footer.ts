export interface FooterLink {
  readonly href: string;
  readonly ariaLabel: string;
  readonly text: string;
}

export interface FooterLinks {
  readonly figma: FooterLink;
  readonly vscode: FooterLink;
  readonly nextjs: FooterLink;
  readonly tailwind: FooterLink;
  readonly vercel: FooterLink;
  readonly inter: FooterLink;
}

export const footerLinks: FooterLinks = {
  figma: {
    href: "https://www.figma.com/",
    ariaLabel: 'Figma (opens in a new tab)',
    text: 'Figma'
  },
  vscode: {
    href: "https://code.visualstudio.com/",
    ariaLabel: 'Visual Studio Code (opens in a new tab)',
    text: 'Visual Studio Code'
  },
  nextjs: {
    href: 'https://nextjs.org/',
    ariaLabel: 'Next.js (opens in a new tab)',
    text: 'Next.js'
  },
  tailwind: {
    href: "https://tailwindcss.com/",
    ariaLabel: 'Tailwind CSS (opens in a new tab)',
    text: 'Tailwind CSS'
  },
  vercel: {
    href: 'https://vercel.com/',
    ariaLabel: 'Vercel (opens in a new tab)',
    text: 'Vercel'
  },
  inter: {
    href: "https://rsms.me/inter/",
    ariaLabel: 'Inter (opens in a new tab)',
    text: 'Inter'
  }
} as const;
