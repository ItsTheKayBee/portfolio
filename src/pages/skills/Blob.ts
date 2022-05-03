import SimplexNoise from 'simplex-noise'
import { Image as ImageType, Point } from 'data/interface'
import spline from 'helpers/spline'
import {
	detectCollision,
	getRandomNumber,
	mapInRange,
	resolveCollision
} from 'helpers/utils'
import { MAX_RADIUS } from 'helpers/constants'

const NUM_POINTS_BLOB = 6

// how fast we progress through "time"
const NOISE_STEP = 0.00075

// used to equally space each point around the circle
const ANGLE_STEP = (Math.PI * 2) / NUM_POINTS_BLOB

const VARIATION = 20

export default class Blob {
	context: CanvasRenderingContext2D
	x: number
	y: number
	radius: number
	color: string
	velocity = {
		x: getRandomNumber(-0.5, 0.5),
		y: getRandomNumber(-0.5, 0.5)
	}
	mass: number
	points: Point[] = []
	simplex: SimplexNoise
	ratings: number
	image: ImageType
	img: HTMLImageElement

	// return a value at {x point in time} {y point in time}
	private noise = (x: number, y: number) => this.simplex.noise2D(x, y)

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		color: string,
		image: ImageType,
		ratings: number
	) {
		this.context = context
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.points = this.getCirclePoints()
		this.simplex = new SimplexNoise()
		this.mass = radius / MAX_RADIUS
		this.image = image
		this.ratings = ratings
		this.img = new Image()
	}

	private draw = () => {
		this.context.fillStyle = this.color //sets fill color

		//creates path for blob
		const pathData = spline(this.points, 1.2)

		//sets and fills the path
		const path = new Path2D(pathData)

		this.renderImage()

		this.context.fill(path)
	}

	private renderImage = () => {
		if (!this.img.src) {
			this.img.onload = () => {
				this.context.drawImage(this.img, 0, 0, this.img.height, this.img.width)
			}
			this.img.src = this.image.url
			this.img.alt = this.image.alt
			this.img.style.zIndex = '10'
		}
	}

	private getCirclePoints = () => {
		const p = []

		for (let i = 1; i <= NUM_POINTS_BLOB; i++) {
			// x & y coordinates of the current point
			const theta = i * ANGLE_STEP

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
			const x = mapInRange(
				nX,
				-1,
				1,
				point.originX - VARIATION,
				point.originX + VARIATION
			)
			const y = mapInRange(
				nY,
				-1,
				1,
				point.originY - VARIATION,
				point.originY + VARIATION
			)

			// update the point's current coordinates
			point.x = x
			point.y = y

			const theta = i * ANGLE_STEP
			point.originX = this.x + Math.cos(theta) * this.radius
			point.originY = this.y + Math.sin(theta) * this.radius

			// progress the point's x, y values through "time"
			point.noiseOffsetX += NOISE_STEP
			point.noiseOffsetY += NOISE_STEP
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
			)
				resolveCollision(this, blob)
		})
	}

	update = (blobs: Blob[]) => {
		// draw
		this.updateShape()
		this.draw()

		//collision
		this.containInside()
		this.handleCollision(blobs)

		this.x += this.velocity.x
		this.y += this.velocity.y
	}
}
