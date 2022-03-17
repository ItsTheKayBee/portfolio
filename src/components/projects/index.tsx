import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProjectsData, ProjectsType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Projects = ({ title, data }: ProjectsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			{data.map((project, key) => {
				return <Project key={key} {...project} />
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
	button
}: ProjectsData): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col a-center'>
				<Image src={image.url} alt={image.alt} height={200} width={200} />
				{button && (
					<a className='button' href={button.link}>
						<h3>{button.text}</h3>
						<FontAwesomeIcon icon={faArrowRightLong} />
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
