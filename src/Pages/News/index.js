import React from "react";
import {ReactTitle} from "react-meta-tags";

import {translateString} from "i18n/translate";

import SectionNews from "Sections/SectionNews";

const News = () => {
  return (
    <>
      <ReactTitle title={`${translateString('menu_link_6')} | ${translateString('title')}`} />
      <main>
        <SectionNews inner={true} />
      </main>
    </>
  );
}

export default News;
