import styles from './index.module.scss'

import AnchorLink from "react-anchor-link-smooth-scroll";

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";

const SectionAbout = () => {
  return (
      <section id={'section-0'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('about-title')} />
                  <div className={styles.video}>
                      <video
                          width="100%"
                          height="100%"
                          // controls="controls"
                          // preload="auto"
                          loop="loop"
                          muted="muted"
                          autoPlay="autoplay"
                          playsInline="playsinline"
                      >
                          <source
                              src={'/video/about.mp4'}
                              type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
                          />
                      </video>
                  </div>

                  <div className={styles.grid}>
                      <article className={styles.item}>
                          <div className={styles.header}>
                              <h5 className={styles.title}>{translate('about-subtitle-0')}</h5>
                          </div>
                          <div className={styles.body}>
                              <ul className={styles.list}>
                                  <li>
                                      <p className={styles.accent}>{translate('about-item-0-text-1')}</p>
                                  </li>
                                  <li>
                                      <p>{translate('about-item-0-text-2')}</p>
                                  </li>
                                  <li>
                                      <p className={styles.accent}>{translate('about-item-0-text-3')}</p>
                                  </li>
                              </ul>
                          </div>
                      </article>
                      <article className={styles.item}>
                          <div className={styles.header}>
                              <h5 className={styles.title}>{translate('about-subtitle-1')}</h5>
                          </div>
                          <div className={styles.body}>
                              <ul className={styles.list}>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-1-text-1')}:</strong>
                                      <span>{translate('about-item-1-text-2')}</span>
                                  </li>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-1-text-3')}:</strong>
                                      <span>12 га</span>
                                  </li>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-1-text-4')}:</strong>
                                      <span>2 м</span>
                                  </li>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-1-text-5')}:</strong>
                                      <span>{translate('about-item-1-text-6')}</span>
                                  </li>
                                  <li>
                                      <span>{translate('about-item-1-text-7')}</span>
                                  </li>
                              </ul>
                          </div>
                      </article>
                      <article className={styles.item}>
                          <div className={styles.header}>
                              <h5 className={styles.title}>{translate('about-subtitle-2')}</h5>
                          </div>
                          <div className={styles.body}>
                              <ul className={styles.list}>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-2-text-1')}:</strong>
                                      <span className={styles.accent}>49.9190804, 30.8320398</span>
                                  </li>
                                  <li>
                                      <span>{translate('about-item-2-text-2')}</span>
                                  </li>
                                  <li>
                                      <strong className={styles.subtitle}>{translate('about-item-2-text-3')}</strong>
                                      <AnchorLink
                                          href={'#section-7'}
                                          className={styles.link}
                                      >
                                          {translate('about-item-2-text-4')}
                                      </AnchorLink>
                                  </li>
                              </ul>
                          </div>
                      </article>
                  </div>
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionAbout;
