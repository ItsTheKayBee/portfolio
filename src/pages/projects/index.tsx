import { useRef, useState } from 'react'
import Image from 'next/image'
import Arrow from 'components/icon/Arrow'
import { portfolioDataObject } from 'data'
import { ProjectsData, ProjectsType } from 'data/interface'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Projects = (): JSX.Element => {
	const { title, data }: ProjectsType = portfolioDataObject.projects

	const containerRef = useRef<HTMLDivElement>(null)
	const [pos, setPos] = useState({
		top: 0,
		left: 0,
		x: 0,
		y: 0
	})
	const [grab, setGrab] = useState(false)

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
			onMouseUp={mouseUpHandler}
			style={{ cursor: grab ? 'grabbing' : 'grab' }}
			ref={containerRef}
		>
			<div className={styles.projectContainer}>
				<img src='/images/projects.svg' className={styles.bg} />
				<h1 className={sectionStyles.sectionTitle}>{title}</h1>
				{data.map((project, key) => {
					return <Project key={key} {...project} id={key} top={730} left={0} />
				})}
			</div>
		</div>
	)
}

const Project = ({
	image,
	title,
	subTitle,
	description,
	technologies,
	button,
	id = 0,
	top,
	left
}: ProjectsData & { top: number; left: number }): JSX.Element => {
	return (
		<div
			className={`${styles.project} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			}`}
			style={{ top: top, left: left }}
		>
			<div className='col a-center'>
				<Image
					src={image.url}
					alt={image.alt}
					height={200}
					width={200}
					className={styles.heroImage}
				/>
				{button && (
					<a
						className={`button ${styles.button} ${sectionStyles.link}`}
						href={button.link}
					>
						<h3 className={sectionStyles.linkText}>{button.text}</h3>
						<Arrow />
					</a>
				)}
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<p className={sectionStyles.description}>{description}</p>
				<div className={styles.chipContainer}>
					{technologies.map((tech, key) => (
						<Chip key={key} title={tech} />
					))}
				</div>
			</div>
		</div>
	)
}

const Chip = ({ title }: { title: string }): JSX.Element => {
	return <div className={`button ${styles.chip}`}>{title}</div>
}

export default Projects
