import { useEffect, useRef, useState } from 'react'
import { XCircle } from 'react-feather'
import { portfolioDataObject } from 'data'
import { ProjectsType } from 'data/interface'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import Project from 'components/project'
import useBack from 'helpers/hooks/useBack'

const Projects = (): JSX.Element => {
	const { title, data }: ProjectsType = portfolioDataObject.projects

	const containerRef = useRef<HTMLDivElement>(null)
	const projectsRef = useRef<HTMLDivElement>(null)
	const [pos, setPos] = useState({
		top: 0,
		left: 0,
		x: 0,
		y: 0
	})
	const [grab, setGrab] = useState(false)

	const routeBack = useBack()

	useEffect(() => {
		const { width, height } = projectsRef.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0
		}
		const midPos = {
			top: (height - window.innerHeight) / 2,
			left: (width - window.innerWidth) / 2,
			x: 0,
			y: 0
		}

		setPos(midPos)

		containerRef.current!.scrollTop = midPos.top
		containerRef.current!.scrollLeft = midPos.left
	}, [])

	const mouseDownHandler = (e: any) => {
		setPos({
			// The current scroll
			left: containerRef.current?.scrollLeft ?? 0,
			top: containerRef.current?.scrollTop ?? 0,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY
		})
		setGrab(true)
	}

	const mouseMoveHandler = (e: any) => {
		if (grab) {
			const dx = e.clientX - pos.x
			const dy = e.clientY - pos.y

			// Scroll the element
			containerRef.current!.scrollTop = pos.top - dy
			containerRef.current!.scrollLeft = pos.left - dx
		}
	}

	const mouseUpHandler = () => {
		setGrab(false)
	}

	return (
		<div
			className={`${sectionStyles.section} ${styles.projects}`}
			onMouseDown={mouseDownHandler}
			onMouseMove={mouseMoveHandler}
			onMouseLeave={mouseUpHandler}
			onMouseUp={mouseUpHandler}
			style={{ cursor: grab ? 'grabbing' : 'grab' }}
			ref={containerRef}
		>
			<div className={styles.projectContainer} ref={projectsRef}>
				<img src='/images/projects.svg' className={styles.bg} />
				<XCircle
					className={sectionStyles.close}
					size={32}
					onClick={routeBack}
				/>
				<h1 className={`${sectionStyles.sectionTitle} ${styles.title}`}>
					{title}
				</h1>
				{data.map((project, key) => {
					return <Project key={key} {...project} id={key} />
				})}
			</div>
		</div>
	)
}

export default Projects
