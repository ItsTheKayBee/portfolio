import { AchievementsType, DataWithButton } from 'data/interface'
import { classHelper } from 'helpers/utils'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Achievements = ({ title, data }: AchievementsType): JSX.Element => {
	return (
		<div className={classHelper(sectionStyles.section, sectionStyles.dark)}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.achievements}>
				{data.map((achievement, key) => {
					return <Achievement key={key} {...achievement} />
				})}
			</div>
		</div>
	)
}

const Achievement = ({
	image,
	title,
	subTitle,
	description
}: DataWithButton): JSX.Element => {
	return (
		<div className={styles.achievement}>
			<img src={image.url} alt={image.alt} className={styles.image} />
			<h2>{title}</h2>
			<h3>{subTitle}</h3>
			<p>{description}</p>
		</div>
	)
}

export default Achievements
