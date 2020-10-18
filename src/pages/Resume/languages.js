import React from 'react';
import { useTranslation } from "react-i18next";

import Tag from '~/components/Tag';
import Language from '~/components/Language';

export default function Languages() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">{t("Languages")}</Tag>
      </h3>
      <Language star={5} language='br'>{t("Portuguese")}</Language>
      <Language star={3} language='en'>{t("English")}</Language>
    </div>
  );
}
