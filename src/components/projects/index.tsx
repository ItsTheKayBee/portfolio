import Arrow from 'components/icon/Arrow'
import { ProjectsData, ProjectsType } from 'data/interface'
import { useRef } from 'react'
import sectionStyles from 'styles/section.module.scss'

const Projects = ({ title, data }: ProjectsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			{data.map((project, key) => {
				return <Project key={key} {...project} id={key} />
			})}
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
	id = 0
}: ProjectsData): JSX.Element => {
	const videoRef = useRef<HTMLVideoElement>(null)

	const handlePlay = () => {
		videoRef.current?.play()
	}

	return (
		<div
			className={`${sectionStyles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			}`}
			onMouseEnter={handlePlay}
		>
			<div className='col a-center'>
				<video height={250} width={250} ref={videoRef}>
					<source src={image.url} type='video/mp4' />
				</video>

				{button && (
					<a className={`button ${sectionStyles.link}`} href={button.link}>
						<h3 className={sectionStyles.linkText}>{button.text}</h3>
						<Arrow />
					</a>
				)}
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<p className={sectionStyles.description}>{description}</p>
				<div>
					{technologies.map((tech, key) => (
						<Chip key={key} title={tech} />
					))}
				</div>
			</div>
		</div>
	)
}

const Chip = ({ title }: { title: string }): JSX.Element => {
	return <div>{title}</div>
}

export default Projects
