import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";
import Link from "../../Components/Link";

const SectionRules = () => {
  return (
      <section id={'section-1'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('rules-title')} />
                  <div className={styles.titles}>
                      <h5>{translate('rules-subtitle-0')}</h5>
                      <p>{translate('rules-subtitle-2')}</p>
                  </div>
                  <ul className={styles.list}>
                      {
                          Array.from(Array(8), (e, i) => {
                                  return (
                                      <li key={Math.random()}>
                                          <p>{translate(`rules-item-0-text-${i}`)}</p>
                                      </li>
                                  )
                              }
                          )
                      }
                  </ul>

                  <div className={styles.titles}>
                    <h5>{translate('rules-subtitle-1')}</h5>
                  </div>
                  <ul className={styles.list}>
                      {
                          Array.from(Array(10), (e, i) => {
                                  return (
                                      <li key={Math.random()}>
                                          <p>{translate(`rules-item-1-text-${i}`)}</p>
                                      </li>
                                  )
                              }
                          )
                      }
                  </ul>

                  <div className={styles.titles}>
                      <h5>{translate('rules-item-2-text-0')}</h5>
                      <p>{translate('rules-item-2-text-1')}</p>
                      <h6>{translate('rules-item-2-text-2')}</h6>
                  </div>

                  <div className={styles.map}>
                      <img
                          src={'/image/sectors.webp'}
                          alt={'Sectors'}
                          loading={'lazy'}
                      />
                  </div>
                  <div className={styles.wrapper}>
                    <Link link={'/sectors'} text={translate('button_text_1')}/>
                  </div>
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionRules;
