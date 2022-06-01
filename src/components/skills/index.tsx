import { Image as ImageType, SkillsType } from 'data/interface'
import Image from 'next/image'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'

const Skills = ({ title, data }: SkillsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.skills}>
				{data.map((skill, key) => {
					return <Skill key={key} image={skill.image}/>
				})}
			</div>
		</div>
	)
}

const Skill = ({ image }: { image: ImageType }) => {
	return (
		<div className={styles.skill}>
			<Image src={image.url} alt={image.alt} height={50} width={50} className={styles.image} />
			<h3 className={styles.title}>{image.alt}</h3>
		</div>
	)
}

/* const Stars = ({ count }: { count: number }): JSX.Element => {
	return (
		<div className={styles.starsContainer}>
			{Array(Math.floor(count))
				.fill(0)
				.map((_, key) => (
					<Star key={key} />
				))}
			{count % 1 !== 0 && <HalfStar />}
		</div>
	)
} */

export default Skills
