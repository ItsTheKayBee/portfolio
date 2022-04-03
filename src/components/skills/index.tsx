import Image from 'next/image'
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react'
import HalfStar from 'components/icon/HalfStar'
import Star from 'components/icon/Star'
import { Image as ImageType, SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { SVG_CLIP_PATHS } from 'helpers/constants'
import { animated, easings, useSpring } from 'react-spring'
import { mod } from 'helpers/utils'
import Skill from './skill'

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

		for (let i = 1; i < n; i++) {
			setStyleObject(s => {
				const tempArray = [...s]
				tempArray[i] = {
					...s[i],
					transformOrigin: `50% 50% ${-apothem}px`,
					transform: `rotateY(${i * theta}rad)`
				}
				return tempArray
			})
		}
		// if (bfc)
		// 	for (let i = 0; i < n; i++)
		// 		setStyleObject(s => {
		// 			const tempArray = [...s]
		// 			tempArray[i] = {
		// 				...s[i],
		// 				backfaceVisibility: 'hidden'
		// 			}
		// 			return tempArray
		// 		})
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
			<div className={styles.carousel}>
				<animated.figure
					className={styles.skills}
					style={animatedProps}
					ref={figureRef}
				>
					{data.map(({ image, ratings }, key) => {
						const safeCurr = mod(currImage, n)
						return (
							<Skill
								image={image}
								ratings={ratings}
								id={key}
								key={key}
								style={styleObject[key]}
								isCurrent={safeCurr === key}
							/>
						)
					})}
				</animated.figure>
				<nav>
					<button
						onClick={(e: React.MouseEvent<HTMLElement>) =>
							handleRotation(e, -1)
						}
					>
						Prev
					</button>
					<button
						onClick={(e: React.MouseEvent<HTMLElement>) => handleRotation(e, 1)}
					>
						Next
					</button>
				</nav>
			</div>
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
