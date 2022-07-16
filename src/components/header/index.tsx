import { HeaderType } from 'data/interface'
import styles from './index.module.scss'

const Header = ({ headerData }: { headerData: HeaderType[] }) => {
	return (
		<nav className={styles.header}>
			<ul className={styles.links}>
				{headerData.map(({ title, link }) => {
					return (
						<li key={title} className={styles.navItem}>
							<a href={link} className={styles.link}>
								{title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Header