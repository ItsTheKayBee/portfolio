import styles from './index.module.scss'

const data = {
	statistics: [
		{
			title: 'Projects',
			value: 12
		},
		{
			title: 'Experience',
			value: 7
		},
		{
			title: 'Awards',
			value: 5
		},
		{
			title: 'Publications',
			value: 1
		}
	]
}

const Stats = (): JSX.Element => {
	return (
		<div className={styles.strip}>
			{data.statistics.map((stat, key) => {
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
