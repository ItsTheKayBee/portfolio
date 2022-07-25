import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { portfolioDataObject } from 'data'
import Header from 'components/header'
import About from '../components/about'
import { useEffect, useState } from 'react'
import { classHelper, getRandom } from 'helpers/utils'
import Web from 'components/web'
import { Web as WebType } from 'data/interface'
import Loader from 'components/loader'

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
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	}, [])

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

	const moveCircle = (e: any) =>
		setCirclePosition({ x: e.pageX - 65, y: e.pageY - 65 })

	return (
		<main
			className={classHelper('main', !isLoading ? 'cursor' : '')}
			onClick={handleClick}
			onMouseMove={moveCircle}
		>
			{isLoading && <Loader />}
			{webs.map((data, key) => (
				<Web web={data} key={key} />
			))}
			<img
				src='/images/cursor-circle.svg'
				className={classHelper('cursorCircle', webs.length > 0 ? 'hide' : '')}
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
