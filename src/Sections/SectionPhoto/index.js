import {useSelector} from "react-redux";

import Fancybox from "../../hooks/fancybox";

import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";
import Link from "../../Components/Link";

const SectionPhoto = ({inner}) => {
   let { data } = useSelector(state => state.dataReducer);

   return (
      <section id={'section-4'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('photo-title')} />
                  <div className={styles.grid}>
                      <Fancybox options={{ infinite: false }}>
                          {
                              Array.from(Array(inner ? data.photos.count : 12), (e, i) => {
                                      return (
                                          <div
                                              key={Math.random()}
                                              className={styles.column}
                                              data-fancybox={"gallery"}
                                              data-src={`/image/s-photo/${data.photos.count - i}.webp`}
                                          >
                                              <img
                                                  style={{
                                                      width: '100%',
                                                      height: '100%'
                                                  }}
                                                  src={`/image/s-photo/${data.photos.count - i}.webp`}
                                                  alt={`Fish-${i}`}
                                                  loading={'lazy'}
                                              />
                                          </div>
                                      )
                                  }
                              )
                          }
                      </Fancybox>
                  </div>
                  {
                      !inner &&
                      <div className={styles.wrapper}>
                          <Link link={'/gallery'} text={translate('button_text_2')}/>
                      </div>
                  }
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionPhoto;
