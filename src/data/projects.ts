export interface GitHubStars {
  readonly url: string;
  readonly ariaLabel: string;
  readonly iconSrc: string;
  readonly count: string;
}

export interface MarketplaceInfo {
  readonly url: string;
  readonly ariaLabel: string;
  readonly iconSrc: string;
  readonly text: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly titleSuffix: string;
  readonly url: string;
  readonly ariaLabel: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly githubStars?: GitHubStars;
  readonly marketplaceInfo?: MarketplaceInfo;
  readonly technologies?: readonly string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'brokers-crm',
    title: 'Brokers - CRM',
    titleSuffix: 'Imobiliário',
    url: "https://www.eemovel.com.br/brokers",
    ariaLabel: 'Brokers - CRM Imobiliário (abre em nova aba)',
    description: 'Entrega do novo site do CRM e reestruturação de funcionalidades críticas. Implementação de melhorias em performance, segurança e escalabilidade. Desenvolvimento do módulo de vendas com integração a ferramentas externas.',
    imageSrc: "https://framerusercontent.com/images/VPYGZeDKDUtcmVSdMPf6gdrzY.webp?width=1000&height=681",
    imageAlt: 'Brokers - CRM Imobiliário',
    technologies: ['.NET 6+', 'Minimal APIs', 'PostgreSQL', 'MongoDB', 'ElasticSearch', 'AWS']
  },
  {
    id: 'app-previdencia-icatu',
    title: 'App de Previdência',
    titleSuffix: 'Icatu',
    url: "https://play.google.com/store/apps/details?id=br.com.icatuseguros.appicatu",
    ariaLabel: 'App de Previdência Icatu (abre em nova aba)',
    description: 'Desenvolvimento do MVP da conta digital e participação no super app de uma grande seguradora. Atuação em squad multidisciplinar com foco em APIs de produtos de seguro e investimento.',
    imageSrc: "https://blog.icatuseguros.com.br/wp-content/uploads/2024/12/APP-ICATU.webp",
    imageAlt: 'App de Previdência Icatu',
    technologies: ['C#', 'Node.js', 'Flutter', 'Angular', 'PostgreSQL']
  },
  {
    id: 'fluxpay',
    title: 'FluxPay',
    titleSuffix: '(Gateway de pagamento próprio)',
    url: "https://github.com/mathieux-dev/FluxPay",
    ariaLabel: 'Gateway de pagamento próprio - FluxPay (abre em nova aba)',
    description: 'Gateway de pagamento funcional, desenvolvido sozinho para estudo. Implementação completa de processamento de pagamentos, integração com APIs e gerenciamento de transações.',
    imageSrc: "https://placehold.co/400x225/1e293b/22c55e?text=FluxPay",
    imageAlt: 'Gateway de pagamento FluxPay',
    technologies: ['C#', '.NET', 'APIs REST', 'Microsserviços']
  }
] as const;
