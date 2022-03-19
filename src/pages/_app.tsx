import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { portfolioDataObject, statsData } from 'data'

const About = dynamic(() => import('../components/about'))
const Achievements = dynamic(() => import('../components/achievements'))
const Contact = dynamic(() => import('../components/contact'))
const Experience = dynamic(() => import('../components/experience'))
const Projects = dynamic(() => import('../components/projects'))
const Publications = dynamic(() => import('../components/publications'))
const Skills = dynamic(() => import('../components/skills'))
const Footer = dynamic(() => import('../components/footer'))

const App = (): JSX.Element => {
	return (
		<main className='main'>
			<About {...portfolioDataObject.about} stats={statsData.stats} />
			<Experience {...portfolioDataObject.experiences} />
			<Skills {...portfolioDataObject.skills} />
			<Projects {...portfolioDataObject.projects} />
			<Achievements {...portfolioDataObject.achievements} />
			<Publications {...portfolioDataObject.publications} />
			<Contact {...portfolioDataObject.contact} />
			<Footer {...portfolioDataObject.footer} />
		</main>
	)
}

export default App
