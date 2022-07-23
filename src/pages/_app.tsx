import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { portfolioDataObject } from 'data'
import Header from 'components/header'
import About from '../components/about'
import { useEffect, useState } from 'react'
import { classHelper, getRandom } from 'helpers/utils'
import Web from 'components/web'
import { Web as WebType } from 'data/interface'

const Achievements = dynamic(() => import('../components/achievements'))
const Contact = dynamic(() => import('../components/contact'))
const Experience = dynamic(() => import('../components/experience'))
const Projects = dynamic(() => import('../components/projects'))
const Publications = dynamic(() => import('../components/publications'))
const Skills = dynamic(() => import('../components/skills'))

const App = () => {
	const [webs, setWebs] = useState<WebType[]>([])
	const [circlePosition, setCirclePosition] = useState({
		x: -300,
		y: -300
	})
	const [circleCursorVisibility, setCircleCursorVisibility] = useState('hide')

	const createWeb = (e: any): WebType => {
		const size = getRandom(50, 200)
		const rot = getRandom(0, 360)

		return {
			size,
			posX: e.pageX - size / 2,
			poxY: e.pageY - size / 2,
			rot
		}
	}

	const handleClick = (e: any) => setWebs(prev => [...prev, createWeb(e)])

	const moveCircle = (e: any) => {
		setCircleCursorVisibility(webs.length > 0 ? 'hide' : '')
		setCirclePosition({ x: e.pageX - 65, y: e.pageY - 65 })
	}

	return (
		<main className='main' onClick={handleClick} onMouseMove={moveCircle}>
			{webs.map((data, key) => (
				<Web web={data} key={key} />
			))}
			<img
				src='/images/cursor-circle.svg'
				className={classHelper('cursorCircle', circleCursorVisibility)}
				style={{ left: circlePosition.x, top: circlePosition.y }}
			/>
			<Header headerData={portfolioDataObject.header} />
			<About {...portfolioDataObject.about} />
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
