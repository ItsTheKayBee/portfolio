import styles from './index.module.scss'
import { Button, IconButton } from 'data/interface'
import Download from 'components/icon/Download'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'

export default ({
	resume,
	social
}: {
	resume: Button
	social: IconButton[]
}): JSX.Element => {
	const [sectionRef, sectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div
			className={classHelper(
				styles.socialStrip,
				sectionInView ? styles.inView : ''
			)}
			ref={sectionRef}
		>
			<div className={styles.socialButtons}>
				{social.map((option, key) => {
					const { component: Component } = option
					return (
						<a
							href={option.link}
							key={key}
							target='_blank'
							className={classHelper(
								'button',
								styles.socialButton,
								styles.button
							)}
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
