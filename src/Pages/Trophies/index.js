import React from "react";
import {ReactTitle} from "react-meta-tags";

import {translateString} from "../../i18n/translate";

import SectionTrophies from "../../Sections/SectionTrophies";

const Trophies = () => {
    return (
        <>
            <ReactTitle title={`${translateString('menu_link_2')} | ${translateString('title')}`} />
            <main>
                <SectionTrophies inner={true} />
            </main>
        </>
    );
}

export default Trophies;
