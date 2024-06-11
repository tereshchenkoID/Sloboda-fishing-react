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
          aria-label={"Facebook"}
        >
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href={"https://www.instagram.com/sloboda_fishing/"}
          target={"_blank"}
          rel={"noreferrer"}
          className={styles.link}
          aria-label={"Instagram"}
        >
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
            <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
            <path  d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href={"mailto:tereschenko23041991@gmail.com?subject=Слобода"}
          target={"_blank"}
          rel={"noreferrer"}
          className={styles.link}
          aria-label={"Mail"}
        >
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
            <path d="M25.1 14.522v-2.883h-2.297v2.883h-2.901v2.298h2.901v2.884H25.1V16.82H28v-2.298zM18.389 15.057H11.34v2.558h4.667c-.375 2.466-2.563 3.346-4.365 3.346-2.746 0-4.896-2.171-4.896-4.942 0-2.792 2.153-4.978 4.903-4.978 2.054 0 3.318 1.313 3.33 1.328l.212.226 1.786-1.847-.185-.205c-.077-.084-1.916-2.065-5.213-2.065C7.471 8.477 4 11.913 4 15.981c0 3.627 2.937 7.542 7.684 7.542 4.121 0 6.999-2.824 6.999-6.867 0-.409-.052-1.357-.206-1.514l-.088-.085z"/>
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default Social;
