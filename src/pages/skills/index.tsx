import { RefObject, useEffect, useRef } from 'react'
import { SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { detectCollision, getRandomNumber } from 'helpers/utils'
import { MIN_RADIUS, MAX_RADIUS } from 'helpers/constants'
import Blob from './Blob'
import { portfolioDataObject } from 'data'
/* 
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
} */

const Skills = (): JSX.Element => {
	const { title, data }: SkillsType = portfolioDataObject.skills

	const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
	let context: CanvasRenderingContext2D | null
	const blobs: Blob[] = []
	const OFFSET = 15
	let canvas: HTMLCanvasElement | null

	useEffect(() => {
		canvas = canvasRef.current
		if (canvas !== null) {
			context = canvas.getContext('2d')!
			context.canvas.width = innerWidth
			context.canvas.height = innerHeight

			renderBlobs()
		}
	}, [])

	const renderBlobs = (): void => {
		for (let i = 0; i < data.length; i++) {
			const color = `rgb(${getRandomNumber(0, 255)},${getRandomNumber(
				0,
				255
			)},${getRandomNumber(0, 255)})`
			const r = getRandomNumber(MIN_RADIUS, MAX_RADIUS)
			const vRadius = r + OFFSET
			let tempX = getRandomNumber(vRadius, innerWidth - vRadius)
			let tempY = getRandomNumber(vRadius, innerHeight - vRadius)

			// Generate a non-overlapping position
			if (i !== 0) {
				for (let j = 0; j < blobs.length; j++) {
					const { x, y, radius } = blobs[j]
					if (
						detectCollision(
							{ x: tempX, y: tempY },
							{ x: x, y: y },
							radius,
							vRadius
						)
					) {
						tempX = getRandomNumber(vRadius, innerWidth - vRadius)
						tempY = getRandomNumber(vRadius, innerHeight - vRadius)
						j--
					}
				}
			}

			blobs.push(
				new Blob(
					context!,
					tempX,
					tempY,
					r,
					color,
					data[i].image,
					data[i].ratings
				)
			)
		}
	}

	const animate = () => {
		//clear old state of canvas
		context!.clearRect(0, 0, innerWidth, innerHeight)

		// for each blob, call update method
		blobs.forEach(blob => blob.update(blobs))

		// const hueNoise = noise(hueNoiseOffset, hueNoiseOffset)
		// const hue = map(hueNoise, -1, 1, 0, 360)

		// root.style.setProperty('--startColor', `hsl(${hue}, 100%, 75%)`)
		// root.style.setProperty('--stopColor', `hsl(${hue + 60}, 100%, 75%)`)
		// document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`

		// hueNoiseOffset += noiseStep / 6

		requestAnimationFrame(animate)
	}

	useEffect(() => animate(), [])

	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<canvas ref={canvasRef} className={styles.canvas} />
		</div>
	)
}

export default Skills
