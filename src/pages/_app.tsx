import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { portfolioDataObject } from 'data'
import { getDateDifference } from 'helpers/utils'
import { EXPERIENCE_START_DATE } from 'helpers/constants'

const About = dynamic(() => import('../components/about'))
const Achievements = dynamic(() => import('../components/achievements'))
const Contact = dynamic(() => import('../components/contact'))
const Experience = dynamic(() => import('../components/experience'))
const Projects = dynamic(() => import('../components/projects'))
const Publications = dynamic(() => import('../components/publications'))
const Skills = dynamic(() => import('../components/skills'))
const Footer = dynamic(() => import('../components/footer'))

const totalExp = getDateDifference(new Date(), EXPERIENCE_START_DATE)

const stats = [
	{
		title: 'Projects',
		value: portfolioDataObject.projects.data.length
	},
	{
		title: `${totalExp.title} of Experience`,
		value: totalExp.value
	},
	{
		title: 'Awards',
		value: portfolioDataObject.achievements.data.length
	},
	{
		title: 'Publications',
		value: portfolioDataObject.publications.data.length
	}
]

const App = (): JSX.Element => {
	return (
		<main className='main'>
			<About {...portfolioDataObject.about} stats={stats} />
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
