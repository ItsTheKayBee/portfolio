import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataWithDates, ExperiencesType } from 'data/interface'
import { DATE_FORMAT_OPTIONS } from 'helpers/constants'
import Image from 'next/image'
import { useState } from 'react'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const ExperienceSection = ({
	title,
	data,
	isActive
}: ExperiencesType): JSX.Element => {
	const [currentSection, setCurrentSection] = useState(0)

	const updateSection = (sign: number) => {
		setCurrentSection(s => (s + sign) % data.length)
	}

	return (
		<div
			className={`${sectionStyles.section} ${
				isActive ? sectionStyles.active : ''
			}`}
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={sectionStyles.slidesContainer}>
				<button
					onClick={() => updateSection(-1)}
					className={`${sectionStyles.arrowButton} ${sectionStyles.left}`}
				>
					<FontAwesomeIcon icon={faCaretLeft} color='white' size='3x' />
				</button>
				<div>
					{data.map((exp, key) => (
						<Experience
							key={key}
							{...exp}
							id={key}
							isActive={key === currentSection}
						/>
					))}
				</div>
				<button
					onClick={() => updateSection(1)}
					className={`${sectionStyles.arrowButton} ${sectionStyles.right}`}
				>
					<FontAwesomeIcon icon={faCaretRight} color='white' size='3x' />
				</button>
			</div>
		</div>
	)
}

const Experience = ({
	title,
	subTitle,
	description,
	dates,
	image,
	id = 0,
	isActive = false
}: DataWithDates): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			} ${isActive ? sectionStyles.active : ''} `}
		>
			<div className='col a-center'>
				<Image src={image.url} alt={image.alt} height={200} width={200} />
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

export default ExperienceSection
