import React, {useState} from "react";

import ContainerFluid from "../ContainerFluid";
import Logo from "../Logo";
import Toggle from "../Toggle";
import Slogan from "../Slogan";
import Language from "../Language";
import Aside from "../Aside";

import styles from './index.module.scss'

const Nav = ({lang, setLang}) => {
  const [active, setActive] = useState(false)

  return (
    <nav
        className={styles.block}
        role={"navigation"}
    >
      <ContainerFluid>
        <div className={styles.wrapper}>
          <div className={styles.cell}>
            <Logo/>
          </div>
          <div className={styles.cell}>
            <Slogan />
          </div>
          <div className={styles.cell}>
            <Language lang={lang} setLang={setLang}/>
          </div>
          <div className={styles.cell}>
            <Toggle data={active} action={setActive} />
          </div>
          <Aside data={active} action={setActive} />
        </div>
      </ContainerFluid>
    </nav>
  )
}

export default Nav;
