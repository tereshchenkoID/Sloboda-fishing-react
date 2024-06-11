import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000
};

const Header = () => {
  return (
    <header className={styles.block}>
      <div className={styles.slider}>
        <Slider {...settings}>
          <picture>
            <source
              srcSet={'/image/header/4-small.webp'}
              media='(max-width: 768px)'
            />
            <source
              srcSet={'/image/header/4.webp'}
            />
            <img
              src={'/image/header/4.webp'}
              alt={'Sloboda 4'}
              loading={'lazy'}
            />
          </picture>
          <picture>
            <source
              srcSet={'/image/header/1-small.webp'}
              media='(max-width: 768px)'
            />
            <source
              srcSet={'/image/header/1.webp'}
            />
            <img
              src={'/image/header/1.webp'}
              alt={'Sloboda 1'}
              loading={'lazy'}
            />
          </picture>
          <picture>
            <source
              srcSet={'/image/header/5-small.webp'}
              media='(max-width: 768px)'
            />
            <source
              srcSet={'/image/header/5.webp'}
            />
            <img
              src={'/image/header/5.webp'}
              alt={'Sloboda 5'}
              loading={'lazy'}
            />
          </picture>
        </Slider>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{translate('slogan')}</h1>
        <h5 className={styles.subtitle}>{translate('header-text')}</h5>
      </div>
    </header>
  )
}

export default Header;
