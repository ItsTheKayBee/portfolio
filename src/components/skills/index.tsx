import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image as ImageType, SkillsType } from 'data/interface'
import Image from 'next/image'
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
		<div>
			<Image src={image.url} alt={image.alt} height={50} width={50} />
			<Stars count={ratings} />
		</div>
	)
}

const Stars = ({ count }: { count: number }): JSX.Element => {
	return (
		<div>
			{Array(Math.floor(count))
				.fill(0)
				.map((_, key) => (
					<FontAwesomeIcon icon={faStar} key={key} />
				))}
			{count % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} />}
		</div>
	)
}

export default Skills
