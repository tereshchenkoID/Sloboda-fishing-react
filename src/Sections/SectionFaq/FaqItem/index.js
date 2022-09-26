import {useState} from "react";
import classes from "classnames";

import styles from './index.module.scss'

const FaqItem = ({title, text}) => {
  const [active, setActive] = useState()

  return (
     <div
        className={classes(styles.block, active && styles.active)}
        onClick={() => setActive(!active)}
     >
         <div className={styles.header}>
             <h6 className={styles.title}>{title}</h6>
             <button
                 type={'button'}
                 className={styles.icon}
                 onClick={() => setActive(!active)}
             >
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.352539" y="14.4689" width="20.4266" height="1.70222" transform="rotate(-45 0.352539 14.4689)" fill="currentColor" />
                     <rect x="1.20364" width="20.4266" height="1.70222" transform="rotate(45 1.20364 0)" fill="currentColor" />
                 </svg>
             </button>
         </div>
         <div className={styles.body}>
             <p className={styles.text}>{text}</p>
         </div>
     </div>
  )
}

export default FaqItem;
