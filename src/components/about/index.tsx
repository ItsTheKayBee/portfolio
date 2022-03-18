import Image from 'next/image'
import Stats from 'components/stats'
import styles from './index.module.scss'
import { AboutType, Button, IconButton, StatsType } from 'data/interface'
import Download from 'components/icon/download'

const About = ({
	position,
	description,
	resume,
	image,
	social,
	stats
}: AboutType & StatsType): JSX.Element => {
	return (
		<div className={styles.about}>
			<div className={styles.mainContent}>
				<div className={styles.content}>
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
					return (
						<a
							href={option.link}
							key={key}
							className={`button ${styles.socialButton}`}
						>
							<Image src={option.url} alt={option.alt} height={50} width={50} />
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
