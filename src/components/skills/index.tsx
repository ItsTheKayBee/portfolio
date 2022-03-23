import HalfStar from 'components/icon/HalfStar'
import Star from 'components/icon/Star'
import { Image as ImageType, SkillsType } from 'data/interface'
import Image from 'next/image'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { SVG_CLIP_PATHS } from 'helpers/constants'

const Skills = ({ title, data, isActive }: SkillsType): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.section} ${
				isActive ? sectionStyles.active : ''
			}`}
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div className={styles.skills}>
				{data.map((skill, key) => {
					return (
						<Skill
							key={key}
							image={skill.image}
							ratings={skill.ratings}
							id={key}
						/>
					)
				})}
			</div>
		</div>
	)
}

const Skill = ({
	image,
	ratings,
	id
}: {
	image: ImageType
	ratings: number
	id: number
}) => {
	return (
		<div className={styles.skill}>
			<Image
				src={image.url}
				alt={image.alt}
				height={300}
				width={300}
				className={styles[`skillImage${id + 1}`]}
			/>
			<svg viewBox='0 0 200 200' fill='none' className={styles.blob}>
				<clipPath
					id={`clipper${id + 1}`}
					clipPathUnits='objectBoundingBox'
					className={styles.clipPath}
				>
					<path d={SVG_CLIP_PATHS[id]} />
				</clipPath>
			</svg>
			<Stars count={ratings} />
		</div>
	)
}

const Stars = ({ count }: { count: number }): JSX.Element => {
	return (
		<div className={styles.starsContainer}>
			{Array(Math.floor(count))
				.fill(0)
				.map((_, key) => (
					<Star key={key} />
				))}
			{count % 1 !== 0 && <HalfStar />}
		</div>
	)
}

export default Skills
