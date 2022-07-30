import { SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'

const Skills = ({ title, images }: SkillsType): JSX.Element => {
	const [sectionRef, sectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div
			className={classHelper(
				sectionStyles.section,
				sectionStyles.dark,
				styles.skillsWrapper
			)}
			id='skills'
		>
			<div
				className={classHelper(
					sectionStyles.titleSection,
					sectionInView ? sectionStyles.inView : ''
				)}
				ref={sectionRef}
			>
				<h1 className={classHelper(sectionStyles.sectionTitle)}>{title}</h1>
			</div>
			<div className={styles.skills}>
				{images.map(({ url, alt }, key) => {
					return (
						<div
							key={key}
							className={classHelper(
								styles.skill,
								sectionInView ? styles.inView : ''
							)}
						>
							<img
								src={url}
								alt={alt}
								className={styles.image}
								loading='lazy'
							/>
							<h3 className={styles.title}>{alt}</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
