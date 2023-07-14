import { useTranslation } from "react-i18next";

import Tag from "components/Tag";
import Progress from "components/Progress";
import ProgressLegend from "components/ProgressLegend";

function Skills() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Skills")}</Tag>
      </h3>
      <Progress tick={50}>Go</Progress>
      <Progress tick={30}>Kubernetes</Progress>
      <Progress tick={50}>React</Progress>
      <Progress tick={43}>Ruby</Progress>
      <Progress tick={43}>Rails</Progress>
      <Progress tick={24}>Sidekiq</Progress>
      <Progress tick={85}>HTML</Progress>
      <Progress tick={85}>CSS</Progress>
      <Progress tick={60}>ES6</Progress>
      <Progress tick={35}>Java</Progress>
      <ProgressLegend />
    </div>
  );
}

export default Skills;
