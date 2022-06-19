import { AchievementsType, DataWithButton } from 'data/interface'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Achievements = ({ title, data }: AchievementsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
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
			<img src={image.url} alt={image.alt} height={100} width={100} />
			<h2>{title}</h2>
			<h3>{subTitle}</h3>
			<p>{description}</p>
		</div>
	)
}

export default Achievements
