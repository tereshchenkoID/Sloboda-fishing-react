import React from "react";
import {ReactTitle} from "react-meta-tags";

import {translateString} from "i18n/translate";

import SectionDonate from "Sections/SectionDonate";

const Donate = () => {
    return (
        <>
            <ReactTitle title={`${translateString('menu_link_9')} | ${translateString('title')}`} />
            <main>
                <SectionDonate />
            </main>
        </>
    );
}

export default Donate;
