import HalfStar from 'components/icon/HalfStar'
import Star from 'components/icon/Star'
import { Image as ImageType, SkillsType } from 'data/interface'
import styles from './index.module.scss'
import sectionStyles from 'styles/section.module.scss'
import { MAX_RADIUS, MIN_RADIUS, SVG_CLIP_PATHS } from 'helpers/constants'
import { getRandomNumber, detectCollision } from 'helpers/utils'
import { RefObject, useRef, useEffect } from 'react'
import Blob from './Blob'

const Skills = ({ title, data, isActive }: SkillsType): JSX.Element => {
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
			const img = document.getElementById('img')!

			context!.drawImage(img as HTMLImageElement, 0, 0)

			// renderBlobs()
		}
		return () => {}
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
		blobs.forEach(blob => {
			blob.update(blobs)
		})

		// const hueNoise = noise(hueNoiseOffset, hueNoiseOffset)
		// const hue = map(hueNoise, -1, 1, 0, 360)

		// root.style.setProperty('--startColor', `hsl(${hue}, 100%, 75%)`)
		// root.style.setProperty('--stopColor', `hsl(${hue + 60}, 100%, 75%)`)
		// document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`

		// hueNoiseOffset += noiseStep / 6

		requestAnimationFrame(animate)
	}

	useEffect(() => {
		animate()
	}, [])

	return (
		<div
			className={`${sectionStyles.section} ${
				isActive ? sectionStyles.active : ''
			}`}
		>
			<h1 className={sectionStyles.sectionTitle}>{title}</h1>
			<img src='https://www.w3schools.com/html/pic_trulli.jpg' id='img' />
			<canvas ref={canvasRef} className={styles.canvas} />
		</div>
	)
}

// const Skill = ({
// 	image,
// 	ratings,
// 	id
// }: {
// 	image: ImageType
// 	ratings: number
// 	id: number
// }) => {
// 	return (
// 		<div className={styles.skill}>
// 			<Image
// 				src={image.url}
// 				alt={image.alt}
// 				height={150}
// 				width={150}
// 				className={styles[`skillImage${id + 1}`]}
// 			/>
// 			<svg viewBox='0 0 200 200' fill='none' className={styles.blob}>
// 				<clipPath
// 					id={`clipper${id + 1}`}
// 					clipPathUnits='objectBoundingBox'
// 					className={styles.clipPath}
// 				>
// 					<path d={SVG_CLIP_PATHS[id]} />
// 				</clipPath>
// 			</svg>
// 			{/* <Stars count={ratings} /> */}
// 		</div>
// 	)
// }

// const Stars = ({ count }: { count: number }): JSX.Element => {
// 	return (
// 		<div className={styles.starsContainer}>
// 			{Array(Math.floor(count))
// 				.fill(0)
// 				.map((_, key) => (
// 					<Star key={key} />
// 				))}
// 			{count % 1 !== 0 && <HalfStar />}
// 		</div>
// 	)
// }

export default Skills
