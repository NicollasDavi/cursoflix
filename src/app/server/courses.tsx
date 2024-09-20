// server/courses.ts
export const getCourses = [
    {
      id: "1",
      nome: "Curso de JavaScript",
      instrutor: "João Silva",
      duracao: "40h",
      imageurl: "https://th.bing.com/th/id/R.adfa821b794f40daa7cd09a7e03c4dde?rik=dZgVteSZVGqtQQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjavascript-logo-vector-png-logo-of-javascript-195.png&ehk=QJTA14Ta11x67suSQQSX%2b9JOQTAwuzWfIJptV9Fc7H4%3d&risl=&pid=ImgRaw&r=0",
      area: "Desenvolvimento",
      valor: 500,
      detalhes:
        "Este curso de JavaScript oferece uma base sólida no desenvolvimento web, abordando desde os conceitos fundamentais até recursos avançados como closures, promises e async/await. Você aprenderá a manipular o DOM, eventos e comunicação com servidores via AJAX. O curso também abrange Node.js para introduzir o backend com JavaScript, permitindo a criação de aplicações completas full-stack."
    },
    {
      id: "2",
      nome: "Curso de Python",
      instrutor: "Maria Oliveira",
      duracao: "50h",
      imageurl: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
      area: "Data Science",
      valor: 600,
      detalhes:
        "Este curso de Python aborda desde o básico da linguagem até aplicações avançadas em Data Science. Focado em análise de dados, o curso ensina o uso de bibliotecas como Pandas, NumPy e Matplotlib para manipulação e visualização de dados. Além disso, há módulos sobre Machine Learning com Scikit-learn, ajudando você a criar modelos preditivos e realizar análises avançadas."
    },
    {
      id: "3",
      nome: "Curso de React",
      instrutor: "Pedro Martins",
      duracao: "60h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      area: "Desenvolvimento Frontend",
      valor: 700,
      detalhes:
        "O curso avançado de React oferece uma imersão nos principais conceitos da biblioteca, como Hooks, Context API e React Router. Os alunos aprenderão a criar interfaces de usuário dinâmicas e escaláveis, trabalhando com state management, memoization e otimizações de performance. Além disso, o curso inclui integração com APIs RESTful e testes com Jest e Cypress."
    },
    {
      id: "4",
      nome: "Curso de Angular",
      instrutor: "Mariana Costa",
      duracao: "55h",
      imageurl: "https://angular.io/assets/images/logos/angular/angular.svg",
      area: "Desenvolvimento Frontend",
      valor: 650,
      detalhes:
        "Este curso de Angular cobre o desenvolvimento de aplicações web modulares e escaláveis. Com foco em boas práticas de arquitetura, você aprenderá a utilizar diretivas, pipes, e serviços. O curso também inclui o uso de RxJS para manipulação de streams de dados e Angular CLI para automação de tarefas. Ideal para quem deseja construir aplicações robustas com Angular."
    },
    {
      id: "5",
      nome: "Curso de Node.js",
      instrutor: "Carlos Lima",
      duracao: "45h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      area: "Desenvolvimento Backend",
      valor: 550,
      detalhes:
        "Este curso de Node.js oferece uma introdução ao desenvolvimento backend utilizando JavaScript. Você aprenderá a criar servidores com Express, manipular banco de dados MongoDB e implementar APIs RESTful. O curso também abrange autenticação com JWT e a construção de aplicativos em tempo real com WebSockets, tornando-o ideal para desenvolvedores que desejam se especializar em backend."
    },
    {
      id: "6",
      nome: "Curso de TypeScript",
      instrutor: "Fernanda Souza",
      duracao: "35h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      area: "Desenvolvimento Frontend",
      valor: 480,
      detalhes:
        "O curso de TypeScript ensina como adicionar tipagem estática ao JavaScript para evitar erros comuns e melhorar a manutenção do código. Você aprenderá a utilizar interfaces, tipos, enums e generics, além de integrar TypeScript com frameworks populares como React e Angular. O curso inclui exercícios práticos e exemplos de uso em projetos de grande escala."
    },
    {
      id: "7",
      nome: "Curso de Java",
      instrutor: "Guilherme Rocha",
      duracao: "50h",
      imageurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      area: "Desenvolvimento Backend",
      valor: 650,
      detalhes:
        "Este curso de Java cobre desde os princípios básicos de programação orientada a objetos até técnicas avançadas para desenvolvimento de software corporativo. O curso inclui módulos sobre frameworks como Spring Boot, Hibernate, e arquitetura RESTful. Ao final, os alunos estarão aptos a desenvolver sistemas de grande escala e entender as melhores práticas de design de software."
    },
    {
      id: "8",
      nome: "Curso de C++",
      instrutor: "Lucas Prado",
      duracao: "55h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      area: "Desenvolvimento de Sistemas",
      valor: 700,
      detalhes:
        "Este curso de C++ oferece uma introdução profunda ao desenvolvimento de sistemas de alto desempenho. Desde manipulação de memória com ponteiros até técnicas de paralelismo e multithreading, o curso capacita os alunos a trabalhar em áreas que exigem máxima performance, como games, sistemas embarcados e aplicações de tempo real."
    },
    {
      id: "9",
      nome: "Curso de Ruby on Rails",
      instrutor: "Larissa Mendes",
      duracao: "40h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
      area: "Desenvolvimento Web",
      valor: 500,
      detalhes:
        "O curso de Ruby on Rails ensina como criar aplicações web completas utilizando a framework Rails. O curso aborda a arquitetura MVC, integração com banco de dados via ActiveRecord, e a construção de APIs RESTful. Ideal para quem quer aprender desenvolvimento ágil, Rails é conhecido pela simplicidade e rapidez na criação de aplicativos web dinâmicos."
    },
    {
      id: "10",
      nome: "Curso de PHP com Laravel",
      instrutor: "Bruno Fernandes",
      duracao: "60h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      area: "Desenvolvimento Backend",
      valor: 550,
      detalhes:
        "Este curso foca no uso de PHP com o framework Laravel para criar aplicações web modernas. Desde o roteamento até a gestão de banco de dados com Eloquent ORM, você aprenderá a construir sistemas escaláveis e performáticos. O curso inclui tópicos como autenticação, autorização e testes automatizados para garantir a qualidade e segurança do código."
    },
    {
      id: "11",
      nome: "Curso de Kotlin para Android",
      instrutor: "Rafael Nunes",
      duracao: "45h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      area: "Desenvolvimento Mobile",
      valor: 520,
      detalhes:
        "Este curso de Kotlin oferece uma introdução ao desenvolvimento de aplicativos Android modernos. Você aprenderá a criar interfaces de usuário com Android Studio, gerenciar o ciclo de vida de atividades e manipular dados localmente com Room. O curso inclui tópicos avançados como integração com Firebase e uso de ViewModels para gerenciamento eficiente de estados."
    },
    {
      id: "12",
      nome: "Curso de Swift para iOS",
      instrutor: "Sofia Castro",
      duracao: "50h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      area: "Desenvolvimento Mobile",
      valor: 600,
      detalhes:
        "Este curso de Swift cobre todo o processo de desenvolvimento de aplicativos para iOS. Desde a criação de interfaces com o Interface Builder até o uso de APIs como CoreData e CloudKit, você aprenderá a construir aplicativos robustos e bem estruturados. O curso também aborda a integração de notificações push e boas práticas de design para a App Store."
    },
    {
      id: "13",
      nome: "Curso de SQL para Bancos de Dados",
      instrutor: "Gabriela Reis",
      duracao: "40h",
      imageurl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      area: "Banco de Dados",
      valor: 450,
      detalhes:
        "Este curso de SQL ensina os fundamentos de bancos de dados relacionais, abordando consultas, manipulação de dados e otimização de performance. Ideal para administradores de banco de dados e desenvolvedores que precisam interagir com SQL em suas aplicações, o curso abrange transações, subconsultas e joins complexos para consultas avançadas."
    }
]

  