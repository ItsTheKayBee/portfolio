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
	return (
		<div>
			<Image src='https://via.placeholder.com/50' height={50} width={50} />
			<div>
				<Star />
				<Star />
				<Star />
			</div>
		</div>
	)
}

const Star = (): JSX.Element => {
	return <div>Star</div>
}

export default Skills
