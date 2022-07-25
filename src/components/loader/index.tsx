import { classHelper } from 'helpers/utils'
import styles from './index.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<ul className={styles.container}>
				<li className={styles.center} />
				{Array(8)
					.fill(0)
					.map((_, index) => (
						<li
							className={classHelper(styles.item, styles[`item-${index}`])}
							key={index}
						/>
					))}
			</ul>
		</div>
	)
}

export default Loader
