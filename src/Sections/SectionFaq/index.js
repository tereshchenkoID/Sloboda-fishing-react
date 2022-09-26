import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";
import FaqItem from "./FaqItem";

const SectionFaq = () => {
  return (
      <section id={'section-3'}>
          <ContainerFluid>
              <Container>
                  <Title
                      title={translate('faq-title')}
                      description={translate('faq-description')}
                  />
                  {
                      Array.from(Array(5), (e, i) => {
                              return (
                                  <div
                                      className={styles.item}
                                      key={Math.random()}
                                  >
                                      <FaqItem
                                          title={translate(`faq-item-${i}-text-1`)}
                                          text={translate(`faq-item-${i}-text-2`)}
                                      />
                                  </div>
                              )
                          }
                      )
                  }
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionFaq;
