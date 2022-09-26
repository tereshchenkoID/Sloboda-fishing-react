import React from "react";

import {ReactTitle} from "react-meta-tags";

import {translateString} from "../../i18n/translate";

import SectionSectors from "../../Sections/SectionSectors";

const Sectors = () => {
    return (
        <>
            <ReactTitle title={`${translateString('button_text_1')} | ${translateString('title')}`} />
            <main>
                <SectionSectors />
            </main>
        </>
    );
}

export default Sectors;
