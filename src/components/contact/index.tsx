import { ContactType } from 'data/interface'
import { classHelper } from 'helpers/utils'
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
	return (
		<div
			className={classHelper(
				sectionStyles.section,
				sectionStyles.dark,
				styles.contactSection
			)}
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
					<h1 className={sectionStyles.sectionTitle}>{title}</h1>
					<p>{description}</p>
					<SocialMediaStrip social={data} resume={resume} />
				</div>
			</div>
			<img src={image.url} alt={image.alt} className={styles.bgImage} />
		</div>
	)
}

export default Contact
