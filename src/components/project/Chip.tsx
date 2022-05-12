import styles from './index.module.scss'

export default ({ title }: { title: string }): JSX.Element => (
	<div className={`button ${styles.chip}`}>{title}</div>
)
