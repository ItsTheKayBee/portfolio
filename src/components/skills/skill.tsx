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
		setTranslatePath(
			parseFloat(getComputedStyle(skillRef.current!).width) / 3.5
		)
	}

	const animatedProps = useSpring({
		path: SVG_CLIP_PATHS[pathIndex],

		config: {
			duration: duration,
			easing: easings.easeInOutQuad
		}
	})

	return (
		<div className={styles.skill} style={style} ref={skillRef}>
			<div className={styles.background}>
				<svg viewBox='0 0 200 200' fill='white' className={styles.glow}>
					<animated.path
						d={animatedProps.path}
						style={{
							transform: `translate(${translatePath}px, ${translatePath}px)`
						}}
					/>
				</svg>
				<svg viewBox='0 0 200 200' fill='white' className={styles.blob}>
					<clipPath
						id={`clipper${id + 1}`}
						clipPathUnits='objectBoundingBox'
						className={styles.clipPath}
					>
						<animated.path
							d={animatedProps.path}
							style={{
								transform: `translate(${translatePath}px, ${translatePath}px)`
							}}
						/>
					</clipPath>
				</svg>
				<Image
					src={image.url}
					alt={image.alt}
					layout='fill'
					className={styles[`skillImage${id + 1}`]}
				/>
			</div>

			{/* <Stars count={ratings} /> */}
		</div>
	)
}
export default Skill
