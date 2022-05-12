import { ArrowLeftCircle, ArrowRightCircle, XCircle } from 'react-feather'
import { portfolioDataObject } from 'data'
import { ExperiencesType } from 'data/interface'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import { useCurrent } from 'helpers/hooks/useCurrent'
import Experience from 'components/experience'
import useBack from 'helpers/hooks/useBack'

const ExperienceSection = (): JSX.Element => {
	const { title, data }: ExperiencesType = portfolioDataObject.experiences

	const { current, switchCurrent } = useCurrent(data.length)

	const routeBack = useBack()

	return (
		<div className={`${sectionStyles.section} ${styles.experiences}`}>
			<img src='/images/experiences.svg' className={styles.bg} />
			<XCircle className={sectionStyles.close} size={32} onClick={routeBack} />
			<h1 className={styles.sectionTitle}>{title}</h1>
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

export default ExperienceSection
