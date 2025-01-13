import { Project } from "@/types/Project";

const projects: Project[] = [
  {
    id: 1,
    title: "FinanApp",
    description:
      "Aplicativo para gerenciamento de finanças pessoais. Controle suas despesas, receitas e investimentos de forma fácil e intuitiva.",
    imageUrl: "/images/finanapp/tela-home.png",
    githubUrl: "https://github.com/jvcaversan/financial-app",
    additionalImages: [
      "/images/finanapp/tela-new-receita.png",
      "/images/finanapp/tela-edit-income.png",
      "/images/finanapp/tela-transacoes.png",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Typescript",
      "Drizzle ORM",
      "SQLite",
    ],
  },
  {
    id: 2,
    title: "CookingApp",
    description:
      "Aplicativo de Receitas, onde você pode criar e compartilhar suas receitas! Explore novas culinárias e aprenda com chefs amadores e profissionais.",
    imageUrl: "/images/cooking/cooking.png",
    githubUrl: "https://github.com/jvcaversan/recipe-app-job",
    additionalImages: [
      "/images/cooking/tela-home.png",
      "/images/cooking/tela-receita.png",
      "/images/cooking/tela-nova-receita.png",
      "/images/cooking/tela-editar-receita.png",
      "/images/cooking/tela-excluir-receita.png",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "Typescript",
      "Tanstack-ReactQuery",
    ],
  },
  {
    id: 3,
    title: "Sports-App",
    description:
      "Aplicativo de criação e gerenciamento de partidas de futebol, podendo efetuar criação de seus próprios clubes, invitar jogadores, criação de partidas personalizadas, sorteio de times baseado em nota de jogadores e posições, geração de estatísticas individuais e da partida no geral.",
    imageUrl: "/images/sportsapp/tela-grupo-details.png",
    githubUrl: "https://github.com/jvcaversan/sports-app",
    additionalImages: [
      "/images/sportsapp/tela-home.png",
      "/images/sportsapp/tela-grupos.png",
      "/images/sportsapp/tela-grupo-criacao-partida.png",
      "/images/sportsapp/tela-grupos-details-membros.png",
      "/images/sportsapp/tela-jogadoreseescalacaonota.png",
      "/images/sportsapp/tela-estatisticasjogador.png",
      "/images/sportsapp/tela-perfil.png",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "Tanstack-ReactQuery",
    ],
  },
  // {
  //   id: 4,
  //   title: "FitTrack",
  //   description:
  //     "Aplicativo de acompanhamento de exercícios e nutrição para entusiastas de fitness.",
  //   imageUrl: "/images/fittrack-main.png",
  //   githubUrl: "https://github.com/jvcaversan/fittrack",
  //   technologies: ["React Native", "Redux Toolkit", "Firebase"],
  // },
  // {
  //   id: 5,
  //   title: "WeatherNow",
  //   description:
  //     "Aplicativo de previsão do tempo com interface intuitiva e dados em tempo real.",
  //   imageUrl: "/images/weathernow-main.png",
  //   githubUrl: "https://github.com/jvcaversan/weathernow",
  //   technologies: ["React Native", "OpenWeatherMap API", "Geolocation"],
  // },
];

export default projects;
