import React from "react";
import { useTranslation } from "react-i18next";

import Tag from "components/Tag";
import HobbieList from "components/HobbieList";
import Hobbie from "components/Hobbie";
import assets from "assets";

function Hobbies() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Hobbies")}</Tag>
      </h3>
      <HobbieList>
        <Hobbie icon={assets.solid.hearts}>{t("Family")}</Hobbie>
        <Hobbie icon={assets.duotone.paw}>{t("Dog")}</Hobbie>
        <Hobbie icon={assets.duotone.laptopCode}>{t("Programing")}</Hobbie>
        <Hobbie icon={assets.duotone.motorcycle}>{t("Motorcycle")}</Hobbie>
        <Hobbie icon={assets.duotone.backpack}>{t("Travel")}</Hobbie>
        <Hobbie icon={assets.duotone.headphonesAlt}>{t("Music")}</Hobbie>
      </HobbieList>
    </div>
  );
}

export default Hobbies;
