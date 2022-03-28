import { RefObject, useEffect, useRef } from 'react'
import { detectCollision, getRandomNumber } from 'helpers/utils'
import Blob from 'components/skills/Blob'
import { MIN_RADIUS, MAX_RADIUS } from 'helpers/constants'

const ParticleTest = () => {
	const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
	let context: CanvasRenderingContext2D | null
	const blobs: Blob[] = []
	const OFFSET = 15

	useEffect(() => {
		const canvas: HTMLCanvasElement | null = canvasRef.current
		if (canvas !== null) {
			context = canvas.getContext('2d')!
			context.canvas.width = innerWidth
			context.canvas.height = innerHeight

			renderBlobs()
		}
		return () => {}
	}, [])

	const renderBlobs = (): void => {
		const color = '#fff'

		for (let i = 0; i < 10; i++) {
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

			blobs.push(new Blob(context!, tempX, tempY, r, color))
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

	return <canvas ref={canvasRef} />
}

export default ParticleTest
