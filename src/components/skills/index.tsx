import { SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { classHelper } from 'helpers/utils'

const Skills = ({ title, data }: SkillsType): JSX.Element => {
	return (
		<div
			className={classHelper(sectionStyles.section, sectionStyles.dark)}
			id='skills'
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.skills}>
				{data.map(({ image }, key) => {
					return (
						<div key={key} className={styles.skill}>
							<img src={image.url} alt={image.alt} className={styles.image} />
							<h3 className={styles.title}>{image.alt}</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
