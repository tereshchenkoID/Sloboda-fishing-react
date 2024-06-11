import {useSelector} from "react-redux";

import Fancybox from "../../hooks/fancybox";

import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";
import Link from "../../Components/Link";

const SectionTrophies = ({inner}) => {
  let { data } = useSelector(state => state.dataReducer);

  return (
      <section id={'section-2'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('trophies-title')} />
                  <div className={styles.grid}>
                      <Fancybox options={{ infinite: false }}>
                          {
                              data.trophies.items.sort((a, b) => { return b.size - a.size }).slice(0, inner ? data.trophies.items.length : 8).map((item, index) =>
                                  <div
                                      className={styles.row}
                                      key={index}
                                  >
                                      <div className={styles.item}>
                                          <div className={styles.info}>
                                              <h6 className={styles.weight}>{item.size}</h6>
                                              <p>{item.name}</p>
                                          </div>
                                          <div
                                              className={styles.image}
                                              data-fancybox={"trophies"}
                                              data-src={`/image/s-trophies/lg/${item.img}`}
                                          >
                                              <img
                                                  style={{
                                                      width: '100%',
                                                      height: '100%'
                                                  }}
                                                  src={`/image/s-trophies/sm/${item.img}`}
                                                  alt={`Trophies-${index}`}
                                                  loading={'lazy'}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              )
                          }
                      </Fancybox>
                  </div>
                  {
                      !inner &&
                      <div className={styles.wrapper}>
                          <Link link={'/trophies'} text={translate('button_text_2')}/>
                      </div>
                  }
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionTrophies;
