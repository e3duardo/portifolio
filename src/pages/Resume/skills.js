import React from 'react';
import { useTranslation } from "react-i18next";

import Tag from '~/components/Tag';
import Progress from '~/components/Progress';
import ProgressLegend from '~/components/ProgressLegend';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Skills")}</Tag>
      </h3>
      <Progress tick={94}>HTML</Progress>
      <Progress tick={90}>CSS</Progress>
      <Progress tick={69}>ES6</Progress>
      <Progress tick={55}>React</Progress>
      <Progress tick={85}>Java</Progress>
      <Progress tick={75}>Hibernate</Progress>
      <Progress tick={5}>Clojure</Progress>
      <ProgressLegend />
    </div>
  );
}
