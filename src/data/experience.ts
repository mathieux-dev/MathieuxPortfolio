export interface RelatedLink {
  readonly id: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly text: string;
}

export interface ExperienceItem {
  readonly id: string;
  readonly period: string;
  readonly title: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly ariaLabel: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly additionalTitles?: readonly string[];
  readonly relatedLinks?: readonly RelatedLink[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'eemovel',
    period: 'Nov 2024 — Presente',
    title: 'Desenvolvedor Backend',
    company: 'Eemovel',
    companyUrl: "https://www.eemovel.com.br/",
    ariaLabel: 'Desenvolvedor Backend na Eemovel (abre em nova aba)',
    description: 'Desenvolvimento e evolução de soluções para o setor imobiliário (CRM e plataformas web). Implementação de módulos de vendas com integração a ferramentas externas. Arquitetura de APIs com .NET 6+, Minimal APIs e padrões RESTful. Trabalho com alto volume de dados usando PostgreSQL, MongoDB e ElasticSearch. Integração com AWS (SNS, SQS) e deploys via Azure DevOps.',
    technologies: ['C#', '.NET 6+', 'Minimal APIs', 'PostgreSQL', 'MongoDB', 'ElasticSearch', 'AWS', 'Azure DevOps']
  },
  {
    id: 'stefanini',
    period: 'Out 2025 — Presente',
    title: 'Analista Desenvolvedor  ',
    company: 'Stefanini (alocado na Ferreira Costa)',
    companyUrl: "https://www.stefanini.com/",
    ariaLabel: 'Desenvolvedor Full Stack na Stefanini (abre em nova aba)',
    description: 'Atuo no processo de transformação digital da Ferreira Costa, contribuindo para a modernização dos sistemas internos. Trabalho com .NET e NestJS integrados ao Oracle, realizando manutenção, correções, melhorias e evolução de funcionalidades. Sou responsável por reestruturar partes do sistema legado desenvolvido em Delphi, convertendo-as para a arquitetura atual em NestJS, garantindo maior escalabilidade e padronização. Também participo de integrações entre serviços, revisão de modelos de dados e otimizações de performance, apoiando times internos durante a migração tecnológica.',
    technologies: ['.NET', 'NestJS', 'Oracle', 'Delphi', 'TypeScript', 'Node.js']
  },
  {
    id: 'ed-solucoes',
    period: 'Out 2021 — Mar 2024',
    title: 'Desenvolvedor Full Stack',
    company: 'Ed Soluções',
    companyUrl: "https://ed.dev.br/",
    ariaLabel: 'Desenvolvedor Full Stack na Ed Soluções (abre em nova aba)',
    description: 'Desenvolvimento de projetos estratégicos para a Icatu Seguros, incluindo o MVP da conta digital e o super app da empresa. Atuação no backend com foco em escalabilidade e segurança das APIs de produtos de seguro e investimento. Trabalho em squads multidisciplinares com metodologias ágeis (SCRUM e Kanban).',
    technologies: ['C#', 'Node.js', 'NestJS', 'Flutter', 'Angular', 'PostgreSQL', 'React', 'TypeScript']
  },
  {
    id: 'fitbank',
    period: 'Jun 2021 — Out 2021',
    title: 'Desenvolvedor Full Stack',
    company: 'Fitbank',
    companyUrl: "https://www.fitbank.com.br/",
    ariaLabel: 'Desenvolvedor Full Stack no Fitbank (abre em nova aba)',
    description: 'Manutenção e evolução do sistema legado e desenvolvimento de novas funcionalidades estratégicas. Participação na entrega da plataforma de Open Banking e do sistema de pagamentos instantâneos via PIX. Trabalho com APIs REST e microsserviços, integrando dados com SQL Server e PostgreSQL.',
    technologies: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server', 'PostgreSQL', 'jQuery', 'Bootstrap', 'React', 'TypeScript'],
    additionalTitles: []
  },
  {
    id: 'astef',
    period: 'Jan 2021 — Jun 2021',
    title: 'Desenvolvedor Backend',
    company: 'Fundação ASTEF - UFC',
    companyUrl: "https://www.ufc.br/",
    ariaLabel: 'Desenvolvedor Backend na Fundação ASTEF (abre em nova aba)',
    description: 'Desenvolvimento de plataforma de Open Banking em parceria com a UFC, facilitando acesso a serviços bancários digitais. Trabalho no backend com C# e .NET Framework, PostgreSQL e metodologia SCRUM. Participação ativa na codificação, definição de modelos de dados e criação de procedures.',
    technologies: ['C#', '.NET Framework', 'PostgreSQL', 'SCRUM']
  }
] as const;
