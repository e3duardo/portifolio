import React from 'react';
import { useTranslation } from "react-i18next";

import Tag from '~/components/Tag';
import HobbieList from '~/components/HobbieList';
import Hobbie from '~/components/Hobbie';

import code from '~/assets/laptop-code-duotone.svg';
import moto from '~/assets/motorcycle-duotone.svg';
import paw from '~/assets/paw-duotone.svg';
import backpack from '~/assets/backpack-duotone.svg';
import heart from '~/assets/heart-solid.svg';
import headphones from '~/assets/headphones-alt-duotone.svg';

export default function Hobbies() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Hobbies")}</Tag>
      </h3>
      <HobbieList>
        <Hobbie icon={heart}>{t("Family")}</Hobbie>
        <Hobbie icon={paw}>{t("Dog")}</Hobbie>
        <Hobbie icon={code}>{t("Programing")}</Hobbie>
        <Hobbie icon={moto}>{t("Motorcycle")}</Hobbie>
        <Hobbie icon={backpack}>{t("Travel")}</Hobbie>
        <Hobbie icon={headphones}>{t("Music")}</Hobbie>
      </HobbieList>
    </div>
  );
}
