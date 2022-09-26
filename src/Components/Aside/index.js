import classes from "classnames";

import Contact from "../Contact";
import Powered from "../Powered";
import Menu from "../Menu";
import Social from "../Social";

import styles from './index.module.scss'

const Aside = ({data, action}) => {
  return (
      <aside className={classes(styles.block, data && styles.active)}>
          <div>
              <Menu data={data} action={action} />
              <Social />
              <Contact />
          </div>
          <Powered />
      </aside>
  )
}

export default Aside;
