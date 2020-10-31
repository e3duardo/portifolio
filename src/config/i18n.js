import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "config/lang/en";
import br from "config/lang/br";

i18n.use(initReactI18next).init({
  resources: {
    en,
    br,
  },
  fallbackLng: "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
