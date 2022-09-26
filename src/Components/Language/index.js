import React, {useState} from "react";

import classes from "classnames";

import {LOCALES} from "../../i18n";

import styles from './index.module.scss';

const setLanguage = (lang) => {
    localStorage.setItem('language', JSON.stringify(lang));
};

const Language = ({lang, setLang}) => {
    const [active, setActive] = useState(lang)
    const [dropdown, setDropdown] = useState(false)

    const handleButton = (lang) => {
        setLanguage(lang)

        setLang(LOCALES[lang])
        setActive(LOCALES[lang])
        setDropdown(!dropdown)
    };

    return (
        <div className={classes(styles.block, dropdown && styles.active)}>
            <div
                className={styles.checked}
                onClick={() => setDropdown(!dropdown)}
            >
                <div className={styles.text}>
                    {active.substr(0, 2)}
                </div>
                <div className={styles.arrow}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6L4.99998 0L0 6L10 6Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>

            <div className={styles.dropdown}>
                <button
                    className={classes(styles.button, active === 'uk-ua' && styles.active)}
                    onClick={() => handleButton('UKRAINIAN')}
                >
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                            <g fillRule="evenodd" strokeWidth="1pt">
                                <path fill="#ffd700" d="M0 0h640v480H0z"/>
                                <path fill="#0057b8" d="M0 0h640v240H0z"/>
                            </g>
                        </svg>
                    </span>
                    UK
                </button>
                <button
                    className={classes(styles.button, active === 'ru-ru' && styles.active)}
                    onClick={() => handleButton('RUSSIAN')}
                >
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h640v480H0z"/>
                            <path fill="#0039a6" d="M0 160h640v320H0z"/>
                            <path fill="#d52b1e" d="M0 320h640v160H0z"/>
                          </g>
                        </svg>
                    </span>
                    RU
                </button>
            </div>
        </div>
    );
}

export default Language;
