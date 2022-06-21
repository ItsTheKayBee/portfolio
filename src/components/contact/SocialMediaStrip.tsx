import styles from './index.module.scss'
import { Button, IconButton } from 'data/interface'
import Download from 'components/icon/Download'
import { classHelper } from 'helpers/utils'

export default ({
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
							className={classHelper('button', styles.socialButton)}
						>
							<Component />
						</a>
					)
				})}
			</div>
			<div className={styles.downloadResume}>
				<a
					className={classHelper('button', styles.downloadButton)}
					href={resume.link}
					target='_blank'
				>
					<h3 className={styles.buttonText}>Resume</h3>
					<Download />
				</a>
			</div>
		</div>
	)
}
