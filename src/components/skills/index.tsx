import HalfStar from 'components/icon/HalfStar'
import Star from 'components/icon/Star'
import { Image as ImageType, SkillsType } from 'data/interface'
import Image from 'next/image'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'

const Skills = ({ title, data }: SkillsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div>
				{data.map((skill, key) => {
					return <Skill key={key} image={skill.image} ratings={skill.ratings} />
				})}
			</div>
		</div>
	)
}

const Skill = ({ image, ratings }: { image: ImageType; ratings: number }) => {
	return (
		<div className={styles.skill}>
			<Image src={image.url} alt={image.alt} height={50} width={50} />
			<Stars count={ratings} />
		</div>
	)
}

const Stars = ({ count }: { count: number }): JSX.Element => {
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
}

export default Skills
