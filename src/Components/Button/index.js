import styles from './index.module.scss'

const Button = ({text}) => {
  return (
    <button
        type={'button'}
        className={styles.block}
    >
        <span className={styles.text}>{text}</span>
    </button>
  )
}

export default Button;
