import Image from 'next/image'
import { AchievementsType, DataWithButton } from 'data/interface'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import { portfolioDataObject } from 'data'

const Achievements = (): JSX.Element => {
	const { title, data }: AchievementsType = portfolioDataObject.achievements

	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.achievementsContainer}>
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
			<Image
				src={image.url}
				alt={image.alt}
				height={100}
				width={100}
				className={styles.image}
			/>
			<h2 className={styles.title}>{title}</h2>
			<h3 className={styles.subTitle}>{subTitle}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	)
}

export default Achievements
