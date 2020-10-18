import React from 'react';
import { useTranslation } from "react-i18next";

import Tag from '~/components/Tag';
import Experience from '~/components/Experience';

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Education")}</Tag>
      </h3>
      <Experience
        company="Caelum"
        season={`${t("Jul")} 2020`}
        job="DEVOPS NA PRÁTICA COM CULTURA, COLABORAÇÃO, FERRAMENTAS E AUTOMATIZAÇÃO"
      />
      <Experience
        company="Udemy"
        season={`${t("Mar")} 2020`}
        job="Advanced React and Redux : 2020 Edition"
      />
      <Experience
        company="Udemy"
        season={`${t("Mar")} 2020`}
        job="The Complete Guide to Advanced React Patterns (2020)"
      />
      <Experience
        company="Centro Universitário Redentor"
        season="2014 - 2020"
        job={t("Bachelor of Information Systems")}
      />
    </div>
  );
}
