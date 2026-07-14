import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common_am from "./translations/am/common.json";
import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";
import common_de from "./translations/de/common.json";

i18next
    .use(initReactI18next)
    .init({
        interpolation: {
            escapeValue: false,
        },
        lng: "en",
        resources: {
            am: { common: common_am },
            ru: { common: common_ru },
            en: { common: common_en },
            de: { common: common_de },
        },
    });

export default i18next;