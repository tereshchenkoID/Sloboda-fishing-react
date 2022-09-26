import {translate} from "../../i18n/translate";

import styles from './index.module.scss'

const Slogan = () => {
  return (
      <h5 className={styles.block}>
          {translate('slogan')}
      </h5>
  )
}

export default Slogan;
