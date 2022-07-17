import { ContactType } from 'data/interface'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import SocialMediaStrip from './SocialMediaStrip'

const Contact = ({
	title,
	data,
	image,
	selfImage,
	resume,
	description
}: ContactType): JSX.Element => {
	const [sectionRef, sectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div
			className={classHelper(
				sectionStyles.section,
				sectionStyles.dark,
				styles.contactSection
			)}
			id='contact'
		>
			<div className={classHelper(sectionStyles.subSection, styles.contact)}>
				<div className={classHelper('col', 'a-center', styles.portraitSection)}>
					<img
						src={selfImage.url}
						alt={selfImage.alt}
						className={styles.portrait}
					/>
				</div>
				<div className={classHelper('col', styles.detailSection)}>
					<div
						className={classHelper(
							sectionStyles.titleSection,
							sectionInView ? sectionStyles.inView : ''
						)}
						ref={sectionRef}
					>
						<h1 className={sectionStyles.sectionTitle}>{title}</h1>
					</div>
					<p>{description}</p>
					<SocialMediaStrip social={data} resume={resume} />
				</div>
			</div>
			<img src={image.url} alt={image.alt} className={styles.bgImage} />
		</div>
	)
}

export default Contact
