import { ContactType, IconTextButton } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Contact = ({ title, data, image }: ContactType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={sectionStyles.subSection}>
				<div className='col'>
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
	alt,
	url
}: IconTextButton): JSX.Element => {
	return (
		<a href={link} className='button'>
			<Image src={url} alt={alt} height={50} width={50} />
			<h3>{text}</h3>
		</a>
	)
}

export default Contact
