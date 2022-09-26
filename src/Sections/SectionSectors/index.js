import React from "react";

import Fancybox from "../../hooks/fancybox";

import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";

const SectionSectors = () => {
  return (
      <section id={'section-8'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('button_text_1')} />
                  <div className={styles.grid}>
                      <Fancybox options={{ infinite: false }}>
                          {
                              Array.from(Array(13), (e, i) => {
                                  return (
                                      <div
                                          key={Math.random()}
                                          className={styles.column}
                                          data-fancybox={"sectors"}
                                          data-src={`/image/s-sectors/${i + 1}.webp`}
                                      >
                                          <img
                                              style={{
                                                  width: '100%',
                                                  height: '100%'
                                              }}
                                              src={`/image/s-sectors/${i + 1}.webp`}
                                              alt={`Sectors-${i + 1}`}
                                              loading={'lazy'}
                                          />
                                      </div>
                                  )
                              })
                          }
                      </Fancybox>
                  </div>
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionSectors;
