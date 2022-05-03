import Image from 'next/image'
import Stats from 'components/stats'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { AboutType, Button, IconButton, StatsType } from 'data/interface'
import Download from 'components/icon/Download'

const About = ({
	position,
	description,
	resume,
	image,
	social,
	stats,
	subTitle
}: AboutType & StatsType): JSX.Element => {
	return (
		<div className={`${styles.about} ${sectionStyles.section}`}>
			<div className={`${styles.mainContent} dWeb`}>
				<div className={styles.content}>
					<p className={styles.subTitle}>{subTitle}</p>
					<h1 className={styles.name}>
						KUNAL
						<br />
						BOHRA
					</h1>
					<h2 className={styles.position}>{position}</h2>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.images}>
					<Image src={image.url} alt={image.alt} height={300} width={200} />
					<SocialMediaStrip resume={resume} social={social} />
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
				<SocialMediaStrip resume={resume} social={social} />
				{/* </div> */}
			</div>
			<Stats stats={stats} />
		</div>
	)
}

const SocialMediaStrip = ({
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
}

export default About
