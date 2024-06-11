import {useState} from "react";
import {NavLink, useLocation} from 'react-router-dom';
import classes from "classnames";

import AnchorLink from "react-anchor-link-smooth-scroll";

import {translate} from "i18n/translate";

import styles from './index.module.scss'

//https://github.com/fisshy/react-scroll

const Menu = ({data, action}) => {
  const [active, setActive] = useState(-1)
  const location = useLocation()

  return (
    <menu className={styles.block}>
      {
        location.pathname !== '/'
          ?
          <>
            <NavLink
              className={styles.item}
              to={'/'}
              onClick={() => {
                action(!data)
                setActive(-1)
              }}
            >
              {translate('menu_link_8')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/sectors'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('button_text_1')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/trophies'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_2')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/gallery'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_4')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/news'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_6')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/contacts'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_7')}
            </NavLink>
            <NavLink
              className={styles.item}
              to={'/donate'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_9')}
            </NavLink>
          </>
          :
          <>
            {
              Array.from(Array(8), (e, i) =>
                (
                  <AnchorLink
                    key={Math.random()}
                    href={`#section-${i}`}
                    className={classes(styles.item, active === i && styles.active)}
                    onClick={() => {
                      action(!data)
                      setActive(i)
                    }}
                  >
                    {translate(`menu_link_${i}`)}
                  </AnchorLink>
                )
              )
            }
            <NavLink
              className={styles.item}
              to={'/donate'}
              onClick={() => {
                action(!data)
              }}
            >
              {translate('menu_link_9')}
            </NavLink>
          </>
      }
    </menu>
  )
}

export default Menu;
