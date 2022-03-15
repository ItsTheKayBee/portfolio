import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Publications = (): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>Publications</h1>
			<Publication />
		</div>
	)
}

const Publication = (): JSX.Element => {
	return (
		<div className={sectionStyles.subSection}>
			<div className='col'>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>Title</h2>
				<h3 className={sectionStyles.subTitle}>Sutitle</h3>
				<h4 className={sectionStyles.description}>description</h4>
				<button className='button'>
					<h3>View</h3>
					<FontAwesomeIcon icon={faArrowRightLong} />
				</button>
			</div>
		</div>
	)
}

export default Publications
