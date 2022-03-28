import { createRef, RefObject, useEffect, useRef } from 'react'
import SimplexNoise from 'simplex-noise'
import { Particle, Point } from 'data/interface'
import { SVG_CLIP_PATHS } from 'helpers/constants'
import {
	detectCollision,
	distance,
	getRandomNumber,
	mapInRange,
	resolveCollision
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

	const animate = () => {
		context!.clearRect(0, 0, innerWidth, innerHeight)
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

class Blob {
	context: CanvasRenderingContext2D
	x: number
	y: number
	radius: number
	color: string
	velocity = {
		x: getRandomNumber(-0.5, 0.5),
		y: getRandomNumber(-0.5, 0.5)
	}
	mass = 1
	points: Point[] = []
	simplex: SimplexNoise

	// how fast we progress through "time"
	noiseStep = 0.003

	// return a value at {x point in time} {y point in time}
	private noise = (x: number, y: number) => this.simplex.noise2D(x, y)

	// how many points do we need
	numPoints = 6
	// used to equally space each point around the circle
	angleStep = (Math.PI * 2) / this.numPoints

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
		this.points = this.getCirclePoints()
		this.simplex = new SimplexNoise()
	}

	private draw = () => {
		this.context.fillStyle = this.color //sets fill color

		//creates path for blob
		const pathData = spline(this.points, 1)

		//sets and fills the path
		const path = new Path2D(pathData)

		this.context.fill(path)
	}

	private getCirclePoints = () => {
		const p = []

		for (let i = 1; i <= this.numPoints; i++) {
			// x & y coordinates of the current point
			const theta = i * this.angleStep

			const x = this.x + Math.cos(theta) * this.radius
			const y = this.y + Math.sin(theta) * this.radius

			// store the point
			p.push({
				x: x,
				y: y,
				originX: x,
				originY: y,
				noiseOffsetX: getRandomNumber(0, 1000),
				noiseOffsetY: getRandomNumber(0, 1000)
			})
		}
		return p
	}

	private containInside = () => {
		if (this.x - this.radius <= 0 || this.radius + this.x >= innerWidth) {
			this.velocity.x *= -1
		}
		if (this.y - this.radius <= 0 || this.radius + this.y >= innerHeight) {
			this.velocity.y *= -1
		}
	}

	private updateShape = () => {
		for (let i = 0; i < this.points.length; i++) {
			const point = this.points[i]

			// return a pseudo random value between -1 / 1 based on this point's current x, y Particles in "time"
			const nX = this.noise(point.noiseOffsetX, point.noiseOffsetX)
			const nY = this.noise(point.noiseOffsetY, point.noiseOffsetY)

			// map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
			const x = mapInRange(nX, -1, 1, point.originX - 5, point.originX + 5)
			const y = mapInRange(nY, -1, 1, point.originY - 5, point.originY + 5)

			// update the point's current coordinates
			point.x = x
			point.y = y

			const theta = i * this.angleStep
			point.originX = this.x + Math.cos(theta) * this.radius
			point.originY = this.y + Math.sin(theta) * this.radius

			// progress the point's x, y values through "time"
			point.noiseOffsetX += this.noiseStep
			point.noiseOffsetY += this.noiseStep
		}
	}

	private handleCollision = (blobs: Blob[]) => {
		blobs.forEach(blob => {
			if (
				this !== blob &&
				detectCollision(
					this,
					{ x: blob.x, y: blob.y },
					this.radius,
					blob.radius
				)
			) {
				resolveCollision(this, blob)
			}
		})
	}

	update = (blobs: Blob[]) => {
		this.updateShape()
		this.draw()

		this.containInside()
		this.handleCollision(blobs)

		this.x += this.velocity.x
		this.y += this.velocity.y
	}
}

export default ParticleTest
