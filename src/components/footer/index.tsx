import styles from './index.module.scss'

const Footer = ({ title }: { title: String }): JSX.Element => {
	return (
		<div className={styles.footer}>
			<p className={styles.footerText}>{title}</p>
		</div>
	)
}

export default Footer
