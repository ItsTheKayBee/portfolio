import { KeyValue, StatsType } from 'data/interface'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Stats = ({ stats }: StatsType): JSX.Element => {
	return (
		<div className={styles.strip}>
			{stats.map((stat, key) => {
				return <Stat key={key} {...stat} />
			})}
		</div>
	)
}

const Stat = ({ value, title }: KeyValue) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(c => {
				if (c < value) return c + 1
				else {
					clearInterval(interval)
					return c
				}
			})
		}, 200)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.stat}>
			<h4 className={styles.value}>{count}</h4>
			<h5 className={styles.title}>{title}</h5>
		</div>
	)
}

export default Stats
