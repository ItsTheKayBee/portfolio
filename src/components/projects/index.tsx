import Image from 'next/image'

const Projects = (): JSX.Element => {
	return (
		<div>
			<h1>Projects</h1>
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
		<div>
			<div>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
				<button>View project</button>
			</div>
			<div>
				<h2>Assess</h2>
				<h3>April 2021</h3>
				<p>description</p>
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
