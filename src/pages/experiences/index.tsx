import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import { portfolioDataObject } from 'data'
import { DataWithDates, ExperiencesType } from 'data/interface'
import { DATE_FORMAT_OPTIONS } from 'helpers/constants'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const ExperienceSection = (): JSX.Element => {
	const { title, data }: ExperiencesType = portfolioDataObject.experiences

	const [current, setCurrent] = useState(0)

	const switchCurrent = (sign = 1) => {
		setCurrent(curr => Math.max(0, Math.min(data.length - 1, curr + sign)))
	}

	return (
		<div className={`${sectionStyles.section} ${styles.experiences}`}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<ArrowLeftCircle
				className={`${sectionStyles.back} ${
					current === 0 ? sectionStyles.disabled : ''
				}`}
				onClick={() => switchCurrent(-1)}
			/>
			{data &&
				data.map((exp, key) => (
					<Experience key={key} {...exp} id={key} current={current} />
				))}
			<ArrowRightCircle
				className={`${sectionStyles.next} ${
					current === data.length - 1 ? sectionStyles.disabled : ''
				}`}
				onClick={() => switchCurrent(1)}
			/>
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
	current = 0
}: DataWithDates): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			} ${id === current ? sectionStyles.active : ''}`}
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
