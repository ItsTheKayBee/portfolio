import { createRef, RefObject, useEffect, useRef } from 'react'
import SimplexNoise from 'simplex-noise'
import { Position } from 'data/interface'
import { SVG_CLIP_PATHS } from 'helpers/constants'
import {
	detectCollision,
	distance,
	getRandomNumber,
	mapInRange
} from 'helpers/utils'
import spline from 'helpers/spline'

const ParticleTest = () => {
	const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
	let context: CanvasRenderingContext2D | null
	const blobs: Blob[] = []

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

	const renderBlobs = () => {
		const offset = 10
		for (let i = 0; i < 10; i++) {
			const r = getRandomNumber(45, 55)
			const vRadius = r + offset
			let tempX = getRandomNumber(vRadius, innerWidth - vRadius)
			let tempY = getRandomNumber(vRadius, innerHeight - vRadius)
			const color = '#fff'

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

	const simplex = new SimplexNoise()

	// how fast we progress through "time"
	const noiseStep = 0.005

	// return a value at {x point in time} {y point in time}
	const noise = (x: number, y: number) => simplex.noise2D(x, y)

	const animate = () => {
		context!.clearRect(0, 0, innerWidth, innerHeight)
		blobs.forEach(blob => {
			blob.update()
		})

		// for (let i = 0; i < points.length; i++) {
		// 	const point = points[i]

		// 	// return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
		// 	const nX = noise(point.noiseOffsetX, point.noiseOffsetX)
		// 	const nY = noise(point.noiseOffsetY, point.noiseOffsetY)
		// 	// map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
		// 	const x = mapInRange(nX, -1, 1, point.originX - 20, point.originX + 20)
		// 	const y = mapInRange(nY, -1, 1, point.originY - 20, point.originY + 20)

		// 	// update the point's current coordinates
		// 	point.x = x
		// 	point.y = y

		// 	// progress the point's x, y values through "time"
		// 	point.noiseOffsetX += noiseStep
		// 	point.noiseOffsetY += noiseStep
		// }

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

class Blob {
	context: CanvasRenderingContext2D
	x: number
	y: number
	radius: number
	color: string
	velocityX: number = getRandomNumber(-0.5, 0.5)
	velocityY: number = getRandomNumber(-0.5, 0.5)

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		color: string
	) {
		this.context = context
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
	}

	private draw = (points: Position[]) => {
		this.context.fillStyle = this.color //sets fill color

		//creates path for blob
		const pathData = spline(points, 1)

		//sets and fills the path
		const path = new Path2D(pathData)

		this.context.fill(path)
	}

	private getCirclePoints = () => {
		const points = []
		// how many points do we need
		const numPoints = 6
		// used to equally space each point around the circle
		const angleStep = (Math.PI * 2) / numPoints

		for (let i = 1; i <= numPoints; i++) {
			// x & y coordinates of the current point
			const theta = i * angleStep

			const x = this.x + Math.cos(theta) * this.radius
			const y = this.y + Math.sin(theta) * this.radius

			// store the point
			points.push({
				x: x,
				y: y,
				originX: x,
				originY: y,
				noiseOffsetX: getRandomNumber(0, 1000),
				noiseOffsetY: getRandomNumber(0, 1000)
			})
		}

		return points
	}

	private containInside = () => {
		if (this.x - this.radius <= 0 || this.radius + this.x >= innerWidth) {
			this.velocityX *= -1
		} else if (
			this.y - this.radius <= 0 ||
			this.radius + this.y >= innerHeight
		) {
			this.velocityY *= -1
		}
	}

	update = () => {
		this.draw(this.getCirclePoints())

		this.containInside()

		this.x += this.velocityX
		this.y += this.velocityY
	}
}

export default ParticleTest
