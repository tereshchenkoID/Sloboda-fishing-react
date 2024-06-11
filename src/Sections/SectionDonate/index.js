import React from "react";

import styles from './index.module.scss'

import {translate} from "i18n/translate";

import Container from "Components/Container";
import ContainerFluid from "Components/ContainerFluid";
import Title from "Components/Title";

const SectionDonate = () => {
  return (
    <section id={'section-0'}>
      <ContainerFluid>
        <Container>
          <Title title={translate('menu_link_9')} />
          <div className={styles.grid}>
            <div className={styles.item}>
              <h6 className={styles.title}>{translate('donate_title_2')}:</h6>
              <p className={styles.text}>{translate('donate_subtitle_2')}</p>
              <a
                href="https://send.monobank.ua/jar/4i94Xw5oV6"
                rel={"noreferrer"}
                target={"_blank"}
                className={styles.link}
              >
                <span className={styles.label}>{translate('button_text_3')}</span>
              </a>
            </div>
          </div>
        </Container>
      </ContainerFluid>
    </section>
  )
}

export default SectionDonate;
