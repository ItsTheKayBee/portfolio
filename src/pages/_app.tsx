import dynamic from 'next/dynamic'
import '../styles/globals.scss'

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
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Achievements />
			<Publications />
			<Contact />
			<Footer />
		</main>
	)
}

export default App
