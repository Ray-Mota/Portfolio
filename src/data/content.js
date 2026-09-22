// Centralizei os textos e dados aqui — troque à vontade sem mexer nos componentes.

export const profile = {
  name: 'Ray Mota de Lima',
  role: 'Desenvolvedor Frontend',
  heroText:
    'Eu construo interfaces modernas, performáticas e com foco na melhor experiência do usuário. Gosto de transformar ideias em soluções reais através do código.',
  aboutTitle: 'Apaixonado por tecnologia e por resolver problemas',
  aboutText:
    'Sou desenvolvedor frontend com experiência em React, TypeScript e Material UI. Tenho foco em escrever código limpo, criar interfaces intuitivas e trabalhar em equipe para entregar soluções de alto valor.',
  highlights: [
    { label: '+2 anos de experiência' },
    { label: 'Trabalho em equipe e colaboração' },
    { label: 'Foco em resultados e qualidade' },
  ],
  cvUrl: '#',
  email: 'raymota@email.com',
  linkedin: 'linkedin.com/in/raymota',
  github: 'github.com/raymota',
}

export const stack = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Material UI' },
  { name: 'Git' },
]

export const projects = [
  {
    id: 'dashboard-financeiro',
    title: 'Dashboard Financeiro',
    summary: 'Sistema de gestão financeira com gráficos, relatórios e controle de despesas.',
    description:
      'O dashboard financeiro foi desenvolvido para ajudar empresas a controlarem suas finanças de forma simples e intuitiva. Ele conta com gráficos interativos, relatórios detalhados e um painel completo de indicadores.',
    features: [
      'Gráficos interativos e relatórios',
      'Controle de receitas e despesas',
      'Autenticação e gerenciamento de usuários',
      'Design responsivo',
    ],
    stack: ['React', 'TypeScript', 'Material UI'],
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    summary: 'Loja virtual com carrinho de compras, pagamentos e gestão de pedidos.',
    description:
      'Uma loja virtual completa, com catálogo de produtos, carrinho de compras, checkout com pagamento e um painel para gestão de pedidos.',
    features: [
      'Catálogo de produtos com filtros',
      'Carrinho e checkout completos',
      'Integração de pagamentos',
      'Painel de gestão de pedidos',
    ],
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    summary: 'Aplicação para gerenciamento de tarefas com autenticação e notificações.',
    description:
      'Aplicação de gerenciamento de tarefas em equipe, com quadros, autenticação de usuários e notificações em tempo real.',
    features: [
      'Quadros e listas de tarefas',
      'Autenticação de usuários',
      'Notificações em tempo real',
      'Colaboração em equipe',
    ],
    stack: ['React', 'Firebase', 'Styled Components'],
    repoUrl: '#',
    liveUrl: '#',
  },
]
