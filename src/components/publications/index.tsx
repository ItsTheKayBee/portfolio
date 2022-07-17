import Arrow from 'components/icon/Arrow'
import { DataWithButton, PublicationsType } from 'data/interface'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const Publications = ({ title, data }: PublicationsType): JSX.Element => {
	const [sectionRef, sectionInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div className={sectionStyles.section} id='publications'>
			<div
				className={classHelper(
					sectionStyles.titleSection,
					sectionInView ? sectionStyles.inView : ''
				)}
				ref={sectionRef}
			>
				<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			</div>
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
			className={`${sectionStyles.subSection} ${
				id !== 0 ? sectionStyles.reverse : ''
			}`}
		>
			<div className='col a-center'>
				<img src={image.url} alt={image.alt} className={styles.image} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.description}>{description}</h4>
				{button && (
					<a className={`button ${sectionStyles.link}`} href={button.link}>
						<h3 className={sectionStyles.linkText}>{button.text}</h3>
						<Arrow />
					</a>
				)}
			</div>
		</div>
	)
}

export default Publications
