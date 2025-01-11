import { Project } from "@/types/Project";

const projects: Project[] = [
  {
    id: 1,
    title: "FinanApp",
    description:
      "Aplicativo para gerenciamento de finanças pessoais. Controle suas despesas, receitas e investimentos de forma fácil e intuitiva.",
    imageUrl: "/images/finanapp-main.png",
    githubUrl: "https://github.com/jvcaversan/financial-app",
    additionalImages: [
      "/images/finanapp-dashboard.png",
      "/images/finanapp-transactions.png",
    ],
    technologies: ["React Native", "Redux", "Firebase"],
  },
  {
    id: 2,
    title: "CookingApp",
    description:
      "Aplicativo de Receitas, onde você pode criar e compartilhar suas receitas! Explore novas culinárias e aprenda com chefs amadores e profissionais.",
    imageUrl: "/images/cooking.png",
    githubUrl: "https://github.com/jvcaversan/recipe-app-job",
    additionalImages: [
      "/images/cookingapp-recipe-list.png",
      "/images/cookingapp-recipe-detail.png",
    ],
    technologies: ["React Native", "GraphQL", "MongoDB"],
  },
  {
    id: 3,
    title: "TaskMaster",
    description:
      "Aplicativo de gerenciamento de tarefas com recursos avançados de priorização e categorização.",
    imageUrl: "/images/taskmaster-main.png",
    githubUrl: "https://github.com/jvcaversan/taskmaster",
    technologies: ["React Native", "TypeScript", "AsyncStorage"],
  },
  {
    id: 4,
    title: "FitTrack",
    description:
      "Aplicativo de acompanhamento de exercícios e nutrição para entusiastas de fitness.",
    imageUrl: "/images/fittrack-main.png",
    githubUrl: "https://github.com/jvcaversan/fittrack",
    technologies: ["React Native", "Redux Toolkit", "Firebase"],
  },
  {
    id: 5,
    title: "WeatherNow",
    description:
      "Aplicativo de previsão do tempo com interface intuitiva e dados em tempo real.",
    imageUrl: "/images/weathernow-main.png",
    githubUrl: "https://github.com/jvcaversan/weathernow",
    technologies: ["React Native", "OpenWeatherMap API", "Geolocation"],
  },
];

export default projects;
