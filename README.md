# Portfolio Profissional

🔗 **[Ver Portfolio Online](https://mathieux-dev.github.io/MathieuxPortfolio/)**

Portfolio pessoal desenvolvido com React e TypeScript, apresentando experiências profissionais, projetos e informações de contato. O site é automaticamente deployado no GitHub Pages através de GitHub Actions sempre que há um push na branch main.

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

- **URL de Produção**: https://mathieux-dev.github.io/MathieuxPortfolio/
- **Método**: GitHub Actions (workflow em `.github/workflows/deploy.yml`)
- **Processo**: A cada push na branch `main`, o workflow executa o build do Vite e faz deploy da pasta `dist` no GitHub Pages
- **Configuração**: O base path `/MathieuxPortfolio/` está configurado no `vite.config.ts` para funcionar corretamente no GitHub Pages

## 🚀 Tecnologias

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade cross-browser

## 📦 Instalação

```bash
npm install
```

## 🔧 Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📄 Estrutura

- `/src/components` - Componentes React reutilizáveis
- `/src/data` - Dados de experiências, projetos e navegação
- `/src/App.tsx` - Componente principal da aplicação
- `/.github/workflows` - Configuração do GitHub Actions para deploy automático

## 📫 Contato

- GitHub: [@mathieux-dev](https://github.com/mathieux-dev)
- LinkedIn: [Matheus Mourão](https://www.linkedin.com/in/mateus-mourao/)
