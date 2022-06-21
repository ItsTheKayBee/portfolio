import Stats from 'components/stats'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { AboutType, StatsType } from 'data/interface'

const About = ({ stats }: AboutType & StatsType): JSX.Element => {
	return (
		<div
			className={`${styles.about} ${sectionStyles.section} ${sectionStyles.dark}`}
		>
			<div className={styles.mainContent}>
				<div className={styles.content}>
					<h1 className={styles.name}>KUNAL BOHRA</h1>
				</div>
				<div className={styles.model}></div>
			</div>
			<Stats stats={stats} />
		</div>
	)
}

export default About
