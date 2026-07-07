import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/style/main.css";
import "./assets/style/global.css";
import i18next from "i18next";
import {I18nextProvider} from 'react-i18next';
import common_am from "./translations/am/common.json"
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";
i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        am:{
            common: common_am
        },
        ru:{
            common: common_ru
        },
        en:{
            common: common_en
        },
        de:{
            common: common_de
        },
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
