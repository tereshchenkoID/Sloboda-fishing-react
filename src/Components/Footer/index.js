import {translate} from "../../i18n/translate";

import Logo from "../Logo";
import Powered from "../Powered";
import Social from "../Social";
import Contact from "../Contact";
import ContainerFluid from "../ContainerFluid";
import Container from "../Container";

import styles from './index.module.scss'

const Footer = () => {
  return (
      <footer className={styles.block}>
          <ContainerFluid>
              <Container>
                  <div className={styles.wrapper}>
                      <div className={styles.left}>
                          <div className={styles.social}>
                              <p className={styles.text}>{translate('footer-social-title')}</p>
                              <Social />
                          </div>
                          <p className={styles.text}>© 2020 - {new Date().getFullYear()} "{translate('slogan')}"</p>
                      </div>
                      <div className={styles.center}>
                          <Logo />
                          <Powered />
                      </div>
                      <div className={styles.right}>
                          <Contact />
                      </div>
                  </div>
              </Container>
          </ContainerFluid>
      </footer>
  )
}

export default Footer;
