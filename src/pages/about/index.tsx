import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSpring, easings, animated } from 'react-spring'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { AboutType } from 'data/interface'
import { portfolioDataObject } from 'data'
import { SVG_CLIP_PATHS } from 'helpers/constants'
import Arrow from 'components/icon/Arrow'
import Download from 'components/icon/Download'

const About = (): JSX.Element => {
	const { position, description, image, subTitle }: AboutType =
		portfolioDataObject.about

	const duration = 2000

	const [pathIndex, setPathIndex] = useState(0)
	const [gradientCoords, setGradientCoords] = useState({
		x: 0,
		y: 0
	})

	const blobAnimProps = useSpring({
		path: SVG_CLIP_PATHS[pathIndex],
		config: {
			duration: duration,
			easing: easings.easeInOutQuad
		}
	})

	useEffect(() => {
		const changePath = setInterval(() => {
			setPathIndex(p => (p + 1) % SVG_CLIP_PATHS.length)
		}, duration)

		return () => clearInterval(changePath)
	}, [])

	const gradRotationProps = useSpring({
		x1: Math.abs(1 - gradientCoords.x),
		y1: Math.abs(1 - gradientCoords.y),
		x2: gradientCoords.y,
		y2: gradientCoords.y,
		config: {
			duration: 1.4 * duration,
			easing: easings.easeInOutSine
		}
	})

	return (
		<div className={`${styles.about} ${sectionStyles.section}`}>
			<div className={`${styles.mainContent} dWeb`}>
				<div className={styles.bg}>
					{Array(4)
						.fill(0)
						.map((_, key) => (
							<div
								className={`${styles.aurora} ${styles[`aurora-${key + 1}`]}`}
								key={key}
							/>
						))}
				</div>
				<div className={styles.content}>
					<h1 className={styles.fname}>KUNAL</h1>
					<h1 className={styles.lname}>BOHRA</h1>
					<h2 className={styles.position}>{position}</h2>
					<h2 className={styles.description}>{description}</h2>
					<button className={`button ${styles.contact}`}>
						<p className={styles.text}>Contact</p>
						<Download />
					</button>
				</div>
				<div className={styles.images}>
					<img
						src={image.url}
						alt={image.alt}
						height={300}
						width={300}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={`${styles.mainContent} mWeb`}>
				<div className={styles.content}>
					<Image
						src={image.url}
						alt={image.alt}
						layout='fill'
						className={styles.mImage}
					/>
					<div className={styles.mContent}>
						<p className={styles.subTitle}>{subTitle}</p>
						<h1 className={styles.name}>
							KUNAL
							<br />
							BOHRA
						</h1>
						<h2 className={styles.position}>{position}</h2>
					</div>
				</div>
				{/* <div className={styles.images}> */}
				<p className={styles.description}>{description}</p>
				{/* </div> */}
			</div>
		</div>
	)
}

/* const SocialMediaStrip = ({
	resume,
	social
}: {
	resume: Button
	social: IconButton[]
}): JSX.Element => {
	return (
		<div className={styles.socialStrip}>
			<div className={styles.socialButtons}>
				{social.map((option, key) => {
					const { component: Component } = option
					return (
						<a
							href={option.link}
							key={key}
							className={`button ${styles.socialButton} ${sectionStyles.link} ${sectionStyles.social}`}
						>
							<Component />
						</a>
					)
				})}
			</div>
			<div className={styles.downloadResume}>
				<a className={`button ${styles.downloadButton}`} href={resume.link}>
					<h3 className={styles.buttonText}>Resume</h3>
					<Download />
				</a>
			</div>
		</div>
	)
} */

export default About
