import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";

const SectionContacts = () => {
  return (
      <section id={'section-7'}>
          <ContainerFluid>
              <Container>
                  <Title
                      title={translate('contacts-title')}
                      description={translate('contacts-description')}
                  />
              </Container>
          </ContainerFluid>
          <div className={styles.map}>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3962831147965!2d30.832165577462053!3d49.918923186416166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d481ca80568a1d%3A0xf71167c6cd754ae6!2z0J7Qt9C10YDQviAi0KHQu9C-0LHQvtC00LAi!5e0!3m2!1sru!2sua!4v1598972037657!5m2!1sru!2sua"
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex="0"
                  title={"Map"}
              />
          </div>
      </section>
  )
}

export default SectionContacts;
