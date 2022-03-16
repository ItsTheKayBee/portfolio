import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Skills = (): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>Skills</h1>
			<div>
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</div>
	)
}

const Skill = () => {
	const renderStars = (count: number): JSX.Element => {
		if (count % 1 === 0) {
			return (
				<div>
					{Array(count)
						.fill(0)
						.map((_, key) => (
							<FontAwesomeIcon icon={faStar} key={key} />
						))}
				</div>
			)
		}
		return (
			<div>
				{Array(Math.floor(count))
					.fill(0)
					.map(_ => (
						<FontAwesomeIcon icon={faStar} />
					))}
				<FontAwesomeIcon icon={faStarHalf} />
			</div>
		)
	}

	return (
		<div>
			<Image src='https://via.placeholder.com/50' height={50} width={50} />
			{renderStars(2.5)}
		</div>
	)
}

export default Skills
