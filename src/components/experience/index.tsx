import { DataWithDates, ExperiencesType } from 'data/interface'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const ExperienceSection = ({ title, data }: ExperiencesType): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			{data.map((exp, key) => (
				<Experience key={key} {...exp} />
			))}
		</div>
	)
}

const Experience = ({
	title,
	subTitle,
	description,
	dates,
	image
}: DataWithDates): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col'>
				<Image src={image.url} alt={image.alt} height={200} width={200} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.subSubTitle}>
					{dates.startDate.toLocaleDateString('en-IN')} -{' '}
					{dates.endDate?.toLocaleDateString('en-IN') ?? 'Present'}
				</h4>
				<p className={sectionStyles.description}>{description}</p>
			</div>
		</div>
	)
}

export default ExperienceSection
