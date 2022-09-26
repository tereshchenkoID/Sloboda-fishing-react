import {NavLink} from "react-router-dom";

import styles from './index.module.scss'

const Logo = () => {
  return (
      <NavLink
          to="/"
          className={styles.block}
      />
  )
}

export default Logo;
