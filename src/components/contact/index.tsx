import { ContactType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import { SocialMediaStrip } from './SocialMediaStrip'

const Contact = ({
	title,
	data,
	image,
	selfImage,
	resume
}: ContactType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<div className={`${sectionStyles.subSection} ${styles.contact}`}>
				<div className='col'>
					<Image
						src={selfImage.url}
						alt={selfImage.alt}
						height={200}
						width={200}
					/>
				</div>
				<div className='col'>
					<h1 className={sectionStyles.sectionTitle}>{title}</h1>
					<SocialMediaStrip social={data} resume={resume} />
				</div>
				<img
					src={image.url}
					alt={image.alt}
					height={200}
					width={200}
					className={styles.bgImage}
				/>
			</div>
		</div>
	)
}

export default Contact
