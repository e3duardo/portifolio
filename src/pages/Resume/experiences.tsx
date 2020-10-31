import React from "react";
import { useTranslation } from "react-i18next";

import Tag from "components/Tag";
import Experience from "components/Experience";

function Experiences() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Experiences")}</Tag>
      </h3>
      <Experience
        company="Centro Universitário Redentor"
        season={`${t("Jun")} 2020 - ${t("today")}`}
        job={t("Software Architect")}
      />
      <Experience
        company="Deep Consulting Solutions"
        season={`${t("Mar")} 2020 - ${t("Jun")} 2020`}
        job={t("Software Engineer")}
      />
      <Experience
        company="Centro de Ensino Random"
        season={`${t("Oct")} 2019 - ${t("May")} 2020`}
        job={t("Computing Instructor")}
      >
        {t(
          "I started teaching to pass some of my knowledge forward. Today I'm teaching basic computer"
        )}
      </Experience>
      <Experience
        company="Centro Universitário Redentor"
        season={`${t("Mar")} 2015 - ${t("Mar")} 2020`}
        job={t("Systems Analyst")}
      >
        {t(
          "I started in Centro Universitário Redentor as an IT assistant in 2015 and the following year, I migrated to the development area as a systems analyst. I have been using Java and Java EE on a daily basis. Additionally, I use a brazilian framework vraptor and jsp, hibernate, and mysql. in the front-end, i generally use bootstrap, jquery, and various plugins. Our main project is the institution's portal. I also form part of the development team for the web system for the university clinic."
        )}
        <br />
        {t(
          "In addition to growing significantly as a web developer, I have been learning about devops, ci, data modeling, and mobile application development with phonegap."
        )}
      </Experience>
      <Experience
        company="ViewTech"
        season={`${t("Jun")} 2011 - ${t("Dec")} 2015`}
        job={t("Founding Partner")}
      >
        {t(
          "In 2011 I opened a computer store with my brother. We grew very fast and gained a market share in our city. Next, I decided to leave the store to focus again on my development career."
        )}
      </Experience>
      <Experience
        company="Autonomous"
        season={`2008 - ${t("today")}`}
        job="Freelancer"
      >
        {t(
          "I started as a freelancer in 2008, developing websites and systems using technologies like PHP and C#. Later, I continued with PHP (sometimes WordPress) and started using Ruby on Rails and Jekyll in some projects. By now, my focus is ReactJS development, generally in adjunct with NodeJs API."
        )}
        <br />
        {t(
          "In this walk, I learned a lot about website creation, website optimization, continuous integration and everything needed to create excellent websites easily and quickly."
        )}
      </Experience>
    </div>
  );
}

export default Experiences;
