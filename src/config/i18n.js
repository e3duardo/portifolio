import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'hello, ': 'hello, ',
          'my name is': 'my name is',
          ' and this is my': ' and this is my',
          portfolio: 'portfolio',
          resume: 'resume',
          'About me': 'About me',
          Experiences: 'Experiences',
          Education: 'Education',
          Skills: 'Skills',
          Beginner: 'Beginner',
          Proficient: 'Proficient',
          Expert: 'Expert',
          Master: 'Master',
          Languages: 'Languages',
          Portuguese: 'Portuguese',
          English: 'English',
          Hobbies: 'Hobbies',
          Contact: 'Contact',
          Family: 'Family',
          Dog: 'Dog',
          Programing: 'Programing',
          Motorcycle: 'Motorcycle',
          Travel: 'Travel',
          Music: 'Music',
          today: 'today',
          Jan: 'Jan',
          Feb: 'Feb',
          Mar: 'Mar',
          Apr: 'Apr',
          May: 'May',
          Jun: 'Jun',
          Jul: 'Jul',
          Aug: 'Aug',
          Sep: 'Sep',
          Oct: 'Oct',
          Nov: 'Nov',
          Dec: 'Dec',
          'Software Architect': 'Software Architect',
          'Computing Instructor': 'Computing Instructor',
          'Systems Analyst': 'Systems Analyst',
          'Founding Partner': 'Founding Partner',
          'Bachelor of Information Systems': 'Bachelor of Information Systems',
          'about me...': `<0>
            I'm a full-stack developer with extensive experience in web development. I seek to develop myself by learning and incorporating new technologies to my current skill set and pre-existing knowledge. My strength is in web development. I have been fortunate to work alongside numerous senior developers in my workplace and have learned a great deal from them as a result. Java and Java EE development has been my focus to this point, but I am also passionate about front-end. I always have quality of the code at the forefront of my mind when I'm in the development process.
          </0>
          <1>
            I'm working to be a renowned and reliable professional in the market. I have significant experience with front-end and React, but I am to develop my competence with other technologies. For now, I seek to refine and expand my current skill set while developing my soft skills in order to become a leader in both technical and management domains.
          </1>
          <2>
            As for my personal life, I'm a family-oriented person who loves my wife and dog here in Brazil. Since my work is my passion, I always try to stay up-to-date on emerging technologies. When I'm not at work, I like to travel, work on various ongoing projects and learn about mechanics and improving my proficiency with English language
          </2>
          <3>
            I truly love web development and I enjoy researching every aspect that is involved, including accessibility and website optimization, such as enhancing page speed.
          </3>`,
          "I started teaching to pass some of my knowledge forward. Today I'm teaching basic computer":
            "I started teaching to pass some of my knowledge forward. Today I'm teaching basic computer",
          "I started in Centro Universitário Redentor as an IT assistant in 2015 and the following year, I migrated to the development area as a systems analyst. I have been using Java and Java EE on a daily basis. Additionally, I use a brazilian framework vraptor and jsp, hibernate, and mysql. in the front-end, i generally use bootstrap, jquery, and various plugins. Our main project is the institution's portal. I also form part of the development team for the web system for the university clinic.":
            "I started in Centro Universitário Redentor as an IT assistant in 2015 and the following year, I migrated to the development area as a systems analyst. I have been using Java and Java EE on a daily basis. Additionally, I use a brazilian framework vraptor and jsp, hibernate, and mysql. in the front-end, i generally use bootstrap, jquery, and various plugins. Our main project is the institution's portal. I also form part of the development team for the web system for the university clinic.",
          'In addition to growing significantly as a web developer, I have been learning about devops, ci, data modeling, and mobile application development with phonegap.':
            'In addition to growing significantly as a web developer, I have been learning about devops, ci, data modeling, and mobile application development with phonegap.',
          'In 2011 I opened a computer store with my brother. We grew very fast and gained a market share in our city. Next, I decided to leave the store to focus again on my development career.':
            'In 2011 I opened a computer store with my brother. We grew very fast and gained a market share in our city. Next, I decided to leave the store to focus again on my development career.',
          'I started as a freelancer in 2008, developing websites and systems using technologies like PHP and C#. Later, I continued with PHP (sometimes WordPress) and started using Ruby on Rails and Jekyll in some projects. By now, my focus is ReactJS development, generally in adjunct with NodeJs API.':
            'I started as a freelancer in 2008, developing websites and systems using technologies like PHP and C#. Later, I continued with PHP (sometimes WordPress) and started using Ruby on Rails and Jekyll in some projects. By now, my focus is ReactJS development, generally in adjunct with NodeJs API.',
          'In this walk, I learned a lot about website creation, website optimization, continuous integration and everything needed to create excellent websites easily and quickly.':
            'In this walk, I learned a lot about website creation, website optimization, continuous integration and everything needed to create excellent websites easily and quickly.',
        },
      },
      br: {
        translations: {
          'hello, ': 'olá, ',
          'my name is': 'meu nome é',
          ' and this is my': ' e este é meu',
          portfolio: 'portifólio',
          resume: 'currículo',
          'About me': 'Sobre min',
          Experiences: 'Experiências',
          Education: 'Educação',
          Skills: 'Habilidades',
          Beginner: 'Amador',
          Proficient: 'Proficiente',
          Expert: 'Especialista',
          Master: 'Mestre',
          Languages: 'Idiomas',
          Portuguese: 'Portugês',
          English: 'Inglês',
          Hobbies: 'Passatempos',
          Contact: 'Contatos',
          Family: 'Família',
          Dog: 'Branquinha',
          Programing: 'Programar',
          Motorcycle: 'Motos',
          Travel: 'Viagens',
          Music: 'Música',
          today: 'hoje',
          Jan: 'Jan',
          Feb: 'Fev',
          Mar: 'Mar',
          Apr: 'Abr',
          May: 'Mai',
          Jun: 'Jun',
          Jul: 'Jul',
          Aug: 'Ago',
          Sep: 'Set',
          Oct: 'Out',
          Nov: 'Nov',
          Dec: 'Dez',
          'Software Architect': 'Arquiteto de Software',
          'Computing Instructor': 'Instrutor de Computação',
          'Systems Analyst': 'Analista de Sistemas',
          'Founding Partner': 'Sócio Fundador',
          'Bachelor of Information Systems':
            'Bacharel em Sistemas de Informação',
          'about me...': `
          <0>
            Sou um desenvolvedor full-stack com vasta experiência em desenvolvimento web. Procuro me desenvolver aprendendo e incorporando novos tecnologias ao meu conjunto de habilidades atuais e conhecimentos pré-existentes. Minhas a força está no desenvolvimento web. Tive a sorte de trabalhar ao lado vários desenvolvedores seniores em meu local de trabalho e aprendi muito deles como resultado. Desenvolvimento em Java e Java EE tem sido meu foco para neste ponto, mas também sou apaixonado por front-end. eu sempre tive qualidade do código em minha mente quando estou no processo de desenvolvimento.
          </0>
          <1>        
            Estou trabalhando para ser um profissional renomado e confiável no mercado. Tenho experiência significativa com front-end e React, mas estou para desenvolver minha competência com outras tecnologias. Por enquanto, eu procuro refinar e expandir meu conjunto de habilidades atuais enquanto desenvolvo minhas habilidades sociais a fim de se tornar um líder nos domínios técnico e de gestão.
          </1>
          <2>
            Quanto à minha vida pessoal, sou uma pessoa voltada para a família que ama minha esposa e cachorro aqui no Brasil. Como meu trabalho é minha paixão, procuro sempre para se manter atualizado sobre as tecnologias emergentes. Quando não estou no trabalho, Gosto de viajar, trabalhar em vários projetos em andamento e aprender sobre mecânica e melhorando minha proficiência com a língua inglesa
          </2>
          <3>
            Eu realmente amo desenvolvimento web e gosto de pesquisar todos os aspectos que está envolvido, incluindo acessibilidade e otimização de sites, como aumentando a velocidade da página.
          </3>`,
          "I started teaching to pass some of my knowledge forward. Today I'm teaching basic computer":
            'Comecei a ensinar para passar um pouco do meu conhecimento adiante. Hoje estou ensinando informática básica',
          "I started in Centro Universitário Redentor as an IT assistant in 2015 and the following year, I migrated to the development area as a systems analyst. I have been using Java and Java EE on a daily basis. Additionally, I use a brazilian framework vraptor and jsp, hibernate, and mysql. in the front-end, i generally use bootstrap, jquery, and various plugins. Our main project is the institution's portal. I also form part of the development team for the web system for the university clinic.":
            'Comecei no Centro Universitário Redentor como auxiliar de TI em 2015 e no ano seguinte migrei para a área de desenvolvimento como analista de sistemas. Tenho usado Java e Java EE diariamente. Além disso, eu uso um framework brasileiro vraptor e jsp, hibernate e mysql. no front-end, geralmente uso bootstrap, jquery e vários plug-ins. Nosso principal projeto é o portal da instituição. Também faço parte da equipe de desenvolvimento do sistema web para a clínica universitária.',
          'In addition to growing significantly as a web developer, I have been learning about devops, ci, data modeling, and mobile application development with phonegap.':
            'Além de crescer significativamente como desenvolvedor da web, tenho aprendido sobre devops, ci, modelagem de dados e desenvolvimento de aplicativos móveis com phonegap.',
          'In 2011 I opened a computer store with my brother. We grew very fast and gained a market share in our city. Next, I decided to leave the store to focus again on my development career.':
            'Em 2011, abri uma loja de informática com meu irmão. Crescemos muito rápido e conquistamos market share em nossa cidade. Em seguida, decidi deixar a loja para me concentrar novamente em minha carreira de desenvolvimento.',
          'I started as a freelancer in 2008, developing websites and systems using technologies like PHP and C#. Later, I continued with PHP (sometimes WordPress) and started using Ruby on Rails and Jekyll in some projects. By now, my focus is ReactJS development, generally in adjunct with NodeJs API.':
            'Comecei como freelancer em 2008, desenvolvendo sites e sistemas utilizando tecnologias como PHP e C #. Mais tarde, continuei com PHP (às vezes WordPress) e comecei a usar Ruby on Rails e Jekyll em alguns projetos. Por enquanto, meu foco é o desenvolvimento do ReactJS, geralmente em conjunto com a API NodeJs.',
          'In this walk, I learned a lot about website creation, website optimization, continuous integration and everything needed to create excellent websites easily and quickly.':
            'Nesta caminhada, aprendi muito sobre criação de sites, otimização de sites, integração contínua e tudo o que é necessário para criar sites excelentes de forma fácil e rápida.',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
