import React from "react";
import {ReactTitle} from "react-meta-tags";

import {translateString} from "../../i18n/translate";

import SectionPhoto from "../../Sections/SectionPhoto";

const Gallery = () => {
    return (
        <>
            <ReactTitle title={`${translateString('menu_link_4')} | ${translateString('title')}`} />
            <main>
                <SectionPhoto inner={true} />
            </main>
        </>
    );
}

export default Gallery;
