import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { portfolioDataObject, statsData } from 'data'
import Header from 'components/header'
import About from '../components/about'
import { MouseEventHandler, useEffect, useMemo, useState } from 'react'
import { classHelper } from 'helpers/utils'

const Achievements = dynamic(() => import('../components/achievements'))
const Contact = dynamic(() => import('../components/contact'))
const Experience = dynamic(() => import('../components/experience'))
const Projects = dynamic(() => import('../components/projects'))
const Publications = dynamic(() => import('../components/publications'))
const Skills = dynamic(() => import('../components/skills'))

const App = () => {
	const [webPosition, setWebPosition] = useState([0, 0])
	const [isWebVisible, setWebVisible] = useState(false)
	const [timer, setTimer] = useState<NodeJS.Timeout>()

	const handleClick = (e: any) => {
		if (timer) clearTimeout(timer)

		setWebPosition([e.pageX, e.pageY])
		setWebVisible(true)
		const timeout = setTimeout(() => {
			setWebVisible(false)
		}, 3000)
		setTimer(timeout)
	}

	return (
		<main className='main' onClick={handleClick}>
			<div
				className={classHelper('web', isWebVisible ? 'active' : '')}
				style={{ top: `${webPosition[1]}px`, left: `${webPosition[0]}px` }}
			/>
			<Header headerData={portfolioDataObject.header} />
			<About {...portfolioDataObject.about} stats={statsData.stats} />
			<Experience {...portfolioDataObject.experiences} />
			<Skills {...portfolioDataObject.skills} />
			<Projects {...portfolioDataObject.projects} />
			<Achievements {...portfolioDataObject.achievements} />
			<Publications {...portfolioDataObject.publications} />
			<Contact {...portfolioDataObject.contact} />
		</main>
	)
}

export default App
