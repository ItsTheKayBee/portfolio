import Image from 'next/image'
import Stats from 'components/stats'
import styles from './index.module.scss'
import { ArrowDownCircle, GitHub } from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = (): JSX.Element => {
	return (
		<div className={styles.about}>
			<div className={styles.mainContent}>
				<div className={styles.content}>
					<h1 className={styles.name}>
						KUNAL
						<br />
						BOHRA
					</h1>
					<h2 className={styles.position}>Software Development Engineer</h2>
					<p className={styles.description}>
						Duis aliquip enim Lorem cillum. Laborum voluptate aliqua eiusmod
						enim mollit proident magna dolor anim laboris commodo do do. Magna
						consequat ut eiusmod incididunt nulla eiusmod eu nulla deserunt.
						Sint quis eiusmod laboris irure nulla occaecat magna laboris. Enim
						ad ipsum occaecat voluptate aliquip. Cillum adipisicing aliqua
						dolore cupidatat. Non do qui exercitation do incididunt. Occaecat
						esse sint tempor tempor. Sint est in irure deserunt sunt
						reprehenderit esse mollit mollit velit.
					</p>
				</div>
				<div className={styles.images}>
					<Image
						src='https://via.placeholder.com/200'
						height={300}
						width={200}
					/>
					<SocialMediaStrip />
				</div>
			</div>
			<Stats />
		</div>
	)
}

export default About

const SocialMediaStrip = (): JSX.Element => {
	return (
		<div className={styles.socialStrip}>
			<div className={styles.socialButtons}>
				<div className={`button ${styles.socialButton}`}>
					<GitHub color='white' />
				</div>
				<div className={`button ${styles.socialButton}`}>
					{/* @ts-ignore*/}
					<FontAwesomeIcon icon={faLinkedinIn} color='white' size='xl' />
				</div>
				<div className={`button ${styles.socialButton}`}>
					{/* @ts-ignore*/}
					<FontAwesomeIcon color='white' icon={faEnvelope} size='xl' />
				</div>
			</div>
			<div className={styles.downloadResume}>
				<button className={`button ${styles.downloadButton}`}>
					<h3 className={styles.buttonText}>Resume</h3>
					<ArrowDownCircle />
				</button>
			</div>
		</div>
	)
}
