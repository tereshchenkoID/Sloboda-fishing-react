import {NavLink} from "react-router-dom";

import styles from './index.module.scss'

const Button = ({link, text}) => {
  return (
    <NavLink
        to={link}
        className={styles.block}
    >
        <span className={styles.text}>{text}</span>
    </NavLink>
  )
}

export default Button;
