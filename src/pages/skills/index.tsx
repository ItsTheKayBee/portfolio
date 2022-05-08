import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react'
import { SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { mod } from 'helpers/utils'
import Skill from './skill'
import { portfolioDataObject } from 'data'

const Skills = (): JSX.Element => {
	const { title, data }: SkillsType = portfolioDataObject.skills

	const [currImage, setCurrImage] = useState(0)
	const [styleObject, setStyleObject] = useState<CSSProperties[]>([])
	const figureRef: RefObject<HTMLDivElement> = useRef(null)

	const n = data.length
	const theta = (2 * Math.PI) / n

	const handleRotation = (e: React.MouseEvent<HTMLElement>, s: number) => {
		e.stopPropagation()

		setCurrImage(c => c + s)
	}

	useEffect(() => {
		carousel()

		window.addEventListener('resize', carousel)

		return () => {
			window.removeEventListener('resize', carousel)
		}
	}, [])

	const carousel = () => {
		const skills = figureRef.current!.children
		setupCarousel(parseFloat(getComputedStyle(skills[0]).width))
	}

	const setupCarousel = (s: number) => {
		const apothem = s / (2 * Math.tan(Math.PI / n))
		figureRef.current!.style.transformOrigin = `50% 50% ${-apothem}px`

		for (let i = 0; i < n; i++) {
			setStyleObject(s => {
				const tempArray = [...s]
				tempArray[i] = {
					...s[i],
					transformOrigin: `50% 50% ${-apothem}px`,
					transform: `rotateY(${i * theta}rad)`,
					backfaceVisibility: 'hidden'
				}
				return tempArray
			})
		}
	}

	return (
		<div className={`${sectionStyles.section} ${styles.skillsContainer}`}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div>
				<div className={styles.carousel}>
					<figure
						className={styles.skills}
						style={{ transform: `rotateY(${currImage * -theta}rad)` }}
						ref={figureRef}
					>
						{data.map(({ image }, key) => {
							const safeCurr = mod(currImage, n)
							return (
								<Skill
									image={image}
									id={key}
									key={key}
									style={styleObject[key]}
									isSeen={safeCurr === key}
								/>
							)
						})}
					</figure>
				</div>
			</div>
		</div>
	)
}

export default Skills
