import Image from 'next/image'
import Stats from 'components/stats'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { AboutType, StatsType } from 'data/interface'

const About = ({ image, stats }: AboutType & StatsType): JSX.Element => {
	return (
		<div className={`${styles.about} ${sectionStyles.section}`}>
			<div className={styles.mainContent}>
				<div className={styles.content}>
					<h1 className={styles.name}>KUNAL BOHRA</h1>
				</div>
				<div className={styles.images}>
					<Image src={image.url} alt={image.alt} height={300} width={200} />
				</div>
			</div>
			<Stats stats={stats} />
		</div>
	)
}

export default About
