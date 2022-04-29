import { DataWithDates, ExperiencesType } from 'data/interface'
import { DATE_FORMAT_OPTIONS } from 'helpers/constants'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const ExperienceSection = ({ title, data }: ExperiencesType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div>
				{data.map((exp, key) => (
					<Experience key={key} {...exp} id={key} />
				))}
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
	id = 0
}: DataWithDates): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			}`}
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
