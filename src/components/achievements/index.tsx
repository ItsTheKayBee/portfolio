import { AchievementsType, DataWithButton } from 'data/interface'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Achievements = ({ title, data }: AchievementsType): JSX.Element => {
	const [sectionRef, sectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div
			className={classHelper(sectionStyles.section, sectionStyles.dark)}
			id='achievements'
		>
			<div
				className={classHelper(
					sectionStyles.titleSection,
					sectionInView ? sectionStyles.inView : ''
				)}
				ref={sectionRef}
			>
				<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			</div>
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
	const [subsectionRef, subsectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div
			className={classHelper(
				styles.achievement,
				subsectionInView ? sectionStyles.inView : ''
			)}
			ref={subsectionRef}
		>
			<img src={image.url} alt={image.alt} className={styles.image} />
			<h2>{title}</h2>
			<h3>{subTitle}</h3>
			<p>{description}</p>
		</div>
	)
}

export default Achievements
