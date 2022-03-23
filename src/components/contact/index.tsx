import { ContactType, IconTextButton } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Contact = ({
	title,
	data,
	image,
	isActive
}: ContactType): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.section} ${
				isActive ? sectionStyles.active : ''
			}`}
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={`${sectionStyles.subSection} ${styles.contact}`}>
				<div className='col a-center'>
					<Image src={image.url} alt={image.alt} height={200} width={200} />
				</div>
				<div className='col'>
					{data.map((contact, key) => (
						<ContactButton key={key} {...contact} />
					))}
				</div>
			</div>
		</div>
	)
}

const ContactButton = ({
	text,
	link,
	component: Component
}: IconTextButton): JSX.Element => {
	return (
		<a href={link} className={`button ${styles.button} ${sectionStyles.link}`}>
			<Component />
			<h3 className={styles.title}>{text}</h3>
		</a>
	)
}

export default Contact
