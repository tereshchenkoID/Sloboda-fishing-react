import React from "react";
import {ReactTitle} from "react-meta-tags";

import {translateString} from "../../i18n/translate";

import SectionContacts from "../../Sections/SectionContacts";

const Contact = () => {
    return (
        <>
            <ReactTitle title={`${translateString('menu_link_7')} | ${translateString('title')}`} />
            <main>
                <SectionContacts />
            </main>
        </>
    );
}

export default Contact;
