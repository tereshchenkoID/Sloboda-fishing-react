import styles from './index.module.scss'

const Title = ({title, description}) => {
  return (
      <div className={styles.block}>
          <h4 className={styles.title}>{title}</h4>
          <hr className={styles.hr}/>
          {
              description &&
              <p className={styles.description}>{description}</p>
          }
      </div>
  )
}

export default Title;
