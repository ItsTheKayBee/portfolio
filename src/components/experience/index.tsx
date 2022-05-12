import Image from 'next/image'
import { DataWithDates } from 'data/interface'
import { DATE_FORMAT_OPTIONS } from 'helpers/constants'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import Tilt from 'react-parallax-tilt'

export default ({
	title,
	subTitle,
	description,
	dates,
	image,
	id = 0,
	current = 0
}: DataWithDates): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${styles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			} ${id === current ? sectionStyles.active : ''}`}
		>
			<div className='col a-center'>
				<Tilt>
					<Image
						src={image.url}
						alt={image.alt}
						height={400}
						width={400}
						className={styles.experience3d}
					/>
				</Tilt>
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.subSubTitle}>
					{dates.startDate.toLocaleString('en-IN', DATE_FORMAT_OPTIONS)} -{' '}
					{dates.endDate?.toLocaleString('en-IN', DATE_FORMAT_OPTIONS) ??
						'Present'}
				</h4>
				<p className={sectionStyles.description}>{description}</p>
			</div>
		</div>
	)
}
