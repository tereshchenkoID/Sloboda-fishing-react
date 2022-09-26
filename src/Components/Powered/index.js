import styles from './index.module.scss'

const Powered = () => {
  return (
      <div className={styles.block}>
          <p>Powered by</p>
          <a
              href={'https://tereshchenko-id.com/'}
              target={"_blank"}
              rel={"noreferrer"}
              className={styles.link}
          >
              I.Tereshchenko
          </a>
      </div>
  )
}

export default Powered;
