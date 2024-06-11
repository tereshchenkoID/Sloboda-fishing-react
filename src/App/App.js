import React, {useState, Suspense} from "react";
import store from 'redux/store'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import { I18nProvider, LOCALES } from "i18n";

import { routes } from 'routing/mainRoutes';

import Api from "Components/Api";
import Routing from 'Components/Routing'
import Nav from "Components/Nav";
import Header from "Components/Header";
import Footer from "Components/Footer";

import styles from './App.module.scss';

const getLanguage = () => {
  return localStorage.language ? JSON.parse(localStorage.getItem('language')) : 'UKRAINIAN';
};

const App = () => {
  const [lang, setLang] = useState(LOCALES[getLanguage()])

  return (
    <I18nProvider locale={lang}>
      <Provider store={store}>
        <Api />
        <BrowserRouter>
          <Nav
            lang={lang}
            setLang={setLang}
          />
          <Header />
          <Suspense
            fallback={
              <div className={styles.preloader}>
                <div className={styles.logo} />
              </div>
            }
          >
            <Routing {...{ routes }} />
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Provider>
    </I18nProvider>
  )
}

export default App;
