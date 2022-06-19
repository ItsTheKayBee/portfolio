import { SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'

const Skills = ({ title, data }: SkillsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.skills}>
				{data.map(({ image }, key) => {
					return (
						<img
							src={image.url}
							alt={image.alt}
							className={styles.skill}
							key={key}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
