import styles from './index.module.scss'

import classNames from "classnames";

const Toggle = ({data, action}) => {

  return (
      <button
          className={classNames(styles.block, data && styles.active)}
          type={'button'}
          onClick={() => action(!data)}
      >
          <div className={styles.line}/>
          <div className={styles.line}/>
          <div className={styles.line}/>
      </button>
  )
}

export default Toggle;
