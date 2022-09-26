import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

const Contact = () => {
  return (
      <div className={styles.block}>
          <a
              href={"tel:+380663862573"}
              className={styles.link}
          >
              +38 066-386-25-73
          </a>
          <p className={styles.text}>{translate('name')}</p>
      </div>
  )
}

export default Contact;
