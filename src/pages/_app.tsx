import dynamic from 'next/dynamic'
import { portfolioDataObject, statsData } from 'data'
import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import { TOTAL_NUMBER_OF_SECTIONS } from 'helpers/constants'

const About = dynamic(() => import('../components/about'))
const Achievements = dynamic(() => import('../components/achievements'))
const Contact = dynamic(() => import('../components/contact'))
const Experience = dynamic(() => import('../components/experience'))
const Projects = dynamic(() => import('../components/projects'))
const Publications = dynamic(() => import('../components/publications'))
const Skills = dynamic(() => import('../components/skills'))

const App = (): JSX.Element => {
	const [currentSection, setCurrentSection] = useState(0)
	let isScrolling = true

	useEffect(() => {
		window.addEventListener('wheel', scroller, { passive: true })
		return () => window.removeEventListener('wheel', scroller)
	}, [])

	const scroller = (e: WheelEvent) => {
		if (isScrolling) {
			isScrolling = false
			setCurrentSection(s => {
				if (e.deltaY > 0 && s < TOTAL_NUMBER_OF_SECTIONS - 1) return s + 1
				else if (e.deltaY < 0 && s > 0) return s - 1
				else return s
			})
			setTimeout(() => {
				isScrolling = true
			}, 2000)
		}
	}

	return (
		<main className='main'>
			<div className='bg'>
				{Array(4)
					.fill(0)
					.map((_, key) => (
						<div
							className={'aurora aurora-' + (currentSection + 1)}
							key={key}
						/>
					))}
			</div>
			<div>
				<About
					{...portfolioDataObject.about}
					stats={statsData.stats}
					isActive={currentSection === 0}
				/>
				<Experience
					{...portfolioDataObject.experiences}
					isActive={currentSection === 1}
				/>
				<Skills
					{...portfolioDataObject.skills}
					isActive={currentSection === 2}
				/>
				<Projects
					{...portfolioDataObject.projects}
					isActive={currentSection === 3}
				/>
				<Achievements
					{...portfolioDataObject.achievements}
					isActive={currentSection === 4}
				/>
				<Publications
					{...portfolioDataObject.publications}
					isActive={currentSection === 5}
				/>
				<Contact
					{...portfolioDataObject.contact}
					isActive={currentSection === 6}
				/>
			</div>
		</main>
	)
}

export default App
