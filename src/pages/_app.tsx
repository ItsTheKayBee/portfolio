import dynamic from 'next/dynamic'
import { portfolioDataObject, statsData } from 'data'
import '../styles/globals.scss'
import Background from 'components/background'

const About = dynamic(() => import('./about'))
const Achievements = dynamic(() => import('./achievements'))
const Contact = dynamic(() => import('./contact'))
const Experience = dynamic(() => import('./experience'))
const Projects = dynamic(() => import('./projects'))
const Publications = dynamic(() => import('./publications'))
const Skills = dynamic(() => import('./skills'))

const App = (): JSX.Element => {
	return (
		<main className='main'>
			<Background />
			{/* <div className='bg'>
				{Array(4)
					.fill(0)
					.map((_, key) => (
						<div className='aurora aurora-1' key={key} />
						))}
					</div> */}
			{/* <div>
				<About {...portfolioDataObject.about} stats={statsData.stats} />
				<Experience {...portfolioDataObject.experiences} />
				<Skills {...portfolioDataObject.skills} />
				<Projects {...portfolioDataObject.projects} />
				<Achievements {...portfolioDataObject.achievements} />
				<Publications {...portfolioDataObject.publications} />
				<Contact {...portfolioDataObject.contact} />
			</div> */}
		</main>
	)
}

export default App
