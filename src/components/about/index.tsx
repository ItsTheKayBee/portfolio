import Stats from 'components/stats'
import styles from './index.module.scss'
import socialStyles from '../contact/index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { AboutType, StatsType } from 'data/interface'
import { classHelper } from 'helpers/utils'
import { useInView } from 'react-intersection-observer'

const About = ({
	image,
	position,
	data,
	subTitle,
	stats
}: AboutType & StatsType): JSX.Element => {
	const [buttonsRef, buttonsInView] = useInView({
		rootMargin: '-100px 0px',
		triggerOnce: true
	})

	return (
		<div className={`${styles.about} ${sectionStyles.dark}`}>
			<div className={styles.mainContent}>
				<img src={image.url} alt={image.alt} className={styles.image} />
				<div className={styles.content}>
					<p className={styles.subTitle}>{subTitle}</p>
					<h1 className={styles.name}>KUNAL</h1>
					<h1 className={styles.surname}>BOHRA</h1>
					<h3 className={styles.position}>{position}</h3>
				</div>
				<div className={styles.social} ref={buttonsRef}>
					{data.map((option, key) => {
						const { component: Component } = option
						return (
							<a
								href={option.link}
								key={key}
								className={classHelper(
									'button',
									socialStyles.socialButton,
									styles.button,
									buttonsInView ? styles.inView : ''
								)}
							>
								<Component />
							</a>
						)
					})}
				</div>
				{/* <div className={styles.model}>
					<Canvas onPointerMove={handleMove}>
						<ambientLight intensity={15} color='#5774ff' />
						<Gems />
					</Canvas>
				</div> */}
			</div>
			<Stats stats={stats} />
		</div>
	)
}

export default About
