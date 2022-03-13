import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Projects = (): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>Projects</h1>
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
		</div>
	)
}

const Project = (): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col a-center'>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
				<button>View project</button>
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>Assess</h2>
				<h3 className={sectionStyles.subTitle}>April 2021</h3>
				<p className={sectionStyles.description}>description</p>
				<div>
					<Chip />
					<Chip />
					<Chip />
					<Chip />
				</div>
			</div>
		</div>
	)
}

const Chip = (): JSX.Element => {
	return <div>React.js</div>
}

export default Projects
