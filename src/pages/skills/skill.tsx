import { SVG_CLIP_PATHS } from 'helpers/constants'
import { Image as ImageType } from 'data/interface'
import { CSSProperties, useState, useEffect } from 'react'
import { useSpring, easings, animated } from 'react-spring'
import styles from './index.module.scss'

const Skill = ({
	image,
	id,
	style,
	isSeen
}: {
	image: ImageType
	id: number
	style: CSSProperties
	isSeen: boolean
}) => {
	const duration = 2000
	const [pathIndex, setPathIndex] = useState(id)
	const [gradientCoords, setGradientCoords] = useState({
		x: 0,
		y: 0
	})

	useEffect(() => {
		if (isSeen) {
			const changePath = setInterval(() => {
				setPathIndex(p => (p + 1) % SVG_CLIP_PATHS.length)
			}, duration)
			const rotateGrad = setInterval(() => {
				setGradientCoords(({ x, y }) => {
					let tempX = x,
						tempY = y
					if (x >= 0 && x < 1 && y === 0) {
						tempX = x + 0.1
					} else if (x === 1 && y >= 0 && y < 1) {
						tempY = y + 0.1
					} else if (x > 0 && x <= 1 && y === 1) {
						tempX = x - 0.1
					} else if (x === 0 && y > 0 && y <= 1) {
						tempY = y - 0.1
					}
					return {
						x: parseFloat(tempX.toFixed(1)),
						y: parseFloat(tempY.toFixed(1))
					}
				})
			}, 100)
			return () => {
				clearInterval(rotateGrad)
				clearInterval(changePath)
			}
		}
	}, [isSeen])

	const blobAnimProps = useSpring({
		path: SVG_CLIP_PATHS[pathIndex],
		config: {
			duration: duration,
			easing: easings.easeInOutQuad
		}
	})

	const gradRotationProps = useSpring({
		x1: Math.abs(1 - gradientCoords.x),
		y1: Math.abs(1 - gradientCoords.y),
		x2: gradientCoords.y,
		y2: gradientCoords.y,
		config: {
			duration: 1.4 * duration,
			easing: easings.easeInOutSine
		}
	})

	return (
		<div className={styles.skill} style={style}>
			{isSeen && (
				<>
					<svg viewBox='0 0 200 200' className={styles.glow}>
						<animated.path
							d={blobAnimProps.path}
							style={{
								transform: `translate(50%, 50%)`
							}}
						/>
					</svg>
					<svg viewBox='0 0 200 200' className={styles.border}>
						<animated.path
							d={blobAnimProps.path}
							style={{
								transform: `translate(50%, 50%)`
							}}
						/>
						<defs>
							<animated.linearGradient
								id='gradient'
								x1={gradRotationProps.x1}
								y1={gradRotationProps.y1}
								x2={gradRotationProps.x2}
								y2={gradRotationProps.y2}
							>
								<stop offset='0' stopColor='red' />
								<stop offset='0.5' stopColor='black' stopOpacity={0} />
								<stop offset='1' stopColor='yellow' />
							</animated.linearGradient>
						</defs>
					</svg>
				</>
			)}
			<svg viewBox='0 0 200 200' className={styles.blob}>
				<animated.path
					d={blobAnimProps.path}
					style={{
						transform: `translate(50%, 50%)`
					}}
					className={styles.path}
				/>
			</svg>

			<img src={image.url} alt={image.alt} className={styles.skillImage} />
		</div>
	)
}
export default Skill
