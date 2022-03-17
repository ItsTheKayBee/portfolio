import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataWithButton, PublicationsType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Publications = ({ title, data }: PublicationsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			{data.map((pub, key) => (
				<Publication key={key} {...pub} />
			))}
		</div>
	)
}

const Publication = ({
	title,
	subTitle,
	description,
	button,
	image
}: DataWithButton): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col'>
				<Image src={image.url} alt={image.alt} height={200} width={200} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.description}>{description}</h4>
				{button && (
					<a className='button' href={button.link}>
						<h3>{button.text}</h3>
						<FontAwesomeIcon icon={faArrowRightLong} />
					</a>
				)}
			</div>
		</div>
	)
}

export default Publications
