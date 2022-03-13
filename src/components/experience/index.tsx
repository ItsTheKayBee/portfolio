import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'

const ExperienceSection = (): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>Experience</h1>
			<Experience />
			<Experience />
			<Experience />
		</div>
	)
}

const Experience = (): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col'>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>LazyPay</h2>
				<h3 className={sectionStyles.subTitle}>
					Software development Engineer | Full time
				</h3>
				<h4 className={sectionStyles.subSubTitle}>
					Aug 2021 - Present (8 months)
				</h4>
				<p className={sectionStyles.description}>description</p>
			</div>
		</div>
	)
}

export default ExperienceSection
