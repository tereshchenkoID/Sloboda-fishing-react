import styles from './index.module.scss'

const Social = () => {
  return (
      <ul className={styles.block}>
          <li className={styles.item}>
              <a
                  href={"https://www.facebook.com/groups/1947944298783345/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={styles.link}
              >
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.1134 0.00324458L6.09122 0C3.81936 0 2.35119 1.5063 2.35119 3.83769V5.60713H0.317969C0.142275 5.60713 0 5.74956 0 5.92526V8.48896C0 8.66466 0.142437 8.80693 0.317969 8.80693H2.35119V15.276C2.35119 15.4517 2.49346 15.594 2.66916 15.594H5.32193C5.49762 15.594 5.6399 15.4515 5.6399 15.276V8.80693H8.0172C8.1929 8.80693 8.33517 8.66466 8.33517 8.48896L8.33614 5.92526C8.33614 5.8409 8.30256 5.76011 8.24302 5.70041C8.18349 5.64071 8.10237 5.60713 8.01801 5.60713H5.6399V4.10715C5.6399 3.38621 5.8117 3.02022 6.75084 3.02022L8.11308 3.01973C8.28861 3.01973 8.43089 2.8773 8.43089 2.70176V0.321214C8.43089 0.145844 8.28877 0.00356904 8.1134 0.00324458Z" fill="currentColor" />
                  </svg>
              </a>
          </li>
          <li className={styles.item}>
              <a
                  href={"mailto:tereschenko23041991@gmail.com?subject=Слобода"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={styles.link}
              >
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.02417 2.9003C9.69996 2.9003 11.2158 3.7602 12.0846 4.94505L14.1437 2.87122C12.9122 1.26983 10.5419 0 8.02417 0C3.61575 0 0 3.56741 0 7.97583C0 12.3843 3.61575 15.9517 8.02417 15.9517C11.6786 15.9517 14.7528 13.5009 15.6954 10.1511C15.8984 9.45487 16 8.7298 16 7.97583V7.25076H8.74924V10.1505H12.5921C11.7946 11.8618 10.0398 13.0514 8.02417 13.0514C5.22545 13.0514 2.9003 10.7745 2.9003 7.97583C2.9003 5.17711 5.22545 2.9003 8.02417 2.9003Z" fill="currentColor" />
                 </svg>
              </a>
          </li>
      </ul>
  )
}

export default Social;
