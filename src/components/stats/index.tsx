import { StatsType } from 'data/interface'
import styles from './index.module.scss'

const Stats = ({ stats }: StatsType): JSX.Element => {
	return (
		<div className={styles.strip}>
			{stats.map((stat, key) => {
				return (
					<div key={key} className={styles.stat}>
						<h4 className={styles.value}>{stat.value}</h4>
						<h5 className={styles.title}>{stat.title}</h5>
					</div>
				)
			})}
		</div>
	)
}

export default Stats
