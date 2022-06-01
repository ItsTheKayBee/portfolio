import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { Button, IconButton } from 'data/interface'
import Download from 'components/icon/Download'

export const SocialMediaStrip = ({
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
