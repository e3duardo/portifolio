import { useTranslation, Trans } from "react-i18next";

import Tag from "components/Tag";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h3>
        <Tag tag="h3">{t("About me")}</Tag>
      </h3>
      <Trans i18nKey="about me...">
        <p>
          I'm a full-stack developer with extensive experience in web
          development. I seek to develop myself by learning and incorporating
          new technologies to my current skill set and pre-existing knowledge.
          My strength is in web development. I have been fortunate to work
          alongside numerous senior developers in my workplace and have learned
          a great deal from them as a result. Java and Java EE development has
          been my focus to this point, but I am also passionate about front-end.
          I always have quality of the code at the forefront of my mind when I'm
          in the development process.
        </p>
        <p>
          I'm working to be a renowned and reliable professional in the market.
          I have significant experience with front-end and React, but I am to
          develop my competence with other technologies. For now, I seek to
          refine and expand my current skill set while developing my soft skills
          in order to become a leader in both technical and management domains.
        </p>
        <p>
          As for my personal life, I'm a family-oriented person who loves my
          wife and dog here in Brazil. Since my work is my passion, I always try
          to stay up-to-date on emerging technologies. When I'm not at work, I
          like to travel, work on various ongoing projects and learn about
          mechanics and improving my proficiency with English language
        </p>
        <p>
          I truly love web development and I enjoy researching every aspect that
          is involved, including accessibility and website optimization, such as
          enhancing page speed.
        </p>
      </Trans>
    </div>
  );
}

export default About;
