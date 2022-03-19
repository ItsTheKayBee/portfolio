import Arrow from 'components/icon/Arrow'
import { DataWithButton, PublicationsType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Publications = ({ title, data }: PublicationsType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			{data.map((pub, key) => (
				<Publication key={key} {...pub} id={key} />
			))}
		</div>
	)
}

const Publication = ({
	title,
	subTitle,
	description,
	button,
	image,
	id = 0
}: DataWithButton): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${styles.publication} ${
				id !== 0 ? sectionStyles.reverse : ''
			}`}
		>
			<div className='col'>
				<Image src={image.url} alt={image.alt} height={200} width={200} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.description}>{description}</h4>
				{button && (
					<a className={`button ${styles.button} ${sectionStyles.link}`} href={button.link}>
						<h3 className={sectionStyles.linkText}>{button.text}</h3>
						<Arrow />
					</a>
				)}
			</div>
		</div>
	)
}

export default Publications
