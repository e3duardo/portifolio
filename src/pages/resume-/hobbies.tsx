import { useTranslation } from "react-i18next";

import Tag from "components/Tag";
import HobbyList from "components/HobbyList";
import Hobby from "components/Hobby";
import assets from "assets";

function Hobbies() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Hobbies")}</Tag>
      </h3>
      <HobbyList>
        <Hobby icon={assets.duotone.personBreastfeeding}>{t("Family")}</Hobby>
        <Hobby icon={assets.duotone.paw}>{t("Dog")}</Hobby>
        <Hobby icon={assets.duotone.laptopCode}>{t("Programming")}</Hobby>
        <Hobby icon={assets.duotone.motorcycle}>{t("Motorcycle")}</Hobby>
        <Hobby icon={assets.duotone.backpack}>{t("Travel")}</Hobby>
        <Hobby icon={assets.duotone.headphonesAlt}>{t("Music")}</Hobby>
      </HobbyList>
    </div>
  );
}

export default Hobbies;
