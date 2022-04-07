import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react'
import { Image, SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { animated, useSpring } from 'react-spring'
import { mod } from 'helpers/utils'
import Skill from './skill'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = ({ title, data, isActive }: SkillsType): JSX.Element => {
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

	const animatedProps = useSpring({
		to: {
			rotateY: `${currImage * -theta}rad`
		}
	})

	return (
		<div
			className={`${sectionStyles.section} ${
				isActive ? sectionStyles.active : ''
			}`}
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<div>
				<button
					onClick={(e: React.MouseEvent<HTMLElement>) => handleRotation(e, -1)}
					className={`${styles.arrowButton} ${styles.left}`}
				>
					<FontAwesomeIcon icon={faCaretLeft} color='white' size='3x' />
				</button>
				<div className={styles.carousel}>
					<animated.figure
						className={styles.skills}
						style={animatedProps}
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
									isCurrent={safeCurr === key}
								/>
							)
						})}
					</animated.figure>
				</div>
				<button
					onClick={(e: React.MouseEvent<HTMLElement>) => handleRotation(e, 1)}
					className={`${styles.arrowButton} ${styles.right}`}
				>
					<FontAwesomeIcon icon={faCaretRight} color='white' size='3x' />
				</button>
			</div>
		</div>
	)
}

export default Skills
