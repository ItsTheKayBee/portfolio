import { useState, useEffect } from 'react'
import Image from 'next/image'
import Arrow from 'components/icon/Arrow'
import { ProjectsData } from 'data/interface'
import { getRandomNumber } from 'helpers/utils'
import Chip from 'components/project/Chip'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'

export default ({
	image,
	title,
	subTitle,
	description,
	technologies,
	button,
	id = 0,
	top,
	left
}: ProjectsData): JSX.Element => {
	const [rotation, setRotation] = useState(0)

	useEffect(() => {
		setRotation(getRandomNumber(-10, 10))
	}, [])

	return (
		<div
			className={styles.project}
			style={{
				top: top,
				left: left,
				transform: `rotateZ(${rotation}deg)`
			}}
		>
			<div className={`col a-center ${styles.mainContent}`}>
				<Image
					src={image.url}
					alt={image.alt}
					layout='fill'
					className={styles.heroImage}
				/>
				<h2 className={styles.projectsTitle}>{title}</h2>
			</div>
			<div className={`col ${styles.expandable}`}>
				<div className={styles.hiddenContent}>
					<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
					<p className={sectionStyles.description}>{description}</p>
					<div className={styles.chipContainer}>
						{technologies.map((tech, key) => (
							<Chip key={key} title={tech} />
						))}
					</div>
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
			</div>
		</div>
	)
}
