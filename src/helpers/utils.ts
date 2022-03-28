import { KeyValue, Particle } from 'data/interface'

/**
 *  Returns difference between 2 dates
 */
export const getDateDifference = (date1: Date, date2: Date): KeyValue => {
	const timeStamp1 = date1.getTime()
	const timeStamp2 = date2.getTime()
	const timeDiff = Math.abs(timeStamp1 - timeStamp2)

	const monthsDifference = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 30))

	if (monthsDifference >= 12) {
		return {
			title: Math.floor(monthsDifference / 12) === 1 ? 'Year' : 'Years',
			value: Math.floor(monthsDifference / 12)
		}
	}
	return {
		title: 'Months',
		value: monthsDifference
	}
}

/*
 * gives random number between [min] and [max]
 */
export const getRandomNumber = (min: number, max: number): number =>
	Math.random() * (max - min) + min

/*
 * map a number from 1 range to another
 */
export const mapInRange = (
	n: number,
	start1: number,
	end1: number,
	start2: number,
	end2: number
): number => ((n - start1) / (end1 - start1)) * (end2 - start2) + start2

/*
 * Calculate distance between 2 points
 */
export const distance = (p1: Particle, p2: Particle): number =>
	Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

/*
 * return true if collision between 2 particles
 */
export const detectCollision = (
	p1: Particle,
	p2: Particle,
	r1: number,
	r2: number
): boolean => distance(p1, p2) <= r1 + r2

/*
 * rotates blob
 */
export const rotateBlob = (
	velocity: { x: number; y: number },
	angle: number
) => ({
	x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
	y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
})

/*
 * Resolve collision
 */
export const resolveCollision = (
	particle: Particle,
	otherParticle: Particle
) => {
	const xVelocityDiff = particle.velocity!.x - otherParticle.velocity!.x
	const yVelocityDiff = particle.velocity!.y - otherParticle.velocity!.y

	const xDist = otherParticle.x - particle.x
	const yDist = otherParticle.y - particle.y

	// Prevent accidental overlap of particles
	if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
		// Grab angle between the two colliding particles
		const angle = -Math.atan2(
			otherParticle.y - particle.y,
			otherParticle.x - particle.x
		)

		// Store mass in var for better readability in collision equation
		const m1 = particle.mass ?? 1
		const m2 = otherParticle.mass ?? 1

		// Velocity before equation
		const u1 = rotateBlob(particle.velocity!, angle)
		const u2 = rotateBlob(otherParticle.velocity!, angle)

		// Velocity after 1d collision equation
		const v1 = {
			x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
			y: u1.y
		}
		const v2 = {
			x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
			y: u2.y
		}

		// Final velocity after rotating axis back to original location
		const vFinal1 = rotateBlob(v1, -angle)
		const vFinal2 = rotateBlob(v2, -angle)

		// Swap particle velocities for realistic bounce effect
		particle.velocity!.x = vFinal1.x
		particle.velocity!.y = vFinal1.y

		otherParticle.velocity!.x = vFinal2.x
		otherParticle.velocity!.y = vFinal2.y
	}
}
