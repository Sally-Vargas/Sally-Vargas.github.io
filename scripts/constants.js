import { Certification, PersonalSkills, Project, Skill } from "./modules.js";
const searchSkill = [];

const skills = {
  js: { src: "./Assets/js.png", skill: "js", alt: "JavaScript" },
  mongoDb: {
    src: "./Assets/mongodb_original_wordmark_logo_icon_146425.png",
    skill: "mongo-db",
    alt: "MongoDB",
  },
  sqlite: { src: "./Assets/servidor-sql.png", skill: "sqlite", alt: "SQLite" },
  node: { src: "./Assets/icons8-nodejs-48.png", skill: "node", alt: "Node.js" },
  express: {
    src: "./Assets/expressjs-icon.svg",
    skill: "express",
    alt: "Express.js",
  },
  react: { src: "./Assets/React-icon.svg", skill: "react", alt: "React" },
  git: { src: "./Assets/github.png", skill: "git", alt: "Git" },
  cs: { src: "./Assets/icons8-c-64.png", skill: "C#", alt: "C#" }

};

const myDataEs = {
  aboutMe: {
    title: "Sobre mí",
    p: [
      `Hola, soy Sally, una desarrolladora front-end con experiencia en tecnologías web. He trabajado con React, lo que me ha permitido crear interfaces de usuario interactivas y dinámicas. Además, tengo conocimientos en CSS y he manejado Express para el desarrollo de aplicaciones web.`,
      `Mi enfoque principal ha sido JavaScript, pero actualmente estoy ampliando mis habilidades aprendiendo C#. Esta nueva aventura me está ayudando a fortalecer mi comprensión de la programación orientada a objetos (POO) y a explorar nuevas oportunidades en el desarrollo de software.`,
      `Fuera del mundo de la programación, me gustan de los dulces, los gatos, el anime y los videojuegos.`,
    ],
  },
  skills: [
    new Skill({ title: "JavaScript", ...skills.js }),
    new Skill({ title: "Node.js", ...skills.node }),
    new Skill({ title: "Express.js", ...skills.express }),
    new Skill({ title: "React", ...skills.react }),
    new Skill({ title: "Git", ...skills.git }),
    new Skill({ title: "C#", ...skills.cs })
  ],
  project: [
    new Project({
      name: "App de cobranza",
      info: "Aplicación de cobranza para la empresa Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumex-mobile-app",
      srcImg: "./Assets/app mobile.png",
      keySkills: [
        skills.js.skill,
        skills.sqlite.skill,
        skills.react.skill,
        skills.git.skill,
      ],
    }),
    new Project({
      name: "Servidor para Conatumex",
      info: "Servidor para la empresa Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumexServer",
      srcImg: "./Assets/server conatumex.png",
      keySkills: [
        skills.js.skill,
        skills.mongoDb.skill,
        skills.node.skill,
        skills.express.skill,
        skills.git.skill,
      ],
    }),
  ],
  certification: [
    new Certification({
      title: "Módulos de Microsoft Learn",
      to: "Microsoft Learn",
      link: "https://learn.microsoft.com/es-es/users/sallyvargas/transcript/drjm0ape1rmq86q?tab=applied-skills-tab&source=docs",
    }),
  ],
  personalSkill: [
    new PersonalSkills("Resolución de Problemas"),
    new PersonalSkills("Aprendizaje Autónomo"),
    new PersonalSkills("Pensamiento crítico"),
    new PersonalSkills("Pensamiento lógico"),
    new PersonalSkills("Resiliencia")
  ],
};

const myDataEn = {
  aboutMe: {
    title: "About Me",
    p: [
      `Hello, I'm Sally, a front-end developer with experience in web technologies. I have worked with React, which has allowed me to create interactive and dynamic user interfaces. Additionally, I have knowledge of CSS and have worked with Express for web application development.`,
      `My main focus has been JavaScript, but I am currently expanding my skills by learning C#. This new adventure is helping me strengthen my understanding of object-oriented programming (OOP) and explore new opportunities in software development`,
      `Outside of the programming world, I enjoy sweets, cats, anime, and video games`,
    ],
  },
  skills: [
    new Skill({ title: "JavaScript", ...skills.js }),
    new Skill({ title: "Node.js", ...skills.node }),
    new Skill({ title: "Express.js", ...skills.express }),
    new Skill({ title: "React", ...skills.react }),
    new Skill({ title: "Git", ...skills.git }),
    new Skill({ title: "C#", ...skills.cs })
  ],
  project: [
    new Project({
      name: "Billing App",
      info: "Billing application for the company Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumex-mobile-app",
      srcImg: "./Assets/app mobile.png",
      keySkills: [
        skills.js.skill,
        skills.sqlite.skill,
        skills.react.skill,
        skills.git.skill,
      ],
    }),
    new Project({
      name: "Server for Conatumex",
      info: "Server for the company Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumexServer",
      srcImg: "./Assets/server conatumex.png",
      keySkills: [
        skills.js.skill,
        skills.mongoDb.skill,
        skills.node.skill,
        skills.express.skill,
        skills.git.skill,
      ],
    }),
  ],

  certification: [
    new Certification({
      title: "Microsoft Learn Modules",
      to: "Microsoft Learn",
      link: "https://learn.microsoft.com/es-mx/users/edmundo-8327/transcript/7o92ghz3j1r2pz4?tab=credentials-tab",
    }),
  ],

  personalSkill: [
    new PersonalSkills("Problem Solving"),
    new PersonalSkills("Self-Learning"),
    new PersonalSkills("Critical Thinking"),
    new PersonalSkills("Logical Thinking"),
    new PersonalSkills("Resilience"),
  ],
};

export { skills, searchSkill, myDataEs, myDataEn };
