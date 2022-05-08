import Arrow from 'components/icon/Arrow'
import { portfolioDataObject } from 'data'
import { ProjectsData, ProjectsType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Projects = (): JSX.Element => {
	const { title, data }: ProjectsType = portfolioDataObject.projects

	return (
		<div className={`${sectionStyles.section} ${styles.projects}`}>
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
	return (
		<div
			className={`${sectionStyles.subSection} ${styles.project} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			}`}
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
