import React, {lazy, Suspense} from "react";

import {ReactTitle} from "react-meta-tags";

import {translateString} from "i18n/translate";

import styles from "App/App.module.scss";

const SectionNews = lazy( () => import("Sections/SectionNews"))
const SectionContacts = lazy( () => import("Sections/SectionContacts"))
const SectionReviews = lazy( () => import("Sections/SectionReviews"))
const SectionPhoto = lazy( () => import("Sections/SectionPhoto"))
const SectionTrophies = lazy( () => import("Sections/SectionTrophies"))
const SectionRules = lazy( () => import("Sections/SectionRules"))
const SectionAbout = lazy( () => import("Sections/SectionAbout"))
const SectionFaq = lazy( () => import("Sections/SectionFaq"))

const Main = () => {

    return (
        <>
            <ReactTitle title={`${translateString('menu_link_8')} | ${translateString('title')}`} />
            <main>
                <Suspense
                    fallback={
                        <div className={styles.preloader}>
                            Loading
                        </div>
                    }
                >
                    <SectionAbout />
                    <SectionRules />
                    <SectionTrophies inner={false} />
                    <SectionFaq />
                    <SectionPhoto inner={false} />
                    <SectionReviews />
                    <SectionNews inner={false} />
                    <SectionContacts />
                </Suspense>
            </main>
        </>
    );
}

export default Main;
