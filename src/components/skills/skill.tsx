import { SVG_CLIP_PATHS } from 'helpers/constants'
import { Image as ImageType } from 'data/interface'
import { CSSProperties, useState, useRef, useEffect } from 'react'
import { useSpring, easings, animated } from 'react-spring'
import styles from './index.module.scss'
import Image from 'next/image'

const Skill = ({
	image,
	ratings,
	id,
	style,
	isCurrent
}: {
	image: ImageType
	ratings: number
	id: number
	style: CSSProperties
	isCurrent: boolean
}) => {
	const duration = 2000
	const [pathIndex, setPathIndex] = useState(id)
	const skillRef = useRef(null)
	const [translatePath, setTranslatePath] = useState(0)

	useEffect(() => {
		if (isCurrent) {
			const changePath = setInterval(() => {
				setPathIndex(p => (p + 1) % SVG_CLIP_PATHS.length)
			}, duration)
			return () => clearInterval(changePath)
		}
	}, [isCurrent])

	useEffect(() => {
		resize()

		window.addEventListener('resize', resize)

		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])

	const resize = () => {
		// setTranslatePath(parseFloat(getComputedStyle(skillRef.current!).width) / 2)
	}

	const animatedProps = useSpring({
		path: SVG_CLIP_PATHS[pathIndex],
		config: {
			duration: duration,
			easing: easings.easeInOutQuad
		}
	})

	return (
		<div className={styles.skill} style={style}>
			<svg viewBox='0 0 200 200' className={styles.glow}>
				<animated.path
					d={animatedProps.path}
					style={{
						transform: `translate(50%, 50%)`
					}}
				/>
			</svg>
			<svg viewBox='0 0 200 200' className={styles.border}>
				<animated.path
					d={animatedProps.path}
					style={{
						transform: `translate(50%, 50%)`
					}}
				/>
				<defs>
					<linearGradient id='gradient' x1='0' y1='0' x2='1' y2='1'>
						<stop offset='0%' stop-color='red' />
						<stop offset='50%' stop-color='black' stop-opacity='0' />
						<stop offset='100%' stop-color='yellow' />
					</linearGradient>
				</defs>
			</svg>
			<svg viewBox='0 0 200 200' className={styles.blob}>
				<animated.path
					d={animatedProps.path}
					style={{
						transform: `translate(50%, 50%)`
					}}
					className={styles.path}
				/>
			</svg>

			<img src={image.url} alt={image.alt} className={styles.skillImage} />

			{/* <Stars count={ratings} /> */}
		</div>
	)
}
export default Skill
